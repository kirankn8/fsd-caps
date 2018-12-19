import { Component, OnInit } from '@angular/core';
import { SelectDialogBoxComponent } from '../select-dialog-box/select-dialog-box.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  userList: any;
  projectList: any;
  selectedManager: any;
  sortBy: string;
  searchValue: string;

  projectForm = this.fb.group(
    {
      project: '',
      defaultDate: [false],
      startDate: [''],
      endDate: [''],
      priority: [0, Validators.required],
      manager: '',
    }
  );

  constructor(public dialog: MatDialog, private userService: UserService,
    private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.userList = this.userService.getUsers().subscribe(users => this.userList = users);
    this.disableDateFields();
    this.getProjectList();
  }

  disableDateFields() {
    this.projectForm.controls['startDate'].disable();
    this.projectForm.controls['endDate'].disable();
  }

  enableDateFields() {
    this.projectForm.controls['startDate'].enable();
    this.projectForm.controls['endDate'].enable();
  }

  openManagerDialog() {
    const dialogRef = this.dialog.open(SelectDialogBoxComponent, {
      width: '600px',
      height: '400px',
      data: { title: 'Select Manager', genericList: this.userList, prop: 'firstName' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedManager = result;
        this.projectForm.patchValue({
          manager: result.firstName,
        });
      }
    });
  }

  onSelectionChange() {
    if (!this.projectForm.value.defaultDate) {
      this.disableDateFields();
    } else {
      this.enableDateFields();
    }
  }

  getProjectList() {
    this.projectService.getProjects().subscribe(projs => {
      this.projectList = projs;
    });
  }

  addProject() {
    const projObj = {
      project: this.projectForm.value.project,
      defaultDate: this.projectForm.value.defaultDate,
      startDate: this.projectForm.value.startDate ? this.projectForm.value.startDate : new Date().getDate(),
      endDate: this.projectForm.value.endDate ? this.projectForm.value.endDate : new Date().getDate() + 1,
      priority: this.projectForm.value.priority,
      manager: this.selectedManager._id,
    };
    this.projectService.addProject(projObj).subscribe(project => {
      this.getProjectList();
      this.resetProjectForm();
    });
  }

  resetProjectForm() {
    this.projectForm.setValue({
      project: '',
      defaultDate: false,
      startDate: '',
      endDate: '',
      priority: 0,
      manager: '',
    });
    this.disableDateFields();
  }

  onClickSort(key) {
    if (key === this.sortBy) {
      this.sortBy = null;
    } else {
      this.sortBy = key;
    }
  }

  deleteProjectFromList(id) {
    this.projectService.deleteProject(id).subscribe(proj => {
      this.getProjectList();
    });
  }
}
