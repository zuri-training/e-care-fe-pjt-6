import axios from "axios";

const KEYWORD_SEARCH_URL =
  "https://e-care-be-api.herokuapp.com/api/v1/user/search/";

/* 
{
    "keywords":[
        "Owerri"
    ]

    if 200
        produces an array of  hospitals maching keywords
    
}
*/
const searchBar = document.querySelector(".dirSearchBar");
const resultBody = document.querySelector(".dirResultBody");
const searchBtn = document.querySelector(".searchBtn");

function outputTemplate(result) {
  let el = document.createElement("div");
  el.innerHTML = `
        <div class="dir__contact">
            <div class="dir__contact-body">
              <div class="contact-body__details">
                <div class="details__personal">
                  <h5 class="name">${result.name}</h5>
                  <div class="username">@${result.user.username}</div>
                </div>
                <div class="details__profession">
                  <div class="title">${result.specialty}</div>
                  <div class="hospital">${result.city}, ${result.lga}</div>
                </div>
                <div class="details__contact">
                  <div class="email">${result.user.email}</div>
                </div>
              </div>
              <div class="contact-body__btn-wrapper">
                <a href="" class="contact-body__btn">
                  <span class="btn__text">mail</span>
                </a>
                <a href="" class="contact-body__btn">
                  <span class="btn__text">view profile</span>
                </a>
              </div>
            </div>
          </div>
    `;
  return el;
}

function renderResult(data) {
  if (resultBody) {
    resultBody.appendChild(outputTemplate(data));
  }
}

export function DirectoryLogic() {
  let keywords = [];

  if (searchBar) {
    searchBar.addEventListener("change", (e) => {
      let str = searchBar.value;
      let strArr = str.split(/ /g);
      keywords = [...strArr];
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchBtn.textContent = "Searching...";
      axios({
        method: "post",
        url: KEYWORD_SEARCH_URL,
        data: {
          keywords: keywords,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            console.log(res);
            searchBtn.textContent = "Search";
            let hospitals = res.data.hospitals;
            let healthofficers = res.data.health_officers;
            if (hospitals != [] && hospitals) {
              for (let hs of hospitals) {
                renderResult(hs);
              }
            } else {
              if (resultBody) {
                resultBody.appendChild("<h1>No Results!</h1>");
              }
            }
            if (healthofficers != [] && healthofficers) {
              for (let ho of healthofficers) {
                renderResult(ho);
              }
            } else {
              if (resultBody) {
                resultBody.appendChild("<h1>No Results!</h1>");
              }
            }
          } else {
            console.log(res);
            alert(res.statusText);
            searchBtn.textContent = "Search";
          }
        })
        .catch((err) => {
          alert(err);
          searchBtn.textContent = "Search";
        });
    });
  }
}
