const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo

// Nav bar >>>>>>
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav links >>>>>
let nav1 = document.querySelector("nav a:nth-of-type(1)");
nav1.textContent = siteContent["nav"]["nav-item-1"];

let nav2 = document.querySelector("nav a:nth-of-type(2)");
nav2.textContent = siteContent["nav"]["nav-item-2"];

let nav3 = document.querySelector("nav a:nth-of-type(3)");
nav3.textContent = siteContent["nav"]["nav-item-3"];

let nav4 = document.querySelector("nav a:nth-of-type(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"];

let nav5 = document.querySelector("nav a:nth-of-type(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"];

let nav6 = document.querySelector("nav a:nth-of-type(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"];

// CTA section content
let theH1 = document.querySelector("h1");
theH1.textContent = siteContent.cta.h1;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// MAIN CONTENT>>>>>>>>>>>>>

//Features

let featuresH4 = document.querySelector(
  ".top-content .text-content:nth-of-type(1) h4"
);
let featuresP = document.querySelector(
  ".top-content .text-content:nth-of-type(1) p"
);
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresP.textContent = siteContent["main-content"]["features-content"];

// About
let aboutH4 = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
let aboutP = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);

aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];

// Services
let servicesH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
let servicesP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);

servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesP.textContent = siteContent["main-content"]["services-content"];

// Product
let productH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
let productP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);

productH4.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];

// Vision
let visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
let visionP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);

visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionP.textContent = siteContent["main-content"]["vision-content"];

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact

let contactH4 = document.querySelector(".contact h4");
let addressP = document.querySelector(".contact p:nth-of-type(1)");
let phoneP = document.querySelector(".contact p:nth-of-type(2)");
let emailP = document.querySelector(".contact p:nth-of-type(3)");

contactH4.textContent = siteContent["contact"]["contact-h4"];
addressP.textContent = siteContent["contact"]["address"];
phoneP.textContent = siteContent["contact"]["phone"];
emailP.textContent = siteContent["contact"]["email"];
