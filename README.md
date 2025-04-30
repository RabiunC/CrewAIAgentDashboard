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
"ngx-bootstrap": "^19.0.0",

Dependencies / Libraries:
"rxjs": "~7.8.0",
command to add ng material: npm install ngx-bootstrap --save

Usage: 
This is a small dashboard interface build on JS framework Angular v18.2 to display and interact with AI agents managed by a CrewAI system. The backend provides RESTful APIs to fetch agent information and potentially trigger actions.

This app allows users to view a list of AI agents, see their details, filter them, and simulate triggering a task.


LOOM VIDEO LINK:
https://www.loom.com/share/b7d46e0c6c774dc7bb37ea96a076bf65?sid=2003fe79-a634-4f1f-9b0f-6486711f1fc1


Contributing
