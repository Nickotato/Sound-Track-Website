
      let song1 = document.getElementById("song1desc");
      let m1b1 = document.getElementById("m1b1");
      let m1b2 = document.getElementById("m1b2");

      m1b1.style.borderBottom = "2px solid black";

      m1b1.addEventListener("click", () => {
        song1.textContent = text[0][0];
        m1b1.style.borderBottom = "2px solid black";
        m1b2.style.borderBottom = "none";
      });

      m1b2.addEventListener("click", () => {
        song1.textContent = text[0][1];
        m1b1.style.borderBottom = "none";
        m1b2.style.borderBottom = "2px solid black";
      });