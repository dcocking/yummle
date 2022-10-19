import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  GameComponent,
  GameOverDialog,
  WinnerDialog,
  StatsDialog } from './game/game.component';
import { StatsService } from './services/stats.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameOverDialog,
    WinnerDialog,
    StatsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    DialogModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
