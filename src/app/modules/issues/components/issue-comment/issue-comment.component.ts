import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issue.interface';

import { MarkdownModule } from 'ngx-markdown'

@Component({
  selector: 'issue-comment',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {

  issue = input.required<GitHubIssue>();
}
