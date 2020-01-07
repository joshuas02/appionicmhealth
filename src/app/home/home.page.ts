import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Idthree } from '../models/idthree';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})



export class HomePage {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  result : any = [];

  singleChoice: any[] = [
    {
      nbr: '1',
      question: 'Saya memiliki kekhawatiran berlebihan',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '2',
      question: 'Saya memiliki kesulitan untuk menenangkan diri',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '3',
      question: 'Saya merasa lelah	',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '4',
      question: 'Badan saya terasa pegal dan tidak fresh',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '5',
      question: 'Saya tidak bisa fokus dalam bekerja',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '6',
      question: 'Konsentrasi saya hilang saat mengerjakan sesuatu yang penting (ujian, presentasi, dll)',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '7',
      question: 'Saya mudah terganggu dengan sikap dan perilaku orang lain',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '8',
      question: 'Saya mudah tersinggung',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '9',
      question: 'Saya merasakan tegang',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '10',
      question: 'Saya mengalami sulit untuk bersantai',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '11',
      question: 'Saya mempunyai masalah susah tidur',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    },
    {
      nbr: '12',
      question: 'Saya terbangun saat tidur malam',
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
      choice: ''
    }
    ];
    show_quest: any = [];
    no_q: any = 0;
    isVisible: any = true;
    isVisible_submit: any = false;
    select: any = [];
    // choice: any = [];
    // indicator: any=[];
    i: any;

    choice: any = [];
    // http: any;
    
    constructor(private router: Router,public apiService: ApiService)
     {
    this.show_quest = this.singleChoice[this.no_q];
    
     }

  async next_quest() {
    
    
    this.select.push(this.choice);
      // nbr: this.no_q+1,
      // question: this.singleChoice[this.no_q].question,
    //   choice: this.choice
      
    // });
    this.result.push(this.choice);
    this.no_q = this.no_q+1;
    this.show_quest = this.singleChoice[this.no_q];
    if((this.no_q+1) >= this.singleChoice.length) {
      this.isVisible = false;
      this.isVisible_submit = true;
    }
    console.log(this.choice);
    
    this.choice = '';
  }

  submit() {
    // var url = 'http://127.0.0.1:8080/desicion';
    // var url = 'https://reqbin.com/sample/post/json';
    // let submit = new FormData();
    // submit.append("Accept", 'application/json');
    // submit.append('Content-Type', 'application/json' );
    // submit.append('key', 'values' );
    this.result.push(this.choice);
    console.log(this.result);
    this.select.push(this.choice);
      // nbr: this.no_q,
      // question: this.singleChoice[this.no_q].question,
      // choice: this.choice
    // });
    // this.choice.push(this.indicator[this.i]);
      this.choice= new Idthree();
      // this.choice.subscribe(choice=>{
      //   console.log(choice);
      // });
      console.log(this.choice);

      let postData = {
      indicator : this.result
      };

      let newData = JSON.stringify(postData);

      console.log(newData);
      // this.apiService.createItem(JSON.stringify({"indicator" : [1,1,1,1,1,1,1,1,1,1,1,1]})).subscribe((response) => { 
        this.apiService.createItem(newData).subscribe((response) => { 
       this.router.navigate(['/result/' + response[0]]);
     
    });

  // this.apiService.createItem(this.data).subscribe((response) => {
  //   this.router.navigate(['list']);
  // });
  // submit() {

  //   const submitData: any[] = [];
  //   this.choice.value.show_quest.forEach((qu: any) => {
  //     submitData.push({
  //     nbr: qu.this.no_q,
  //     question: qu.this.singleChoice[this.no_q].question,
  //     choice: qu.this.choice
  //   });

  // }),
  //   this.router.navigate(['/detail/', {data:JSON.stringify(submitData)}]);
   
  // }
 
}


}
