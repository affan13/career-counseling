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
  <ul class="nav navbar-nav navbar-right">
    <li class="a"><a href="./index.html">Home</a></li>
    <li class="a"><a href="./find-universities.html">Find Universities</a></li>
    <li class="a"><a href="./contacts.html">Blog</a></li>
    <li class="a"><a href="./about.html">About Us</a></li>
    <li class="a"><a href="./login.html">Login | SignUp</a></li>
  </ul>
</div>
</div>`;
var styleTag = `<link rel="stylesheet" href="./styles/custom.css">`;

function createNavBar() {
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

createNavBar();
