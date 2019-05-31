function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = ''
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

   fetch(`/api.github.com/repos/${repo}/forks`,{
  		method: 'post',
  		headers: {
  			Authorization: `token ${getToken()}`
  		}
    }).then(res => res.json())
	  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
 const title = document.getElementById('title').value
 const body = document.getElementById('body').value
 const postData = {title: title, body : body};
 const user = 'lchan217'
 
 const repo = 'js-ajax-fetch-lab';

 fetch(`/api.github.com/repos/${user}/${repo}/issues`,{
  	method: 'POST',
  	  body: JSON.stringify(postData),
  	  headers: {
  			Authorization: `token ${getToken()}`
  		}
    }).then(res => res.json())
	  .then(json => getIssues(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  //GET /repos/:owner/:repo/issues
  const repo = 'js-ajax-fetch-lab';
  const user = 'lchan217'
  
  fetch(`/api.github.com/repos/${user}/${repo}/issues`,{
  		headers: {
  			Authorization: `token ${getToken()}`
  		}
    }).then(res => res.json())
	 .then(json => console.log(json));
}