


let  { filmService, commentService, userService } = require('./services');

/**
 * Seeder file
 * It will add a dummy user, 
 * 3 films and 1 comment against each films
 */

require('./config/db.mongo')();

let user = {
    _id: '5ee253f09a9e9d4b00fbb677',
    email: 'test123',
    password: 'test123'
}

let films = [{
    _id: '5ee253f09a9e9d2b00fbb677',
    name: 'main hu na',
    description: 'just a launch of movie',
    release_date: new Date(),
    rating: 5,
    ticket_price: 20,
    country: 'India',
    genre: 'action',
    photo_path: 'download.jpeg'
},
{
    _id: '5ee253f09a9e9d2b00fbb678',
    name: 'Pirates of the carribean',
    description: 'just a launch of movie',
    release_date: new Date(),
    rating: 5,
    ticket_price: 20,
    country: 'USA',
    genre: 'action',
    photo_path: 'download.jpeg'
},
{
    _id: '5ee253f09a9e9d2b00fbb648',
    name: 'Avengers: Age of Ultron',
    description: 'Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). ',
    release_date: new Date(),
    rating: 5,
    ticket_price: 20,
    country: 'USA',
    genre: 'action',
    photo_path: 'download.jpeg'
}];

let comments = [{
    text: 'hi tesrt comment',
    film_id: films[0]._id,
    user_id: user._id
},{
    text: 'hi tesrt comment',
    film_id: films[1]._id,
    user_id: user._id
},{
    text: 'hi tesrt comment',
    film_id: films[2]._id,
    user_id: user._id
}]


let start = async() => {
    try {
        let userResult1 = await userService.createUser(user); 
    } catch (error) {
        console.log('test user already there')
    }
    console.log('1 user added')
    let result1 = await filmService.createFilm(films[0]);
    let result2 = await filmService.createFilm(films[1]);
    let result3 = await filmService.createFilm(films[2]);
    console.log('3 movies added');
    let commentResult1 = await commentService.createComment(comments[0]);
    let commentResult2 = await commentService.createComment(comments[1]);
    let commentResult3 = await commentService.createComment(comments[2]);
    console.log('3 comments added')
}

start();