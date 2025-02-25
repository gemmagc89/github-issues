import { IssuesService } from './../../services/issues.service';
import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();

  IssuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.IssuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.IssuesService.toggleLabel(labelName);
  }

}
