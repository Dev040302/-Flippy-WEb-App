var storage = firebase.storage();
var storageRef = storage.ref()

$('#List').find('tbody').html('');

var i=0;

storageRef.child('Assignments/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        i++;
        displayImage(i,imageRef);
    });
});

function displayImage(row,images){
//downloaded images 

images.getDownloadURL().then(function(url){

console.log(url);

let new_html = '';
new_html+='<tr>';
new_html+='<td>';
new_html+=row;
new_html+='</td>';
new_html+='<td>';
new_html+='<img src = "'+url+'" width="100px" >'
new_html+='</td>';
new_html+='</tr>';
$('#List').find('tbody').append(new_html);

});

}
