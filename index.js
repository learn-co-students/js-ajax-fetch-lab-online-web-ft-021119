function getToken() {
  // const token = '4167d196a6ec479d92c1b0d56f9110b4b0578ca4'
  // return token;
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/' + repo +'/forks', {
  method: 'POST',
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(resp => resp.json())
  .then(json => showResults(json));
};

function showResults(json) {
  const url = json.html_url
  let div = document.getElementById('results');
  div.innerHTML = `<a href=${url}>${url}</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'chrstphgrnr/js-ajax-fetch-lab';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch('https://api.github.com/repos/' + repo + '/issues' , {
    method: 'POST', 
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`}
  });

}

function getIssues() {
  const repo = `chrstphgrnr/js-ajax-fetch-lab`;
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}


