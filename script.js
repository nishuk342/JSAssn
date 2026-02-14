function colorBox1(){
    const box1= document.getElementById("box-1")
    box1.style.backgroundColor="red"
}

function colorBox2(){
    const box2= document.getElementById("box-2")
    box2.style.backgroundColor="blue"
}

function colorBox3(){
    const box3= document.getElementById("box-3")
    box3.style.backgroundColor="green"
}

function colorBox4(){
    const box4= document.getElementById("box-4")
    box4.style.backgroundColor="yellow"
}

function greetText(){
    const inputText = document.getElementById("name")
    var text = inputText.value;

    document.getElementById("head").textContent = "Hello " + text + "!";

    setTimeout(() => {
    window.location.reload();
  }, 5000);

}

