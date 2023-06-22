import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
base_url:string='https://contact-server-api-baem.onrender.com'

  constructor(private http:HttpClient) {}

    // steps for api call

    // get all contacts
    getallcontacts(){
      // make api call to http://localhost:3000/contacts
    return this.http.get(`${this.base_url}/contacts`)
    }
// api call for view contacts
viewcontact(id:any){
// make api call to http://localhost:3000/contacts/id
return this.http.get(`${this.base_url}/contacts/${id}`)
}
// get single group details
  getAgroup(id:any){
   return this.http.get(`${this.base_url}/groups/${id}`)
 }
//  to get all groups
getallgroups(){
  return this.http.get(`${this.base_url}/groups`)
}
// edit  contact
editcontact(id:any,body:contactSchema){
// make api call to http://localhost:3000/contacts/id 
return this.http.put(`${this.base_url}/contacts/${id}`,body)
}

// remove contact
removeContact(id:any){
  // make api call to http://localhost:3000/contacts/id 
  return this.http.delete(`${this.base_url}/contacts/${id}`)
}
//  add contact
addContact(contact:contactSchema){
    // make api call to http://localhost:3000/contacts
  return this.http.post(`${this.base_url}/contacts`,contact) 

}
}
