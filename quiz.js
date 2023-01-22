let counterVal = 1;
let res = 0;

document.getElementById('2answ').style.display = 'none';

function incrementClick() {
    updateDisplay(++counterVal);
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = true;

    document.getElementById('option1').disabled = false;
    document.getElementById('option2').disabled = false;
    document.getElementById('option3').disabled = false;
    document.getElementById('option4').disabled = false;

    document.getElementById('option5').disabled = false;
    document.getElementById('option6').disabled = false;
    document.getElementById('option7').disabled = false;
    document.getElementById('option8').disabled = false;
}

function updateDisplay(val) {
    switch (val) {
        
        case 2: 
            document.getElementById('counter-label').innerHTML = val;
            document.getElementById('question_text').innerHTML = 'What is the freezing point of water?';
            document.getElementById('opt4').style.background = "#0d6efd";
            document.getElementById('opt4').textContent = '-3';
            document.getElementById('opt3').style.background = "#0d6efd";
            document.getElementById('opt3').textContent = '-5';
            document.getElementById('opt2').style.background = "#0d6efd";
            document.getElementById('opt2').textContent = '0';
            document.getElementById('opt1').style.background = "#0d6efd";
            document.getElementById('opt1').textContent = '-6';

            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '1';
            document.getElementById('option3').value = '0';
            document.getElementById('option4').value = '0';

            break;

        case 3:
            document.getElementById('counter-label').innerHTML = val;
            document.getElementById('question_text').innerHTML = 'What is the longest river in the world?';
            document.getElementById('opt4').style.background = "#0d6efd";
            document.getElementById('opt4').textContent = 'Yangtze';
            document.getElementById('opt3').style.background = "#0d6efd";
            document.getElementById('opt3').textContent = 'Nile';
            document.getElementById('opt2').style.background = "#0d6efd";
            document.getElementById('opt2').textContent = 'Amazon';
            document.getElementById('opt1').style.background = "#0d6efd";
            document.getElementById('opt1').textContent = 'Yenisei';
    
            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '0';
            document.getElementById('option3').value = '1';
            document.getElementById('option4').value = '0';

            break;

        case 4:
            document.getElementById('counter-label').innerHTML = val;
            document.getElementById('question_text').innerHTML = 'How many chromosomes are in the human genome?';
            document.getElementById('opt4').style.background = "#0d6efd";
            document.getElementById('opt4').textContent = '48';
            document.getElementById('opt3').style.background = "#0d6efd";
            document.getElementById('opt3').textContent = '44';
            document.getElementById('opt2').style.background = "#0d6efd";
            document.getElementById('opt2').textContent = '46';
            document.getElementById('opt1').style.background = "#0d6efd";
            document.getElementById('opt1').textContent = '42';
    
            document.getElementById('option1').value = '0';
            document.getElementById('option2').value = '1';
            document.getElementById('option3').value = '0';
            document.getElementById('option4').value = '0';

            break;

        case 5:
            document.getElementById('counter-label').innerHTML = val;
            document.getElementById('ans').innerHTML = '2 answers options';
            document.getElementById('question_text').innerHTML = 'Which of these characters are friends with Harry Potter?';
            document.getElementById('1answ').style.display = 'none';
            document.getElementById('2answ').style.display = 'contents';

            break;
        
        case 6:
            let h5 = document.querySelector('h5');
            let parent = h5.parentNode;
            parent.removeChild(h5);
            document.getElementById('2answ').style.display = 'none';
            document.getElementById('btn1').style.display = 'none';
            document.getElementById('btn2').style.display = 'none';
            document.getElementById('question_text').style.fontSize = '30px';
            document.getElementById('question_text').innerHTML = 'Result';
            document.getElementById('ans').style.fontSize = '80px';
            document.getElementById('ans').innerHTML = res + '/5';
            $(document).ready(function() {
                $('#buttons').append('<button class="btn btn-secondary" id="btn3" style="width: 16vw; height: 5vh; background: rgb(82, 82, 146); border-color: rgb(82, 82, 146);" type="submit" onclick="returnn()">return</button>');
            });

            break;
        // case 6:
        //     document.getElementById('question_text').innerHTML = 'What chromosomes do male cells contain?';
        //     document.getElementById('opt5').style.background = "#0d6efd";
        //     document.getElementById('opt5').textContent = 'Z';
        //     document.getElementById('opt6').style.background = "#0d6efd";
        //     document.getElementById('opt6').textContent = 'X';
        //     document.getElementById('opt7').style.background = "#0d6efd";
        //     document.getElementById('opt7').textContent = 'A';
        //     document.getElementById('opt8').style.background = "#0d6efd";
        //     document.getElementById('opt8').textContent = 'Y';

        //     document.getElementById('option5').value = '0';
        //     document.getElementById('option6').value = '1';
        //     document.getElementById('option7').value = '0';
        //     document.getElementById('option8').value = '1';
    }; 
}

