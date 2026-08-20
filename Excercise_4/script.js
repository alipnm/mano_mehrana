let bag = 100;

const gameNameKeeperElement = document.getElementById ('gameName');
const gamePriceElement = document.getElementById ('gamePrice');
const resultKeeperElement = document.getElementById ('result');
const NowMoneyElement = document.getElementById ('bag');

let buy = () => {
  let nameGame = gameNameKeeperElement.value;
  let priceGame = Number (gamePriceElement.value);
  resultKeeperElement.innerHTML = '';

  if (
    (bag >= priceGame) &
    (!nameGame == '') &
    (!priceGame == '') &
    !Number.isNaN (Number (priceGame))
  ) {
    bag -= priceGame;
    const h2Element = document.createElement ('h2');
    h2Element.innerHTML = 'You buyed the game';

    const gameNameElement = document.createElement ('h3');
    gameNameElement.innerHTML = `Game name: ${nameGame}`;

    resultKeeperElement.append (h2Element);
    resultKeeperElement.append (gameNameElement);
    NowMoneyElement.innerHTML = `<p>Money: ${bag}</p>`;

    gameNameKeeperElement.value = '';
    gamePriceElement.value = '';
  } else {
    const h2Element = document.createElement ('h2');
    h2Element.innerHTML = "Your money isn't enough. ERROR";
    resultKeeperElement.append (h2Element);
  }
};
