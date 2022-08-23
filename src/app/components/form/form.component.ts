import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public form :FormGroup= this.fb.group({
    title: ['Demo Form for Custom Value Accesor'],
    free: [''],
    longDescription : [''],
    totalQuantity: [110, [Validators.required, Validators.max(100)]]
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.form.value);
  }


  ngOnInit(): void {

  }

}
