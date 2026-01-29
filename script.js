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

  if (n === 5) {
    document.getElementById('instaHandle').innerText =
      instagramNameMap[selectedResearcher];

    document.getElementById('instaLink').href =
      instagramMap[selectedResearcher];
  }
}
