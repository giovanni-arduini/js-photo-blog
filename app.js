axios
  .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => {
    const album = res.data;
    console.log(album);
  })
  .catch((err) => {
    console.log("Qualcosa è andato storto!");
  });
