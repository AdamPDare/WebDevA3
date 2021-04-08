function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}
function checkBrowser(){
    let userAgentString= navigator.userAgent;
    let chromeAgent = userAgentString.indexOf("Chrome")>-1;
    let IExplorerAgent=userAgentString.indexOf("MSIE")>-1||
    userAgentString.indexOf("rv:")>-1;
    let firefoxagent=userAgentString.indexOf("Firefox")>-1;
    let safariAgent=userAgentString.indexOf("Safari")>-1;

    if((chromeAgent)&&(safariAgent)){
        safariAgent=false;
    }

    let operaAgent=userAgentString.indexOf("OP")>-1;

    if((chromeAgent)&&(operaAgent)){
        chromeAgent=false;
    }

    document.querySelector(".output-safari").textContent=safariAgent;
    document.querySelector(".output-chrome").textContent=chromeAgent;
    document.querySelector(".output-ie").textContent=IExplorerAgent;
    document.querySelector(".output-opera").textContent=operaAgent;
    document.querySelector(".output-firefox").textContent=firefoxagent;
}


