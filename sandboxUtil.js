export function debounce(func, wait) {
  let timeout;
  return function (event) {
    console.log("%csandboxUtil.js line:5 event", "color: #007acc;", event);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event);
    }, wait);
  };
}

export class CubeClass {
  constructor() {
    // console.log('%csandboxUtil.js line:16 ', 'color: #007acc;', );
    const tempArray = ["front", "back", "bottom", "top", "left", "right"];
    let temp = [];

    for (let index = 0; index < tempArray.length; index++) {
      let id = index + 1;
      temp[tempArray[index]] = `$blood__${id}`;
    }

    this.faces = temp;
    this.faces.l = tempArray.length;
  }
}
