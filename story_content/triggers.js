function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nY1y2CCUn0":
        Script1();
        break;
      case "6pizqY66N9V":
        Script2();
        break;
      case "6iwg3hv2mNR":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5gX44C2nhDI');
const duration = 2000;
const easing = 'ease-out';
const id = '645C8hukk6W';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5gX44C2nhDI');
const duration = 2000;
const easing = 'ease-out';
const id = '6pZc5OQbGS1';
const shrinkAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5gX44C2nhDI');
const duration = 2000;
const easing = 'ease-out';
const id = '645C8hukk6W';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
