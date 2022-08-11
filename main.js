// fetch('https://animechan.vercel.app/api/random')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)

        // let newDiv= document.createElement("div")

        // let newh1= document.createElement("h1")
        // newh1.innerHTML=data.anime
        // newDiv.append(newh1)

        // let newh2= document.createElement("h2")
        // newh2.innerHTML=data.character
        // newDiv.append(newh2)


        // let newp= document.createElement("p")
        // newp.innerHTML=data.quote
        // newDiv.append(newp)


        // newDiv.className="animeContainer"


        // document.body.append(newDiv)

//     })





fetch('https://animechan.vercel.app/api/quotes')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        for(let i=0;i<data.length;i++){
            let newDiv= document.createElement("div")

            let newh1= document.createElement("h1")
            newh1.innerHTML= data[i].anime
            newDiv.append(newh1)

            let newh2= document.createElement("h2")
            newh2.innerHTML= data[i].character
            newDiv.append(newh2)


            let newp= document.createElement("p")
            newp.innerHTML=data[i].quote
            newDiv.append(newp)

            newDiv.className="animeContainer"

            document.body.append(newDiv)
        }
    })


    // Example of a random user generator
var faker = require('faker'); // Faker.js library

// Custom user snippet to generate formatted phone numbers
var phonenum = require('keith/phonenum/1');

api.company  = faker.company.companyName();
api.username = faker.internet.userName();
api.password = faker.internet.password();
api.role     = list(['guest', 'user', 'administrator']);
api.phone    = phonenum();
api.cell     = phonenum(`(${list(['214', '469', '972'])}) xxx-xxxx`);