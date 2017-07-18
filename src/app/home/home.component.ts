import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myObservableObsSubscription: Subscription;
  myNumbersObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    let myNumbers = Observable.interval(1000);
    this.myNumbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log( number );
      }
    );
    
    const myObservable = Observable.create((observer: Observer<string>)=>{
      setTimeout(()=>{
        observer.next("First Package");
      },2000);
      setTimeout(()=>{
        observer.next("Second Package");
      },4000);
      // setTimeout(()=>{
      //   observer.error("This is not working");
      // },5000);
      setTimeout(()=>{
        observer.complete();
      },6000);
      setTimeout(()=>{
        observer.next("This is not working");
      },7000);
    });

    this.myObservableObsSubscription = myObservable.subscribe(
      (message : string) => {
        console.log(message);
      },
      (errorMsg : string) =>{
        console.error( errorMsg );
      },
      () =>{
        console.log( "Completed" );
      }

    );


  }

  ngOnDestroy(){
    this.myNumbersObsSubscription.unsubscribe();
    this.myObservableObsSubscription.unsubscribe();
  }

}
