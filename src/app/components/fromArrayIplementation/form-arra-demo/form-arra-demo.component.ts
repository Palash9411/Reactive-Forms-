import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
      skills : this.fb.array([]) 
    })
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

addSkills() {
   this.skills.push(this.newSkill());
}


 
removeSkill(i:number) {
  this.skills.removeAt(i);
}
onSubmit() {
  console.log(this.skillForm.value);
}
 
}
