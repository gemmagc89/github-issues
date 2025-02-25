import { sleep } from "@helpers/sleep";
import { environment } from "src/environments/environment.development";
import { GitHubIssue } from "../interfaces/github-issue.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async(issueNumber: string): Promise<GitHubIssue[]> => {

  try {

    const resp = await fetch(
      `${BASE_URL}/issues/${ issueNumber }/comments`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`
        },
      });

    if (!resp.ok) throw `Can't load comments of issue ${issueNumber}`

    const issues: GitHubIssue[] = await resp.json();

    return issues;

  } catch (error) {
    throw `Can't load comments of issue ${issueNumber}`;
  }
}
