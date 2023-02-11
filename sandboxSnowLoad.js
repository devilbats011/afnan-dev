window.onload = function () {
  const textLoading = document.getElementById("progress__loading__text-id");
  let loadingCount = 0;
  let countPlus = 100;
  const countMax = 10 * 10;
  const loadingIntervalId = setInterval(() => {
    if (countMax > loadingCount) {
      loadingCount += countPlus;
      document.getElementById("loading__progress-bar-id").style.width =
        loadingCount + "%";
    } else {
      const l = document.getElementById("main__loading-id");
      l.style.opacity = 0;
      l.style.pointerEvents = "none";
      const temptimeoutid = setTimeout(() => {
        if (temptimeoutid) l.remove();
        clearTimeout(temptimeoutid);
      }, 4000);
      clearInterval(loadingIntervalId);
    }

    let text = String(textLoading.innerText).match(/\./gm);
    if (!text) {
      text = [];
    }
    if (text.length < 3) {
      text.push(".");
    } else {
      text = [];
    }
    text = text.join("");
    textLoading.innerText = "loading " + text;
  }, 1500);

  /**
    let setIntervalSnowId;
   * 
    function snowFalls() {
      document.head.appendChild(
        (function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            "https://cdn.jsdelivr.net/npm/christmas-snow-3d/build/snow3d.js";
          return s;
        })()
      );
    }
    setIntervalSnowId = setInterval(() => {
      if (setIntervalSnowId) clearInterval(setIntervalSnowId);
      snowFalls();
    }, 2900);
   */
  
};
