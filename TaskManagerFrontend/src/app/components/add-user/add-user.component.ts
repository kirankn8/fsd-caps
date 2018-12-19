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

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  addUserToList() {
    this.userService.addUser(this.userForm.value).subscribe(users => {
      if (users) {
        this.resetUserForm();
        this.getUserList();
      }
    });
  }

  editUserInList() {
    this.userService.addUser(this.userForm.value).subscribe(users => {
      if (users) {
        this.resetUserForm();
        this.getUserList();
      }
    });
  }

  deleteUserFromList(id) {
    this.userService.deleteUser(id).subscribe(users => {
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
