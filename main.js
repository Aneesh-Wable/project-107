function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XrrKZjkFL/.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{ 
   console.log(error);
   console.log(results);
}