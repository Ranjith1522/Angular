import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A2Z Coverz';

  obs = new Observable((observer)=>{
    console.log("start");
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
  })

  ngOnInit() {
    this.obs.subscribe(
      {
        next :(val)=>{
          console.log(val,"success");
        },
        error:(val) =>{
          console.log("error");
        },
        complete:()=>{
          console.log("complete");
        }
      }
    );
  }
}
