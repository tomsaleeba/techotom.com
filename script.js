// Tom Saleeba
function describeTom () {
  let tom = {
    job: 'developer',
    proficientLanguages: [
      'JavaScript',
      'Java'
    ],
    canHitTheGroundRunningWith: [
      {
        task: 'web-development',
        description: 'end-to-end building a SPA in Angular, with a HTTP API backend'
      }, {
        task: 'dockerising',
        description: 'wrapping your existing apps in Docker container for easy deployment'
      },
    ],
    type: {
      personality: {
        meyersBriggs: '(I|E)STJ'
      }
    },
    socialMedia: {
      github: 'https://github.com/tomsaleeba',
      stackOverflow: 'https://stackoverflow.com/users/1410035/tom-saleeba',
      blog: 'https://blog.techotom.com/'
    },
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
    let codeElement = document.getElementById('the-code')
    codeElement.innerText = body
    hljs.initHighlighting()
    // hljs.lineNumbersBlock(codeElement) // FIXME stop from ruining styles
    let highlightedCode = codeElement.innerHTML
    let highlightedAndHyperlinkedCode = highlightedCode.replace(/'(http.*)'/g, '\'<a href="$1" target="_blank">$1</a>\'')
    codeElement.innerHTML = highlightedAndHyperlinkedCode
  }
}
let doAsyncCall = true
xmlHttp.open("GET", 'script.js', doAsyncCall)
xmlHttp.send(null)
