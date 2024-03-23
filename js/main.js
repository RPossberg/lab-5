console.log("main.js is connected!");
/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector("#video-game-form");
  let allGameList = document.querySelector(".all-games");
  let allGameListItems = document.querySelectorAll(".all-games li");
  let myGameList = document.querySelector(".my-favourite-games");
  let myGames = [];

  // event listener for step 1 - filter games
  videoGameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let platform = event.target.elements["platform-family"].value.toLowerCase();
    filterGames(platform);
  });

  // Create a function called filterGames that takes in a platform as an argument. This function should filter the games based on the platform and hide the games that do not match the platform.
  function filterGames(platform) {
    allGameListItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(platform)) {
        item.classList.remove("hidden-item");
      } else {
        item.classList.add("hidden-item");
      }
    });
  }

  // event listener for step 2 - add to favourites list
  allGameList.addEventListener("click", (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  // Function that takes in a game as an argument. This function should add the game to the myGames array and then call the addToFavouriteGames function. Within the event handler, call the function addToFavouriteGames and pass in the game that was clicked on.
  function addToFavouriteGames(game) {
    myGames.push(game);
    renderFavouriteList();
  }

  function renderFavouriteList() {
    myGameList.innerHTML = "";
    myGames.forEach((game) => {
      myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
  }

  // event listener for step 3
  myGameList.addEventListener("click", (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });

  function removeFromFavouriteGames(game) {
    let index = myGames.indexOf(game);
    if (index > -1) {
      myGames.splice(index, 1);
    }
    renderFavouriteList();
  }
})();
