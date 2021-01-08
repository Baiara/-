const wrpScore = document.querySelector('.score');
const wrpBtn = document.querySelector('.klik');


const wrpModKlik = document.querySelector('.klik-skor');
const wrpModAvtoklik = document.querySelector('.pass');
let scores = 0;
let plusScore = 1;
let interval = 0;

wrpModKlik.style.display = 'none';
wrpModAvtoklik.style.display = 'none';


function activeScores() {
    if (scores >= 10) {
        wrpModKlik.style.display = 'inline-block';
    }
    if (scores >= 100) {
        wrpModAvtoklik.style.display = 'inline-block';
    }
}


wrpBtn.addEventListener('click', function () {
    scores += plusScore;
    wrpScore.textContent = scores;
    activeScores();
});
wrpModKlik.addEventListener('click', function () {

    if (scores >= 10) {
        scores -= 10;
        plusScore = 10;
        wrpScore.textContent = scores;
    }
});

setInterval(() => {
    scores += interval;
    console.log('ghgh');
    wrpScore.textContent = scores;
}, 100);


wrpModAvtoklik.addEventListener('click', () => {
    if (scores >= 100) {
        scores -= 100;
        interval += 5;
        wrpScore.textContent = scores;
    }
});
