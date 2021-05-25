//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Service name   : PuzzleBoardsService
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : An provider for messages utilising a first pass for an Ascentis Core library.
//*
//|************************************************************************************|
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AscentisMessageService } from '../../../ascentisCore/services/ascentisMessage/ascentisMessage.service';
import ascentisData from "../../ascentisData.json";

@Injectable({
  providedIn: 'root'
})
export class PuzzleBoardsService {

  constructor(private ascentisMessageService: AscentisMessageService) { }

  getPuzzleBoards(): Observable<any[]> {
    const puzzleBoards = of(ascentisData.puzzleBoards);
    this.ascentisMessageService.add('PuzzleBoardService: fetched boards');
    return puzzleBoards;
  }
}
