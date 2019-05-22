import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScoreCounter} from "../../logic/score-counter";
import {Question} from "../../logic/question";
import {ResultsPage} from '../results/results';
import {QuestionReadingPage} from "../question-reading/question-reading";
import {GameFlow} from "../../logic/game-flow";
import {ShowAnswerPage} from '../show-answer/show-answer';

/**
 * Generated class for the QuestionAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-answer',
  templateUrl: 'question-answer.html',
})
export class QuestionAnswerPage {
  private question: Question;
  private rand: number;
  private answers: Array<string>;
  private answered: boolean = false;

  private timer:any;
  private maxTime:number = 2000;
  private timePercent: string = "100%";
  private marginPercent: string = "0%";
  private color:string = "#28EB7D";

  constructor(public navCtrl: NavController, public navParams: NavParams, public game: GameFlow, public score: ScoreCounter) {
    this.question = navParams.get("question");
    this.rand = Math.floor(Math.random()*4);

    this.answers = new Array<string>();

    for(let i = 0; i < 3; i++)
    {
      this.answers.push(this.question.badAnswers[i]);
    }

    this.answers.push(this.question.goodAnswer);

    this.answers = this.shuffle(this.answers);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAnswerPage');
    this.StartTimer();
  }

  StartTimer(){
    this.timer = setTimeout(x =>
    {
      if(this.maxTime <= 0 || this.answered) {
        this.maxTime = 0;
        this.navCtrl.push(ShowAnswerPage, {
          question: this.question
        });
      } else {
        if (this.maxTime <= 1000) this.color = "#EBEB28";
        if (this.maxTime <= 500) this.color = "#FF1A00";
        this.marginPercent = ((2000-this.maxTime)/4000)*100 + "%";
        this.timePercent = (this.maxTime/2000)*100 + "%";
        //console.log("Timer : "+this.timePercent);
        this.maxTime -= 1;
        this.StartTimer();
      }
    }, 10);


  }

  goToResults() {
    //this.navCtrl.push(ResultsPage )
  }

  getAnswers() {

  }

  shuffle(array: any) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  checkAnswer(answer: string, evt: MouseEvent) {
    if(!this.answered)
    {

      if(answer === this.question.goodAnswer)
      {
        evt.srcElement.className = evt.srcElement.className + " goodAnswer";
      }
      else {
        evt.srcElement.className = evt.srcElement.className + " badAnswer";
      }


      setTimeout(() => this.answered = true, 1000);


      /*setTimeout(() => this.navCtrl.push(ShowAnswerPage, {
        question: this.question
      }), 1000);*/
    }
  }
}
