import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
    selector: '[agentStatus]',
    standalone: false
})
export class AgentStatusDirective implements OnChanges {
  @Input() agentStatus!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.applyStyles();
  }

  private applyStyles() {
    let backgroundColor = '';
    switch (this.agentStatus) {
      case 'Idle':
        backgroundColor = 'grey';
        break;
      case 'Running':
        backgroundColor = 'green';
        break;
      case 'Error':
        backgroundColor = 'red'; // Red
        break;
      default:
        backgroundColor = 'none';
    }

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '4px');
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.agentStatus);
  }
}