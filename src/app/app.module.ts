import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ApiService } from './services/api.service';

const firebaseConfig = {
  apiKey: "AIzaSyAe0NT18OzCCX0oPvzltBaJwI5geOnBx4A",
  authDomain: "curiety-96a83.firebaseapp.com",
  databaseURL: "https://curiety-96a83.firebaseio.com",
  projectId: "curiety-96a83",
  storageBucket: "curiety-96a83.appspot.com",
  messagingSenderId: "964913091013",
  appId: "1:964913091013:web:9bb3f92dbdcc3538ee7bac",
  measurementId: "G-DTB6CRRNXT"
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
	  AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
