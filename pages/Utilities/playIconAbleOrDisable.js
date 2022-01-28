//Makes the list of movies that have to do with the movie you are watching appear or disappear
export const playIconAbleOrDisable = (element, index) => {
  let playIcon = document.getElementById(`episode-play-icon-${index}`);

  if (element === "able") {
    playIcon.classList.add("inline-block");
    playIcon.classList.remove("hidden");
  } else if (element === "disable") {
    playIcon.classList.remove("inline-block");
    playIcon.classList.add("hidden");
  }
};
