//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Interface name : IPuzzleBoard
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : An object to encapsulate loaded puzzleboard data from JSON.
//*
//|************************************************************************************|
import { IBoardItemGroup } from "./IBoardItemGroup";
import { ISlotGroup } from "./ISlotGroup";

export interface IPuzzleBoard{
    image: ()=>string; 
    id: number;
    xPos: number;
    yPos: number;
    slots: ISlotGroup;
    items: IBoardItemGroup;
}