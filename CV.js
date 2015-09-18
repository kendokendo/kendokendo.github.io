function start()
{
  var now = document.getElementById("now");
  now.innerHTML = Date();
}

function swap(){
 var picture = document.getElementById("picture");
 var file = picture.src;
 var pic1 = "Ken.jpg";
 var pic2 = "empty.jpg";

 if(file.indexOf(pic1) != -1)
 {
   //switch back to firt picture...
   picture.src = pic2;
 }
 else {
   picture.src = pic1;
 }



}
