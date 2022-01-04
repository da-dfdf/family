Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: '90'
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id = "captured_image" src = "'+data_uri +' "/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8Sy8uEyq4/model.json',modelLoaded);

function modelLoaded(){
    console.log('model loaded');

}

function check() {
    img = document.getElementById('pic_taken');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultName").innerHTML = results[0].label;
       value = results[0].confidence.toFixed(3);
       document.getElementById("resultAccuracy").innerHTML = value;
       
    }
}

