/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
var red = PS.COLOR_RED;
var yellow = PS.COLOR_YELLOW;
var orange = PS.COLOR_ORANGE;
var green = PS.COLOR_GREEN;
var blue = PS.COLOR_BLUE;
var indigo = 0x1F0954;
var violet = 0x9400d3;

const leftColors = [];
leftColors.push(red,orange,yellow,green,blue,indigo,violet);

var redX, redY;
var yellowX,yellowY;
var orangeX,orangeY;
var greenX,greenY;
var blueX,blueY;
var indigoX,indigoY;
var violetX,violetY;

var status = "ROYGBIV";
var level=1;

PS.init = function( system, options ) {

    PS.statusText(status);
    // Uncomment the following code line
    // to verify operation:

    // PS.debug( "PS.init() called\n" );

    // This function should normally begin
    // with a call to PS.gridSize( x, y )
    // where x and y are the desired initial
    // dimensions of the grid.
    // Call PS.gridSize() FIRST to avoid problems!
    // The sample call below sets the grid to the
    // default dimensions (8 x 8).
    // Uncomment the following code line and change
    // the x and y parameters as needed.

    PS.gridSize(10, 10);

    redX = Math.floor(Math.random()*9);
    redY = Math.floor(Math.random()*9)
    PS.color(redX,redY,red);

    orangeX = Math.floor(Math.random()*9);
    orangeY = Math.floor(Math.random()*9);
    PS.color(orangeX,orangeY,orange);

    yellowX = Math.floor(Math.random()*9);
    yellowY = Math.floor(Math.random()*9);
    PS.color(yellowX,yellowY,yellow);

    greenX = Math.floor(Math.random()*9);
    greenY = Math.floor(Math.random()*9);
    PS.color(greenX,greenY,green);

    blueX = Math.floor(Math.random()*9);
    blueY = Math.floor(Math.random()*9);
    PS.color(blueX,blueY,blue);

    indigoX = Math.floor(Math.random()*9);
    indigoY = Math.floor(Math.random()*9);
    PS.color(indigoX,indigoY,indigo);

    violetX = Math.floor(Math.random()*9);
    violetY = Math.floor(Math.random()*9);
    PS.color(violetX,violetY,violet);

    // This is also a good place to display
    // your game title or a welcome message
    // in the status line above the grid.
    // Uncomment the following code line and
    // change the string parameter as needed.

    // PS.statusText( "Game" );

    // Add any other initialization code you need here.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
    // Uncomment the following code line
    // to inspect x/y parameters:

    // PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

    // Add code here for mouse clicks/touches
    if(PS.color(x,y)===leftColors[0]){
        status = status.substring(1);
        PS.statusText(status);
        leftColors.shift();
        PS.color(x,y,PS.COLOR_WHITE);
        if(status===""){
            level++;
            if(level===4){
                PS.statusText("CONGRATS YOU WIN, REFRESH TO TRY AGAIN OR SOLVE FASTER");
            }else{
                spawn();
            }
        }
    }else if(PS.color(x,y)===PS.COLOR_WHITE){

    }else{
        PS.statusText("GAME OVER, REFRESH TO TRY AGAIN");
    }

    // over a bead.
};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
    // Uncomment the following code line to inspect x/y parameters:

    // PS.debug( "PS.release() @ " + x + ", " + y + "\n" );


    // Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
    // Uncomment the following code line to inspect x/y parameters:

    // PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

    // Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
    // Uncomment the following code line to inspect x/y parameters:

    // PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

    // Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
    // Uncomment the following code line to verify operation:

    // PS.debug( "PS.exitGrid() called\n" );

    // Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {
    // Uncomment the following code line to inspect first three parameters:

    // PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );


    // Add code here for when a key is pressed.
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
    // Uncomment the following code line to inspect first three parameters:

    // PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

    // Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
    // Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

    // Add code here for when an input event is detected.
};

