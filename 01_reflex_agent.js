// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states, visitedStates) {
    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | State: ").concat(state).concat(" | Action: ").concat(action_result);
    
    var stateKey = states.join("-");
    if (!visitedStates.has(stateKey)) {
        visitedStates.add(stateKey);
    }
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") {
        states[0] = "B";
    } else if (action_result == "LEFT") {
        states[0] = "A";
    }
    
    if (visitedStates.size < 8) {
        setTimeout(function() { test(states, visitedStates); }, 2000);
    } else {
        document.getElementById("log").innerHTML += "<br>All states visited.";
    }
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = new Set();
test(states, visitedStates);
