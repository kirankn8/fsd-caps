import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required],
    }
  );
  userList;
  searchValue = '';
  sortBy = '';

  constructor(private fb: FormBuilder, private addUserService: UserService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.addUserService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  addUserToList() {
    this.addUserService.addUser(this.userForm.value).subscribe(users => {
      if (users) {
        this.resetUserForm();
        this.getUserList();
      }
    });
  }

  editUserInList() {
    this.addUserService.addUser(this.userForm.value).subscribe(users => {
      if (users) {
        this.resetUserForm();
        this.getUserList();
      }
    });
  }


  deleteUserFromList(id) {
    this.addUserService.deleteUser(id).subscribe(users => {
      this.getUserList();
    });
  }

  resetUserForm() {
    this.userForm.setValue({
      firstName: '',
      lastName: '',
      employeeId: '',
    });
  }

  onClickSort(key) {
    if (key === this.sortBy) {
      this.sortBy = null;
    } else {
      this.sortBy = key;
    }
  }
}
