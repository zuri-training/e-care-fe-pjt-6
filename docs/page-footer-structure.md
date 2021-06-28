## page `Footer` structure

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
      <a href="./pages/about.html" class="footer__menu-link">About Us</a>
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
