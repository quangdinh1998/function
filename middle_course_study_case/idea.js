let engWords = ['dog','cat','fish','cow','chicken','tiger'];
    let viWords = ['chó','mèo','cá','bò','gà','hổ'];
    
    let i = 0;
    
    function previous_btn() {
        if (i > 0) {
            i-=1;
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } else if ( i === 0) {
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        }
    }

    function next_btn() {
        if (i === engWords.length -1) {
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } else if ( i < engWords.length - 1) {
            i+=1;
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        }
    }
    
    function answer_btn() {
        document.getElementById('display_word').innerHTML = viWords[i];
    }


    function getNewEng() {
        document.getElementById('display_word_div').innerHTML = '<input type="text" id="inputValueEng" placeholder = "Input English">'
    }

    function addANewEngWord() {
        let engWord = document.getElementById('inputValueEng').value;
        document.getElementById('display_word_div').innerHTML = '<p id="display_word" >';
        engWords.push(engWord);
        console.log(engWords);
    }
    
    function getNewVi() {
        document.getElementById('display_word_div').innerHTML = '<input type="text" id="inputValueVi" placeholder = "Input Vietnamese">'
    }
    function saveThisMean() {
        let viWord = document.getElementById('inputValueVi').value;
        document.getElementById('display_word_div').innerHTML = '<p id="display_word">';
        viWords.push(viWord);
        console.log(viWords);
    }
    
    function deleteThisWord() {
        engWords.splice(i,1);
        viWords.splice(i,1);
        
        if (i > 0) {
            i-=1;
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } else if ( i === 0) {
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } else if (i === engWords.length -1) {
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } else if ( i < engWords.length - 1) {
            i+=1;
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
        } 

        if (engWords.length === 0) {
            document.getElementById('display_word').innerHTML = engWords[i];
            document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
            alert(' Your project is empty');
        }
        
    }

    function startTheLesson() {
        alert('Start your lesson!!!')
        document.getElementById('display_word_div').innerHTML = '<p id="display_word">';
        document.getElementById('display_word').innerHTML = engWords[0];
        document.getElementById('slide').innerHTML = 'Slide ' + (0+1) + ' / ' + engWords.length;
    }

    function getRandomWord() {
        i = Math.floor(Math.random() * engWords.length);
        document.getElementById('display_word').innerHTML = engWords[i];
        document.getElementById('slide').innerHTML = 'Slide ' + (i+1) + ' / ' + engWords.length;
    }

    function finishTheLesson() {
        alert('Compeleted!!!');
        alert('Good luck and see you soon!');
    }