function spawn(){
    var pink = 0xFFC0CB;
    var lime = 0x8cc43c;
    var cyan = 0x5bc0de;
    var magenta = 0xff00ff;
    var amber = 0xFFBF00;
    if(level===2){
        PS.gridSize(15,15);
        status = "RPOYLGCBIV";
        leftColors.push(red,pink,orange,yellow,lime,green,cyan,blue,indigo,violet);
        PS.statusText(status);
        redX = Math.floor(Math.random()*14);
        redY = Math.floor(Math.random()*14)
        PS.color(redX,redY,red);

        var pinkX = Math.floor(Math.random()*14);
        var pinkY = Math.floor(Math.random()*14);
        PS.color(pinkX,pinkY,pink);

        orangeX = Math.floor(Math.random()*14);
        orangeY = Math.floor(Math.random()*14);
        PS.color(orangeX,orangeY,orange);

        yellowX = Math.floor(Math.random()*14);
        yellowY = Math.floor(Math.random()*14);
        PS.color(yellowX,yellowY,yellow);

        var limeX = Math.floor(Math.random()*14);
        var limeY = Math.floor(Math.random()*14);
        PS.color(limeX,limeY,lime);

        greenX = Math.floor(Math.random()*14);
        greenY = Math.floor(Math.random()*14);
        PS.color(greenX,greenY,green);

        var cyanX = Math.floor(Math.random()*14);
        var cyanY = Math.floor(Math.random()*14);
        PS.color(cyanX,cyanY,cyan);

        blueX = Math.floor(Math.random()*14);
        blueY = Math.floor(Math.random()*14);
        PS.color(blueX,blueY,blue);

        indigoX = Math.floor(Math.random()*14);
        indigoY = Math.floor(Math.random()*14);
        PS.color(indigoX,indigoY,indigo);

        violetX = Math.floor(Math.random()*14);
        violetY = Math.floor(Math.random()*14);
        PS.color(violetX,violetY,violet);
    }else if(level===3){
        PS.gridSize(20,20);
        status = "RPOYALGCBIMV";
        leftColors.push(red,pink,orange,yellow,amber,lime,green,cyan,blue,indigo,magenta,violet);
        PS.statusText(status);
        redX = Math.floor(Math.random()*19);
        redY = Math.floor(Math.random()*19)
        PS.color(redX,redY,red);

        var pinkX = Math.floor(Math.random()*19);
        var pinkY = Math.floor(Math.random()*19);
        PS.color(pinkX,pinkY,pink);

        orangeX = Math.floor(Math.random()*19);
        orangeY = Math.floor(Math.random()*19);
        PS.color(orangeX,orangeY,orange);

        yellowX = Math.floor(Math.random()*19);
        yellowY = Math.floor(Math.random()*19);
        PS.color(yellowX,yellowY,yellow);

        var amberX = Math.floor(Math.random()*19);
        var amberY = Math.floor(Math.random()*19);
        PS.color(amberX,amberY,amber);

        var limeX = Math.floor(Math.random()*19);
        var limeY = Math.floor(Math.random()*19);
        PS.color(limeX,limeY,lime);

        greenX = Math.floor(Math.random()*19);
        greenY = Math.floor(Math.random()*19);
        PS.color(greenX,greenY,green);

        var cyanX = Math.floor(Math.random()*19);
        var cyanY = Math.floor(Math.random()*19);
        PS.color(cyanX,cyanY,cyan);

        blueX = Math.floor(Math.random()*19);
        blueY = Math.floor(Math.random()*19);
        PS.color(blueX,blueY,blue);

        indigoX = Math.floor(Math.random()*19);
        indigoY = Math.floor(Math.random()*19);
        PS.color(indigoX,indigoY,indigo);

        var magentaX = Math.floor(Math.random()*19);
        var magentaY = Math.floor(Math.random()*19);
        PS.color(magentaX,magentaY,magenta);

        violetX = Math.floor(Math.random()*19);
        violetY = Math.floor(Math.random()*19);
        PS.color(violetX,violetY,violet);
    }
};

