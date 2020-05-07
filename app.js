window.addEventListener('load', function(){
    const boxes = document.querySelectorAll('.boxes div');
    const sounds = document.querySelectorAll('.sound');
    const Visual = document.querySelector('.Visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
     ];


    //playing the sound
    boxes.forEach((box,index) => {
        box.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
        
    });

    //creating a bubble jumping
    const createBubbles = function(index){
        const bubble = document.createElement("div");
        Visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';



    };
});