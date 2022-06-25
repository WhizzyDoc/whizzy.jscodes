var fn = document.getElementById("fn");
var mn = document.getElementById("mn");
var ln = document.getElementById("ln");
var fullname = document.getElementById("fullname");
var dob = document.getElementById("dob");
var dob1 = document.getElementById("dob1");
var gender = document.getElementById("gender");
var gender1 = document.getElementById("gender1");
var country = document.getElementById("nationality");
var country1 = document.getElementById("nationality1");
var org = document.getElementById("org");
var org1 = document.getElementById("org1");
var site = document.getElementById("site");
var site1 = document.getElementById("site1");
var occupation = document.getElementById("occupation");
var occupation1 = document.getElementById("occupation1");
var photo = document.getElementById("photo");
var color = document.getElementById("color");
var tcolor = document.getElementById("tcolor");
var ID = document.getElementById("id");
var IDR = document.getElementById("idr");
var detail = document.getElementById("detail");



function readFile() {
         var reader = new FileReader();
         var file = photo.files[0];
   
         reader.onload = function(e) {
            document.getElementById('result').src = e.target.result;
            document.getElementById("picture").src = e.target.result;
         }
   
         reader.readAsDataURL(file);
      }



function createID() {
  ID.style.display = "block";
  IDR.style.display = "none";
  ID.style.backgroundColor = color.value;
  detail.style.color = tcolor.value;
  org1.innerHTML = org.value;
  site1.innerHTML = site.value;
  fullname.style.textTransform = "uppercase";
  fullname.innerHTML = ln.value + " " + mn.value + " " + fn.value;
  dob1.innerHTML = dob.value;
  gender1.innerHTML = gender.value;
  country1.innerHTML = country.value;
  occupation1.innerHTML = occupation.value;
}
