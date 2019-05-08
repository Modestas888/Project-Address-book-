const dressbook = [];
 const submiting = document.getElementById('submiting');

const adressbook =  document.getElementById('submiting');
adressbook.addEventListener('click', function() {

  let name = document.getElementById('fullname').value;
  let mail = document.getElementById('email').value;
  let numberis = document.getElementById('phonenumber').value;

   window.localStorage.setItem('fullname', name);
   window.localStorage.setItem('email', mail);
   window.localStorage.setItem('phonenumber', numberis);

print ();
});


const print = () => {
  let name = localStorage.getItem('fullname');
  let mail = localStorage.getItem('email');
  let numberis = localStorage.getItem('phonenumber');


  document.getElementById('fullname').value = name;
  document.getElementById('email').value = mail;
  document.getElementById('phonenumber').value = numberis;


  let content = document.createElement("p");
  content.textContent = `${name} ${mail} ${numberis} `;
  document.getElementById('hobby').appendChild(content);

}
print()




var div = document.getElementById('hobby');

function addHobby() {
  var  button = document.createElement('button');
  buttonedit = document.createElement('button');


  button.innerHTML = 'X';
   button.innerHTML = 'edit';
  // attach onlick event handler to remove button
  button.onclick = removeHobby;


  div.appendChild(button);
}

function removeHobby() {
  // remove this button and its input
  div.removeChild(this.previousElementSibling);
  div.removeChild(this);
}

// attach onclick event handler to add button
document.getElementById('submiting').addEventListener('click', addHobby);
// attach onclick event handler to 1st remove button
document.getElementById('remove').addEventListener('click', removeHobby);
document.getElementById('editinimas').addEventListener('click', removeHobby);
