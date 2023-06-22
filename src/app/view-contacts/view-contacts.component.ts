import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  groupName:string=""
  contact:any={}
  constructor(private api:ApiService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    // get path parameter from route
    this.route.params.subscribe({// paramb returns observable ithat mean need to subscribe to get output
      next:(res:any)=>{
        // object destructuring:: syntax : const {key}=object-name

        const {id}=res
        // console.log(id);
        
        this.api.viewcontact(id).subscribe({
          next:(contactdetails:any)=>{
            // console.log(contactdetails);
            this.contact=contactdetails

            const {groupId}=contactdetails
            // console.log(groupid);
            // make service call to get details of that group id
            this.api.getAgroup(groupId).subscribe({
              next:(groupdetails:any)=>{
                console.log(groupdetails);
                this.groupName=groupdetails.name 
                
              }
            })
          }
        })
      }
    })
   

  }
}
