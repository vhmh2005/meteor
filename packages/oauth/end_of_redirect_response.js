(function () {

  var config = JSON.parse(document.getElementById("config").innerHTML);

  if (config.setCredentialToken) {
    sessionStorage[config.storagePrefix + config.credentialToken] =
    config.credentialSecret;
  }

  var removedAmpersandURL = config.redirectUrl.replace(/&amp;/g, "&")
  window.location = removedAmpersandURL

})();
