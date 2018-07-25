// Tom Saleeba
function describeTom () {
  let tom = {
    job: 'developer',
    skills: [
      'JavaScript',
      'Java'
    ],
    github: 'https://github.com/tomsaleeba',
    projectsProudOf: [
      'https://github.com/tomsaleeba/sails-hook-api-version-accept'
    ]
  }
}






// now for some gory technical details - this is some inception stuff
let xmlHttp = new XMLHttpRequest()
xmlHttp.onreadystatechange = function () {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    let body = xmlHttp.responseText
    document.getElementById('the-code').innerText = body
    hljs.initHighlightingOnLoad()
  }
}
let doAsyncCall = true
xmlHttp.open("GET", 'script.js', doAsyncCall)
xmlHttp.send(null)
