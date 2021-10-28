//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}


function makePageForEpisodes(episodeList) {

 episodeList.forEach((episode) => {

    //title to card 
    document.getElementById("h4").innerHTML ="is this working?";
    

  //   const rootElem = document.getElementById("root");
  //   //card.appendChild(rootElem);

  //   const season = document.createElement("h4");
  //   season.setAttribute("class", "season");
  //   season.innerHTML = `${episode.season
  //     .toString()
  //     .padStart(2, "0")}: ${episode.number.toString().padStart(2, "0")}`;
  //   card.appendChild(season);

  //   //episode image append to card ---

  //   const image = document.createElement("img");
  //   image.setAttribute("class", "image"); //?? change class name as too confusing
  //   image.src = episode.image.medium;
  //   card.appendChild(image);

  //   //summary append to card
  //   const paragraph = document.createElement("p");
  //   paragraph.setAttribute("class", "paragraph");
  //   paragraph.innerHTML = episode.summary;
  //   card.appendChild(paragraph);
  // });
}



  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;











window.onload = setup;
