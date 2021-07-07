# Base Structure For Pages

This is the base structure for any new page that is to be created

```html
<!DOCTYPE html>
<html lang="en">
  <!-- Include The Head here -->
  <head>
    ...
  </head>
  <body>
    <!-- The navigation comes after -->
    <div class="site-navigation">...</div>
    <!-- The content for that particular page follows -->
    <!-- The footer is always at the end -->
    <footer>...</footer>
    <!-- scripts are always at the bottom -->
    <script src="./js/index.js"></script>
  </body>
</html>
```

<!-- TODO UPdate links -->

[The structure for `<head>...</head>`](docs\page-head-structure.md) <br>
[The structure for `<footer>...</footer>`](docs\page-footer-structure.md) <br>
[The structure for `navigation`](docs\page-navigation-structure.md) <br>

## The structure for `<head>`

Below is the base configuration that is to be used for all `<head>`
whenever you're creating a new page.
Replace the content in the `{}` and remove all comments where neccessary

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="author" content="" />
  <meta name="description" content="%{a-description-for-the page}%" />
  <meta name="Copyright" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="favicon.ico" />
  <!-- Page Title-- put the appropriate name for the page -->
  <title>E-care - %{current-page-title}%</title>
  <!-- Link to google font- with all the neccessary font weight -->
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
  <!-- 
    The index.css file should always be included followed by the css file for that page.
    once we have a build system running soon you won't need to worry about this 
   -->
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/%{page-stylesheet}%" />
</head>
```

### Guidelines

- No `<script>` tags in the head. it causes performance issues
- Always include a decription in the `<meta name="description" content="%{a-description-for-the page}%" />` file. Its important for SEO

## The structure for `<header>` and `side-nav`

The header and side-nav structure for pages. as more pages are built their corresponding link will be properly included.

_The header and side-nav are both contained inside the `<div class="site-navigation">...</div>`_

**note**: _stable_ - this does not change often

```html
<div class="site-navigation">
  <header class="header">
    <div class="wrapper">
      <div class="logo"></div>
      <nav class="nav">
        <ul class="nav__item-wrapper">
          <li class="nav__item">
            <a href="../index.html" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Directory</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Doctor</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Hospitals</a>
          </li>
        </ul>
      </nav>
      <div class="header__btn-wrapper">
        <a href="#" class="btn btn-primary">Login</a>
        <a href="#" class="btn btn-secondary">Sign Up</a>
      </div>
      <div id="menuBtn" class="menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enable-background="new 0 0 64 64"
          version="1.1"
          xml:space="preserve"
          class="menu-btn__icon open"
        >
          <path
            d="M61.3 29.3H2.7C1.1 29.3 0 30.4 0 32c0 1.6 1.1 2.7 2.7 2.7h58.7c1.6 0 2.7-1.1 2.7-2.7C64 30.4 62.9 29.3 61.3 29.3zM61.3 48H2.7C1.1 48 0 49.1 0 50.7c0 1.6 1.1 2.7 2.7 2.7h58.7c1.6 0 2.7-1.1 2.7-2.7C64 49.1 62.9 48 61.3 48zM2.7 16h58.7c1.6 0 2.7-1.1 2.7-2.7s-1.1-2.7-2.7-2.7H2.7c-1.6 0-2.7 1.1-2.7 2.7S1.1 16 2.7 16z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enable-background="new 0 0 64 64"
          version="1.1"
          xml:space="preserve"
          class="menu-btn__icon close"
        >
          <path
            d="M35.4,32l19.9-19.9c1-1,1-2.4,0-3.4s-2.4-1-3.4,0L32,28.6L12,8.8c-0.9-1-2.4-1-3.3,0s-1,2.4,0,3.4L28.6,32L8.7,51.9	c-1,1-1,2.4,0,3.4c0.5,0.4,1,0.7,1.7,0.7s1.2-0.2,1.7-0.7l20-19.9l20,19.8c0.5,0.4,1.2,0.7,1.7,0.7c0.5,0,1.2-0.2,1.7-0.7	c1-1,1-2.4,0-3.4L35.4,32z"
          />
        </svg>
      </div>
    </div>
  </header>
  <nav class="side-nav" id="sideNav">
    <div class="side-nav__content">
      <a href="./index.html" class="side-nav__link">Home</a
      ><a href="#" class="side-nav__link">Directory</a
      ><a href="#" class="side-nav__link">Doctors</a
      ><a href="#" class="side-nav__link">Hospitals</a
      ><a href="#" class="side-nav__link">Sign Up</a
      ><a href="#" class="side-nav__link">Login</a>
    </div>
  </nav>
</div>
```

### Variations

add the neccesary classes where needed

##### Transparent background

````html
<header class="header header--transparent header--absolute">```</header>
````

- `header--transparent` - makes header background transparent.
- `header--absolute` - allows content to flow under the header.

## The structure for `<footer>`

The footer structure for pages. as more pages are built their corresponding link will be properly included.

**note**: _volatile_ - this component is still subject to change

```html
<footer class="footer">
  <div class="wrapper">
    <form class="footer__subscription">
      <input type="text" class="footer__input" placeholder="Enter your email" />
      <input type="submit" class="footer__input-btn" value="Sign Up" />
    </form>
    <div class="footer__menu">
      <h5 class="footer__menu-header">Patients</h5>
      <a href="#" class="footer__menu-link">Log In</a>
      <a href="#" class="footer__menu-link">Medical Records</a>
      <a href="#" class="footer__menu-link">Prescription</a>
      <a href="#" class="footer__menu-link">Quality Report</a>
    </div>
    <div class="footer__menu">
      <h5 class="footer__menu-header">Doctors</h5>
      <a href="#" class="footer__menu-link">Log In</a>
      <a href="#" class="footer__menu-link">Promote your practice</a>
      <a href="#" class="footer__menu-link">Patients</a>
      <a href="#" class="footer__menu-link">Update Profile</a>
      <a href="#" class="footer__menu-link">Help Center</a>
    </div>
    <div class="footer__menu">
      <h5 class="footer__menu-header">Hospitals</h5>
      <a href="#" class="footer__menu-link">Log In</a>
      <a href="#" class="footer__menu-link">Health System</a>
      <a href="#" class="footer__menu-link">Doctors</a>
      <a href="#" class="footer__menu-link">Patients</a>
      <a href="#" class="footer__menu-link">Help Centre</a>
    </div>
    <div class="footer__menu">
      <h5 class="footer__menu-header">E-Care</h5>
      <a href="./about.html" class="footer__menu-link">About Us</a>
      <a href="#" class="footer__menu-link">Contact Us</a>
      <a href="#" class="footer__menu-link">Blog</a>
      <a href="#" class="footer__menu-link">FAQS</a>
    </div>
    <div class="footer__social">
      <div class="social-icon">
        <img src="./assets/icons/fe_youtube.png" alt="youtube" />
      </div>
      <div class="social-icon">
        <img src="./assets/icons/bx_bxl-facebook.png" alt="facebook" />
      </div>
      <div class="social-icon">
        <img src="./assets/icons/eva_twitter-fill.png" alt="twitter" />
      </div>
      <div class="social-icon">
        <img src="./assets/icons/bx_bxl-instagram.png" alt="instagram" />
      </div>
    </div>
  </div>
</footer>
```
