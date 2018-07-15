import {AfterViewInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Contact, ContactsEntity, ContactService} from '../services/contact.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddDialogComponent} from '../dialogs/add/add.dialog.component';
import {EditDialogComponent} from '../dialogs/edit/edit.dialog.component';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(public dialog: MatDialog, private contactService: ContactService) { }
  contacts: ContactsEntity[];
  dataSource: MatTableDataSource<ContactsEntity> = new MatTableDataSource<ContactsEntity>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  displayedColumns = ['Name', 'ContactNumber', 'Address', 'Email' , 'actions'];
  ngOnInit() {
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getContacts()
      .subscribe(resp => {
        this.contacts = resp._embedded.contacts;
        this.dataSource = new MatTableDataSource<ContactsEntity>();
        this.dataSource.data = (this.contacts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  addNew(contact: Contact) {
    const addDialog = this.dialog.open(AddDialogComponent, {
      data: {contact: contact}
    });
    addDialog.afterClosed().subscribe(
      result => {
        this.getContacts();
      }
    );
  }
  public filterContacts(event: any) {
    this.dataSource.filter = this.filter.nativeElement.value;
  }
  startEdit(contact: any) {
    this.dialog.open(EditDialogComponent, {
      data: {contact: contact}
    });
  }
  deleteItem(data: any) {
    this.contactService.deleteContact(data)
      .subscribe(
        (val) => {
          console.log("Delete call successful! ",
            val);
        },
        response => {
          console.log("Delete call in error", response);
        },
        () => {
          this.getContacts();
          console.log("The Update observable is now completed.");
        });
    // this.getContacts();
  }
}
