const githubAPI = 'https://api.github.com'
const repo = 'js-ajax-fetch-lab'


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
}

function forkRepo() {
  const postData = ''
  //use fetch to fork it!
  const owner = 'learn-co-curriculum'
  fetch(`${githubAPI}/repos/${owner}/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => {
    console.log(json)
    debugger
    showResults(json)})
}

function showResults(json) {
  debugger
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.querySelector('input#title')
  const issueText = document.querySelector('input#body')
  const owner = "BebopVinh"
  fetch(`${githubAPI}/repos/${owner}/${repo}/issues`,
    {
      method: 'POST',
      title: issueTitle,
      body: issueText,
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => getIssues())
  
}

function getIssues() {
  fetch()
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
