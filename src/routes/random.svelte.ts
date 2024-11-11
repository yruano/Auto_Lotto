class Random {
  MataRandom(range: number) {
    let randomArray: number[] = [];

    while (randomArray.length < 6) {
      let randomValue = Math.floor(Math.random() * range) + 1;

      if (!randomArray.includes(randomValue)) {
        randomArray.push(randomValue);
      }
    }
    randomArray.sort((a, b) => a - b);
    return randomArray;
  }

  CryptoRandom(range: number) {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    let randomValues: number[] = [];

    while (randomValues.length < 6) {
      let array = new Uint32Array(1);
      crypto.getRandomValues(array);
      let randomIndex = array[0] % numbers.length;

      if (!randomValues.includes(numbers[randomIndex])) {
        randomValues.push(numbers[randomIndex]);
      }
    }
    randomValues.sort((a, b) => a - b);

    return randomValues;
  }

  WindowCryptoRandom(range: number) {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    let randomValues: number[] = [];

    while (randomValues.length < 6) {
      let randomBytes = new Uint8Array(1);
      window.crypto.getRandomValues(randomBytes);
      let randomIndex = randomBytes[0] % numbers.length;

      if (!randomValues.includes(numbers[randomIndex])) {
        randomValues.push(numbers[randomIndex]);
      }
    }
    randomValues.sort((a, b) => a - b);

    return randomValues;
  }

  TimeRandom(range: number) {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    let randomValues: number[] = [];

    while (randomValues.length < 6) {
      let randomValue = performance.now() % 45;
      let randomIndex = Math.floor(randomValue);
      let selectedNumber = numbers[randomIndex];

      if (!randomValues.includes(selectedNumber)) {
        randomValues.push(selectedNumber);
      }
    }
    randomValues.sort((a, b) => a - b);
    return randomValues;
  }

  FisherYatesRandom(range: number) {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];  // 두 값을 교환
    }
    let randomValues = numbers.slice(0, 6);
    randomValues.sort((a, b) => a - b);

    return randomValues;
  }
}

export const random = new Random;
