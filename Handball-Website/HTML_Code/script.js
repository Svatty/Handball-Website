const sidenav = document.getElementById('side_navbar')
const overlay = document.getElementById('overlay');
const body = document.getElementsByTagName('body')[0];

function open_sidenav(){
  sidenav.style.display ='block';
  overlay.style.display ='block';
  body.style.overflowY ='hidden';
}

function close_sidenav(){
  sidenav.style.display ='none';
  overlay.style.display ='none';
  body.style.overflowY = 'auto';
}

document.getElementById('overlay').addEventListener('click', close_sidenav);
