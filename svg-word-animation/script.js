const paths = document.getElementsByTagName('path');
const strokes = [];
let j = 0;

for (let i = 0; i < paths.length; i++) {
  strokes[i] = paths[i].getTotalLength();
  paths[i].style.strokeDashoffset = paths[i].getTotalLength();
  paths[i].style.strokeDasharray = paths[i].getTotalLength();
}

function strokeLetter(letter, pathDist) {
  letter.animate([{ strokeDashoffset: pathDist }, { strokeDashoffset: '0' }], {
    duration: pathDist * 7,
    fill: 'forwards',
  }).onfinish = function () {
    j++;
    strokeLetter(paths[j], paths[j].getTotalLength());
  };
}

strokeLetter(paths[0], strokes[0]);
