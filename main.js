function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/138j9QQGL/model.json', modelReady);
    console.log("Start button is clicked");
}

function modelReady(){
    classifier.classify(gotResults);
}