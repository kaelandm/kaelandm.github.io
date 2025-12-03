
//UI class
let ui;

//tile class
let tile;
var tiles =[];

//walls class
let walls;

//window class
let windo;

//floor class
let floor;

//renderer class
let rendering;

//width and height of open screen
var width;
var height;

//reference img var
var grid;
var back;

//family img var
var cat;

//object img var
var beanbag;
var bed;
var bedsideTable;
var bookshelf;
var desk;
var doublebed;
var kitchen;
var tv;

//wall img var
var blueWall;
var greenWall;
var whiteWall;
var yellowWall;

//floor img var
var hardwood;

//family img var
var catIcon;

//object img var
var beanbagIcon;
var bedIcon;
var bedsideTableIcon;
var bookshelfIcon;
var deskIcon;
var doublebedIcon;
var kitchenIcon;
var tvIcon;

//wall img var
var blueWallIcon;
var greenWallIcon;
var whiteWallIcon;
var yellowWallIcon;

//floor img var
var hardwoodIcon;

//interactions
var buttons = new Array(26);
var hiddenButtons = new Array(2);
var soundButton;
//icons array
var icons = new Array(27);
//image array 
var img = new Array(26);

//animation images
var ani = new Array(1);

//time biz
var hours;
var seconds;
var start;
var elapsed;
var aniSwitch;

//soundBiz
var backing1;
var backing2;
var backing3;
var clickSound;
var startPlay;
var bp2;
var bp3;
var value;

function preload(){

//preload reference images
//grid = loadImage('assets/grid.png');
back = loadImage('assets/box.png');

//preload family images
img[0] = loadImage('assets/cat.png');
img[1] = loadImage('assets/dog.png');
//preload object images
img[2] = loadImage('assets/beanbag.png');
img[3] = loadImage('assets/bed.png');
img[4] = loadImage('assets/bedside-table.png');
img[5] = loadImage('assets/bookshelf.png');
img[6] = loadImage('assets/desk.png');
img[7] = loadImage('assets/double-bed.png');
img[8] = loadImage('assets/kitchen.png');
img[9] = loadImage('assets/television.png');
//preload wall images
img[10] = loadImage('assets/wall-blue.png');
img[11] = loadImage('assets/wall-green.png');
img[12] = loadImage('assets/wall-white.png');
img[13] = loadImage('assets/wall-yellow.png');
//preload floor images
img[14] = loadImage('assets/floor-hardwood.png');
img[15] = loadImage('assets/floor-hardwood-dark.png');
img[16] = loadImage('assets/floor-carpet-blue.png');
img[17] = loadImage('assets/floor-carpet-green.png');
img[18] = loadImage('assets/floor-carpet-yellow.png');
img[19] = loadImage('assets/floor-tile-blue.png');
img[20] = loadImage('assets/floor-tile-green.png');
img[21] = loadImage('assets/floor-tile-yellow.png');
img[22] = loadImage('assets/garden-flowers.png');
img[23] = loadImage('assets/garden-veggies.png');
img[24] = loadImage('assets/window-day.png');
img[25] = loadImage('assets/tree-day.png');
img[26] = loadImage('assets/logo-day.png');
img[27] = loadImage('assets/logo-twilight.png');
img[28] = loadImage('assets/logo-night.png');
//animation images
ani[0] = loadImage('assets/cat-2.png');
ani[1] = loadImage('assets/dog-2.png');
ani[2] = loadImage('assets/garden-outside-day.png');
ani[3] = loadImage('assets/garden-outside-twilight.png');
ani[4] = loadImage('assets/garden-outside-night.png');
ani[5] = loadImage('assets/window-day.png');
ani[6] = loadImage('assets/window-twilight.png');
ani[7] = loadImage('assets/window-night.png');
ani[8] = loadImage('assets/tree-day.png');
ani[9] = loadImage('assets/tree-twilight.png');
ani[10] = loadImage('assets/tree-night.png');

//preload family icon
icons[0] = loadImage('assets/icons/cat.png');
icons[1] = loadImage('assets/icons/dog.png');
//preload object icon
icons[2] = loadImage('assets/icons/beanbag.png'); 
icons[3] = loadImage('assets/icons/bed.png');
icons[4] = loadImage('assets/icons/bedside-table.png');
icons[5] = loadImage('assets/icons/bookshelf.png');
icons[6] = loadImage('assets/icons/desk.png');
icons[7] = loadImage('assets/icons/double-bed.png');
icons[8] = loadImage('assets/icons/kitchen.png');
icons[9] = loadImage('assets/icons/television.png');
//preload wall icon
icons[10] = loadImage('assets/icons/wall-blue.png');
icons[11] = loadImage('assets/icons/wall-green.png');
icons[12] = loadImage('assets/icons/wall-white.png');
icons[13] = loadImage('assets/icons/wall-yellow.png');
//preload floor icon
icons[14] = loadImage('assets/icons/floor-hardwood.png');
icons[15] = loadImage('assets/icons/floor-hardwood-dark.png');
icons[16] = loadImage('assets/icons/floor-carpet-blue.png');
icons[17] = loadImage('assets/icons/floor-carpet-green.png');
icons[18] = loadImage('assets/icons/floor-carpet-yellow.png');
icons[19] = loadImage('assets/icons/floor-tile-blue.png');
icons[20] = loadImage('assets/icons/floor-tile-green.png');
icons[21] = loadImage('assets/icons/floor-tile-yellow.png');
icons[22] = loadImage('assets/icons/garden-flowers.png');
icons[23] = loadImage('assets/icons/garden-veggies.png');
icons[24] = loadImage('assets/icons/window.png');
icons[25] = loadImage('assets/icons/window-tree.png');
icons[26] = loadImage('assets/icons/speaker.png');

  //load audio samples
  backing1 = loadSound('assets/sounds/backing1.mp3');
  backing2 = loadSound('assets/sounds/backing2.mp3');
  backing3 = loadSound('assets/sounds/backing3.mp3');
  clickSound = loadSound('assets/sounds/clickSelect.mp3');
}

