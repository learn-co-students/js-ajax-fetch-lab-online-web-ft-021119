const github = 'https://api.github.com'
const token = getToken()
const results = document.getElementById('results')
const title = document.getElementById('title')
const body = document.getElementById('body')
const issues = document.getElementById('issues')



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return 'baaaa3b08f3ea6078fc530b6a32a2b224c0951ea';
  return '';
}


function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it! //POST /repos/:owner/:repo/forks
  fetch(`${github}/repos/${repo}/forks`,{
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));

}

function showResults(json) {
  //use this function to  json.html_url => results container
results.innerHTML = `<a href=${json.html_url}>${json.html_url} </a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';
  const postData = {
  title: title.value,
  body: body.value}
  // POST /repos/:owner/:repo/issues
  const owner = 'zoey7117'
  fetch(`${github}/repos/${owner}/${repo}/issues`,{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());

  }



function getIssues() {
  const owner = 'zoey7117'
  const repo = 'js-ajax-fetch-lab';


  //GET /repos/:owner/:repo/issues/:issue_number
  fetch(`${github}/repos/${owner}/${repo}/issues`)
  .then(res =>res.json())
  .then(data => {
    const content = data.map(issue =>{
      return `<p>${issue.title} - ${issue.body}</p>`
    }).join('')
    issues.innerHTML = content
  })


  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
