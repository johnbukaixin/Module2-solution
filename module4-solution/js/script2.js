
( function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {};


helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
window.helloSpeaker = helloSpeaker;

})(window);

/*var goodbye={};
goodbye.name="fang";
goodbye.saygodbye=function(){
console.log("Good bye " + name);
}*/
