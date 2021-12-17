function rock(){
    const compGuess= Math.floor(Math.random()*3);
    if (compGuess===0){
        document.getElementById('result').innerHTML=`It was a draw!`;
        document.getElementById('resultImage').src="./resources/icon-rock.svg";
    }
    else if (compGuess===1){
        document.getElementById('result').innerHTML=`Too Bad you lost!`;
        document.getElementById('resultImage').src="./resources/icon-paper.svg";
    }
    else {
        document.getElementById('result').innerHTML=`Congrats!! you won!`;
        document.getElementById('resultImage').src="./resources/icon-spock.svg";
    }
}
function paper(){
    const compGuess= Math.floor(Math.random()*3);
    if (compGuess===0){
        document.getElementById('result').innerHTML=`It was a draw!`;
        document.getElementById('resultImage').src="./resources/icon-paper.svg";
    }
    else if (compGuess===1){
        document.getElementById('result').innerHTML=`Too Bad you lost!`;
        document.getElementById('resultImage').src="./resources/icon-spock.svg";
    }
    else {
        document.getElementById('result').innerHTML=`Congrats!! you won!`;
        document.getElementById('resultImage').src="./resources/icon-rock.svg";
    }
}
function scissor(){
    const compGuess= Math.floor(Math.random()*3);
    if (compGuess===0){
        document.getElementById('result').innerHTML=`It was a draw!`;
        document.getElementById('resultImage').src="./resources/icon-spock.svg";
    }
    else if (compGuess===1){
        document.getElementById('result').innerHTML=`Too Bad you lost!`;
        document.getElementById('resultImage').src="./resources/icon-rock.svg";
    }
    else {
        document.getElementById('result').innerHTML=`Congrats!! you won!`;
        document.getElementById('resultImage').src="./resources/icon-paper.svg";
    }
}