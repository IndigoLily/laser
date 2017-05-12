var x;
var y;
var prevX;
var prevY;
var count = 0;
var num1;
var num2;
var offset;

function setup() {
  let size = (windowWidth > windowHeight) ? windowHeight : windowWidth;
  size *= .8;
  createCanvas( size, size );
  offset = size * .4;
  background(0);
  num1 = Math.pow( 2, .5 );
  num2 = PI/3;
  prevX = sin( count * num1 ) * offset;
  prevY = cos( count * num2 ) * offset;
}

function draw() {
  background(0, 16);
  stroke( 8, 255, 32 );
  strokeWeight(3);
  for( let i = 0; i < 100; i++ ) {
    x = sin( count * num1 ) * offset;
    y = cos( count * num2 ) * offset;
    // x = map( noise( count * .1 ), 0, 1, -1, 1 ) * offset;
    // y = map( noise( count * .1 + 1 ), 0, 1, -1, 1 ) * offset;
    line( width/2 + x, height/2 + y, width/2 + prevX, height/2 + prevY );
    prevX = x;
    prevY = y;
    count += .001;
    // console.log( count );
    // if( count >= TAU ) {
    //   // stroke( 0, 255, 0 );
    //   // fill( 0, 255, 0 );
    //   // ellipse( width/2 + x, height/2 + y, 20, 20 );
    //   noLoop();
    //   break;
    // }
  }
}

// function mousePressed() {
//   background(0);
//   count = 0;
//   x = sin( count * num1 ) * offset;
//   y = cos( count * num2 ) * offset;
//   prevX = x;
//   prevY = y;
// }
