import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  imports: [CommonModule],
})
export class IconButtonComponent {
  @Input() iconType?: string;
  @Output() newIconTypeEvent = new EventEmitter();
  handleEvent(): void {
    this.newIconTypeEvent.emit();
  }
}
