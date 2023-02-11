let _elTimeOutId,cube=document.querySelector("#cube-1"),isHeld=!1,currentFace=null,backBtnEl=document.getElementById("back"),themeNameSpanEl=document.getElementById("theme-name-id"),themeName="",themeNamesArray=["Blood Upon The Snow","Midnight Snow"];export function backBtn(){backBtnEl.addEventListener("click",e=>{glowBtnBehaviour(e.target),removeAllSectionFaces()})}function addSectionBlood(e){e.style.pointerEvents="auto",e.style.display="block",e.style.opacity=1}function removeSectionBlood(e){setBloodSection(e)}function toggleSectionCube(e){let t=document.querySelector(`#${e.dataset.sectionId}`);toggleSection(t)}function showSectionCube(e){let t=document.querySelector(`#${e.dataset.sectionId}`);removeSectionBlood(t)}function toggleSection(e){e.style.pointerEvents="none"==e.style.pointerEvents?"auto":"none",e.style.display="none"==e.style.display?"block":"none",setTimeout(()=>{e.style.opacity="0"==e.style.opacity?"1":"0"},250)}function addSection(e){e.style.display="none",e.style.opacity=1,e.style.pointerEvents="auto"}function setBloodSection(e,t={}){if(e.style.pointerEvents=e.style.pointerEvents="none",e.style.opacity=e.style.opacity=0,t.immediate){e.style.display="none";return}setTimeout(()=>{e.style.display="none"},500)}function getBloodSectionWithDataFace(e){let t=document.getElementById(e);return t}export function setBloodOrb(){let e=document.querySelector("#circle__ul__menu");["circle__container","circle__menubox"].forEach(e=>{let t=document.getElementById(e);t.addEventListener("click",e=>{e.stopPropagation()})}),Array.from(e.children).forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation();let t=e.target.parentNode.dataset.faceId;("circle__rolldice"==e.target.id||""===t||!1===t)&&removeAllSectionFaces(),t&&sectionCubeFacesToggleHandler(document.getElementById(t));let o=e.target.parentNode.dataset.sectionId;cubeRotateBasedOnSectId(o)})})}function cubeRotateBasedOnSectId(e){switch(e){case"blood__1":cube.style.transform="rotateX(0deg) rotateY(0deg)";break;case"blood__2":cube.style.transform="rotateX(360deg) rotateY(180deg)";break;case"blood__3":cube.style.transform="rotateX(-90deg) rotateY(0deg)";break;case"blood__4":cube.style.transform="rotateX(90deg) rotateY(0deg)";break;case"blood__5":cube.style.transform="rotateX(0deg) rotateY(90deg)";break;case"blood__6":cube.style.transform="rotateX(-360deg) rotateY(270deg)";break;default:cube.style.transform=`rotateX(${360*Math.random()}deg) rotateY(${360*Math.random()}deg) rotateZ(${360*Math.random()}deg)`}}function sectionCubeFacesToggleHandler(e){forFaces(t=>{t.dataset.sectionId==e.dataset.sectionId?toggleSectionCube(e):setBloodSection(getBloodSectionWithDataFace(t.dataset.sectionId),{immediate:!0})}),glowBtnBehaviour(e)}function glowBtnBehaviour(e){clearTimeout(_elTimeOutId),e.classList.add("strong-glow"),_elTimeOutId=setTimeout(()=>{e.classList.remove("strong-glow")},1e3)}function openFaceCube(e={faceId:"",sectionId:""}){sectionCubeFacesToggleHandler(document.getElementById(e.faceId)),cubeRotateBasedOnSectId(e.sectionId)}export function setCube(){Array.from(cube.children).forEach(e=>{setBloodSection(getBloodSectionWithDataFace(e.dataset.sectionId)),e.addEventListener("click",()=>{currentFace=e,sectionCubeFacesToggleHandler(e)})});let e=document.getElementsByName("radio__options");for(var t=0;t<e.length;t++){let o=e[t];0===t&&(o.checked=!0,themeName=themeNamesArray[t],themeNameSpanEl.innerText=o.value),o.addEventListener("change",function(e){switch(themeNameSpanEl.innerText=e.target.value,String(e.target.value).toLowerCase()){case"blood upon the snow":document.querySelector("#img__1").src="./assets/zeus.gif",document.querySelector("body").style.background="linear-gradient(to bottom, #73b9d9, #1b789c, #1b789c, #137878)";break;case"midnight snow":document.querySelector("#img__1").src="./assets/sf.gif",document.querySelector("body").style.background="linear-gradient(to bottom,#000000, #0d0d0d, #1a1a1a, #262626)"}})}setTimeout(()=>{let e=document.querySelector("#circle__profile");openFaceCube({sectionId:e.dataset.sectionId,faceId:e.dataset.faceId})},5100)}function rotateCubeOnMouse(e){if(isHeld){let t=e.clientX-window.innerWidth/2*.1875,o=e.clientY-window.innerWidth/2*.1875;cube.style.transform=`rotateX(${-o}deg) rotateY(${t}deg)`}}["contact__me","click__here"].forEach(e=>{document.getElementById(e).addEventListener("click",e=>{let t=document.querySelector("#circle__contact");openFaceCube({sectionId:t.dataset.sectionId,faceId:t.dataset.faceId})})}),document.getElementById("music__id").addEventListener("click",e=>{let t=document.querySelector("#circle__music");openFaceCube({sectionId:t.dataset.sectionId,faceId:t.dataset.faceId})}),document.getElementById("theme__id").addEventListener("click",e=>{let t=document.querySelector("#circle__theme");openFaceCube({sectionId:t.dataset.sectionId,faceId:t.dataset.faceId})});let timeOutIsCalled=!1,timeOutId=null,ableToMove=!1;export function cubeMoveHandler(){["mousedown","touchstart"].forEach(e=>{document.addEventListener(e,e=>{isHeld=!0,ableToMove||(timeOutIsCalled=!0,timeOutId=setTimeout(()=>{ableToMove=!0,timeOutIsCalled=!1},250))},{passive:!1})}),["mousemove","touchmove"].forEach(e=>{document.addEventListener(e,e=>{isHeld&&ableToMove&&rotateCubeOnMouse(e)})}),["mouseup","mouseleave","pointerup","dragover","dragend","touchend","touchcancel",].forEach(e=>{document.addEventListener(e,e=>{isHeld=!1,ableToMove=!1,clearTimeout(timeOutId)})})}export function circleMove(){let e=document.getElementById("circle"),t=e.querySelector("#circle__img"),o=document.querySelector("#circle");o.addEventListener("click",function e(o){t.classList.add("small__bounce"),setTimeout(()=>{t.classList.remove("small__bounce")},260),o.stopPropagation(),toggleSection(document.querySelector("#circle__menubox"))}),setInterval(()=>{let e,t;screen.orientation.type.startsWith("landscape")&&window.innerHeight<610?(e=Math.floor(71*Math.random()+100),t=220):(e=Math.floor(51*Math.random()+100),t=Math.floor(180*Math.random())),o.style.transform=`translateX(${e}px) translateY(${t}px)`},6e3)}function removeAllSectionFaces(){forFaces(e=>{let t=e.dataset.sectionId;setBloodSection(getBloodSectionWithDataFace(t))})}function forFaces(e){Array.from(cube.children).forEach(t=>{e(t)})}