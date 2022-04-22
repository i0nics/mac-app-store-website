function logout() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
      $.removeCookie(cookie, { path: '/' });
    }
    window.localStorage.clear();
    localStorage.clear(); 
    document.location = 'index.html'
}