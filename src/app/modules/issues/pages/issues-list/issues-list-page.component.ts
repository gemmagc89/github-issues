import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { State } from '../../interfaces/github-issue.interface';

@Component({
  selector: 'app-issues-list-page',
  imports: [CommonModule, LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styles: ``
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.Closed,
    }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }
}
