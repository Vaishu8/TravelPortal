import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
public quoteForm : FormGroup | undefined;
public errorMessage : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.quoteForm = new FormGroup({
      name : new FormControl("",Validators.required),
      contactNo : new FormControl("",Validators.required),
      emailId : new FormControl("",Validators.required),
    })
  }

  onSubmit(){
   if(this.quoteForm?.controls["name"].value !== "" && this.quoteForm?.controls["contactNo"].value !== "" && this.quoteForm?.controls["contactNo"].value !== "" ){
     this.errorMessage = false;
   } else {
     this.errorMessage = true;
   }
  }

}
