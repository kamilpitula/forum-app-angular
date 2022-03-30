import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnChanges {
  @Input()
  level!: 'error' | 'warning' | 'info';
  @Input()
  text!: string;

  ngOnChanges(changes: SimpleChanges): void {
  }

}
