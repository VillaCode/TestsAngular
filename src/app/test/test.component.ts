import { Component, OnInit, } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  username = "Pancho"
  usernameIS: string = "inicial";
  okei: boolean = true;
  elToggle: string = "block";
  times: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onUpdateUser(){
 

    this.usernameIS = "El usuario es " + this.username; 

    this.username = "";
  }

  toggleT(): void{
    this.elToggle = this.elToggle == "block" ? "none" : "block";
    console.log(this.elToggle);
  }  
  
  addArray(): void{

    let now = new Date()
    this.times.push(now.toString());
    console.log(this.times);
  }

}
