import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AgentService } from './agent.service';
import { FilterPipe } from './filter.pipe';
import { AgentStatusDirective } from './agent-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgentDetailsComponent,
    NotFoundComponent,
    FilterPipe,
    AgentStatusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
