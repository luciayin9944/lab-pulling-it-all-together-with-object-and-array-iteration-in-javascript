function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Wrong
// function numPointsScored(playerName) {
//     const game = gameObject();
//     for (let teamkey in game) {
//         const team = game[teamkey];
//         const players = team.players;
//         if (playerName in players) {
//             return players[playerName].points;
//         } else {
//             return null;  //The return null inside the for loop causes it to exit early — only the first team is checked.
//         }
//     }
// }

function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return null;
}

//WRONG
// function shoeSize(playerName) {
//     const game = gameObject();
//     const team = game[teamkey]; // teamkey is not defined
//     const players = team.players;
//     if (playerName in players) {
//         return players[playerName].shoeSize;
//     } else {
//         return null; //The return null inside the for loop causes it to exit early — only the first team is checked.

//     }    
// }

function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return null;
}

function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return null;
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}


function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamkey in game) {
        if (game[teamkey].teamName === teamName) {
            const numbers = [];
            for (let player in game[teamkey].players) {
                numbers.push(game[teamkey].players[player].number);
            }
            return numbers;
        }
    }
    return [];
}



function playerStats(playerName) {
    const game = gameObject();
    for (let teamkey in game) {
        const players = game[teamkey].players;
        if (playerName in players) {
            return players[playerName]
        }
    }
    return null
}



function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let reboundsOfBigShoe = 0;

    for (let teamkey in game) {
        const players = game[teamkey].players;
        for (let playerName in players) {
            if (players[playerName].shoe > maxShoeSize) {
                maxShoeSize = players[playerName].shoe;
                reboundsOfBigShoe = players[playerName].rebounds;
            }
        }
    }
    return reboundsOfBigShoe;
}


// console.log("All team names:", teamNames());
// console.log("Rebounds of player with biggest shoe size:", bigShoeRebounds());


//Bonus
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;
        for (let playerName in players) {
            if (players[playerName].points > maxPoints) {
                maxPoints = players[playerName].points;
                topScorer = playerName;
            }
        }
    }
    return topScorer;
}

function winningTeam() {
    const game = gameObject();
    let hoemPoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        hoemPoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    if (hoemPoints > awayPoints) {
        return game.home.teamName;
    } else {
        return game.away.teamName;
    }
}


function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let teamkey in game) {
        const players = game[teamkey].players;
        for (let playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName
            }
        }
    }
    return longestName
}

console.log("Most Points Scored:", mostPointsScored());
console.log("Winning Team:", winningTeam());
console.log("Player With Longest Name:", playerWithLongestName());


function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName(); // Use helper function
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;
        for (let playerName in players) {
            if (players[playerName].steals > mostSteals) {
                mostSteals = players[playerName].steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    return longestNamePlayer === playerWithMostSteals;
}

console.log(doesLongNameStealATon()); 