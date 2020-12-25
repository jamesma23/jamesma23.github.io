function increment (i) {
  return (i + 1)
}
var languages = ['python', 'java', 'c', 'r', 'html', 'css', 'javascript', 'scheme', 'matlab', 'sql', 'premiere pro']
var i = 0
function disappear () {
  setTimeout(increment, 10000)
  i = increment(i)
  document.getElementById(languages[i]).style.display = 'none'
  if (i === 11) {
    i = 0
  }
}
disappear()
