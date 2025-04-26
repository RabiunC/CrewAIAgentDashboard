Installation

Command for creating the app environment:
ng new agentManager --create-application=false --ssr=false --standalone=false

Command for creating the app:
ng g application agentManagerApp --style=css --routing=false --ssr=false --standalone=false

Command to run the applicaion:
from inside the folder "agentManager"
agentManager> ng serve --project=agentManagerApp

Technologies:
Angular 18.2.19
Angular Material "^18.2.14"

Dependencies / Libraries:
"rxjs": "~7.8.0",
command to add ng material: ng add @angular/material

Usage: 
This is a small dashboard interface using AngularJS 18 to display and interact with AI agents managed by a CrewAI system. The backend provides RESTful APIs to fetch agent information and potentially trigger actions.

This app allows users to view a list of AI agents, see their details, filter them, and simulate triggering a task.


Contributing
