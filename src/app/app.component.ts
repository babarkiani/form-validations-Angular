import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder){}

  get f() {return this.form.controls;}

  ngOnInit(){
  this.form =this.fb.group({
    firstname: ['', Validators.minLength(3)],
    // new FormControl("", Validators.compose([
    //   Validators.required, 
    //  Validators.maxLength(2),
    //   Validators.pattern('[\\w\\-\\s\\/+]')
    // ]) ),
    lastname: new FormControl(""),
    languages: new FormControl("")

  });
}

textValidator(control){
  if(control.value.length < 3){
    return {'lastname': true};
  }
}


onSubmit = function(user){
  console.log(user);
}
}
