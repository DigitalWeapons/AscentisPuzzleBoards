//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Program name   : PuzzleBoardsComponent
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : Defines the conditions of each puzzle board to the browser UI.
//*
//|************************************************************************************|

import { Component, OnInit } from '@angular/core';

import { IPuzzleBoard } from '../../interfaces/IPuzzleBoard';
import { PuzzleBoardsService } from '../../services/puzzle-boards/puzzle-boards.service';

import { AscentisMessageService } from "../../../ascentisCore/services/ascentisMessage/ascentisMessage.service";
import { IAscentisElement } from '../../../ascentisCore/interfaces/IAscentisElement';
import { IAscentisElementDetails } from '../../../ascentisCore/interfaces/IAscentisElementDetails';
import { ISlotGroup } from '../../interfaces/ISlotGroup';
import { IBoardItemGroup } from '../../interfaces/IBoardItemGroup';


@Component({
  selector: 'app-puzzle-boards',
  templateUrl: './puzzle-boards.component.html',
  styleUrls: ['./puzzle-boards.component.css']
})
export class PuzzleBoardsComponent implements OnInit, IAscentisElement {

  readonly imgPath = '../../../assets/img/';
  readonly domID = "puzzleBoardsComponent"; 
  readonly domClass = "puzzleBoards";
  readonly boardClass = "puzzleBoard";
  readonly boardGroupClass = "puzzleBoardGroup";
  readonly idNumberClass = "idNumber";
  readonly slotClass = "slot";
  readonly slotGroupClass = "slotGroup";
  readonly itemClass = "item";
  readonly itemGroupClass = "itemGroup";
  readonly messagePuzzleBoard = "PuzzleBoardComponent: Selected board id=";

  puzzleBoards: IPuzzleBoard[] = [];
  slotIterations: ISlotGroup[][] = [[]];
  itemIterations: IBoardItemGroup[][] = [[]];
  selectedBoard?: IPuzzleBoard;
  elementDetails: IAscentisElementDetails = {
    domID: this.domID,
    domClass: this.domClass
  };

  /// <summary>
  /// Defines the conditions of each puzzle board to the browser UI.
  /// </summary>
  constructor(private ascentisMessageService: AscentisMessageService, private puzzleBoardService: PuzzleBoardsService,) { } 

  /// <summary>
  /// Called at initialization. Used to call loading of JSON data for the puzzle boards.
  /// </summary>
  ngOnInit() {
    this.storePuzzleBoards();
  }

  /// <summary>
  /// Defines styling for puzzle boards.
  /// </summary>
  /// <returns>The CSS styling dynamically for the puzzle board group root container.</returns>
  getBoardGroupStyle(){
    return {};
  }

  /// <summary>
  /// Used to provide CSS styling information dynamically for the puzzle boards.
  /// </summary>
  /// <param name="slots">The puzzleboard group data from which to read the styling.</param>
  /// <returns>The CSS style for an individual puzzle board.</returns>
  getBoardStyle(puzzleBoard: IPuzzleBoard){
    return { 
      'margin-left.px': puzzleBoard.xPos,  
      'margin-top.px': puzzleBoard.yPos, 
      'width.px':puzzleBoard.slots?.amount * puzzleBoard.slots.width * 2,
      'height.px':puzzleBoard.slots?.height * 2,
      'background-image': puzzleBoard.image(),
      'background-size':'cover',
      'z-index': '-1'};
  }

  /// <summary>
  /// Defines styling for slot group containers.
  /// </summary>
  /// <returns>The CSS styling dynamically for the slot group root container.</returns>
  getSlotGroupStyle(){
    return { 'display': 'inline-block' };
  }

  /// <summary>
  /// Defines styling for individual slots.
  /// </summary>
  /// <param name="slots">The slot group data from which to read the styling.</param>
  /// <returns>The CSS styling dynamically for for an individual slot.</returns>
  getSlotStyle(slots: ISlotGroup){
    return { 
      'margin': 'auto', 
      'width.px': slots?.width,
      'height.px': slots?.height};
  }

