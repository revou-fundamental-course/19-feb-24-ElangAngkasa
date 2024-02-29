//var sama let bisa mengubah id
//const tidak bisa diganti-> untuk menangani hacker

function repalceName(){
    let namep = prompt("Namamu siapa bang?","");
    document.getElementById("namep").innerHTML = namep
}
repalceName();

let tombol = document.getElementById("tombol")
tombol.addEventListener("click", function(){
    repalceName();
})