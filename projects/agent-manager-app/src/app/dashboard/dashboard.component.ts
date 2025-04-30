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
    <div *ngIf="agentList && agentList.length > 0">
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
    <br/>
    <br/> 
    <alert type="success" [dismissOnTimeout]="timeout" [dismissible]="dismissible">
        <strong> Data fetched successfully.!</strong>
    </alert>
    </div>    
    <div *ngIf="!agentList || null">
      <alert type="danger" [dismissible]="dismissible">
          <strong>Unable to fetch data.!</strong>
      </alert>    
    </div>        
    <br/>
    <br/>    
    <div *ngIf="loading">
          <div class="mb-2">
            <progressbar [value]="80" [striped]="true">Loading</progressbar>
          </div>
    </div>
  `,
    styles: '',
    standalone: false
})
export class DashboardComponent implements OnInit {

 
  agentList: any = [];
  filterby: any = '';
  loading: boolean = false;
  dismissible: boolean = true;
  timeout: number = 4000;

  constructor(private aService: AgentService){ 
  }

  ngOnInit(){
    this.loading = true;

    this.aService.getAllAgents().pipe(delay(2500)).subscribe(res => {
      if(res){
        this.loading = false;
        this.agentList = res;
        //console.log(res);     
      }       
    })
  }
}
