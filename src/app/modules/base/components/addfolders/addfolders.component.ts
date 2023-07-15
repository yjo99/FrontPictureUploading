import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addfolders',
  templateUrl: './addfolders.component.html',
  styleUrls: ['./addfolders.component.css']
})
export class AddfoldersComponent implements OnInit{

  fg!:FormGroup;


  constructor(private apiService:ApiService, private formBuilder:FormBuilder){

  }


  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      fileFormArray: this.formBuilder.array([])
    });

    this.addFileToFormArray(); // add init form 

  }


  get fileFormArray() : FormArray{
    return this.fg.get("fileFormArray") as FormArray
  }


  addFileToFormArray(){
    const newForm = this.formBuilder.group({
      file:[''],
      name:['', Validators.required],
      age:['', Validators.required]
    })

    this.fileFormArray.push(newForm);


  }
  removeFileToFormArray(index:number){
    this.fileFormArray.removeAt(index);
  }





  

}
