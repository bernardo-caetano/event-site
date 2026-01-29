let selectedResearcher = '';

const instagramMap = {
  pesquisador1: 'https://instagram.com/bernardocaetano_',
  pesquisador2: 'https://instagram.com/nadalbruno',
  pesquisador3: 'https://instagram.com/guerreirojv'
};

const instagramNameMap = {
  pesquisador1: '@bernardocaetano_',
  pesquisador2: '@nadalbruno',
  pesquisador3: '@guerreirojv'
};

function chooseResearcher(id) {
  selectedResearcher = id;
  nextScreen(2);
}

function nextScreen(n) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById('screen' + n).classList.add('active');

  updateProgress(n);

  if (n === 5) {
    document.getElementById('instaHandle').innerText =
      instagramNameMap[selectedResearcher];

    document.getElementById('instaLink').href =
      instagramMap[selectedResearcher];
  }
}

function updateProgress(screenNumber) {
  const progressContainer = document.querySelector('.progress-container');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');

  // só aparece nas telas 2, 3 e 4
  if (screenNumber >= 2 && screenNumber <= 4) {
    progressContainer.style.display = 'block';

    const questionIndex = screenNumber - 1; // 2→1, 3→2, 4→3
    const totalQuestions = 3;
    const percent = (questionIndex / totalQuestions) * 100;

    progressFill.style.width = percent + '%';
    progressText.innerText = `Pergunta ${questionIndex} de ${totalQuestions}`;
  } else {
    progressContainer.style.display = 'none';
  }
}