function setup() {
  //standard biz
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  width = window.innerWidth;
  height = window.innerHeight;

  //allow sound
  startPlay = true;
  bp2 = true;
  bp3 = true;
  value = 27;

  ///create yo' walls 
  walls = new Wall();
  //create yo windows
  windo = new Windo();
  //create yo' floor
  floor = new Floor();

  //create grid of tile classes
  for(var i = 0; i < 4; i++){
    //tiles[i] = new Tile(i,0);
    tiles[i] = [];
    for(var j = 0; j < 4; j++){
      tiles[i][j] = new Tile(i,j);
    }
  }

  //buttons
  var spacing = width / 16;
  for (var i = 0; i <= 13; i++) {
    buttons[i] = new Button((i*spacing)+spacing*1.25, height/8 * 6, 16, 16, icons[i]);
  }
  for (var i = 14; i <= 26; i++) {
    buttons[i] = new Button(((i-13)*spacing)+spacing*1.25, height/8 *6.5 , 16, 16,icons[i]);
  }
  hiddenButtons[0] = new Button(width-32,0, 32,32, icons[0]);
  hiddenButtons[1] = new Button(width-64,0,32,32, icons[1]);
  soundButton = new Button(8, 80, 32, 32, icons[26]);
  

  rendering = new Rendering();
  //Drab background cube
  image(back, width/2 - 128, height/2 -144);  
  
}

function draw() {
  width = window.innerWidth;
  height = window.innerHeight;
  background(255);

  //reference images
  image(back, width/2 -128, height/2 -144 );  
  //image(grid,width/2 - 128, height/2 -128);

  // get updated time and switch animation frames
  seconds = second();
  hours = hour();
  //sweep the computation under a rug...
  rendering.everything();
  //add the last minute logo
  logo();

//secret squirrel biz
if(hiddenButtons[0].on == true){
  for(var i = 0; i <=3; i++){
    for(var j = 0; j <=3; j++){
      tiles[i][j].display(img[0], true);
    }
  }
}
if(hiddenButtons[1].on == true){
  for(var i = 0; i <=3; i++){
    for(var j = 0; j <=3; j++){
      tiles[i][j].display(img[1], true);
    }
  }
}
//image(icons[26],0,0);
soundButton.display();
if (soundButton.on == true && startPlay == true){
  backing1.play();
}

}

