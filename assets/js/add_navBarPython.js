// const navBar2 = [
//     [home:   {}   title: 'home',
//                 href: '#',
//                 subLink: false
//             }],
//     [basic: {    title: 'basic',
//                 href: '#',
//                 subLink:   [['Topic_1', '#'],
//                             ['Topic_2', '#']]
//             }]
// ];

const navBar = [
  [
    ["HOME"],
    ["#"],
    ["Zoltan's Website"],
    ["../../../index.html"],
    ["About Zoltan"],
    ["../../../about_zoltan.html"],
    ["Zoltan's Certificates"],
    ["../../../certificates.html"],
    ["Zoltan's Projects"],
    ["../../../projects.html"],
    ["Zoltan's Notes"],
    ["../../../notes.html"],
    ["Python HOME"],
    ["../python/py_index.html"],
  ],
  [["BASIC"], ["#"]],
  [
    ["FRAMEWORK"],
    ["#"],
    ["Cheat Sheet: Django"],
    ["../python/py_cheat_django.html"],
    ["Django"],
    ["../python/py_django.html"],
  ],
];
document.body.onload = createNavBar; //calls function "creatNavBar" when body is loaded

const navEl = document.createElement("nav"); //create <nav> and saves it in "navEl"
const ulEl = document.createElement("ul"); //create <ul> and saves it in "ulEl"
ulEl.setAttribute("id", "navBarUlId"); //set id of "navBarId" to <ul>
navEl.insertAdjacentElement("afterbegin", ulEl); //inserts <ul> after beginning of <nav>
const mainEl = document.getElementsByTagName("main"); //selects <main> and saves it to "mainEl"
mainEl[0].insertAdjacentElement("afterbegin", navEl); //inserts <nav> after beginning of <main>

// const liEl = document.createElement('li');              //create <li> and saves it in "liEl"
// const aEl = document.createElement('a');                //create <a> and saves it in "aEl"
// const liAEl = liEl.appendChild(aEl);   //inserts <a> after beginning of <li>

const navBarUlId = document.getElementById("navBarUlId");

function createNavBar() {
  for (i = 0; i < navBar.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    if (navBar[i][2] instanceof Object) {
      li.setAttribute("class", "dropdown");
      a.setAttribute("class", "dropbtn");
    }
    a.setAttribute("href", navBar[i][1]);
    let linkName = document.createTextNode(navBar[i][0]);
    a.appendChild(linkName);
    li.appendChild(a);
    navBarUlId.appendChild(li);
    if (navBar[i][2] instanceof Object) {
      let div = document.createElement("div");
      div.setAttribute("class", "dropdown-content");
      for (z = 2; z < navBar[i].length; z += 2) {
        console.log(`z ${z}`);
        let aSubLink = document.createElement("a");
        console.log(aSubLink);
        aSubLink.setAttribute("href", navBar[i][z + 1]);
        let subLinkName = document.createTextNode(navBar[i][z]);
        aSubLink.appendChild(subLinkName);
        div.appendChild(aSubLink);
      }
      li.appendChild(div);
      console.log(navBar[i].length);
    }

    //   // console.log(navBarUlId);
    //   // let tempLiA = document.createElement('li');
    //   // console.log(tempLiA);
    //   navBarUlId.insertAdjacentElement('beforeend', liEl);
    //     let tempText = document.createTextNode(navBar[i][0]);
    //     document.getElementById('navBarUlId').firstChild.firstChild.textContent = "hello";
    //    // console.log(tempText);
    //   // navBarUlId.insertAdjacentElement('beforeend', liEl);
    // //   navBarUlId.lastChild(liEl);
    // //    console.log(liEl.firstChild);
    // //    liEl.firstChild.textContent = navBar[i][0];
    // //     console.log(`${navBar[i]}`);
    // }
  }
}

// start adding sideNavBar ///////////////////////////////////////////////////////////////////////////////

// document.body.onload = createSideBar;

// function createSideBar() {
//   const elementsH2 = document.getElementsByTagName("h2");
//   for (let i = 0; i < elementsH2.length; i++) {
//     let contentH2 = "";
//     contentH2 = elementsH2[i].innerHTML;
//     contentH2 = contentH2.replace(/^\s+|\s+$/gm, "");
//     contentH2 = contentH2.replace(" ", "_");
//     console.log(contentH2);
//   }
// }
