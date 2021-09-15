function prev(){
  //console.log("hyy");
  var canvas = document.getElementById("result");
  canvas = createHiPPICanvas(canvas.width,canvas.height);
  //var canvas = document.getElementById("result");
  var ctx = canvas.getContext("2d");


  


  let infName = document.getElementById("infName").value;
  let inlName = document.getElementById("inlName").value;
  //let inGender = document.getElementsByClassName("gender").value;
  //console.log(inGender);
  let inEmail = document.getElementById("inputEmail4").value;
  let inContact = document.getElementById("phone").value;
  let inAddr = document.getElementById("inputAddress").value;
  let inCity = document.getElementById("inputCity").value;
  let inState = document.getElementById("inputState").value;
  let inZip = document.getElementById("inputZip").value;

  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  //const gen = document.getElementById("gen");
  const email = document.getElementById("email");
  const num = document.getElementById("num");
  const addr = document.getElementById("addr");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zip = document.getElementById("zip");
  //const img = document.getElementById("img");


  fname.innerHTML = infName;
  lname.innerHTML = inlName;
  //gen.innerHTML = inGender;
  email.innerHTML = inEmail;
  num.innerHTML = inContact;
  addr.innerHTML = inAddr;
  city.innerHTML = inCity;
  state.innerHTML = inState;
  zip.innerHTML = inZip;



  
          //drawOnCanvas(file);   
     //         });

  //ctx.drawImage(logo, 230, 3, 50, 50);
  //ctx.fillStyle = "#000";
  /*ctx.fillStyle = "#b0b0b0";
  ctx.rect(0, 0, 3000, 5600);
  ctx.fill();*/
  //document.getElementById("result").style.background = "url('bg.png')";

 /* var input = document.getElementById("img"); 
  const pim = document.querySelector("prev-image");

 input.addEventListener("change", function () {
      var file = input.files[0];
      if(file)
      {
        const reader = new FileReader();

        
        pim.style.display ="block";
        reader.addEventListener("load", function() {
          console.log("innn");
          pim.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);
      }
  
      //drawOnCanvas(file);   
  });*/
/*
  let bg1 = new Image();
  bg1.src = "bg1.svg";
  
  //let logo = new Image();
  ctx.drawImage(bg1, 0, 0, canvas.width, canvas.height);
  //ctx.fill();*/

  /*var gradient = ctx.createConicGradient(0, 100, 100);

// Add five color stops
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");



//Set the fill style and draw a rectangle*/
const logo = document.getElementById('prev-image');

//ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.fill();  
console.log("second");
  //ctx.moveTo(230,3);
//ctx.drawImage(logo, 230, 3, 50, 50);
  //ctx.shadowColor = 'lightblue';
  //ctx.shadowBlur = 5;
  
  ctx.fillStyle="#000";
  ctx.font = "bold italic 17px Arial";
  ctx.fillText(fname.innerHTML, 30, 39);
  ctx.fillText(lname.innerHTML, 90, 39);
  ctx.font = "italic 10px Arial";
  ctx.fillText(email.innerHTML, 40, 80);
  ctx.fillText(num.innerHTML,   40, 100);
  ctx.fillText(addr.innerHTML,   40, 120);
  ctx.fillText(city.innerHTML,   130, 120);
  ctx.fillText(state.innerHTML,   40, 140);
  ctx.fillText(zip.innerHTML,   120, 140);
  console.log("third");
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.bezierCurveTo(30,0,30, canvas.height, 0, canvas.height);
  ctx.fill(); 
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "yellow";
  ctx.moveTo(0,40);
  ctx.fillRect(0,50,110,10);
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = "white";
  ctx.fillRect(5, 70, 20, 10);      //for email
  ctx.fillRect(5, 90, 20, 10);      //for num
  ctx.fillRect(5, 110, 25, 10);     // for addr
  ctx.fillRect(5, 130, 25, 10);     // for state

  

  //Turn transparency on
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = "red";
  ctx.fillRect(30, 30, 75, 50);
  ctx.fillStyle = "blue"; 
  ctx.fillRect(60, 60, 75, 50); 
  ctx.fillStyle = "green"; 
  ctx.fillRect(90, 90, 75, 50);
  ctx.globalAlpha = 1.0;
  logo.onload = function () {
  
    ctx.drawImage(logo,220,3,80,80);
    console.log("first");
    }
    save();
  //ctx.drawImage(image, 10, 65, 80, 110);

  //const input = document.getElementById("img"); 
  //const pim = document.querySelector(".prev-image");

  /*input.addEventListener("change", function () {
    var file = input.files[0];
   if(file)
   {
        const reader = new FileReader();
        pim.style.display ="block";
          reader.addEventListener("load", function() {
          //console.log("innn");
          pim.setAttribute("src",this.result);
          })
              reader.readAsDataURL(file);
           }
          });*/
  
  
  //getElementById("result").disabled = true;
  
}

function createHiPPICanvas(w, h) {
  window.devicePixelRatio = 2;
  let ratio = window.devicePixelRatio;
  let cv = document.getElementById('result');
  cv.width = w * ratio;
  cv.height = h * ratio;
  cv.style.width = w + "px";
  cv.style.height = h + "px";
  cv.getContext("2d").scale(ratio, ratio);
  return cv;
}


function loadImage(event) {
  const logo = document.getElementById("prev-image");
  logo.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(r.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = r.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});
const r = document.getElementById("result");
const cl = document.getElementById("clear");
cl.addEventListener("click", function(){
  console.log("hi");
  var context = r.getContext("2d");
  context.clearRect(0, 0, r.width, r.height);
});


/*function drawOnCanvas(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
      var dataURL = e.target.result,
              c = document.getElementById("result"), 
              ctx = c.getContext('2d'),
              img = new Image();

      img.onload = function() {
          c.width = img.width;
          c.height = img.height;
          ctx.drawImage(img, 230, 3,50,50);
      };

      img.src = dataURL;
  };

  reader.readAsDataURL(file);
}*/


