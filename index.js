function shout(string) {
    return string.toUpperCase();
}
console.log (shout("hello"))

function whisper(string) {
    return string.toLowerCase()
}
console.log (whisper("hELlO"))

function logShout(string) {
    console.log(string.toUpperCase());
}

logShout("Hello");

function logWhisper(string) {
    console.log(string.toLowerCase())
}

logWhisper("Hello")
const string = "HI!";
function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return ("I can't hear you!")
    }
        else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
        else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }    
}

sayHiToGrandma("I love you, Grandma.");
console.log (sayHiToGrandma("I love you, Grandma."))
