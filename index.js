const github = "https://api.github.com"
const token = getToken()

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!  /repos/:owner/:repo/forks
  const url = `${github}/repos/${repo}/forks`

  fetch(url,{
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    })
  .then(res => res.json())
  .then(data => showResults(data))
}

function showResults(json) {
  //use this function to  json.html_url => results container
  const results = document.getElementById("results")
  results.innerHTML = `<a href=${json.html_url}>${json.html_url} </a>`


}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.querySelector("#title")
  const body = document.querySelector("#body")
  const repo = 'bosskey59/js-ajax-fetch-lab';
  const url = `${github}/repos/${repo}/issues`

  const postData = {
    title: title.value,
    body: body.value
  };
  //  POST /repos/:owner/:repo/issues
  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ) .then(res => res.json())
  .then(getIssues())


}

function getIssues() {
  const repo = 'bosskey59/js-ajax-fetch-lab';
  const url = `${github}/repos/${repo}/issues`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const issues = document.querySelector("#issues")
    const content = data.map(issue =>{
      return `<p>${issue.title} - ${issue.body}</p>`
    }).join("")
    issues.innerHTML = content

  })

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
