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

@Injectable({
  providedIn: 'root',
})
export class AscentisMessageService {
  ascentisMessages: string[] = [];

  add(ascentisMessage: string) {
    this.ascentisMessages.push(ascentisMessage);
  }

  clear() {
    this.ascentisMessages = [];
  }
}