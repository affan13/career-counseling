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
    .then(function () {
      window.location.reload();
    });
}

function addSignOutButton() {
  firebase.auth().onAuthStateChanged(function (user) {
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
  var footerInnerHTML = `<footer class="social-footer"
  style="position: sticky; bottom: 0; width: 100%">
  <div class="social-footer-left">&copy; 2018, All Rights Reserved.</div>
  <div class="social-footer-icons">
    <ul class="menu simple">
      <a href="https://www.facebook.com/"
        ><i class="fa fa-facebook" aria-hidden="true"></i
      ></a>
      <a href="https://www.instagram.com/?hl=en"
        ><i class="fa fa-instagram" aria-hidden="true"></i
      ></a>
      <a href="https://www.pinterest.com/"
        ><i class="fa fa-pinterest-p" aria-hidden="true"></i
      ></a>
      <a href="https://twitter.com/?lang=en"
        ><i class="fa fa-twitter" aria-hidden="true"></i
      ></a>
    </ul>
  </div>
</footer>`;
  document.head.innerHTML += `<link
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
rel="stylesheet"
/>`;
  document.getElementsByTagName("body")[0].innerHTML += footerInnerHTML;
}

createNavBar();
addFooter();
addSignOutButton();

var url = window.location.href;
var currentPage = url.substr(url.lastIndexOf("/"));

switch (currentPage) {
  case "/survey.html":
    break;

  default:
    break;
}

checkUser();

function checkUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if (adminPages.includes(currentPage) && user.email.indexOf("@fypadmin.com") < 0) {
        window.location.href = "index.html";
      }
    } else {
      if (userPages.includes(currentPage) || adminPages.includes(currentPage)) {
        window.location.href = "index.html";
      }
    }
  });
}

var userPages = [
  "/survey.html",
  "/find-university.html",
  "/landing-page.html",
];
var adminPages = [
  "/admin-add-uni.html",
];