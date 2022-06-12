var button = document.getElementById('sprawdz');
var text = document.getElementById('text');
var odpowiedzi = document.getElementById('list');
var what = document.getElementById('what');

var los = Math.floor(Math.random()*1000)+1;
//var los = 3;

button.addEventListener('click', sprawdzanie);

text.addEventListener("keyup", sprawdzam);

var i = 1;
var lodpowiedzi=[];

function sprawdzanie() {
  var answer = Number(text.value);
  if (Number.isInteger(answer) && answer > 0 && answer <= 1000) {
    for(var o=0;o<i;o++) {
      if(!lodpowiedzi.includes(answer)) {
        lodpowiedzi[i-1] = answer;
        i++;
        if (answer<los){
          what.innerHTML = "liczba jest za mała";
        } else if (answer>los){
          what.innerHTML = "liczba jest za duża";
        } else {
          what.innerHTML = "idealnie";
          button.removeEventListener('click', sprawdzanie);
          text.removeEventListener("keyup", sprawdzam);
          what.classList.add("good");
          button.innerHTML = "resetuj";
          button.addEventListener('click', reset);
          console.log(lodpowiedzi);
        }
        var li = document.createElement("li");
        odpowiedzi.appendChild(li);
        list.lastChild.innerHTML = i-1+": "+answer+" - "+what.innerHTML;
        break;
      } else {
        what.innerHTML = "nie możesz wpisać tej liczby 2 raz";
      }
    }
  }
  else {
    what.innerHTML = "Wpisana liczba nie mieści się w przedzialę lub nie jest liczbą";
  }
}

function reset() {
  location.reload();
}

function sprawdzam() {
    if (event.key === "Enter") {
        sprawdzanie();
    }
}
