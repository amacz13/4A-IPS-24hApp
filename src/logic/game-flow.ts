import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Question} from "./question";

@Injectable()
export class GameFlow {

  quizz: Array<Question> = [
    new Question(
      "A l’occasion de quel événement majeur Alan Turing a-t-il inventé “The Bomb” ?",
      new Array<string>("La bataille de Woodstock", "La première guerre mondiale", "La guerre froide"),
      "La seconde guerre mondiale",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quelle lettre se trouve après le Y sur un clavier AZERTY ?",
      new Array<string>("H", "W", "Z"),
      "U",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Combien de transistors possédait le premier microcontrôleur Intel 4004 ?",
      new Array<string>("2100", "2200", "2400"),
      "2300",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Parmis les inventions suivantes, laquelle a été inventée avant le World Wide Web ?",
      new Array<string>("Les réseaux sociaux", "L'HTML", "L'iPhone"),
      "La boite mail",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Le Python est un langage...",
      new Array<string>("Relou", "Non ponctué", "Compilé"),
      "Interprété",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel était le poids du premier ordinateur ENIAC ?",
      new Array<string>("10 tonnes", "45 kilos", "5630 grammes"),
      "27 tonnes",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Si HDD veut dire Hard Disk Drive, que signifie SSD ?",
      new Array<string>("Super Speed Disk", "Super Sonic Drive", "Sweet Soft Disk"),
      "Solid State Drive",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel iPhone n'a jamais existé ?",
      new Array<string>("l'iPhone", "l'iPhone 3", "l'iPhone X"),
      "l'iPhone 2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel est le nom de l'intelligence artificielle dans Terminator ?",
      new Array<string>("Siri", "Alexa", "Anticlea"),
      "Skynet",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("De quel matériau était faite la première souris ?",
      new Array<string>("Aluminium", "Plastique", "Silicone"),
      "Bois",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Après quoi sont nommées les différentes versions d’Android ?",
      new Array<string>("Des grands noms de l’Informatique", "Des noms de fleurs", "Des groupes musicaux"),
      "Des noms de gâteaux",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel était le nom original de Windows",
      new Array<string>("Gates Software", "Debian", "Macintosh"),
      "Interface Manager",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Que signifie le C de CAPTCHA",
      new Array<string>("Control", "Capacity", "Casual"),
      "Completely",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("En quelle année Sir Tim Berners-Lee a-t-il inventé le World Wide Web ?",
      new Array<string>("1998", "1899", "1988"),
      "1989",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel mot-valise est utilisé en tant que terme officiel pour désigner un smartphone en France ?",
      new Array<string>("Intelliphone", "Télénateur", "Intelliport"),
      "Ordiphone",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Au moment de la création de cette application, quelle portion de la population mondiale a accès à Internet ?",
      new Array<string>("1/4", "5/6", "1/3"),
      "1/2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("En quelle année est apparue la première bannière de publicité sur internet ?",
      new Array<string>("1986", "2000", "2003"),
      "1994",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quel objet a été le premier à etre mis en vente et acheté sur internet ?",
      new Array<string>("Une télécommande", "Une boite de chaussette", "Un ordinateur"),
      "Un sac de Marijuana",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Comment s’appelle la partie cachée d’internet ?",
      new Array<string>("Le Hidden Internet", "Le High Castle", "Le Deep Network"),
      "Le Deep Network",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quelle était la principale cause de bug de l’an 2000 ?",
      new Array<string>("Les insectes", "Les pannes de courant", "L'obsolescence programmée"),
      "Les erreurs de conception",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Question("Quels sont les principaux éléments composant un code HTML ?",
      new Array<string>("Des poteaux", "Des panneaux", "Des classes"),
      "Des classes",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
  ];

  quizzEnsim: Array<Question> = [];

  indexQuizz: number;

  constructor() {
  }

  start() {
    this.indexQuizz = 0;
    return this.quizz[this.indexQuizz];
  }

  next() {
    this.indexQuizz++;

    if(this.indexQuizz >= this.quizz.length)
    {
      return 0;
    }
    else {
      return this.quizz[this.indexQuizz];
    }
  }
}
