import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AgentService } from './agent.service';
import { FilterPipe } from './filter.pipe';
import { AgentStatusDirective } from './agent-status.directive';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgentDetailsComponent,
    NotFoundComponent,
    FilterPipe,
    AgentStatusDirective,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ButtonsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
    AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
