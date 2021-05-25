//|********************************|| Ascentis Software||******************************|
//* Project        : Puzzle Boards
//*
//* Interface name : IBoardItemGroup
//*
//* Author         : Dean Smith
//* Date created   : 20/05/2021
//*
//* Last Edited by : Dean Smith
//* Date Edited    : 26/05/2021
//*
//* Purpose        : An object to encapsulate loaded item data from JSON.
//*
//|************************************************************************************|
export interface IBoardItemGroup{
    image: ()=>string;
    amount: number;
}