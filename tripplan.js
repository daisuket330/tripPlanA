//Title: Day Trip Generator
//Author: Treveon Edwards

function runDayTrip(){
    let locationz = ["Sapporo","Tokyo","Kyoto","Ikkebukuro"];
    let restaurants = ["Ramen joint", "izakaya", "sushi", "buffet"];
    let transportation = ["bus","car", "train", "bike"];
    let entertainment = ["amusement park", "arcade", "karaoke"];
    let tripOptions = [locationz, restaurants, transportation, entertainment];
    let trip = [getSelection(locationz), getSelection(restaurants), getSelection(transportation),getSelection(entertainment) ]
    initialDayTrip(trip, tripOptions);
}

function getSelection(array){ 
    return array[Math.floor(Math.random() * (array.length))];

}


function initialDayTrip(trip, tripOptions){
let userSatisfied = prompt(`Your trip is to ${trip[0]} where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}.
Are you satisfied with your trip? Yes or No.`).toLowerCase();


//confirms user satisfication 
isUserSatisfied(userSatisfied, trip, tripOptions); 
}


function isUserSatisfied(userSatisfication, trip, tripOptions){
    if(userSatisfication === "no"){
        let userUnsatisfied = prompt("Are you unsatisfied with destination, restaurant, transportation, or entertainment?");

        userreroll(userUnsatisfied, trip, tripOptions); //randomizes selection again
    }
    else if(userSatisfication === "yes"){
        alert(`Your trip is to ${trip[0]}, where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}. Please enjoy your trip!`);
    }


}


//Checks user input and reroll user selection
function userSwitch(unsatisfiedItem, trip, tripOptions){
    switch(unsatisfiedItem){
            
        case "destination":
            trip[0] = getSelection(tripOptions[0]);
            initialDayTrip(trip, tripOptions);
        break;

        case "restaurant":
            trip[1] = getSelection(tripOptionsArray[1]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        case "transportation":
            trip[2] = getSelection(tripOptionsArray[2]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        case "entertainment":
            trip[3] = getSelection(tripOptionsArray[3]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        default:
            let userSelection = prompt("Must select destination, restaurant, transportation, or entertainment.");
            userSwitch(userSelection, trip, tripOptionsArray);
    }
}

runDayTrip();