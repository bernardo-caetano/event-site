let selectedResearcher = '';
let currentScreen = 1;
const totalQuestions = 3;

const instagramMap = {
  pesquisador1: 'https://instagram.com/bernardocaetano_',
  pesquisador2: 'https://instagram.com/nadalbruno',
  pesquisador3: 'https://instagram.com/guerreirojv',
  pesquisador4: 'https://instagram.com/guilhermekotait'
};

const instagramNameMap = {
  pesquisador1: '@bernardocaetano_',
  pesquisador2: '@nadalbruno',
  pesquisador3: '@guerreirojv',
  pesquisador4: '@guilhermekotait'
};

const researcherData = {
  pesquisador1: { name: 'Bernardo', img: 'img/pesquisador1.jpg' },
  pesquisador2: { name: 'Bruno', img: 'img/pesquisador2.jpg' },
  pesquisador3: { name: 'João', img: 'img/pesquisador3.jpg' },
  pesquisador4: { name: 'Kotait', img: 'img/pesquisador4.jpg' }
};


function chooseResearcher(id) {
  selectedResearcher = id;
  goToScreen(2);
  updateCounter();
}

function nextScreen(n) {
  goToScreen(n);
  updateCounter();
}

function goToScreen(n) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(`screen${n}`).classList.add('active');
  currentScreen = n;

  if (n === 5) {
  document.getElementById('instaHandle').innerText =
    instagramNameMap[selectedResearcher];
  document.getElementById('instaLink').href =
    instagramMap[selectedResearcher];

  const finalCard = document.getElementById('finalCard');
  const researcher = researcherData[selectedResearcher];

  finalCard.innerHTML = `
    <div class="card">
      <img src="${researcher.img}">
      <span>${researcher.name}</span>
    </div>
  `;

  document.getElementById('counter').style.display = 'none';
  document.getElementById('progressContainer').style.display = 'none';
}

}

function updateCounter() {
  const counter = document.getElementById('counter');
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');

  if (currentScreen >= 2 && currentScreen <= 4) {
    const questionNumber = currentScreen - 1;
    counter.innerText = `Pergunta ${questionNumber} de ${totalQuestions}`;

    const progressPercent = (questionNumber / totalQuestions) * 100;
    progressBar.style.width = progressPercent + '%';

    counter.style.display = 'block';
    progressContainer.style.display = 'block';
  } else {
    counter.style.display = 'none';
    progressContainer.style.display = 'none';
  }
}


function selectStar(n) {
  const stars = document.querySelectorAll('.stars span');
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < n);
  });
}

function resetApp() {
  // volta pra tela inicial
  goToScreen(1);

  // limpa estrelas
  const stars = document.querySelectorAll('.stars span');
  stars.forEach(star => star.classList.remove('active'));

  // limpa botões selecionados
  const options = document.querySelectorAll('.option');
  options.forEach(btn => btn.classList.remove('selected'));

  // limpa pesquisador
  selectedResearcher = '';
}


function selectOption(button, next) {
  const parent = button.parentElement;
  const buttons = parent.querySelectorAll('.option');

  // remove seleção dos outros
  buttons.forEach(btn => btn.classList.remove('selected'));

  // marca o clicado
  button.classList.add('selected');

  // dá tempo pro usuário VER a cor antes de trocar de tela
  setTimeout(() => {
    nextScreen(next);
  }, 300); // pode testar 200–400ms
}
