import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Question} from "./question";

@Injectable()
export class GameFlow {

  quizz: Array<Question> = [
    new Question("A l’occasion de quel événement majeur Alan Turing a-t-il inventé “The Bomb” ?",
      new Array<string>("La bataille de Woodstock", "La première guerre mondiale", "La guerre froide"),
      "La seconde guerre mondiale"),
    new Question("Quelle lettre se trouve entre A et E sur un clavier AZERTY ?",
      new Array<string>("H", "W", "U"),
      "Z"),
    new Question("Combien de transistors possédait le premier microcontrôleur Intel 4004 ?",
      new Array<string>("2100", "2200", "2400"),
      "2300"),
    new Question("Parmis les inventions suivantes, laquelle a été inventé avant le World Wide Web ?",
      new Array<string>("Les réseaux sociaux", "L'HTML", "L'iPhone"),
      "La boite mail"),
    new Question("Le Python est un langage...",
      new Array<string>("Relou", "Non ponctué", "Compilé"),
      "Interprété"),
    new Question("Quel était le poids du premier ordinateur ENIAC ?",
      new Array<string>("10 tonnes", "45 kilos", "5630 grammes"),
      "27 tonnes"),
    new Question("Si HDD veut dire Hard Disk Drive, que signifie SSD ?",
      new Array<string>("Super Speed Disk", "Super Sonic Drive", "Sweet Soft Disk"),
      "Solid State Drive"),
    new Question("Quel iPhone n'a jamais existé ?",
      new Array<string>("l'iPhone", "l'iPhone 3", "l'iPhone X"),
      "l'iPhone 2"),
    new Question("Quel est le nom de l'intelligence artificielle dans Terminator ?",
      new Array<string>("Siri", "Alexa", "Anticlea"),
      "Skynet"),
    new Question("De quel matérieu était faite la première souris ?",
      new Array<string>("Aluminium", "Plastique", "Silicone"),
      "Bois")
  ];
  indexQuizz: number;

  constructor() {
  }

  start() {
    this.indexQuizz = 0;
    return this.quizz[this.indexQuizz];
  }

  next() {
    this.indexQuizz++;

    if(this.indexQuizz > this.quizz.length)
    {
      return 0;
    }
    else {
      return this.quizz[this.indexQuizz];
    }
  }
}
