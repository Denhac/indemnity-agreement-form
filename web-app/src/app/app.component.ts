import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(public dialog: MatDialog) { }

  signatureComplete = false;
  title = 'app';
  emailFormControl = new FormControl('', [
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  signatureCompelted() {
    this.signatureComplete = true;
    console.log("Signature COMPLETED!");
  }

  onSubmit() {
    if (this.nameFormControl.hasError('required')) {
      console.log("Name ERROR");
    }
    else if (!this.signatureComplete) {
      console.log("Signature Error");
      this.openDialog();
    } else {
      console.log("Time to send");

    }

  }
  matcher = new MyErrorStateMatcher();

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

