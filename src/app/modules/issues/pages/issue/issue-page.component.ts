import { CommonModule } from '@angular/common';
import { getIssueByNumber } from './../../actions/get-issue-by-number.action';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issue-page',
  imports: [CommonModule, RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  styles: ``
})
export default class IssuePageComponent {
 route = inject(ActivatedRoute);
 issueService = inject(IssueService);

 issueNumber = toSignal<string>(
  this.route.paramMap.pipe(
    map( (params) => params.get('number') ?? ''),
    tap( (number) => this.issueService.setIssueNumber(number))
  )
 );

 issueQuery = this.issueService.issuesQuery;
 issueCommentsQuery = this.issueService.issueCommentsQuery;

}
