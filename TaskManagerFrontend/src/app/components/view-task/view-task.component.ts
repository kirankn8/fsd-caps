import { Component, OnInit } from '@angular/core';
import { SelectDialogBoxComponent } from '../select-dialog-box/select-dialog-box.component';
import { MatDialog } from '@angular/material';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  projectList: any;
  selectedProject: any;
  sortBy: string;

  constructor(public dialog: MatDialog, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjectList();
  }

  onClickSort(key) {
    if (key === this.sortBy) {
      this.sortBy = null;
    } else {
      this.sortBy = key;
    }
  }

  getProjectList() {
    this.projectService.getProjects().subscribe(projs => {
      this.projectList = projs;
    });
  }

  openProjectDialog() {
    const dialogRef = this.dialog.open(SelectDialogBoxComponent, {
      width: '600px',
      height: '400px',
      data: { title: 'Select Project', genericList: this.projectList, prop: 'project' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedProject = result;
        console.log(result);
      }
    });
  }
}
