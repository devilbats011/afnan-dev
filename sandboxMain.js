// import { setCube, cubeMoveHandler, circleMove,setBloodOrb,backBtn } from "./sandboxMotorMinifiy.js";
import { setCube, cubeMoveHandler, circleMove,setBloodOrb,backBtn } from "./sandboxMotor.js";

function main() {
  setCube();
  cubeMoveHandler();
  circleMove();
  setBloodOrb();
  backBtn();
}


function stopPropagation(event) {
  event.stopPropagation();
}

main();
