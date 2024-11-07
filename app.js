const rowElement = document.getElementById("row");
const albumCards = [];

const overlayElement = document.querySelector(".overlay");
const overlayButton = document.querySelector(".overlay button");

// const row = document.getElementById("row");
// const newCol = document.createElement("div");
// const newCard = document.createElement("div");
// newCard.classList.add("card", "mx-auto", "rounded-0");
// const cardImg = document.createElement("img");
// cardImg.classList.add("card-img-top");
// cardImg.src = "https://picsum.photos/200/300";
// const cardBody = document.createElement("div");
// cardBody.classList.add("card-body");
// const cardText = document.createElement("p");
// cardText.classList.add("card-text");
// cardText.innerHTML = `OVOLOLLO`;

// rowElement.appendChild(newCol);
// newCol.appendChild(newCard);
// newCard.appendChild(cardImg);
// cardBody.appendChild(cardText);
// newCard.appendChild(cardBody);

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
        newCard.classList.add("card", "mx-auto", "rounded-0");
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = "https://picsum.photos/200/300";
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = `OVOLOLLO`;

        rowElement.appendChild(newCol);
        newCol.appendChild(newCard);
        newCard.appendChild(cardImg);
        cardBody.appendChild(cardText);
        newCard.appendChild(cardBody);
      });
    })
    .catch((err) => {
      console.log("Qualcosa è andato storto!");
    });
}

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
});
