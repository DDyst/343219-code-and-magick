// Файл для работы со всплывающим окном настройки персонажа

'use strict';

var wizardInfo = {
  QUANTITY: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

// Функция нахождения случайного целого числа в заданном диапазоне включительно
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайный элемент массива
var getRandomArrayItem = function (array) {
  return array[getRandomInRange(0, array.length - 1)];
};

var generateWizards = function (obj) {
  var generatedWizards = [];
  for (var i = 0; i < obj.QUANTITY; i++) {
    generatedWizards[i] = {
      name: getRandomArrayItem(obj.NAMES) + ' ' + getRandomArrayItem(obj.SURNAMES),
      coatColor: getRandomArrayItem(obj.COAT_COLORS),
      eyesColor: getRandomArrayItem(obj.EYES_COLORS)
    };
  }
  return generatedWizards;
};

var renderWizard = function (obj) {
  var wizardElement = wizardTemplate.querySelector('.setup-similar-item').cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = obj.name;
  wizardElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  return wizardElement;
};

var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizards = generateWizards(wizardInfo);
var fragment = document.createDocumentFragment();
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

wizards.forEach(function (item) {
  fragment.appendChild(renderWizard(item));
});
userDialog.querySelector('.setup-similar-list').appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
