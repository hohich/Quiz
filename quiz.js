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
            document.getElementById('opt4').style.background = "blueviolet";
            document.getElementById('opt4').textContent = '-3';
            document.getElementById('opt3').style.background = "blueviolet";
            document.getElementById('opt3').textContent = '-5';
            document.getElementById('opt2').style.background = "blueviolet";
            document.getElementById('opt2').textContent = '0';
            document.getElementById('opt1').style.background = "blueviolet";
            document.getElementById('opt1').textContent = '-6';

            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '1';
            document.getElementById('option3').value = '0';
            document.getElementById('option4').value = '0';

            break;

        case 3:
            document.getElementById('question_text').innerHTML = 'What is the longest river in the world?';
            document.getElementById('opt4').style.background = "blueviolet";
            document.getElementById('opt4').textContent = 'Yangtze';
            document.getElementById('opt3').style.background = "blueviolet";
            document.getElementById('opt3').textContent = 'Nile';
            document.getElementById('opt2').style.background = "blueviolet";
            document.getElementById('opt2').textContent = 'Amazon';
            document.getElementById('opt1').style.background = "blueviolet";
            document.getElementById('opt1').textContent = 'Yenisei';
    
            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '0';
            document.getElementById('option3').value = '1';
            document.getElementById('option4').value = '0';

            break;

        case 4:
            document.getElementById('question_text').innerHTML = 'How many chromosomes are in the human genome?';
            document.getElementById('opt4').style.background = "blueviolet";
            document.getElementById('opt4').textContent = '48';
            document.getElementById('opt3').style.background = "blueviolet";
            document.getElementById('opt3').textContent = '44';
            document.getElementById('opt2').style.background = "blueviolet";
            document.getElementById('opt2').textContent = '46';
            document.getElementById('opt1').style.background = "blueviolet";
            document.getElementById('opt1').textContent = '42';
    
            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '1';
            document.getElementById('option3').value = '0';
            document.getElementById('option4').value = '0';

            break;
    };
     
}

function check() {
    
    if(document.getElementById('option1').checked == true && document.getElementById('option1').value == '1'){
        document.getElementById('opt1').style.background = "#68b867";
    }
    else if (document.getElementById('option2').checked == true && document.getElementById('option2').value == '1'){
        document.getElementById('opt2').style.background = "#68b867";
    }
    else if (document.getElementById('option3').checked == true && document.getElementById('option3').value == '1'){
        document.getElementById('opt3').style.background = "#68b867";
    }
    else if (document.getElementById('option4').checked == true && document.getElementById('option4').value == '1'){
        document.getElementById('opt4').style.background = "#68b867";
    }
    // kfvmkv?
    else if (document.getElementById('option1').checked == true && document.getElementById('option1').value == '0'){
        document.getElementById('opt1').style.background = "#915757";
    }
    else if (document.getElementById('option2').checked == true && document.getElementById('option2').value == '0'){
        document.getElementById('opt2').style.background = "#915757";
    }
    else if (document.getElementById('option3').checked == true && document.getElementById('option3').value == '0'){
        document.getElementById('opt3').style.background = "#915757";
    }
    else if (document.getElementById('option4').checked == true && document.getElementById('option4').value == '0'){
        document.getElementById('opt4').style.background = "#915757";
    }


    document.getElementById('option1').disabled = true;
    document.getElementById('option2').disabled = true;
    document.getElementById('option3').disabled = true;
    document.getElementById('option4').disabled = true;
    document.getElementById('btn2').disabled = false;

};