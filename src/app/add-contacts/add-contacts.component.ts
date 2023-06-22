import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {

  allGroups: any = []
  contact: contactSchema = {}

  constructor(private api: ApiService, private navigate: Router) { }

  ngOnInit(): void {
    // make an call to service
    this.api.getallgroups().subscribe({
      next: (result: any) => {
        // console.log(result);
        this.allGroups = result
      }
    })

  }
  // add contact
  addContact() {
    // make an call to service
    this.api.addContact(this.contact).subscribe({
      next: () => {
        // alert contact added
        alert("New contact added successfully")
        // redirect to all contact page
        this.navigate.navigateByUrl("")
      }
    })
  }
}