function logo(){
  if(hours >= 7 && hours < 18){
    image(img[26],8, 8);
  }   
  else if(hours <7 && hours >= 6 || hours <19 && hours >= 18  ) {
    image(img[27], 8, 8);
  } else{
    image(img[28],8,8);
  }
}

function mousePressed() {
  //run the soundFunctions from mousePress();
  sounds();
  // When the mouse is pressed, we must check every single button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click(mouseX, mouseY);
  }
  for (var i = 0; i <hiddenButtons.length ; i++) {
    hiddenButtons[i].click(mouseX, mouseY);
  }
  soundButton.click(mouseX,mouseY);

}
function sounds(){

  //set rates
  backing1.rate(1);
  backing2.rate(1);
  backing3.rate(1);
  clickSound.rate(1);
  //only play sound once upon first click
  if(startPlay == true){
    backing1.amp(1);
    backing2.amp(0);
    backing3.amp(0);
    backing1.play();
    backing1.loop();
    backing2.play();
    backing2.loop();
    backing3.play();
    backing3.loop();
    startPlay =false;
  }
//counter for button presses
value=26;
//make a neat click if player uses a button
if(startPlay == false){
  for(var i = 0; i < buttons.length; i++){
    if(buttons[i].on == true){
      value++;
      clickSound.play();
    }
    else if(buttons[i].on == false){
      value--;
      clickSound.play();
    }
  }
  if(value >= 4 && bp2 == true){
    backing2.amp(1);
    bp2 = false;
  }
  if(value >= 10 && bp3 == true){
    backing3.amp(1);
    bp3 = false;
  }
  if(value < 4){
    backing2.amp(0);
    bp2 = true;
  }  
  if(value < 10){
    backing3.amp(0);
    bp3 = true;
  }  
}
}
class Tile{
  constructor(column,row){
    this.column = column;
    this.row = row;
  }
  
  display(item, show){
    this.item = item;
    this.show = show;
    imageMode(CORNER);
    //putting the items on any part of the grid
    for(var r = 0; r < tiles.length; r++){
      var adjW = 128 - (32*this.row);
      var adjH = 16 * this.row;
      this.x = (width / 2) - (adjW - (this.column * 32));
      this.y = height/ 2 - (this.column * 16)+adjH;
    }
     //show or not show item
     if(show == true){

      if(this.item == img[4]){
        image(this.item, this.x-4, this.y-118);
      } 
      else if(this.item == img[5]){
        image(this.item, this.x, this.y-124);
      }
      else if(this.item == img[6]){
        image(this.item, this.x-8, this.y-124);
      } 
      else if(this.item == img[8]){
        image(this.item, this.x, this.y-76);
      } 
      else if(this.item == img[9]){
        image(this.item, this.x-12, this.y-122);
      } 
      else if(this.item == img[22] ||this.item == img[23]  ){
        image(this.item, this.x, this.y-125);
      } 

      else{
        image(this.item, this.x, this.y-108);
      }
    } 
  }
}

class Wall{
  constructor(){
  }
  build(colour){
    this.colour = colour;
    this.x = width / 2 - 128;
    this.y = height/ 2-143;
    image(this.colour, this.x, this.y);
  }
}

class Windo{
  constructor(){
  }
  build(colour){
    this.colour = colour;

    if(this.colour == img[24]){
      this.x = width / 2 + 31;
      this.y = height/ 2 - 104;
    } else  if(this.colour == img[25]){
      this.x = width / 2 + 44;
      this.y = height/ 2 - 102;
    } else if(this.colour == ani[5]){
      this.x = width / 2 + 31;
      this.y = height/ 2 - 106;
    } else if(this.colour == ani[6]){
      this.x = width / 2 + 31;
      this.y = height/ 2 - 106;
    } else if(this.colour == ani[7] ){
      this.x = width / 2 + 40;
      this.y = height/ 2 - 106;
    }  else if(this.colour == ani[8] || this.colour == ani[9] || this.colour == ani[10] ){
      this.x = width / 2 + 44;
      this.y = height/ 2 - 104;
    }  
    else{
      this.x = width / 2 - 130;
      this.y = height/ 2 - 123;
    }
    image(this.colour, this.x, this.y);
  }
}

