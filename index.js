
 const submiting = document.getElementById('submiting');

const businesscard = document.getElementById('submiting');
businesscard.addEventListener('click', function() {

  let name = document.getElementById('fullname').value;
  let mail = document.getElementById('email').value;
  let addres = document.getElementById('address').value;
  let numberis = document.getElementById('phonenumber').value;
  let cription = document.getElementById('description').value;

   window.localStorage.setItem('fullname', name);
   window.localStorage.setItem('email', mail);
   window.localStorage.setItem('address', addres);
   window.localStorage.setItem('phonenumber', numberis);
   window.localStorage.setItem('description', cription);
print();
});




const print = () => {
  let name = localStorage.getItem('fullname');
  let mail = localStorage.getItem('email');
  let addres = localStorage.getItem('address');
  let numberis = localStorage.getItem('phonenumber');
  let cription = localStorage.getItem('description');

  document.getElementById('fullname').value = name;
  document.getElementById('email').value = mail;
  document.getElementById('address').value = addres;
  document.getElementById('phonenumber').value = numberis;
  document.getElementById('description').value = cription;

  let content = document.createElement("p");
  content.textContent = `${name} ${mail} ${addres} ${numberis} ${cription}`;
  document.getElementById('cardinfo').innerHTML = null;
  document.getElementById('cardinfo').appendChild(content);

}
print();
