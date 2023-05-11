
/*КОД БУДЕ З ПОМИЛКАМИ ТАК ЯК НАПИСАНИЙ ДЛЯ СЕРВЕРНОЇ ЧАСТИНИ ВИКОНАННЯ ЙОГО НА NODE
АЛЕ МОЖНА СТВОРИТИ ФАЙЛ INDEX.mjs ТА ВИКОНАТИ ЧЕРЕЗ НЬОГО
*/

/////////////task 1

const LOG_LEVELS = {
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
};

let logLevel = LOG_LEVELS.INFO; // За замовчуванням логуємо повідомлення з рівнем INFO та вище

function setLogLevel(level) {
  logLevel = level;
}

function log(level, message) {
  if (LOG_LEVELS[level] <= logLevel) {
    console.log(`[${level}] ${message}`);
  }
}

module.exports = {
  LOG_LEVELS,
  setLogLevel,
  log,
};

const logger = require('./logger');

logger.setLogLevel(logger.LOG_LEVELS.DEBUG); // Задаємо рівень логування DEBUG

logger.log(logger.LOG_LEVELS.ERROR, 'Помилка!'); // Виводиться повідомлення про помилку

logger.log(logger.LOG_LEVELS.INFO, 'Інформаційне повідомлення'); // Не виводиться, оскільки рівень логування заданий вище

logger.log(logger.LOG_LEVELS.DEBUG, 'Детальне повідомлення для налагодження'); // Виводиться, оскільки рівень логування заданий нижче


///////////////task 2

class Logger {
  constructor() {
    this.LOG_LEVELS = {
      ERROR: 1,
      WARN: 2,
      INFO: 3,
      DEBUG: 4,
    };

    this.logLevel = this.LOG_LEVELS.INFO; // За замовчуванням логуємо повідомлення з рівнем INFO та вище
  }

  setLogLevel(level) {
    this.logLevel = level;
  }

  log(level, message) {
    if (this.LOG_LEVELS[level] <= this.logLevel) {
      console.log(`[${level}] ${message}`);
    }
  }
}

export default Logger;

////////////task 3

import CryptoJS from 'crypto-js';

const plaintext = 'Секретне повідомлення'; // Повідомлення, яке будемо шифрувати

// Генеруємо випадковий ключ шифрування
const encryptionKey = CryptoJS.lib.WordArray.random(256 / 8);

// Шифруємо повідомлення з використанням ключа шифрування
const ciphertext = CryptoJS.AES.encrypt(plaintext, encryptionKey).toString();

// Дешифруємо повідомлення з використанням ключа шифрування
const decryptedPlaintext = CryptoJS.AES.decrypt(ciphertext, encryptionKey).toString(CryptoJS.enc.Utf8);

console.log(`Шифрований текст: ${ciphertext}`);
console.log(`Розшифрований текст: ${decryptedPlaintext}`);

////////////task 4

// Модуль логування
const log = (level, message) => {
  console.log(`[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`);
};

// Шифр Цезаря
const caesarCipher = {
  encrypt: (plaintext, shift) => {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const code = plaintext.charCodeAt(i);
      if (code >= 65 && code <= 90) {  // Заголовні літери
        ciphertext += String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {  // Прописні літери
        ciphertext += String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {  // Інші символи
        ciphertext += plaintext.charAt(i);
      }
    }
    return ciphertext;
  },

  decrypt: (ciphertext, shift) => {
    log('info', `Decrypting ciphertext: ${ciphertext} with shift: ${shift}`);
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      const code = ciphertext.charCodeAt(i);
      if (code >= 65 && code <= 90) {  // Заголовні літери
        plaintext += String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {  // Прописні літери
        plaintext += String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      } else {  // Інші символи
        plaintext += ciphertext.charAt(i);
      }
    }
    return plaintext;
  }
};

export default caesarCipher;

//////////////task 5

// Модуль для генерації випадкових значень
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntegerArray(length, min, max) {
  return Array.from({ length }, () => randomInteger(min, max));
}

function randomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default {
  randomInteger,
  randomIntegerArray,
  randomString,
};

import random from './random';

const randomNum = random.randomInteger(0, 100);
const randomArray = random.randomIntegerArray(10, 0, 100);
const randomString = random.randomString(10);

console.log(randomNum);      // приклад виводу: 42
console.log(randomArray);    // приклад виводу: [ 23, 87, 56, 12, 76, 54, 34, 87, 23, 1 ]
console.log(randomString);   // приклад виводу: 'b49G6FAzq3'
