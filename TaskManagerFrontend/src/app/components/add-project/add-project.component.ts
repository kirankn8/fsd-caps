import { Component, OnInit } from '@angular/core';
import { SelectDialogBoxComponent } from '../select-dialog-box/select-dialog-box.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService) { }

  userList: any;

  ngOnInit() {
    this.userList = this.userService.getUsers().subscribe(users => this.userList = users);
  }

  openManagerDialog() {
    const dialogRef = this.dialog.open(SelectDialogBoxComponent, {
      width: '600px',
      height: '400px',
      data: { title: 'Select Manager', genericList: this.userList, prop: 'firstName' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`, result);
    });
  }
}
