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

  document.getElementById('screen1').classList.remove('active');
  document.getElementById('screen2').classList.add('active');

  document.getElementById('instaHandle').innerText =
    instagramNameMap[selectedResearcher];
  document.getElementById('instaLink').href =
    instagramMap[selectedResearcher];
}

function selectStar(n) {
  const stars = document.querySelectorAll('.stars span');
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < n);
  });
}

function resetApp() {
  document.getElementById('screen2').classList.remove('active');
  document.getElementById('screen1').classList.add('active');

  const stars = document.querySelectorAll('.stars span');
  stars.forEach(star => star.classList.remove('active'));
}
