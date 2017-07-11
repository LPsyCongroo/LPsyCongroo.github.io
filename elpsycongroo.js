(function(){

    // The following is for Future Gadget Lab Members only.

    const readingSteiner = document.querySelector("#steinsGate");
    
    const code = ['e','l', 'p', 's', 'y', 'c', 'o', 'n', 'g', 'r', 'o', 'o'];
    const pressed = [];

    window.addEventListener('keyup', (e) => {
        console.time('start func')
        pressed.push(e.key);
        pressed.splice(-code.length - 1, pressed.length - code.length);
        if(code.every((v,i)=> v === pressed[i])) {
            readingSteiner.style.display = 'block';
            console.timeEnd('start func');
        }
    });
    
    const abort = document.querySelector("#steinsGate button");
    abort.addEventListener('click', function(){
        readingSteiner.style.display = "none";
    });

})();