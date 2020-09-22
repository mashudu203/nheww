import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public Data:ApiService, public _route:ActivatedRoute) { }

  user:any;
  Ref: any;
  Subjects:any;

  ngOnInit(): void {
    //get user id
    this.Ref=this._route.snapshot.paramMap.get('ref');
    console.log('Ref:',this.Ref);

    this.user=this.Data.getUserinfo(this.Ref);
    console.log(this.user);
    //get subjects
    this.Subjects=this.Data.getSubjects(this.Ref);

    
  }

}
