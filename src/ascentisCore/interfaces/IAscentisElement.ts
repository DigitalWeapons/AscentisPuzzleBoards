
//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Interface name : IAscentisElement
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : Defines a standard template for Ascentis HTML elements.
//*
//|************************************************************************************|
import { IAscentisElementDetails } from "./IAscentisElementDetails";

export interface IAscentisElement{
    
    elementDetails: IAscentisElementDetails;
}