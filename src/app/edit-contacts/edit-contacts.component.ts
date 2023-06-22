import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { contactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {

  contact: contactSchema = {}
  allGroups:any
  constructor(private editRoute: ActivatedRoute, private api: ApiService,private navigate:Router) { }

  ngOnInit(): void {
    // get parameter from url
    this.editRoute.params.subscribe({
      next: (parameter: any) => {
        const { id } = parameter
        console.log(id);
        // make a call to service to get contact
        this.api.viewcontact(id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.contact = res
            const { groupId } = res

            // make a call to service to get al  groups
            this.api.getallgroups().subscribe({
              next: (res: any) => {
                this.allGroups = res

              }
            })
          }

        })
      }
    })
  }

  updatecontact(id:any,contact:any){
  // make a call to service
this.api.editcontact(id,contact).subscribe({
  next:(res:any)=>{
    alert("successfully updated..")
   this.navigate.navigateByUrl("")

  }
})
  }


}
