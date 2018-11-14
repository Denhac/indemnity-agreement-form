import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './app.component'


@NgModule({
    declarations: [
        AppComponent,
        SignatureComponent,
        DialogOverviewExampleDialog
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        SignaturePadModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule
    ],
    entryComponents: [DialogOverviewExampleDialog],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {


}
