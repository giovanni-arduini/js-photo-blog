const body = document.querySelector("body");
const rowElement = document.getElementById("row");
const albumCards = [];
const overlayElement = document.querySelector(".overlay");
const overlayButton = document.querySelector(".overlay button");

function photosFromAlbum() {
  axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
      const album = res.data;
      console.log(album);

      album.forEach((photoElement) => {
        const { title, url } = photoElement;
        const newCol = document.createElement("div");
        const newCard = document.createElement("div");
        newCard.classList.add("card", "mx-auto", "rounded-0", "mt-4");
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = `${url}`;
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = `${title}`;

        rowElement.appendChild(newCol);
        newCol.appendChild(newCard);
        newCard.appendChild(cardImg);
        cardBody.appendChild(cardText);
        newCard.appendChild(cardBody);

        const overlayImg = document.querySelector(".overlay img");

        newCard.addEventListener("click", () => {
          overlayElement.classList.remove("d-none");
          overlayImg.src = url;
          body.classList.toggle("no-scroll");
        });
      });
    })
    .catch((err) => {
      console.log("Qualcosa è andato storto!");
    });
}

// VECCHIA FUNCTION CON TEMPLATE LITERAL
// function photosFromAlbum() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
//     .then((res) => {
//       const album = res.data;
//       console.log(album);

//       album.forEach((photoElement) => {
//         const { title, url } = photoElement;
//         rowElement.innerHTML += `<div class="col my-5">
//             <div class="card mx-auto rounded-0" style="width: 18rem">
//               <div class="pin">
//                 <img src="./img/pin.svg" alt="" />
//               </div>
//               <img
//                 src="${url}"
//                 class="card-img-top"
//                 alt="..."
//               />
//               <div class="card-body">
//                 <p class="card-text">
//                   ${title}
//                 </p>
//               </div>
//             </div>
//           </div>`;
//       });
//     })
//     .catch((err) => {
//       console.log("Qualcosa è andato storto!");
//     });
// }

photosFromAlbum();

overlayButton.addEventListener("click", () => {
  overlayElement.classList.add("d-none");
  body.classList.toggle("no-scroll");
});

// cards.addEventListener("click", () => {
//   overlayElement.classList.remove("d-none");
// });
