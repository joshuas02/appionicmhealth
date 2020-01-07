import { Component, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-termconditions',
  templateUrl: './termconditions.page.html',
  styleUrls: ['./termconditions.page.scss'],
})
export class TermconditionsPage {
 
    @ViewChildren('slides') slides: IonSlides;
    buttonName = "NEXT";
    // selectedSlide :any;
   
    slideOpts = { slidesPerView: 1,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true}
      };
   
    constructor(private router:Router) {}
   
    selectedSlide :any;
    ionSlideChange(slides: IonSlides){
     
      //console.log(ev);
       console.log(slides);
       this.selectedSlide = slides;
       slides.getActiveIndex().then(
        (slidesIndex)=>{
            if(slidesIndex == 2){
          this.buttonName = "GET STARTED";
        }else{
          this.buttonName = "NEXT";
        }
       });
   
    }
   
    next(){
      this.selectedSlide.getActiveIndex().then((slidesIndex) => {
        if(slidesIndex == 2){
          console.log("Done Slider");
          this.router.navigateByUrl('login');
   
        }else{
          this.selectedSlide.slideNext();
        }
      });
    }
  }