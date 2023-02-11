// import { CubeClass } from "./sandboxUtil.js";
// import { debounce } from "./sandboxUtil";
// const cubeInstance = new CubeClass();

// const sectionCube = document.querySelector("#main__wrapper__cube");
let _elTimeOutId;
const cube = document.querySelector("#cube-1");
let isHeld = false;
let currentFace = null;
const backBtnEl = document.getElementById("back");
const themeNameSpanEl = document.getElementById('theme-name-id');
let themeName = "";
const themeNamesArray = ["Blood Upon The Snow", "Midnight Snow"];

export function backBtn() {
  backBtnEl.addEventListener("click", (e) => {
    // backBtnEl.classList.add('hidden');
    glowBtnBehaviour(e.target);
    removeAllSectionFaces();
  });
}

function addSectionBlood(sect) {
  sect.style.pointerEvents = "auto";
  sect.style.display = "block";
  sect.style.opacity = 1;
  // console.log(sect.style.opacity);
  // toggleSection(sect);
}

function removeSectionBlood(sect) {
  setBloodSection(sect);
  // sect.classList.add("h-0", "opacity-0", "overflow-hidden");
  // sect.classList.remove("opacity-1", "h-auto");
}

function toggleSectionCube(face) {
  // sectionCube.classList.add("");
  const sect = document.querySelector(`#${face.dataset.sectionId}`);
  toggleSection(sect);
  // addSection(sect);

  // addSectionBlood(sect);
}

function showSectionCube(face) {
  // sectionCube.classList.remove("fixed", "z-0", "fixed__center");
  const sect = document.querySelector(`#${face.dataset.sectionId}`);

  // toggleSection(sect);
  removeSectionBlood(sect);
}

function toggleSection(sect) {
  // sect.style.position = sect.style.position == "absolute" ? "relative" : "absolute";
  sect.style.pointerEvents =
    sect.style.pointerEvents == "none" ? "auto" : "none";
  sect.style.display = sect.style.display == "none" ? "block" : "none";
  setTimeout(() => {
    sect.style.opacity = sect.style.opacity == "0" ? "1" : "0";
  }, 250);
  // sect.classList.toggle('fixed__center');
}

function addSection(sect) {
  // sect.style.position = "relative";
  sect.style.display = "none";
  sect.style.opacity = 1;
  sect.style.pointerEvents = "auto";
  // sect.classList.toggle('fixed__center');
}

function setBloodSection(sect, option = {}) {
  sect.style.pointerEvents = sect.style.pointerEvents = "none";
  sect.style.opacity = sect.style.opacity = 0;
  if (option.immediate) {
    sect.style.display = "none";
    return;
  }

  setTimeout(() => {
    sect.style.display = "none";
  }, 500);
  // sect.classList.add('fixed__center');
}

function getBloodSectionWithDataFace(id) {
  const sect = document.getElementById(id);
  return sect;
}

