let firstname = "Cameron Davis";
console.log("Name: " + firstname.toUpperCase());
console.log("Career: Student");
console.log("Description: A guy who likes video games a little too much");
console.log("");
console.log("My Interests:");
console.log("* Livestreaming on Twitch.tv");
console.log("* Competitive Super Smash Bros");
console.log("* Trading Card Games");
console.log("* Anime");
console.log("");

console.log("My Previous Experience:");
function displayPosition(name, title, description){
    console.log("* " + name + " - " + title +": " + description)
}
displayPosition("Vulcan Industrial Supply", "Warehouse Clerk", "General cleaning duties and shelf organization")
displayPosition("UAB Hill Student Center", "Gameroom Attendant", "Secretary and monitor for the gameroom")

console.log("");
console.log("* My Skills:");

function displaySkill(skill, iscool) {
    if (iscool === true) {
        console.log("* BAM: " + skill)
    } else {
        console.log("* " + skill)
    }
}
displaySkill("Java", false);
displaySkill("Python", false);
displaySkill("Epic Gamer Skills", true);
displaySkill("Robot voice", true);
displaySkill("C++", false);
displaySkill("Self-proclaimed Monster Hunter Rise Rathian Master", true);
displaySkill("Knows the entire Pokemon type chart", true);
    