import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-arra-demo',
  templateUrl: './form-arra-demo.component.html',
  styleUrls: ['./form-arra-demo.component.css']
})
export class FormArraDemoComponent implements OnInit {

  constructor(private fb : FormBuilder ) { }

  public skillForm :FormGroup ; 
  ngOnInit(): void {

    this.skillForm = this.fb.group({
      name : '' , 
      skills : this.fb.array([this.fb.group({skill:'Angular',exp : '2' })]) ,
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirm: ["", [Validators.required]]
    }, { validator: this.matchPassword2('password', 'confirm') })
  }

 
   
  get skills() : FormArray {
    return this.skillForm.get("skills") as FormArray
  }

  newSkill() : FormGroup {
    return this.fb.group({
      skill : '',
      exp : ''
    })
  }

  matchPassword2(firstControl: string , secondControl: string): ValidatorFn {
   
      return (control: AbstractControl): ValidationErrors | null => {
      
        const password = control.get(firstControl)?.value;
        const confirm = control.get(secondControl)?.value;
  
        if (password != confirm) { return { 'noMatch': true } }
   
        return null
   
      }
    }
addSkills() {
   this.skills.push(this.newSkill());
}


 
removeSkill(i:number) {
  this.skills.removeAt(i);
}
onSubmit() {
  console.log(this.skillForm);
  console.log(this.skillForm.errors,this.skillForm.valid,this.skillForm.errors?.['noMatch'])
}
 
}
