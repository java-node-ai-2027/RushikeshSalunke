// Async function
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}
getUsers();




// Async function with response.ok
async function getUsersData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // dummy 
    const users = await response.json();
    console.log(users);
    console.log(response.ok);
    const result = users.filter(user => user.id <= 5);
    console.log(result);
}


getUsersData();

// Get users
async function getyounguser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`request failed to fetch ${response.status}`);
        }
        const users = await response.json();
        const young = users.filter(user => user.id >= 5);
        const names = young.map(user => user.name);
        return names;
    } catch (error) {
        console.error("cannot load the users", error.message);
        return [];
    }
}

getyounguser().then(names => {
    console.log("fetched user names:", names);
});




///output api 

/*
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' },
  { id: 6, name: 'Mrs. Dennis Schulist' },
  { id: 7, name: 'Kurtis Weissnat' },
  { id: 8, name: 'Nicholas Runolfsdottir V' },
  { id: 9, name: 'Glenna Reichert' },
  { id: 10, name: 'Clementina DuBuque' }
]
true
[
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' }
]

fetched user names: [
  'Chelsey Dietrich',
  'Mrs. Dennis Schulist',
  'Kurtis Weissnat',
  'Nicholas Runolfsdottir V',
  'Glenna Reichert',
  'Clementina DuBuque'
]

*/