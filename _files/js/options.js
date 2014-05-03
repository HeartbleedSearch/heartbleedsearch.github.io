
$(document).ready(function(event) {
  //console.log("------------ DOM loaded -------------");
});
$(window).on('hashchange', function() {
  //console.log("------------ hashchange -------------");
});
if (chrome.app.isInstalled) {
  document.getElementById('install-button').style.display = 'none';
  document.getElementById('rate-button').style.display = 'inline';
} else {
  document.getElementById('install-button').style.display = 'inline';
  document.getElementById('rate-button').style.display = 'none';
}