class Floor{
  constructor(){
  }
  build(material){
    this.material = material;
    this.x = width / 2 - 128;
    this.y = height/ 2 - 15;
    image(this.material, this.x, this.y);
  }
}
class Rendering{
  constructor(){

  } 
  everything(){

   if(seconds % 2){
    aniSwitch = !aniSwitch;
  }

  //floor buttons
  for(var i = 14; i < 22; i++){
   buttons[i].display();
   if(buttons[i].on == true){
    floor.build(img[i]);
  }
}   
    //wall buttons 
    for (var i = 10; i < 14; i++) {
      buttons[i].display();
      if(buttons[i].on == true){
        walls.build(img[i]);
      } 
    }

    //window buttons
    for(var i = 24; i <= 25; i++){
     buttons[i].display();
     if(buttons[i].on == true){
      //windo.build(img[i]);
    }    
  } 

  //set garden time
  if(buttons[22].on == true || buttons[23].on == true){
    if(hours >= 7 && hours < 18){
      windo.build(ani[2]);
    }   
    else if(hours <7 && hours >= 6 || hours <19 && hours >= 18  ) {
      windo.build(ani[3]);
    } else{
      windo.build(ani[4]);
    }
  }
  if(buttons[24].on == true){
    if(hours >= 7 && hours < 18){
      windo.build(ani[5]);
    }   
    else if(hours <7 && hours >= 6 || hours <19 && hours >= 18  ) {
      windo.build(ani[6]);
    } else{
      windo.build(ani[7]);
    }
  }
  if(buttons[25].on == true){
    if(hours >= 7 && hours < 18){
      windo.build(ani[8]);
    }   
    else if(hours <7 && hours >= 6 || hours <19 && hours >= 18  ) {
      windo.build(ani[9]);
    } else{
      windo.build(ani[10]);
    }
  }

//item buttons 
for (var i = 0; i < 10; i++) {
  buttons[i].display();
}
for (var i = 22; i < 24; i++) {
  buttons[i].display();
}
    //cat
    if(buttons[0].on == true){  
      if(aniSwitch == true){
        tiles[0][2].display(img[0],buttons[0].on);
      }  else{
        tiles[0][2].display(ani[0],buttons[0].on);
      } 
    }
   //dog   
   if(buttons[1].on == true){   
    if(aniSwitch == true){ 
      tiles[0][3].display(img[1],buttons[1].on);
    } else{
     tiles[0][3].display(ani[1],buttons[1].on);
   }
 }
    //beanbag 
    if(buttons[2].on == true){    
      tiles[2][2].display(img[2],buttons[2].on);
    }
     //bed 
     if(buttons[3].on == true){    
      tiles[3][0].display(img[3],buttons[3].on);
    }
    //bedside table
    if(buttons[4].on == true){    
      tiles[2][0].display(img[4],buttons[4].on);
    }
   //books  
   if(buttons[5].on == true){    
    tiles[3][3].display(img[5],buttons[5].on);
  }
    //desk 
    if(buttons[6].on == true){    
      tiles[0][0].display(img[6],buttons[6].on);
    }
     //doublebed 
     if(buttons[7].on == true){    
      tiles[0][0].display(img[7],buttons[7].on);
    }
    //kitchen
    if(buttons[8].on == true){    
      tiles[3][0].display(img[8],buttons[8].on);
    }
   //books  
   if(buttons[9].on == true){    
    tiles[0][0].display(img[9],buttons[9].on);
  }
    //flowers
    if(buttons[22].on == true){    
      tiles[0][0].display(img[22],buttons[22].on);
    }
     //veggies
     if(buttons[23].on == true){    
      tiles[0][0].display(img[23],buttons[23].on);
    }  
  }
}

//shiftman button code shameless stolen
// Constructor initializes all variables
function Button(tempX, tempY, tempW, tempH, icn)  {    
  // Button location and size
  this.x  = tempX;   
  this.y  = tempY;   
  this.w  = tempW;   
  this.h  = tempH;   
  this.on = false;  
  this.count;

  //select the right img for button
  this.icn = icn;  

  this.click = function(mx, my) {
    value = 0;
    // Check to see if a point is inside the rectangle
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.on = !this.on;
      this.count++;
    }
  };

  // Draw the rectangle
  this.display = function() {
    rectMode(CORNER);
    stroke(0);

    image(this.icn, this.x, this.y);
  } 
}

