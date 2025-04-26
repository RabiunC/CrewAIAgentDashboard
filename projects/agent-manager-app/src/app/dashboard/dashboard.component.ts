import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  template: `  
    <h5>Dashboard</h5>
    &nbsp;
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
      </div>
      <input type="text" class="form-control" [(ngModel)]="filterby" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
    </div>   
    <br/>
    <br/>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">STATUS</th>
          <th scope="col">tasks_completed</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of agentList | filter : filterby">
          <th scope="row">
            <a class="nav-link active" [routerLink]="['agentDetails', item.id]">{{item.id}}</a></th>
          <td>{{item.name}}</td>
          <td><span agentStatus="{{ item.status }}"></span></td>
          <td>{{item.tasks_completed}}</td>
        </tr>       
      </tbody>
    </table>
    <div *ngIf="loading">
      <mat-progress-spinner mode="indeterminate" color="primary"></mat-progress-spinner>
    </div>    
  `,
  styles: '',
})
export class DashboardComponent implements OnInit {

  agentList: any = [];
  filterby: any = '';
  loading: boolean = false;

  constructor(private aService: AgentService){}

  ngOnInit(){
    this.loading = true;
    this.aService.getAllAgents().pipe(delay(3000)).subscribe(res => {
      this.loading = false;
      this.agentList = res;
      //console.log(res);
    })
  }
}
