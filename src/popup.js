document.addEventListener('DOMContentLoaded', function () {

  const personalInfoLink = document.getElementById('personalInfoLink');
  const creditCardLink = document.getElementById('creditCardLink');
  const personalInfoSection = document.getElementById('personalInfoSection');
  const creditCardSection = document.getElementById('creditCardSection');
  const autofillButton = document.getElementById('autofillButton');

  showSection('personalInfo');


  personalInfoLink.addEventListener('click', function () {
    showSection('personalInfo');
  });

  creditCardLink.addEventListener('click', function () {
    showSection('creditCard');
  });

  autofillButton.addEventListener('click', function () {

    const personalInfoData = getFormData('personalInfoForm');
    const creditCardData = getFormData('creditCardForm');

    chrome.storage.sync.set({
      personalInfo: personalInfoData,
      creditCard: creditCardData,
    }, function () {
      console.log('Data saved:', personalInfoData, creditCardData);
    });
  });

  function showSection(section) {
    if (section === 'personalInfo') {
      personalInfoSection.style.display = 'block';
      creditCardSection.style.display = 'none';
      personalInfoLink.classList.add('active');
      creditCardLink.classList.remove('active');
    } else if (section === 'creditCard') {
      personalInfoSection.style.display = 'none';
      creditCardSection.style.display = 'block';
      personalInfoLink.classList.remove('active');
      creditCardLink.classList.add('active');
    }

    chrome.storage.sync.get(['personalInfo', 'creditCard'], function (data) {
      populateFormData('personalInfoForm', data.personalInfo);
      populateFormData('creditCardForm', data.creditCard);
    });
  }

  function getFormData(formId) {
    const form = document.getElementById(formId);
    const formData = {};

    for (const input of form.elements) {
      if (input.tagName === 'INPUT') {
        formData[input.name] = input.value;
      }
    }

    return formData;
  }

  function populateFormData(formId, data) {
    const form = document.getElementById(formId);

    for (const input of form.elements) {
      if (input.tagName === 'INPUT' && data[input.name]) {
        input.value = data[input.name];
      }
    }
  }
});
