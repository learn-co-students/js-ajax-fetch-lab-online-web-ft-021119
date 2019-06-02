
const owner = 'burakkocak884';
const gitUrl = "https://api.github.com";


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${gitUrl}/repos/${repo}/forks`; 
 const token = getToken();

  fetch(url , {
  	method: 'POST',
  	
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(data => showResults(data))
}

function showResults(json) {
  

const results = document.getElementById("results")
results.innerHTML = `<a href = ${json.html_url}>${json.html_url} </a>`

  //use this function to display the results from forking via the API
}

function createIssue() {
  const title = document.querySelector('#title')
  const text = document.querySelector('#body')
  
const repo = `${owner}/js-ajax-fetch-lab`
const url = `${gitUrl}/repos/${repo}/issues`

const postData = {
	title: title.value,
  body: body.value
};
 
fetch(
  url,
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
).then(res => res.json())
.then(data => getIssues(data));

  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
 const repo = `${owner}/js-ajax-fetch-lab`
 const url = `${gitUrl}/repos/${repo}/issues`


fetch (url)
.then(res => res.json())
.then(data => {
const issues = document.querySelector('#issues')
const content = data.map(issue => {
	return `<p> ${issue.title} - ${issue.body}</p>`
}).join("")
issues.innerHTML = content
	
})
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
