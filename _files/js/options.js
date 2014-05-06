
$(document).ready(function(event) {
  //console.log("------------ DOM loaded -------------");
  checkForInstalledExt();
});
$(window).on('hashchange', function() {
  //console.log("------------ hashchange -------------");
});
function checkForInstalledExt() {
  //console.log("------------ checkForInstalledExt -------------");
  var installedExt = document.getElementById('extension-is-installed');
  var installButton = document.getElementById('install-button');
  var rateButton = document.getElementById('rate-button');
  if (chrome && installButton !== undefined && rateButton !== undefined) {
    if (installedExt === undefined) {
      installButton.style.display = 'none';
      rateButton.style.display = 'inline';
    } else {
      installButton.style.display = 'inline';
      rateButton.style.display = 'none';
    }
  }
}