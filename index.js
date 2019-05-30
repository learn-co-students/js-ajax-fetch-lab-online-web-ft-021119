const githubAPI = 'https://api.github.com'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  debugger
  const repo = 'octocat/Spoon-Knife'
  const postData = ''
  //use fetch to fork it!
  fetch(`${githubAPI}/repos/${repo}/forks`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  )
  .then(response => response.json())
  .then(json => showResults(json))
}

function showResults(json) {
  debugger
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
