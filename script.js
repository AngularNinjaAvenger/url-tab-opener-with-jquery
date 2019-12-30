 
$("#add_button").on("click",()=>{
     let lsk  = $("input").val();
    let spa = $("span")
     if (lsk.length>7) {
        $("span").css("color","black");
        let loco = $("ul").val();
        let lisi = document.createElement("li");
     lisi.innerHTML= $("input").val();
    let ul = $("ul").append(lisi);
    } else {
        $("span").css("color","red");
        alert("enter a valid url")
    }
})
let lisa = document.getElementsByTagName("li");
function submit(){
     for(i=0;i<lisa.length;i++){
         window.open("http:\\www.google.com")
     }
}