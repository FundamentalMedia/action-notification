const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN); 
    
    const { context = {} } = github;
    const { pull_request } = context.payload;
    
    const owner = context.repo.owner
    const repo  = context.repo.repo
    const number = pull_request.number

    try{
      console.log("Requesting PR review")
      const reviewers = [
        'fundamental-michele',
        'fundamentalgeorge',
        'fundamentaltudor',
        'fundamental-ricardo',
        'fundamentalandrew'
      ].filter(rev=> rev !== (pull_request && pull_request.user.login))

      await octokit.rest.pulls.requestReviewers({
        owner,
        repo,
        pull_number: number,
        reviewers
      });
    }catch(error){
      console.log("Unable to request reviewers")
      console.error(error)
    }
}

run().catch(err => core.setFailed(err.message));