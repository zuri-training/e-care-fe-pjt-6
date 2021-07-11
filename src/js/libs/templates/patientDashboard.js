function PatientDashboard() {
  return `
    <main class="main">
      <div class="profile">
        <div class="logo">
          <img src="./assets/Image/dashboard-page-img-10.svg" alt="logo" />
        </div>
        <h4>PROFILE</h4>
        <div class="profile__links">
          <h6><a href="#">Record</a></h6>
        </div>
        <h6 class="profile__links__dash"><a href="#">Dashboard</a></h6>
        <div class="profile__links">
          <h6><a href="#">Doctors</a></h6>
          <h6><a href="#">Hospital</a></h6>
          <h6><a href="#">Directory</a></h6>
        </div>
        <h4>HELP</h4>
        <div class="profile__links">
          <h6><a href="./contact.html">Contact</a></h6>
          <h6><a href="#">About</a></h6>
          <h6><a href="#">Report</a></h6>
        </div>
      </div>
      <div class="details">
        <div class="details__header">
          <div class="details__header__wrapper">
            <div class="details__header__wrapper__left">
              <h6>Your profile</h6>
              <img src="./assets/Image/dashboard-page-img-08.svg" alt="arrow" />
              <h6><a href="#">Dashboard</a></h6>
            </div>
            <div class="details__header__wrapper__right">
              <img
                src=""
                alt="picture"
                class="img__profile dsh-imgProfile"
              />
              <h6 class="dsh-profileName"></h6>
              <img
                src="./assets/Image/dashboard-page-img-09.svg"
                alt="notification"
                class="notification"
              />
              <img
                src="./assets/Image/dashboard-page-img-06.svg"
                alt="setting"
                class="settings"
              />
            </div>
          </div>
        </div>
        <div class="details__detail">
          <h4>
            <span class="color__blue"> Hi <span class="dsh-profileName"></span>, </span> your dashboard is all
            set
          </h4>
          <div class="details__detail__wrapper">
            <div class="overview">
              <div class="overview__details">
                <img
                  src=""
                  alt="profile picture"
                  class="dsh-imgProfile"
                />
                <div class="email__name__edit">
                  <div class="email__name">
                    <h4 class="dsh-fullName"></h4>
                    <div class="email">
                      <p class="dsh-userEmail"></p>
                      <p class="para dsh-phoneNo"></p>
                      <p class="para dsh-DOB"></p>
                    </div>
                  </div>
                  <button class="btn">Edit</button>
                </div>
              </div>
              <div class="info">
                <div class="address">
                  <h5>ADDRESS</h5>
                  <p class="dsh-address"></p>
                </div>
                <div class="city">
                  <h5>CITY</h5>
                  <p class="dsh-city"></p>
                </div>
                <div class="state">
                  <h5>STATE</h5>
                  <p class="dsh-state"></p>
                </div>
                <div class="next__of__kin">
                  <h5>NEXT OF KIN</h5>
                  <p class="dsh-nextOfKin"></p>
                </div>
              </div>

              <div class="section">
                <h5 class="blue">Overview</h5>
                <h5>Appointments</h5>
                <h5>Visitations</h5>
                <h5>Medication</h5>
              </div>
            </div>

            <!-- the cards with the data doctors etc -->
            <div class="cards">
              <div class="data">
                <h5>Data</h5>
                <div class="blood__groups">
                  <img
                    src="./assets/Image/dashboard-page-img-07.svg"
                    alt="checkbox"
                  />
                  <div class="group">
                    <h6>Blood Group:</h6>
                    <h6>AB</h6>
                  </div>
                </div>
                <div class="blood__groups">
                  <img
                    src="./assets/Image/dashboard-page-img-07.svg"
                    alt="checkbox"
                  />
                  <div class="group">
                    <h6>RHD</h6>
                    <h6>+(positive)</h6>
                  </div>
                </div>
                <div class="blood__groups">
                  <img
                    src="./assets/Image/dashboard-page-img-07.svg"
                    alt="checkbox"
                  />
                  <div class="group">
                    <h6>Genotype</h6>
                    <h6>AA</h6>
                  </div>
                </div>
              </div>
              <div class="report">
                <h5>Report</h5>
                <div class="report__types">
                  <img
                    src="./assets/Image/dashboard-page-img-05.svg"
                    alt="pdf icon"
                  />
                  <h6>Blood report</h6>
                </div>
                <div class="report__types">
                  <img
                    src="./assets/Image/dashboard-page-img-05.svg"
                    alt="pdf icon"
                  />
                  <h6>Diabetes report</h6>
                </div>
                <div class="report__types">
                  <img
                    src="./assets/Image/dashboard-page-img-05.svg"
                    alt="pdf icon"
                  />
                  <h6>Corona virus report</h6>
                </div>
              </div>
              <div class="doctors">
                <h5>Doctors</h5>
                <div class="doctors__name">
                  <img
                    src="./assets/Image/dashboard-page-img-03.svg"
                    alt="doctor picture"
                  />
                  <div class="name__field">
                    <h6>Dr. Uche Femi, MD</h6>
                    <p>Gynecologist</p>
                  </div>
                </div>
                <div class="doctors__name">
                  <img
                    src="./assets/Image/dashboard-page-img-02.svg"
                    alt="doctor picture"
                  />
                  <div class="name__field">
                    <h6>Dr. Fikayo Ahmed</h6>
                    <p>Dietician</p>
                  </div>
                </div>
              </div>
              <div class="hospitals">
                <h5>Hospital</h5>

                <div class="img__name">
                  <img src="./assets/Image/dashboard-page-img-04.svg" alt="" />

                  <div class="hospital__name">
                    <h6>St. Patrick’s Hospital</h6>
                    <p>West Chicago, Illinois(IL)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    `;
}
