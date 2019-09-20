$(document).ready(function() {
    var overlay_style = document.createElement("style");
    document.head.appendChild(overlay_style);
    overlay_style.sheet.insertRule('#overlay { position: fixed; display: none; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; padding-top: 200px; text-align: center;background-color: rgba(128,128,128,0.8); z-index: 2; }')
    overlay_style.sheet.insertRule('#login { display: none; width: 500px; height: 175px; display: inline-block; vertical-align: middle; background-color: rgba(255,255,255,1.0); z-index: 3; text-align: center; padding-top: 50px }')

    var overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    var login = document.createElement("div");
    login.setAttribute("id", "login");
    var alert = document.createElement("p");
    alert.innerHTML = "You need to sign in to see the rest of this content!";
    var brk = document.createElement("br");
    var btn = document.createElement("button");
    btn.innerHTML = "Sign In";
    btn.setAttribute("onclick", "location.href = 'https://github.gatech.edu/pages/achang66/OpenLotus/';");

    login.appendChild(alert);
    login.appendChild(brk);
    login.appendChild(btn);
    overlay.appendChild(login);
    document.body.appendChild(overlay);

    // check cookie
    var visited = Cookies.get("visited");

    // load overlay if they haven't visited
    if (visited == null) {
        $('#overlay').fadeIn(1000, "linear"); 
        // $('#login').fadeIn(1000, "linear");    
        Cookies.set('visited', 'yes');  
    }

    // set cookies but i will do that
    // Cookies.set('visited', 'yes', { expires: 1, path: '/' });
});