class Randoms {
  MataRandom(range: number, zero: number, reduplication: boolean): number[] {
    let randomArray: number[] = [];
    while (randomArray.length < 6) {
      let randomValue = Math.floor(Math.random() * range) + zero;

      if (reduplication) {
        if (!randomArray.includes(randomValue)) {
          randomArray.push(randomValue);
        }
      } else {
        randomArray.push(randomValue);
      }
    }

    if (reduplication) {
      randomArray.sort((a, b) => a - b);
    }
    
    return randomArray;
  }

  CryptoRandom(range: number, zero: number, reduplication: boolean): number[] {
    let numbers = Array.from({ length: range }, (_, index) => index + zero);
    let randomValues: number[] = [];
    while (randomValues.length < 6) {
      let array = new Uint32Array(1);
      crypto.getRandomValues(array);
      let randomIndex = array[0] % numbers.length;

      if (reduplication) {
        if (!randomValues.includes(numbers[randomIndex])) {
          randomValues.push(numbers[randomIndex]);
        }
      } else {
        randomValues.push(numbers[randomIndex]);
      }
    }
    
    if (reduplication) {
      randomValues.sort((a, b) => a - b);
    }

    return randomValues;
  }

  WindowCryptoRandom(range: number, zero: number, reduplication: boolean): number[] {
    let numbers = Array.from({ length: range }, (_, index) => index + zero);
    let randomValues: number[] = [];
    while (randomValues.length < 6) {
      let randomBytes = new Uint8Array(1);
      window.crypto.getRandomValues(randomBytes);
      let randomIndex = randomBytes[0] % numbers.length;

      if (reduplication) {
        if (!randomValues.includes(numbers[randomIndex])) {
          randomValues.push(numbers[randomIndex]);
        }
      } else {
        randomValues.push(numbers[randomIndex]);
      }
    }

    if (reduplication) {
      randomValues.sort((a, b) => a - b);
    }

    return randomValues;
  }

  TimeRandom(range: number): number[] {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    let randomValues: number[] = [];
    while (randomValues.length < 6) {
      let randomValue = performance.now() % 45;
      let randomIndex = Math.floor(randomValue);
        
      if (!randomValues.includes(numbers[randomIndex])) {
        randomValues.push(numbers[randomIndex]);
      }
    }
    randomValues.sort((a, b) => a - b);
    return randomValues;
  }

  FisherYatesRandom(range: number): number[] {
    let numbers = Array.from({ length: range }, (_, index) => index + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    let randomValues = numbers.slice(0, 6);
    randomValues.sort((a, b) => a - b);
    return randomValues;
  }
}

export const randoms = new Randoms();
