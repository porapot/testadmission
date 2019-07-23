import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admision-dialog',
  templateUrl: './admision-dialog.component.html',
  styleUrls: ['./admision-dialog.component.scss']
})
export class AdmisionDialogComponent implements OnInit {
  
  student = 
    {
      fullname: "",
      pid: "",
      telno: ""
    };

  constructor(public dialogRef: MatDialogRef<AdmisionDialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  closeonclick() {
    this.dialogRef.close(this.student);
  }
}
