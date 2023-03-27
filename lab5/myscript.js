let square = document.getElementById("square");

function changeBoxSize() { 
    let widthBox = document.getElementById("width");
    let heightBox = document.getElementById("height");

    let widthValue = widthBox.value + "px";
    square.style.width = widthValue;

    let heightValue = heightBox.value + "px";
    square.style.height = heightValue;
};

function changeBorderSize() {
    let widthBorder = document.getElementById("border_width");

    let borderWidth = widthBorder.value + "px";
    square.style.borderWidth = borderWidth;

}

function greenBorder(){
    square.style.borderColor = "green";

}

function redBorder(){
    square.style.borderColor = "red";

}

function orangeBorder(){
    square.style.borderColor = "orange";
}

function solidBorder(){
    square.style.borderStyle = "solid";
}

function dottedBorder(){
    square.style.borderStyle = "dotted";
}

function dashedBorder(){
    square.style.borderStyle = "dashed";
}

function greenColor(){
    square.style.backgroundColor = "green";

}

function redColor(){
    square.style.backgroundColor = "red";

}

function orangeColor(){
    square.style.backgroundColor = "orange";
}