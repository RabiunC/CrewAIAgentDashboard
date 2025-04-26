import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-details',
  template: ` 
    <h5>Agent Details</h5>
    &nbsp;

    <div *ngIf="data && data.length > 0">
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        {{data[0].name}}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{data[0].id}}</li>
        <li class="list-group-item">{{data[0].status}}</li>
        <li class="list-group-item">{{data[0].tasks_completed}}</li>
        <li class="list-group-item">{{data[0].current_task}}</li>
        <li class="list-group-item" *ngFor="let item of data[0].logs">
          <ul>
            <li>{{item}}</li>
          </ul>
        </li>
        &nbsp;
        <li class="list-group-item" *ngFor="let item of data[0].capabilities">
          <ul>
            <li>{{item}}</li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
    <p *ngIf="!(data && data.length > 0)">No agent record is available.</p>
    <br/>
    <button type="button" class="btn btn-outline-dark" (click)="back()">Back</button>
    <button type="button" class="btn btn-primary" style="float:right" (click)="dispatchTask()">Dispatch New Task</button>
  `,
  styles: ''
})
export class AgentDetailsComponent {

  id: any;
  data: any; 
  message: string | null = null;

  constructor(private ar: ActivatedRoute, private router: Router, private aService: AgentService){}

  ngOnInit(){        
    this.id = this.ar.snapshot.params['id'];
    //console.log(this.id);    
    this.data = this.aService.getbyId(this.id);
    //console.log(this.data[0]);
  }

  dispatchTask() {
    if(this.data && this.data.length > 0){
    this.message = this.aService.taskDispatch(this.id)
    alert(this.message);
    }
    else{
      alert("Action Failed");
    }
  }

  back(){
    this.router.navigateByUrl('/');
  }
  
}
