let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

var storage = firebase.storage();
var storageRef = storage.ref()

var i=0;
var ids=['0','1','2','3','4','5','6','7','8']

storageRef.child('Assignments/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        i++;
        displayImage(i,imageRef);
    });
});

function displayImage(row,images){

images.getDownloadURL().then(function(url){
  var y=row.toString();
document.getElementById(ids[row]).src=url;
//document.getElementById('5').src='images/git.png';

});

}
