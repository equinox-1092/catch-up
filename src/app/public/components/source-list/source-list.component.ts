import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Source } from '../../../news/model/source.entity';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-source-list',
  imports: [CommonModule, MatListModule],
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {
  @Input() sources: Array<Source> = [];
  @Output() sourceSelected = new EventEmitter<Source>();

  onSourceSelect(source: Source) {
    this.sourceSelected.emit(source);
  }
}