function check() {
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = false;
    if (counterVal < 5){
        let a = document.getElementById('option1');
        let b = document.getElementById('option2');
        let c = document.getElementById('option3');
        let d = document.getElementById('option4');
        if(a.checked == true && a.value == '1'){
            document.getElementById('opt1').style.background = "#68b867";
            res++;
        }
        else if (b.checked == true && b.value == '1'){
            document.getElementById('opt2').style.background = "#68b867";
            res++;
        }
        else if (c.checked == true && c.value == '1'){
            document.getElementById('opt3').style.background = "#68b867";
            res++;
        }
        else if (d.checked == true && d.value == '1'){
            document.getElementById('opt4').style.background = "#68b867";
            res++;
        }
        // kfvmkv?
        else if (a.checked == true && a.value == '0'){
            document.getElementById('opt1').style.background = "#915757";
        }
        else if (b.checked == true && b.value == '0'){
            document.getElementById('opt2').style.background = "#915757";
        }
        else if (c.checked == true && c.value == '0'){
            document.getElementById('opt3').style.background = "#915757";
        }
        else if (d.checked == true && d.value == '0'){
            document.getElementById('opt4').style.background = "#915757";
        }
    }
    else if (counterVal > 4){
        let a = document.getElementById('option5');
        let b = document.getElementById('option6');
        let c = document.getElementById('option7');
        let d = document.getElementById('option8');

        if (a.checked == true && b.checked == true && a.value == 1 && b.value == 1){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt6').style.background = "#68b867";
            res++;
        }
        else if (a.checked == true && c.checked == true && a.value == 1 && c.value == 1){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt7').style.background = "#68b867";
            res++;
        }
        else if (a.checked == true && d.checked == true && a.value == 1 && d.value == 1){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#68b867";
            res++;
        }
        else if (b.checked == true && c.checked == true && b.value == 1 && c.value == 1){
            document.getElementById('opt6').style.background = "#68b867";
            document.getElementById('opt7').style.background = "#68b867";
            res++;
        }
        else if (b.checked == true && d.checked == true && b.value == 1 && d.value == 1){
            document.getElementById('opt6').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#68b867";
            res++;
        }
        else if (c.checked == true && d.checked == true && c.value == 1 && d.value == 1){
            document.getElementById('opt7').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#68b867";
            res++;
        }
        // tgltlltgl
        else if (a.checked == true && b.checked == true && a.value == 1 && b.value == 0){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt6').style.background = "#915757";
        }
        else if (a.checked == true && c.checked == true && a.value == 1 && c.value == 0){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt7').style.background = "#915757";
        }
        else if (a.checked == true && d.checked == true && a.value == 1 && d.value == 0){
            document.getElementById('opt5').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#915757";
        }
        else if (b.checked == true && c.checked == true && b.value == 1 && c.value == 0){
            document.getElementById('opt6').style.background = "#68b867";
            document.getElementById('opt7').style.background = "#915757";
        }
        else if (b.checked == true && d.checked == true && b.value == 1 && d.value == 0){
            document.getElementById('opt6').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#915757";
        }
        else if (c.checked == true && d.checked == true && c.value == 1 && d.value == 0){
            document.getElementById('opt7').style.background = "#68b867";
            document.getElementById('opt8').style.background = "#915757";
        }
        // fdldlggl
        else if (a.checked == true && b.checked == true && a.value == 0 && b.value == 1){
            document.getElementById('opt5').style.background = "#915757";
            document.getElementById('opt6').style.background = "#68b867";
        }
        else if (a.checked == true && c.checked == true && a.value == 0 && c.value == 1){
            document.getElementById('opt5').style.background = "#915757";
            document.getElementById('opt7').style.background = "#68b867";
        }
        else if (a.checked == true && d.checked == true && a.value == 0 && d.value == 1){
            document.getElementById('opt5').style.background = "#915757";
            document.getElementById('opt8').style.background = "#68b867";
        }
        else if (b.checked == true && c.checked == true && b.value == 0 && c.value == 1){
            document.getElementById('opt6').style.background = "#915757";
            document.getElementById('opt7').style.background = "#68b867";
        }
        else if (b.checked == true && d.checked == true && b.value == 0 && d.value == 1){
            document.getElementById('opt6').style.background = "#915757";
            document.getElementById('opt8').style.background = "#68b867";
        }
        else if (c.checked == true && d.checked == true && c.value == 0 && d.value == 1){
            document.getElementById('opt7').style.background = "#915757";
            document.getElementById('opt8').style.background = "#68b867";
        }
    }
  
    document.getElementById('option1').disabled = true;
    document.getElementById('option2').disabled = true;
    document.getElementById('option3').disabled = true;
    document.getElementById('option4').disabled = true;

    document.getElementById('option5').disabled = true;
    document.getElementById('option6').disabled = true;
    document.getElementById('option7').disabled = true;
    document.getElementById('option8').disabled = true;
};

function returnn() {
    location.reload();
};