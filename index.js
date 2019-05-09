let adressbook = [];

document.getElementById('submiting').addEventListener('click', function() {
  const name = document.getElementById('fullname').value;
  const mail = document.getElementById('email').value;
  const numberis = document.getElementById('phonenumber').value;
  const newContact = { name: name, mail: mail, numberis: numberis };

  adressbook.push(newContact)
  window.localStorage.setItem(`adressbook` , JSON.stringify(adressbook));

  print();
});


const print = () => {
  document.getElementById('mygtukas').innerHTML = null;

  adressbook.forEach((contact , index) => {
    const container = document.createElement(`div`);
    const name = document.createElement(`span`);
    const mail = document.createElement(`span`);
    const number = document.createElement(`span`);
    const deletButton = document.createElement(`button`);
    const editButton = document.createElement(`button`);

    name.textContent = contact.name;
    mail.textContent = contact.mail;
    number.textContent = contact.numberis;
    deletButton.textContent = `delete`;
    editButton.textContent = `edit`;

    container.appendChild(name);
    container.appendChild(mail);
    container.appendChild(number);
    container.appendChild(deletButton);
    container.appendChild(editButton);

    deletButton.addEventListener(`click` , () => {
      adressbook.splice(index, 1);
      window.localStorage.setItem(`adressbook` , JSON.stringify(adressbook));

      print();
    });
    editButton.addEventListener(`click` , console.log() ,  () => {
      adressbook.splice(index);
      window.localStorage.setItem(`adressbook` , JSON.stringify(adressbook));

      print();
    });

    document.getElementById('mygtukas').appendChild(container);
  });
}

const fromcache = window.localStorage.getItem(`adressbook`);

  if (fromcache) {
    adressbook = JSON.parse(fromcache);

    print();
  }
