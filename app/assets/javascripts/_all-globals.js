// ----------------------------------------------------------------------------------
// these are all variables that will need to be used by more than one function
// ----------------------------------------------------------------------------------

// window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// the main windows
var $animWindow = 0;
var $loopWindow = 0;

// the loop head
var $loopHead = 0;

// the navigation for saved loops
var $loopNav = 0;

// KH all keypresses are saved in the loopKeysTimes hash
// KH the time is the key, and the keys played are the value
var loopKeysTimes = {};
var newKeysTimes = {};
var savedKeysTimes = {};
var cuedLoop = false;
var nextLoop = 0;

// KH the global timer - everythign hangs off this variable!
var countBar = 0;

// KH the global looptime - start with 2000 (120BPM)
var loopTime = 2000;

// save loop fields
var $loopName = 0;

// KH the load loop button nav
var $loadLoops = 0;

var dontMakeKey = false;

// the number of steps on the metronome/grid
var steps = 4;
var grid = 0;

// for the metronome
var $startBpm = 0;
var $bpmPlus = 0;
var $bpmMinus = 0;
var $bpm = 0;