  /// <summary>
  /// Defines styling for item group root containers.
  /// </summary>
  /// <returns>The CSS styling dynamically for the item group root container.</returns>
  getItemGroupStyle(){
    return { 'display': 'inline-block' };
  }

  /// <summary>
  /// Defines styling for individual items.
  /// </summary>
  /// <param name="items">The item group data from which to read the styling.</param>
  /// <returns>The CSS styling dynamically for an individual item.</returns>
  getItemStyle(items: IBoardItemGroup){
    return { 
      'margin': 'auto', 
      'background-image': items.image(),
      'background-size':'cover',
      'draggable': 'true',
      'z-index': '1'};
  }

  /// <summary>
  /// Used to retrieve and feedback information regarding a current user selected puzzle board to the browser window.
  /// </summary>
  /// <param name="items">The puzzle board selected for which to provide data for.</param>
  onSelect(puzzleBoard: IPuzzleBoard): void {
    this.selectedBoard = puzzleBoard;
    this.ascentisMessageService.add(`${this.messagePuzzleBoard}${puzzleBoard.id}`);
  }

  /// <summary>
  /// Used to assign asynchronously loaded JSON data for puzzle boards from a subscribed service provider.
  /// </summary>
  storePuzzleBoards(): void {
    this.puzzleBoardService.getPuzzleBoards().subscribe(puzzleBoards => { // Retrieve the data when loaded asynchronously. 
          for (let i = 0; i < puzzleBoards.length; i++) 
          {
            this.puzzleBoards.push(  
              {
                image: ():string =>{return `url(${this.imgPath}${puzzleBoards[i].image})`}, // Return a full path for the background image in 'Assets'.
                id: puzzleBoards[i].id,
                xPos: puzzleBoards[i].xPos,
                yPos: puzzleBoards[i].yPos,
                slots: 
                { 
                  amount: puzzleBoards[i].slots?.amount, 
                  width: puzzleBoards[i].slots?.width, 
                  height: puzzleBoards[i].slots?.height, 
                },
                items: 
                { 
                  image: ():string =>{return `${this.imgPath}${puzzleBoards[i].items?.image}` }, // Return a full path for the item in 'Assets'.
                  amount: puzzleBoards[i].items?.amount
                }
              });

            if(this.puzzleBoards[i].slots) // Retain HTML element data for Angular for loops.
            {
              this.slotIterations.push(new Array())
              for(let j: number = 0; j < this.puzzleBoards[i].slots.amount; j++)  
                this.slotIterations[i].push(this.puzzleBoards[i].slots);

              if(this.puzzleBoards[i].items)
              {
                this.itemIterations.push(new Array())
                for(let j: number = 0; j < this.puzzleBoards[i].items.amount; j++)  
                  this.itemIterations[i].push(this.puzzleBoards[i].items);
              }
            }
          }
        });
  }

  /// <summary>
  /// Retrieves stored slot data during HTML angular loops.
  /// </summary>
  /// <param name="items">The puzzleboard for which to retrieve the slot data.</param>
  /// <returns>The current slots data for the give puzzle board.</returns>
  getSlots(puzzleBoard: IPuzzleBoard){
    return this.slotIterations[puzzleBoard.id - 1];
  }

  /// <summary>
  /// Retrieves stored item data during HTML angular loops.
  /// </summary>
  /// <param name="items">The puzzleboard for which to retrieve the slot data.</param>
  /// <returns>The current item data for the give puzzle board.</returns>
  getItems(puzzleBoard: IPuzzleBoard){
    return this.itemIterations[puzzleBoard.id - 1];
  }

  /// <summary>
  /// Retrieves a stored item image path for a given puzzleboard during Angular HTML loops.
  /// If none is found, retrieves tha basic puzzleboard background.
  /// </summary>
  /// <param name="items">The puzzleboard for which to retrieve the image path.</param>
  /// <returns>The current path for the requested image.</returns>
  getItemImage(puzzleBoard: IPuzzleBoard, itemIndex: number){
      return (itemIndex < this.itemIterations.length ? this.itemIterations[puzzleBoard.id - 1][itemIndex] : puzzleBoard).image();
  }
}