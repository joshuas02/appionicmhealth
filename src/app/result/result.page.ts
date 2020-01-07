import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  data: any[] = [];
  // jawaban = ['Minimal', 'Mild', 'Moderate', 'Severe']
  totaltes = 0
 
  // idtree: Observable<any>;
  // constructor(private activatedRoute: ActivatedRoute, private router: Router, public navCtrl: NavController, public http: HttpClient) {
  //   this.data = JSON.parse(this.activatedRoute.snapshot.params.data);
  //   console.log(this.data);

  // }

  result: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.data = JSON.parse(this.activatedRoute.snapshot.params.data);
    if (this.data==[0]){this.result="Minimal";}
    else if (this.data==[1]){this.result="Mild";}
    else if (this.data==[2]){this.result="Moderate";}
    else if(this.data==[3]){this.result="Severe";}
    this.data=this.result;
    console.log(this.data);
  }
 
     
  // public sum : number = 0;
  // public total(jawaban){
  //   this.sum = 0;
  //   for(let i = 0; i<this.jawaban.length; i++){
  //     this.sum = this.sum + this.jawaban[i];    
  //   }
  //   return this.sum;
  // }
  
  ngOnInit() {
  }

  edit(data: any[]) {
    this.router.navigate(['/edit/' + JSON.stringify(data)]);
  }

}

