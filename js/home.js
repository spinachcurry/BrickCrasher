/**대문
 * @function MainPage
 * @description 게임 대문짝 */
export const openHomePage = () => {
  document.addEventListener("keydown", pressSpaceEvent);
};
/**
 * @param {KeyboardEvent} event 
 */
const pressSpaceEvent = function(event){
  if(event.code === "Space") {
    console.log("유후");
  }
};

openHomePage();