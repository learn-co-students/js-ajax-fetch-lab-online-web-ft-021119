const token = '7be369911bd4e093b1aa9ce86436e179502b3b9c';
const githubAPI = 'https://api.github.com'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  const postData = ''
  //use fetch to fork it!
  fetch(`${githubAPI}/repos/${repo}/forks`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: ""
      }
    }
  )
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
