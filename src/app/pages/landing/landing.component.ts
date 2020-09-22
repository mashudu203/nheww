import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

 

  constructor(public Data:ApiService) { }

  ngOnInit(): void {
    this.Users=this.Data.getUsers();
    //function using arrow functions
    this.Users.forEach(element=>{
      this.Profiles=element['users'];
      console.log(this.Profiles);
    })
  }
 


  model:any={};
  model2:any={};
  msg:any="";
  Users : any[];
  Profiles: any;
  addEmployee(){
    this.Profiles.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i){
    this.Profiles.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editEmployee(k){
    this.model2.Name = this.Profiles[k].Name;
    this.model2.Bio = this.Profiles[k].Bio;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.Profiles.length;i++){
      if(i==k){
        this.Profiles[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }


}
