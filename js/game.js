function reactionGame() {
    var shape, size, red, green, blue, x, y, randX, randY, start, myVar, time, e, elapsed;
    var target = document.getElementById('target');

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
    red = Math.floor((Math.random()*255));
    green = Math.floor((Math.random()*255));
    blue = Math.floor((Math.random()*255));
    target.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    // position
    randX = Math.floor((Math.random()*1000));
    randY = Math.floor((Math.random()*600));

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

        e = ((time / 100) / 10);
        elapsed = e.toFixed(3);

        document.getElementById('timer').textContent = elapsed + 's';

        console.log(elapsed);  // For testing...

    }, 1);

    document.getElementById('target').onclick = function () {
        window.clearInterval(myVar);
        document.getElementById('result').textContent = elapsed + 's';
        reactionGame();
    };

    // Stop the game - Button
    document.getElementById('stop').onclick = function () {
        window.clearInterval(myVar);
        document.getElementById('result').innerHTML = 'GAME STOPPED!!!'
        document.getElementById('message').innerHTML = 'Click on the figure to start again.';

    };

};
