//hides imgdiv as default
imgdiv.style.visibility = "hidden";
//var imgArray = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8']


  //function to loop through classes to make each one smaller
  var imgClass = document.getElementsByClassName("imgbtn");
  var imgEach;
  const buttonText = function() {
     for (var i = 0; i < imgClass.length; i++){
        var imgEach = imgClass[i]; 
        imgEach.style.fontSize = '18px';
     }
    }
//user clicks picture to choose tool, choice sets userPlay variable
document.getElementById("img1").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/1.jpg';
    document.getElementById("img1").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img2").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/2.jpg';
    document.getElementById("img2").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });

  document.getElementById("img3").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/3.jpg';
    document.getElementById("img3").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img4").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/4.jpg';
    document.getElementById("img4").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img5").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/5.jpg';
    document.getElementById("img5").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img6").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/6.jpg';
    document.getElementById("img6").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img7").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/7.jpg';
    document.getElementById("img7").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });
  document.getElementById("img8").addEventListener("click", function() {
    buttonText();
    document.getElementById("imgOut").src = 'images/8.jpg';
    document.getElementById("img8").style.fontSize = '25px';
    imgdiv.style.visibility = "visible";
  });