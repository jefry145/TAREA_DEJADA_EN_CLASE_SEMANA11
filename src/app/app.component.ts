import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad11';
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
   ngOnInit():void{
    this.formLogin = this.formBuilder.group({
      msg:['', 
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
    })
  }
}
