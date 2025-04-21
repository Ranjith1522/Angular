import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent {

  
  onSubmit(data:any) {
    console.log("Form Submitted",data.value);
    console.log("VALID",data.valid);
  }

}
