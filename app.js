const rowElement = document.getElementById("row");

function photosFromAlbum() {
  axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
      const album = res.data;
      console.log(album);

      album.forEach((photoElement) => {
        const { title, url } = photoElement;
        rowElement.innerHTML += `<div class="col my-5">
            <div class="card mx-auto rounded-0" style="width: 18rem">
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
            </div>
          </div>`;
      });
    })
    .catch((err) => {
      console.log("Qualcosa è andato storto!");
    });
}

photosFromAlbum();
