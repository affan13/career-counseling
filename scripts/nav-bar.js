var navbarKiInnerHTML = `<div class="container">
<div class="navbar-header">
  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</div>
<div class="collapse navbar-collapse" id="myNavbar">
  <a href="./index.html" style="padding: 0px">
    <img src="final-logo.png" alt="logo" style="width:120px;height:120px;" />
  </a>
  <ul class="nav navbar-nav navbar-right" id="nav-bar-ul">
    <li class="a"><a href="./index.html">Home</a></li>
    <li class="a"><a href="./find-universities.html">Find Universities</a></li>
    <li class="a"><a href="./contacts.html">Blog</a></li>
    <li class="a"><a href="./about.html">About Us</a></li>
    <li class="a"><a href="./sign-in.html">Login</a></li>
    <li class="a"><a href="./sign-up.html">SignUp</a></li>
  </ul>
</div>
</div>`;

function createNavBar() {
  // to put tab icon on every page
  document.getElementsByTagName(
    "head"
  )[0].innerHTML += `<link rel="icon" href="final-logo.png">`;

  var parent = document.getElementsByTagName("body")[0];
  var firstElement = parent.firstElementChild;
  
  let newElement = document.createElement("nav");
  newElement.setAttribute("class", "navbar navbar-default");
  newElement.innerHTML = navbarKiInnerHTML;
  parent.insertBefore(newElement, firstElement);
}
function signout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      window.location.reload();
    });
    
}

function addSignOutButton() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // adds sign-out button only if a user has signed in.
      var ul = document.getElementById("nav-bar-ul");
      if (ul == null) {
        return; // return back from current Function
      }
      ul.innerHTML += `<li class="a"><button onclick="signout()" class="btn btn-xs btn-danger">SignOut</button></li>`;
    }
  });
}
function addFooter() {
  
}

createNavBar();
addSignOutButton();
