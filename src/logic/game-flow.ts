import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Question} from "./question";
import {HttpClient} from "@angular/common/http";
import {Quiz} from "./quiz";

@Injectable()
export class GameFlow {
  /*
  quizzEnsim: Array<Question> = [

    new Question("A quel évenement l'ENSIM n'est-elle pas associée ?",
      new Array<string>("La Journée Agilemans", "La coupe de france de robotique", "Les 24h du code"),
      "Le grand prix de france moto",
      "L'ENSIM co-organise depuis leurs créations la journée Agilemans et les 24h du code. Elle participe également chaque année à la coupe de france de robotique."),

    new Question("Que signifie l'accronyme ENSIM ?",
      new Array<string>("Ecole Nationale Supérieur d'Informatique du Mans", "Établissement Nautique Surveillé Informatiquement du Mans", "Ecole Nationale Supérieure de l'Infrastructure Militaire"),
      "Ecole Nationale Supérieur d'Ingénieur du Mans",
      "L’ENSIM peut aussi représenter : l’Ecole Nationale Supérieure de l'Infrastructure Militaire du ministère de la défense est basée à Anger (49), est liée à l'ENSAM."),

    new Question("En quelle année a été fondée l’ENSIM ?",
      new Array<string>("1985", "1997", "1993"),
      "1995",
      "L’ENSIM a été fondée en 1995. En 1997 correspond à la prise de possession du bâtiment actuelle. Auparavant les cours se faisaient à l'IUT en section mesures physiques."),

    new Question("Quel est le slogan de l’ENSIM ?",
      new Array<string>("Des infos… et des Vacs aussi !", "Être en phase avec votre développement", "Entrez dans un monde de plaisir"),
      "Inventer le confort de demain",
      "“Des infos… et des Vacs aussi !” est le slogan de l’Ensimien, le journal de l’école, “Entrez dans un monde de plaisir” est un ancien slogan de Jensim, la junior étudiante, tandis que “Être en phase avec votre développement” est tout simplement un slogan inventé."),

    new Question("Quelle mission n'est pas celle d'un ingénieur en acoustique ?",
      new Array<string>("Réaliser des mesure au sonomètre", "Réaliser des études vibratoire", "Utiliser ses connaissances en mécaniques des fluides"),
      "S'occuper de la sonorisation de concerts",
      "Le métier d'ingénieur son ne correspond pas à un diplôme d'ingénieur mais à différents niveau de responsabilité ayant des formations de bac +2 à bac +5."),

    new Question("À quelle période de l'année ont lieu les portes ouvertes de l’ENSIM ?",
      new Array<string>("Mars-Avril", "Mai-Juin", "Septembre-Octobre"),
      "Janvier-Février",
      "La date des portes ouvertes de l'ENSIM correspond à celle des portes ouvertes de Le Mans Université qui est généralement durant la période Janvier-Février."),

    new Question("Quel est le taux d'embauche des diplomés de l'ENSIM 1 an après l’obtention du diplôme ?",
      new Array<string>("95%", "90%", "85%"),
      "100%",
      "Près de 80 % des ingénieurs diplômés trouvent un emploi 6 mois après leur sortie de l’école et 100% d’entre eux occupe un emploi 1 an après."),

    new Question("Quelle construction trouve-t-on à l’arrière de l’ENSIM ?",
      new Array<string>("Un bunker", "Une statue du fondateur de l’école", "Un champ de panneaux solaires"),
      "Une éolienne",
      "Cette éolienne dispose de nombreux capteurs dont les données peuvent être utilisées lors de projet étudiants.")
  ];*/

  quizInfo: Quiz;

  questionsDone: Array<number>;

  constructor(public http: HttpClient) {
    this.http.get('../assets/quiz/ComputerScienceHistory.json').map(res => res as Quiz).subscribe(data => {
      this.quizInfo = data;
    });
  }

  start() {
    this.questionsDone = new Array<number>();

    var randomIndex = Math.floor(Math.random() * this.quizInfo.questions.length);

    this.questionsDone.push(randomIndex);

    return this.quizInfo.questions[randomIndex];
  }

  next() {

    var randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * this.quizInfo.questions.length);
    } while (this.questionsDone.indexOf(randomIndex) != -1);

    this.questionsDone.push(randomIndex);

    if (this.questionsDone.length >= 11) {
      return 0;
    } else {
      return this.quizInfo.questions[randomIndex];
    }
  }
}
