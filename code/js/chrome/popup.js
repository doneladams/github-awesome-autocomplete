/* global document, chrome, self */

var button = document.getElementById('refresh-button');
button.addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'connect-with-github'});
  });
  return false;
});

var gotoLink = function(link) {
  chrome.tabs.executeScript({ code: 'location.href="' + link.getAttribute('href') +'"' });
  self.close();
};

var links = ['github-repository', 'github-issues', 'algolia-link'];
for (var i = 0; i < links.length; ++i) {
  var link = document.getElementById(links[i]);
  link.addEventListener('click', gotoLink.bind(null, link));
}
