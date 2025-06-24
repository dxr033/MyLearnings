import { person, users, company, jsonString, parsedObject } from './JSON.js';

const myAsync = async () => {

    const objArray = Object.values(person)
    objArray.forEach(element => {
        console.log(element);     
    })

    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        else{
        const users = await response.json();
        const userArray = Object.values(users);
        userArray.forEach(user => {
            //console.log(user);
        });
    }

    response = await fetch('https://reqres.in/api/users?page=2');
    if(response.ok){
        const moreUsers = await response.json();
        const moreUsersArr = Object.entries(moreUsers);
        moreUsersArr.forEach(moreUser => {
            console.log(moreUser);
        }
        )
    }
    else{
        throw new Error(`There is an error : ${response.status}`);
    }
    }
    catch(error){
        console.log(error);
    }
}
myAsync();


