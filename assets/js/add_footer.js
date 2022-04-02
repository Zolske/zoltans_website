// Js should create a footer to the html page where ever it is included. The style has to come from the styles.css file

// create footer element and add footer class
let footerElement = document.getElementsByTagName("footer")[0];
footerElement.setAttribute("class", "footer");
// create h3 element and write text content
let h3Element = document.createElement("h3");
h3Element.innerHTML = "Contact Me";
// add h3 element as child to footer
footerElement.appendChild(h3Element);
// create ul element, add class footer__contact and after h3 element
let ulElement = document.createElement("ul");
ulElement.setAttribute("class", "footer__contact");
h3Element.after(ulElement);

// ---------------------------------------------------------->>> start linkedin section

// create li and a element
let liLinkedinElement = document.createElement("li");
let aLinkedinElement = document.createElement("a");
// create href attribute with the property of the url address
aLinkedinElement.setAttribute(
  "href",
  "https://www.linkedin.com/in/zolt%C3%A1n-kepes-b1922b1bb/"
);
// create target and title attribute and aria label for a element
aLinkedinElement.setAttribute("target", "_blank");
aLinkedinElement.setAttribute(
  "aria-label",
  "open new page to Linkedin profile"
);
aLinkedinElement.setAttribute("title", "open new page to Linkedin profile");
// create and add i element with the class for font awesome icon to a element
let iLinkedinElement = document.createElement("i");
iLinkedinElement.setAttribute("class", "fa fa-linkedin");
aLinkedinElement.appendChild(iLinkedinElement);
// create br element and add to a element
let brElement = document.createElement("br");
aLinkedinElement.append(brElement);
// append a element to li element
liLinkedinElement.append(aLinkedinElement);
// append li element to ulElement
ulElement.append(liLinkedinElement);
// create text node and append a element
let textNodeLinkedin = document.createTextNode("Linkedin");
aLinkedinElement.append(textNodeLinkedin);

// ---------------------------------------------------------->>> start Email Me section

// create li and a element
let liEmail = document.createElement("li");
let aEmail = document.createElement("a");
// create href attribute with the property of the url address
aEmail.setAttribute("href", "mailto:zoltan.the.kepes@gmail.com");
// create title attribute and aria label for a element
aEmail.setAttribute("aria-label", "open user Email app");
aEmail.setAttribute("title", "open user Email app");
// create and add i element with the class for font awesome icon to a element
let iEmail = document.createElement("i");
iEmail.setAttribute("class", "fa fa-paper-plane");
aEmail.appendChild(iEmail);
// create br element and add to a element
let brElementEmail = document.createElement("br");
aEmail.append(brElementEmail);
// append a element to li element
liEmail.append(aEmail);
// append li element to ulElement
liLinkedinElement.after(liEmail);
// create text node and append a element
let textNodeEmail = document.createTextNode("Email Me");
aEmail.append(textNodeEmail);

// ---------------------------------------------------------->>> start GitHub section

// create li and a element
let liGitHub = document.createElement("li");
let aGitHub = document.createElement("a");
// create href attribute with the property of the url address
aGitHub.setAttribute("href", "https://github.com/Zolske");
// create target and title attribute and aria label for a element
aGitHub.setAttribute("target", "_blank");
aGitHub.setAttribute("aria-label", "open new page to GitHub profile");
aGitHub.setAttribute("title", "open new page to GitHub profile");
// create and add i element with the class for font awesome icon to a element
let iGitHub = document.createElement("i");
iGitHub.setAttribute("class", "fa fa-github");
aGitHub.appendChild(iGitHub);
// create br element and add to a element
let brElementGitHub = document.createElement("br");
aGitHub.append(brElementGitHub);
// append a element to li element
liGitHub.append(aGitHub);
// append li element to ulElement
liEmail.after(liGitHub);
// create text node and append a element
let textNodeGitHub = document.createTextNode("GitHub");
aGitHub.append(textNodeGitHub);

/* ---------------------------------------------------------->>> blueprint how the html should look after manipulating the DOM with js
<footer class="footer">
<h3>Contact Me</h3>
  <ul class="footer__contact">
      <li><a href="https://www.linkedin.com/in/zolt%C3%A1n-kepes-b1922b1bb/" target="_blank"
              aria-label="open new page to Linkedin profile" title="open new page to Linkedin profile"><i
                  class="fa fa-linkedin"></i><br>Linkedin</a></li>
      <li><a href="mailto:zoltan.the.kepes@gmail.com" aria-label="open user Email app"
              title="open user Email app"><i class="fa fa-paper-plane"></i><br>Email Me</a></li>
      <li><a href="https://github.com/Zolske" target="_blank"><i class="fa fa-github"
                  aria-label="open new page to GitHub profile"
                  title="open new page to GitHub profile"></i><br>GitHub</a></li>
  </ul>
</footer> */
