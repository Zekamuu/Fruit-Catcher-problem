class Form {
    constructor() {
        this.input = createInput("Name");
        this.playButton = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.resetButton = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.playButton.position(560, 500);
        this.playButton.style('width', '200px');
        this.playButton.style('height', '40px');
        this.playButton.style('background', 'lightpink');
        this.resetButton.position(900, 660);
        this.resetButton.style('width', '100px');
        this.resetButton.style('height', '30px');
        this.resetButton.style('background', 'lightpink');

        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400, 250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        /* reset.mousePressed() will update fields in dattabase as follows: -- gameState to 0(ZERO) -- playerCount to 0(ZERO) button.mousePressed() can be used to trigger an action when a mouse button is pressed. It expects a function as an argument. The code to display a greeting and update the database when button is pressed. Arrow functions bind the function to the original object which calls it. Here mousePressed is called inside the display function which is called by the formObj object. ()=> Arrow function ensures that 'this' remains bound to the formObj object. */
        this.resetButton.mousePressed(() => {
             /* function call to change existing value of playerCount to a new one based on the value of paramter passed in the database */ 
             player.updateCount(0); /* function call to change existing value of gameState to a new one based on the value of paramter passed in the database
             */ game.update(0); /* function definition to delete records of all 4 player */ 
            //  Player.deletePlayerInfo(); /* function definition to change existing value of CarsAtEnd to a new one based on the value of paramter passed in the database */ 
            //  Player.updateCarsAtEnd(0); 
                database.ref('/').set({
                    gameState:0,
                    playerCount:0
                });
        }); }
    }
