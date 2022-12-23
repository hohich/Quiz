function check() {
    if(document.getElementById('option1').checked == true){
        document.getElementById('true1').style.background = "#68b867";
    }
    else if (document.getElementById('option2').checked == true){
        document.getElementById('false1').style.background = "#915757"
        document.getElementById('true1').style.background = "#68b867";
    }
    else if (document.getElementById('option3').checked == true){
        document.getElementById('false2').style.background = "#915757"
        document.getElementById('true1').style.background = "#68b867";
    }
    else{
        document.getElementById('false3').style.background = "#915757"
        document.getElementById('true1').style.background = "#68b867";
    }
    document.getElementById('option1').disabled = true;
    document.getElementById('option2').disabled = true;
    document.getElementById('option3').disabled = true;
    document.getElementById('option4').disabled = true;
    document.getElementById('btn2').disabled = false;
};

let counterVal = 1;

function incrementClick() {
    updateDisplay(++counterVal);
    document.getElementById('btn2').disabled = true;

    document.getElementById('option1').disabled = false;
    document.getElementById('option2').disabled = false;
    document.getElementById('option3').disabled = false;
    document.getElementById('option4').disabled = false;
}

function updateDisplay(val) {
    document.getElementById('counter-label').innerHTML = val;
    switch (val) {
        case 2: 
        document.getElementById('question_text').innerHTML = 'What is the freezing point of water?';
        

        // case 3: 'two'
      };
     
}