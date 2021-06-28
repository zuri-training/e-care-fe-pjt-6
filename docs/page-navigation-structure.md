## page `Header` and `SideNav` structure

The header and side-nav structure for pages. as more pages are built their corresponding link will be properly included.

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
          viewBox="0 0 64 64"
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
          viewBox="0 0 64 64"
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

## Variations

add the neccesary classes where needed

### Transparent background

````html
<header class="header header--transparent header--absolute">```</header>
````

- `header--transparent` makes header background transparent.
- `header--absolute` allows content to flow under the header.
