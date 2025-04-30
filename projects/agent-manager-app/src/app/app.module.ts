import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
>>>>>>> defe82f4ed565b6b4dc63573e02f560168353ad3

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AgentService } from './agent.service';
import { FilterPipe } from './filter.pipe';
import { AgentStatusDirective } from './agent-status.directive';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './alert/alert.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
=======
>>>>>>> defe82f4ed565b6b4dc63573e02f560168353ad3

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgentDetailsComponent,
    NotFoundComponent,
    FilterPipe,
<<<<<<< HEAD
    AgentStatusDirective,
    AlertComponent
=======
    AgentStatusDirective
>>>>>>> defe82f4ed565b6b4dc63573e02f560168353ad3
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ProgressbarModule.forRoot()
=======
    MatProgressSpinnerModule
>>>>>>> defe82f4ed565b6b4dc63573e02f560168353ad3
  ],
  providers: [
    AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
