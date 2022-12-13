function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Classifier = ml5.imageClassifier("MobileNet", Modeload)
}

function draw() {
  image(video, 0, 0, 300, 300)
  Classifier.classify(video, gotResults)
}

function gotResults(error, results) {
  if (error) {
    console.log(error)
  } else {
    nome = results[0].label
      presisao = results[0].confidence
      multiplicacao = Math.floor(Math.random(presisao) * 100)
      arrendondar = multiplicacao + "%"
    if (multiplicacao > 50) {
      document.getElementById("objeto").innerHTML = nome
      document.getElementById("precisao").innerHTML = arrendondar
      var fala = window.speechSynthesis;
      styn = new SpeechSynthesisUtterance(nome);
      fala.speak(styn)
    }

  }

}

function Modeload() {
  console.log("model load!")
}