//* the flying dragonite
export function setBloodOrb() {
  const ulMenu = document.querySelector("#circle__ul__menu");

  ["circle__container", "circle__menubox"].forEach((id) => {
    const el = document.getElementById(id);
    //* click for menu
    el.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  Array.from(ulMenu.children).forEach((li) => {
    li.addEventListener("click", (e) => {
      e.stopPropagation();

      const faceId = e.target.parentNode.dataset.faceId;
      if (
        e.target.id == "circle__rolldice" ||
        faceId === "" ||
        faceId === false
      ) {
        // console.log('%csandboxMotor.js line:100 ', 'color: #007acc;', );
        removeAllSectionFaces();
        // return;
      }
      // console.log('%c faceId','color: orange',faceId);
      if (faceId)
        sectionCubeFacesToggleHandler(document.getElementById(faceId));

      const sectionId = e.target.parentNode.dataset.sectionId;
      cubeRotateBasedOnSectId(sectionId);
    });
  });
}

function cubeRotateBasedOnSectId(_sectId) {
  switch (_sectId) {
    case "blood__1": //* Profile
      cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
      break;
    case "blood__2": //* Music
      cube.style.transform = `rotateX(360deg) rotateY(180deg)`;
      break;
    case "blood__3": //* Contact
      cube.style.transform = `rotateX(-90deg) rotateY(0deg)`;
      break;
    case "blood__4": //* Portfolio
      cube.style.transform = `rotateX(90deg) rotateY(0deg)`;
      break;
    case "blood__5": //* Github
      cube.style.transform = `rotateX(0deg) rotateY(90deg)`;
      break;
    case "blood__6": //* Theme
      cube.style.transform = `rotateX(-360deg) rotateY(270deg)`;
      break;

    default:
      // toggleSection(document.querySelector("#circle__menubox"));
      cube.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${
        Math.random() * 360
      }deg) rotateZ(${Math.random() * 360}deg)`;
      break;
  }
}

function sectionCubeFacesToggleHandler(face) {
  forFaces((_face) => {
    //!  =! will change the dataset value ,wtd!! better use getAttribute
    if (_face.dataset.sectionId == face.dataset.sectionId) {
      toggleSectionCube(face);
    } else {
      setBloodSection(getBloodSectionWithDataFace(_face.dataset.sectionId), {
        immediate: true,
      });
    }
    // backBtnEl.classList.add('hidden');
  });
  glowBtnBehaviour(face);
}

function glowBtnBehaviour(_el) {
  clearTimeout(_elTimeOutId);
  _el.classList.add("strong-glow");
  // face.style.boxShadow = "0px 0px 105px 45px rgba(255, 255, 255, 0.9)";
  _elTimeOutId = setTimeout(() => {
    _el.classList.remove("strong-glow");
    // face.style.boxShadow = `0px 0px 105px 45px rgba(255, 255, 255, ${index})`;
  }, 1000);
}

function openFaceCube(arg= {
  faceId:'',
  sectionId:''
}) {
 sectionCubeFacesToggleHandler(document.getElementById(arg.faceId));
 cubeRotateBasedOnSectId(arg.sectionId); 
}

export function setCube() {
  Array.from(cube.children).forEach((face) => {
    // * set BloodSection
    setBloodSection(getBloodSectionWithDataFace(face.dataset.sectionId));

    // face.style.background = "radial-gradient(#A51120,#96262B)";
    // face.style.border = "1px solid #FDFDFD";

    //* Event Click
    face.addEventListener("click", () => {
      currentFace = face;
      sectionCubeFacesToggleHandler(face);
    });
  });

  //* Start
  const options = document.getElementsByName("radio__options");

  for (var i = 0; i < options.length; i++) {
    const element = options[i];
    if (i === 0) {
      element.checked = true;
      themeName = themeNamesArray[i];
      themeNameSpanEl.innerText = element.value;
    }

    element.addEventListener("change", function (e) {
      themeNameSpanEl.innerText = e.target.value;

      switch (String(e.target.value).toLowerCase()) {
        case 'blood upon the snow':
          document.querySelector('#img__1').src = './assets/zeus.gif';
          document.querySelector('body').style.background = `linear-gradient(to bottom, #73b9d9, #1b789c, #1b789c, #137878)`; //? bloodupontheSnow theme
          break;
          case 'midnight snow':
          document.querySelector('#img__1').src = './assets/sf.gif';
          document.querySelector('body').style.background = `linear-gradient(to bottom,#000000, #0d0d0d, #1a1a1a, #262626)`;  //? midnight theme
          break;
      }
      
    });
  }

  setTimeout(() => {
    // document.querySelector('body').style.background = `linear-gradient(to bottom, #20B2AA, #3CB371, #2E8B57,#228B22 )`; forest theme
    // circle__music  circle__profile circle__contact circle__rolldice circle__theme circle__github
    const profileLiEl = document.querySelector("#circle__profile");
    // sectionCubeFacesToggleHandler(document.getElementById(profileLiEl.dataset.faceId));
    // cubeRotateBasedOnSectId(profileLiEl.dataset.sectionId);
    openFaceCube({sectionId: profileLiEl.dataset.sectionId, faceId:profileLiEl.dataset.faceId});
  }, 5100);
}

