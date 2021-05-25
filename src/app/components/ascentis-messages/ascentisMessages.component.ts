//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Program name   : AscentisMessagesComponent
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : Defines a message element to the browser UI from an initial pass for an Ascentis Core library.
//*
//|************************************************************************************|
import { Component, OnInit } from '@angular/core';
import { IAscentisElement } from '../../../ascentisCore/interfaces/IAscentisElement';
import { IAscentisElementDetails } from '../../../ascentisCore/interfaces/IAscentisElementDetails';
import { AscentisMessageService } from '../../../ascentisCore/services/ascentisMessage/ascentisMessage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './ascentisMessages.component.html',
  styleUrls: ['./ascentisMessages.component.css']
})
export class AscentisMessagesComponent implements OnInit, IAscentisElement {

  readonly domID = "ascentisMessagesComponent"; 
  readonly domClass = "ascentisMessages";

  elementDetails: IAscentisElementDetails = {
    domID: this.domID,
    domClass: this.domClass
  };

  constructor(public ascentisMessageService: AscentisMessageService) { }

  ngOnInit(): void {
  }

}
