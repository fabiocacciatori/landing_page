/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
var activeClassIndex = 0;
const sections = document.querySelectorAll("section");
var hideNav;
const head = document.getElementById("head");


function dynamicNav() {
  const list = document.getElementById("navbar__list");

  for (let i = 0; i < sections.length; i++) {
    let data = sections[i].getAttribute("data-nav");
    let idNav = sections[i].id; //get the id of the sections
    let newLi = document.createElement("li");
    /*  newLi.textContent="ciao"; */
    /*  newLi.setAttribute("id","nav"+i); */
    let anchor = document.createElement("a");
    if (i == activeClassIndex) {
      anchor.setAttribute("class", "your-active-class");
    }
    str1 = "#";
    anc = str1.concat(idNav);

    /* anchor.setAttribute("href", anc);*/

    anchor.textContent = data;

    newLi.appendChild(anchor);
    list.appendChild(newLi);
  }
}

/* function active(){

  let activeClass="your-active-class";
  anchor.setAttribute("class", activeClass);
} */

function addActiveClassParent(el) {
  let activeClass = "your-active-class";
  let parent = el.parentNode;
  parent.setAttribute("class", activeClass);
}

function removeActiveClassParent(el) {
  let activeClass = "your-active-class";
  let parent = el.parentNode;
  /*  console.log(parent.classList); */

  parent.classList.remove(activeClass);

  /* var attr = parent.getAttributeNode("class");
 parent.removeAttributeNode(attr); */
}

function addActiveClass(el) {
  let activeClass = "your-active-class";

  el.firstChild.setAttribute("class", activeClass);
}

function removeActiveClass(el) {
  let activeClass = "your-active-class";

  /*  console.log(parent.classList); */

  el.firstChild.classList.remove(activeClass);

  /* var attr = parent.getAttributeNode("class");
 parent.removeAttributeNode(attr); */
}

/* function isActiveClassInViev(){

  return();
} */

function updateActiveClass(li) {
  removeActiveClassParent(li[activeClassIndex]);
  removeActiveClass(navList[activeClassIndex]);
  for (let i = 0; i < li.length; i++) {
    if (isElementInViewport(li[i])) {
      addActiveClassParent(li[i]);
      activeClassIndex = i;
      addActiveClass(navList[activeClassIndex]);
      console.log(activeClassIndex);
      break; //I want only one active element
    }
  }
}

function updateActiveClassClick(li) {
  removeActiveClassParent(li[activeClassIndex]);
  removeActiveClass(navList[activeClassIndex]);
  for (let i = 0; i < li.length; i++) {
    if (isElementInViewport(li[i])) {
      addActiveClassParent(li[i]);
      activeClassIndex = i;
      addActiveClass(navList[activeClassIndex]);
   /*    console.log(activeClassIndex); */
      break; //I want only one active element
    }
  }
}

function updateActiveNavClass(li) {
  removeActiveClass(li[activeClassIndex]);

  addActiveClass(li[i]);

 /*  console.log(activeClassIndex); */
}

/* function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  console.log("t "+rect.top+" l "+rect.left+" b "+rect.bottom+" r "+rect.right);
 console.log("wh "+(window.innerHeight)+"wi "+window.innerWidth);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
} */

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

dynamicNav();
var containers = document.getElementsByClassName("landing__container");
/* var containers = document.getElementsByTagName("h2");
 */ var navList = document.getElementsByTagName("li");
 setTimeout(function () {
 /*  console.log(head); */
  head.classList.remove("display");
  head.classList.add("hide");
}, 5000);

/* console.log(navList);
console.log(containers);
console.log(containers[activeClassIndex]); */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
//  window.scrollTo(0, document.querySelector(ref).offsetTop);
// Set sections as active
// Add listeners
/* const scroll=document.getElementById('scroll');
scroll.addEventListener('click', function () {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById("section4").offsetTop});
}); */

for (let i = 0; i < sections.length; i++) {
  navList[i].addEventListener("click", function () {
    /* containers[i].style.cssText += ';-webkit-transform:rotateZ(0deg)'
    containers[i].offsetHeight
    containers[i].style.cssText += ';-webkit-transform:none' */

    myOffset = document.getElementById("section" + [i + 1]).offsetTop - 76;
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: myOffset,
    });

    setTimeout(function () {
      /*  alert("Hello"); */
     /*  console.log("active= " + i); */
      removeActiveClassParent(containers[activeClassIndex]);
      removeActiveClass(navList[activeClassIndex]);
      activeClassIndex = i;
      addActiveClassParent(containers[i]);
      addActiveClass(navList[activeClassIndex]);
    }, 700);
  });
}

/* const mainHeading = document.querySelector('h1');

  mainHeading.addEventListener('click', function () {
    /* console.log('The heading was clicked!'); 
  }); */

window.addEventListener("scroll", function (e) {
  /*  console.log("scroll"); */
  /*  console.log(isElementInViewport(section4)); */
  const scr = document.getElementById("fixFoot");

  head.classList.remove("hide");
  head.classList.remove("fade-out");
  head.classList.add("fade-in");
  setTimeout(function () {
    head.classList.add("display"); // I wait the finish of fade out to hide the nav
  }, 2000);

  clearTimeout(hideNav);

  console.log("sroll");
  /* console.log(isElementInViewport(containers[activeClassIndex])); */
  if (!isElementInViewport(containers[activeClassIndex])) {
    updateActiveClass(containers);
  }
/* (document.body.scr > 2000 || document.documentElement.scr > 2000) */
  if    (window.innerHeight + window.scrollY >= document.body.offsetHeight)  {
    console.log(window.innerHeight + window.scrollY >= document.body.offsetHeigh); 
  /*  console.log(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200); */
    scr.classList.remove("hide");
    scr.classList.add("fade-in");
    setTimeout(function () {
      scr.classList.add("display"); // I wait the finish of fade out to hide the nav
    }, 2000);
  }
  else{
    
    scr.classList.add("fade-out");
    scr.classList.remove("display");
    setTimeout(function () {
      scr.classList.add("hide"); // I wait the finish of fade out to hide the nav
     
    }, 2000);
  }
  

  hideNav = setTimeout(function () {
    head.classList.remove("display");
    head.classList.remove("fade-in");
    head.classList.add("fade-out");
    setTimeout(function () {
      head.classList.add("hide"); // I wait the finish of fade out to hide the nav
    }, 2000);
  }, 4000);
});

/* const scrImg = document.getElementById("topImg");
 */const scr = document.getElementById("fixFoot");
 console.log(scr);

scr.addEventListener("click", function (e) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


visualViewport.addEventListener("resize", update);

let pendingUpdate = false;

function update() {
  /* console.log("inner height "+window.innerHeight);
  console.log("client height "+document. documentElement.clientHeight); */
  /*  console.log(isElementInViewport(section4)); */
  // If we're already going to handle an update, return
  if (pendingUpdate) return;

  pendingUpdate = true;

  // Use requestAnimationFrame so the update happens before next render
  requestAnimationFrame(() => {
    pendingUpdate = false;

    // Handle update here
  });
}
