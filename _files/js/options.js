
$(document).ready(function(event) {
  //console.log("------------ DOM loaded -------------");
});
$(window).on('hashchange', function() {
  //console.log("------------ hashchange -------------");
});
var installedExt = document.getElementById('extension-is-installed');
if (installedExt) {
  document.getElementById('install-button').style.display = 'none';
  document.getElementById('rate-button').style.display = 'inline';
} else {
  document.getElementById('install-button').style.display = 'inline';
  document.getElementById('rate-button').style.display = 'none';
}