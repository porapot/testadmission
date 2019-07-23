import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { getViewData } from '@angular/core/src/render3/instructions';
import { MatDialog } from '@angular/material';
import { AdmisionDialogComponent } from '../admision-dialog/admision-dialog.component';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  students = [];

  constructor(private http: HttpClient, public dialog: MatDialog) { }



  ngOnInit() {
    this.getData();
    console.log("loggetdata")
  }

  saveData(data: any) {
    console.log("savedata");
    this.http.post("http://localhost:3000/api/admissions", data).subscribe(res => {
      console.log(res);
      this.getData();
    });
  }

  getData() {
    this.http.get("http://localhost:3000/api/admissions").subscribe((res: any) => {
      this.students = res.data;
      console.log("getdata")
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdmisionDialogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("dialog: " + result);
      this.saveData(result);
    });
  }
}

