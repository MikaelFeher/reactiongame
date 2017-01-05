setTimeout(reactionGame, 2000);

function reactionGame() {
    var shape, size, red, green, blue, x, y, randX, randY, start, myVar, time, e, elapsed, timeDelay;

    var target = document.getElementById('target');
    target.style.display = 'block';

    // Random numbers generator
    function randgen(num) {
        return Math.floor((Math.random()*num));
    }

    // Shape
    shape = Math.floor(Math.random()*2);
    if (shape === 0) {
        target.classList.add('circle');
    } else {
        target.classList.remove('circle');
    }

    // Size
    size = Math.floor((Math.random()*75)+75);
    target.style.height = size + 'px';
    target.style.width = size + 'px';

    // Color
    red = randgen(255);
    green = randgen(255);
    blue = randgen(255);
    target.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    // position
    randX = randgen(1000);
    randY = randgen(600);

    if (randX > size && randY > size) {
        x = randX - size;
        y = randY - size;
    } else if (randX > size && randY < size) {
        x = randX - size;
        y = randY + size;
    } else if (randX < size && randY > size) {
        x = randX + size;
        y = randY - size;
    } else {
        x = randX;
        y = randY;
    }
    target.style.top = y + 'px';
    target.style.left = x + 'px';

    // Timer
    start = new Date().getTime();

    myVar = window.setInterval(function() {
        time = new Date().getTime() - start;

        e = time / 1000;
        elapsed = e.toFixed(3);

        // document.getElementById('timer').innerHTML = elapsed + 's';

        console.log(elapsed);  // For testing...

    }, 1);

    timeDelay = randgen(2000);

    document.getElementById('target').onclick = function () {
        window.clearInterval(myVar);
        document.getElementById('result').innerHTML = elapsed + 's';
        target.style.display = 'none';
        setTimeout(reactionGame, timeDelay);
    };

    // Stop the game - Button
    document.getElementById('stop').onclick = function () {
        window.clearInterval(myVar);
        document.getElementById('result').innerHTML = 'GAME STOPPED!!!'
        document.getElementById('message').innerHTML = 'Click on the figure to start again.';

    };

};