// set contact me contact__me
['contact__me','click__here'].forEach((_id)=> {
  document.getElementById(_id).addEventListener('click', (e)=> {
    const li = document.querySelector("#circle__contact");
    openFaceCube({sectionId: li.dataset.sectionId, faceId:li.dataset.faceId});   
  });

});

//  set music__id music
document.getElementById('music__id').addEventListener('click', (e)=> {
  const li = document.querySelector("#circle__music");
  openFaceCube({sectionId: li.dataset.sectionId, faceId:li.dataset.faceId});   
});

//  set theme__id theme
document.getElementById('theme__id').addEventListener('click', (e)=> {
  const li = document.querySelector("#circle__theme");
  openFaceCube({sectionId: li.dataset.sectionId, faceId:li.dataset.faceId});   
});


function rotateCubeOnMouse(e) {
  if (isHeld) {
    let x = e.clientX - (window.innerWidth / 2) * 0.15 * 1.25;
    let y = e.clientY - (window.innerWidth / 2) * 0.15 * 1.25; //pageY
    // x =  Math.cos(x);
    // y =  Math.sin(y);

    cube.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`; //`rotate3d(1,0,1,${-x}deg)`;
  }
}

let timeOutIsCalled = false;
let timeOutId = null;
let ableToMove = false;

export function cubeMoveHandler() {
  ["mousedown", "touchstart"].forEach((type) => {
    document.addEventListener(
      type,
      (e) => {
        isHeld = true;
        // Delay
        if (!ableToMove) {
          timeOutIsCalled = true;
          timeOutId = setTimeout(() => {
            ableToMove = true;
            timeOutIsCalled = false;
          }, 250);
        }
      },
      { passive: false }
    );
  });

  ["mousemove", "touchmove"].forEach((type) => {
    document.addEventListener(type, (e) => {
      if (isHeld && ableToMove) rotateCubeOnMouse(e);
    });
  });

  [
    "mouseup",
    "mouseleave",
    "pointerup",
    "dragover",
    "dragend",
    "touchend",
    "touchcancel",
  ].forEach((type) => {
    document.addEventListener(type, (e) => {
      isHeld = false;
      ableToMove = false;
      clearTimeout(timeOutId);
    }); //{passive:false}
  });
}

export function circleMove() {
  let circle = document.getElementById("circle");
  const dragonite = circle.querySelector("#circle__img");

  const c = document.querySelector("#circle");
  //* event click

  c.addEventListener("click", circleHandler);
  function circleHandler(e) {
    dragonite.classList.add("small__bounce");
    setTimeout(() => {
      dragonite.classList.remove("small__bounce");
    }, 260);
    e.stopPropagation();
    toggleSection(document.querySelector("#circle__menubox"));
  }

  function flyMove() {
    let moveX, moveY;

    if (
      screen.orientation.type.startsWith("landscape") &&
      window.innerHeight < 610
    ) {
      moveX = Math.floor(Math.random() * (170 - 100 + 1) + 100);
      moveY = 220;
      // console.log("Screen is in landscape mode",window.innerHeight);
    } else {
      moveX = Math.floor(Math.random() * (150 - 100 + 1) + 100);
      moveY = Math.floor(Math.random() * 180);

      // console.log("Screen is in portrait mode",window.innerHeight);
    }

    // return;
    // c.classList.add('bg-red-500');
    // c.style.background = "radial-gradient(#A51120,#96262B)";
    c.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  }
  setInterval(() => {
    flyMove();
  }, 1000 * 6);

  // document.addEventListener("mousemove", followMouse);
}

function removeAllSectionFaces() {
  forFaces((face) => {
    const id = face.dataset.sectionId;
    setBloodSection(getBloodSectionWithDataFace(id));
  });
}

function forFaces(callback) {
  Array.from(cube.children).forEach((face) => {
    callback(face);
    // pelik x ingat knp...
    // showSectionCube(currentFace);
    // showSectionCube(face);
  });
}
