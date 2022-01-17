const output = document.getElementById("systemout");
const input = document.getElementById("systemin");

function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

input.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        update();
    }
});

function update(){
    if(input.value.length>1){
        if(reverseString(input.value)===input.value){
            output.textContent = "True";
            output.style.color = "green";
        } else {
            output.textContent = "False";
            output.style.color = "red";
        }
    } else {
        output.textContent = "Input must be greater than 1 character";
        output.style.color = "red";
    }
}