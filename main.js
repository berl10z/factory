let i = 0;
let txt = 'Кормиловский молочный завод'; 
let speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("banner-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}

typeWriter();