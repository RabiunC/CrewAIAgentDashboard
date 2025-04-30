import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as agentData from './agentData.json';
import * as agentDetails from './agentDetails.json';
import { of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  message: string | null = null;

  constructor(private http: HttpClient) { }

  getAllAgents(){
    return of(agentData.agents);
  }

  getbyId(id: any){
    return agentDetails.agentDetails.filter((item) => item.id == id);
  }

  taskDispatch(id: any){
    const aDetails = this.getbyId(id);
    const success = Math.random() > 0.5;
    if (success) {
<<<<<<< HEAD
      this.message = `Task dispatched Successfully for ${aDetails[0].name}`;
=======
      this.message = `Task dispatched successfully for ${aDetails[0].name}`;
>>>>>>> defe82f4ed565b6b4dc63573e02f560168353ad3
    } else {
      this.message = `Failed to dispatch task for ${aDetails[0].name}`;     
    }    
    setTimeout(() => {
      this.message = null;
    }, 3000);
    return this.message;
  }
}
