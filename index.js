document.addEventListener('keydown', function(event){

    handleSounds(event.key);

});


function play(element){

    handleSounds(element.id);

}

function handleSounds(position){

    switch (position) {
        case 'first', 'a':

            var firstAudio = new Audio('sounds/a-3.mp3')
            firstAudio.play()

            break;
        case 'second', 'b':

            var secondAudio = new Audio('sounds/b-3.mp3')
            secondAudio.play()

            break;
        case 'third', 'c':

            var thirdAudio = new Audio('sounds/c-3.mp3')
            thirdAudio.play()

            break;
        case 'fourth', 'd':

            var fourthAudio = new Audio('sounds/d-3.mp3')
            fourthAudio.play()

            break;
        case 'fiveth', 'f':

            var fivethAudio = new Audio('sounds/f-3.mp3')
            fivethAudio.play()

            break;
        case 'sixth', 'g':

            var sixthAudio = new Audio('sounds/g-3.mp3')
            sixthAudio.play()

            break;
        case 'seventh', 'e':

            var seventhAudio = new Audio('sounds/e-3.mp3')
            seventhAudio.play()

            break;
        default:
            //console.log('nothing will happen');
    }
}
