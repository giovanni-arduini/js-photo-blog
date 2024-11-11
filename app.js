// SELECTORS
const body = document.querySelector("body");
const rowElement = document.getElementById("row");
const albumCards = [];
const overlayElement = document.querySelector(".overlay");
const overlayButton = document.querySelector(".overlay .button");
const overlayImg = document.querySelector(".overlay img");

// EVENT LISTENERS
overlayButton.addEventListener("click", () => {
  closeOverlay();
});

overlayElement.addEventListener("click", (event) => {
  // console.dir(event.target);
  if (event.target.tagName !== "IMG") {
    closeOverlay();
  }
});

// FUNCTIONS
function closeOverlay() {
  overlayElement.classList.add("d-none");
  body.classList.remove("no-scroll");
}

function photosFromAlbum() {
  axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
      const album = res.data;
      // console.log(album);

      album.forEach((photoElement) => {
        const { title, url } = photoElement;

        const newCol = document.createElement("div");
        newCol.classList.add("col-4");
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML += `
               <div class="pin">
                 <img src="./img/pin.svg" alt="" />
               </div>
               <img
                 src="${url}"
                 class="card-img-top"
                 alt="..."
               />
               <div class="card-body">
                 <p class="card-text">
                   ${title}
                 </p>
               </div>
            `;

        rowElement.appendChild(newCol);
        newCol.appendChild(newCard);

        const overlayImg = document.querySelector(".overlay img");

        newCard.addEventListener("click", (event) => {
          console.log(event);
          overlayElement.classList.toggle("d-none");
          overlayImg.src = url;
          body.classList.toggle("no-scroll");
        });
      });
    })
    .catch((err) => {
      console.log("Qualcosa è andato storto!");
    });
}

photosFromAlbum();
