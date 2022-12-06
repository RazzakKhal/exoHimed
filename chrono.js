const chrono = {
  // stocker des valeurs sous forme de number
  minutes: 0,
  seconds: 0,
  tenthOfSeconds: 0,

  display: function () {
    // MAJ de la valeur de ma div minutes
    const eliMnutes = document.querySelector(".el-minutes");
    eliMnutes.textContent = chrono.minutes;
    // MAJ de la valeur de ma div secondes
    const elSeconds = document.querySelector(".el-seconds");
    elSeconds.textContent = chrono.seconds;

    // MAJ de la valeur de ma div 10/1000 s
    const elTenthOfSeconds = document.querySelector(".el-tenthOfSeconds");
    elTenthOfSeconds.textContent = chrono.tenthOfSeconds;
  },

  start: function () {
    setInterval(chrono.changeTheTime, 100);
  },

  changeTheTime: function () {
    // déclencher mon chrono
    chrono.tenthOfSeconds++;

    // si tenthOfSeconds est égale à 10 j'incrimente les secondes
    if (chrono.tenthOfSeconds === 10) {
      chrono.seconds++;
      chrono.tenthOfSeconds = 0;
    }
    if (chrono.seconds === 60) {
      chrono.minutes++;
      chrono.seconds = 0;
    }
    chrono.display();
  },

  init: function () {
    // cibler la div avec l'id chrono
    const myElement = document.querySelector("#chrono");
    myElement.style.display = "flex";
    myElement.style.justifyContent = "space-around";
    // créer mes élèments pour afficher les propiétés de mon objet
    // je crée ma div minutes
    const myMin = document.createElement("div");
    myMin.classList.add("el-minutes");
    myMin.textContent = chrono.minutes;
    myElement.appendChild(myMin);

    // je crée ma div secondes

    const mySeconds = document.createElement("div");
    mySeconds.classList.add("el-seconds");
    mySeconds.textContent = chrono.seconds;

    myElement.appendChild(mySeconds);

    // je crée ma div millisecondes
    const myTenthOfSeconds = document.createElement("div");
    myTenthOfSeconds.textContent = chrono.tenthOfSeconds;

    myTenthOfSeconds.classList.add("el-tenthOfSeconds");
    myElement.appendChild(myTenthOfSeconds);
    chrono.start();
    chrono.reset();
  },

  reset: function () {
    const btnReset = document.querySelector(".reset");
    btnReset.addEventListener("click", () => {
      chrono.minutes = 0;
      chrono.seconds = 0;
      chrono.tenthOfSeconds = 0;
    });
  },
};

chrono.init();
