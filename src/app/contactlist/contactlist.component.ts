import { Component, OnInit, ViewChild } from '@angular/core';
import {Contact, ContactsEntity, ContactService} from '../services/contact.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts: ContactsEntity[];
  dataSource: MatTableDataSource<ContactsEntity>;
  //@ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Name', 'ContactNumber', 'Address', 'Email' , 'actions'];
  ngOnInit() {
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getContacts()
      .subscribe(resp => {
        console.log(resp._embedded.contacts);
        this.contacts = resp._embedded.contacts;
        this.dataSource = new MatTableDataSource<ContactsEntity>(this.contacts);
      });
  }
}
