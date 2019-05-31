const githubAPI = 'https://api.github.com'
// const repo = 'BebopVinh/codewars-nato'
const repo = 'learn-co-curriculum/js-ajax-fetch-lab'



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
  // return 'a76bfee4b0dbee7dcacdfc7074f47411e5fbd68e'
}

function forkRepo() {
  const postData = ''
  //use fetch to fork it!
  fetch(`${githubAPI}/repos/${repo}/forks`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
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
  const issueTitle = document.querySelector('input#title')
  const issueText = document.querySelector('input#body')
  // POST /repos/:owner/:repo/issues
  
  fetch(`${githubAPI}/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => getIssues())
  
}

function getIssues() {
  debugger
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
