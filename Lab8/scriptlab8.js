console.log('     TASK 1.1');
//task1 
class Person {
  constructor(firstName, lastName, gender, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  toLocaleString(languageCode = "en-US") {
    const title = this.getTitle(languageCode);
    const fullName = `${this.firstName} ${this.lastName}`;
    return `${title} ${fullName}`;
  }

  getTitle(languageCode) {
    const titles = {
      "en-US": {
        male: "Mr.",
        female: this.getMsTitle(),
      },
      "fr-FR": {
        male: "M.",
        female: this.getMadameTitle(),
      },
      "de-DE": {
        male: "Herr",
        female: this.getFrauTitle(),
      },
    };

    const title = titles[languageCode] && titles[languageCode][this.gender];

    if (!title) {
      throw new Error(`Unsupported language or gender: ${languageCode} ${this.gender}`);
    }

    return title;
  }

  getMsTitle() {
    if (this.maritalStatus === "married") {
      return "Mrs.";
    } else if (this.maritalStatus === "single") {
      return "Miss";
    } else {
      return "Ms.";
    }
  }

  getMadameTitle() {
    if (this.maritalStatus === "married") {
      return "Madame";
    } else {
      return "Mademoiselle";
    }
  }

  getFrauTitle() {
    if (this.maritalStatus === "married") {
      return "Frau";
    } else {
      return "Fräulein";
    }
  }
}

const john = new Person("John", "Doe", "male", "married");
console.log(john.toLocaleString("en-US")); 
console.log(john.toLocaleString("fr-FR")); 
console.log(john.toLocaleString("de-DE")); 

console.log('     TASK 1.2');
const Anna = new Person("Anna", "Markovna", "female", "single");
console.log(Anna.toLocaleString("en-US")); 
console.log(Anna.toLocaleString("fr-FR")); 
console.log(Anna.toLocaleString("de-DE")); 

console.log('     TASK 2');

function convertNumber(number) {
  // Англійська версія
  console.log(`English: ${number.toLocaleString('en-US')}`);

  // Арабська версія
  console.log(`Arabic: ${number.toLocaleString('ar-EG')}`);

  // Тайська версія
  console.log(`Thai: ${number.toLocaleString('th-TH-u-nu-thai')}`);
}

// Приклад виклику
convertNumber(123456789);

console.log('     TASK 3');

const now = new Date();

// Франція
const frFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Europe/Paris'
});

console.log(`Франція: ${frFormatter.format(now)}`);

// Китай
const cnFormatter = new Intl.DateTimeFormat('zh-CN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Shanghai',
  numberingSystem: 'hanidec'
});

console.log(`Китай: ${cnFormatter.format(now)}`);

// Єгипет
const egFormatter = new Intl.DateTimeFormat('ar-EG', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Africa/Cairo'
});

console.log(`Єгипет: ${egFormatter.format(now)}`);

// Таїланд
const thFormatter = new Intl.DateTimeFormat('th-TH-u-nu-thai', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Bangkok'
});

console.log(`Таїланд: ${thFormatter.format(now)}`);

console.log('     TASK 4');

function compareTexts(text1, text2, ignoreCase = true, locale = undefined) {
  if (ignoreCase) {
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();
  }
  return text1.localeCompare(text2, locale);
}

const text1 = "Привіт, світ!";
const text2 = "привіт, СВІТ!";
const result = compareTexts(text1, text2, false, "uk");
console.log(result); // 0

const text11 = "JavaScript";
const text21 = "javascript";
const result1 = compareTexts(text11, text21);
console.log(result1); 

console.log('     TASK 5');

function messageFormat(template, ...args) {
  // замінюємо позначки {0}, {1}, ... на відповідні аргументи
  let result = template.replace(/\{(\d+)\}/g, (match, index) => args[index]);

  return result;
}

// приклад використання
const englishTemplate = '{0} has {1} messages';
const englishResult = messageFormat(englishTemplate, 'John', 3);
console.log(englishResult); 

const frenchTemplate = 'Il y a {1} messages pour {0}';
const frenchResult = messageFormat(frenchTemplate, 'Jean', 5);
console.log(frenchResult); 





console.log('     TASK 6');


class PaperSize {
  constructor(locale, unit = 'mm') {
    this.locale = locale;
    this.unit = unit;
    this.defaultSize = this.getDefaultSize();
  }

  getDefaultSize() {
    switch (this.locale) {
      case 'en-US':
      case 'en-CA':
        return this.unit === 'mm' ? [215.9, 279.4] : [8.5, 11];
      case 'fr-FR':
        return this.unit === 'mm' ? [210, 297] : [8.27, 11.69];
      case 'zh-CN':
        return this.unit === 'mm' ? [210, 297] : [8.27, 11.69];
      case 'th-TH':
        return this.unit === 'mm' ? [210, 297] : [8.27, 11.69];
      default:
        return this.unit === 'mm' ? [210, 297] : [8.27, 11.69];
    }
  }

  getSize() {
    const [width, height] = this.defaultSize;
    return `${width.toFixed(2)} ${this.unit} x ${height.toFixed(2)} ${this.unit}`;
  }
}

const paperSize = new PaperSize('en-US', 'in');
console.log(paperSize.getSize()); 

const paperSize2 = new PaperSize('fr-FR', 'mm');
console.log(paperSize2.getSize()); 
