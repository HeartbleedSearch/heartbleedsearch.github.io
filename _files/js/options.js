
$(document).ready(function(event) {
  //console.log("------------ DOM loaded -------------");
  setTimeout(checkForInstalledExt,1000);  //allow time for extension to place object
});
$(window).on('hashchange', function() {
  //console.log("------------ hashchange -------------");
});
function checkForInstalledExt() {
  //console.log("------------ checkForInstalledExt -------------");
  var installedExt = document.getElementById('extension-is-installed');
  var installButton = document.getElementById('install-button');
  var rateButton = document.getElementById('rate-button');
  //console.log(installedExt);
  if (chrome && installButton !== null && rateButton !== null) {
    if (installedExt !== null) {
      installButton.style.display = 'none';
      rateButton.style.display = 'inline';
    } else {
      installButton.style.display = 'inline';
      rateButton.style.display = 'none';
    }
  }
}