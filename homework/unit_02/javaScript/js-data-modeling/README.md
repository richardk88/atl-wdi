[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
1.
User: id number, name, username, password, created date, updated date
E-mail: id number, name, email address

2. 
var user = {
  id: Number, 
  name: String,
  username: String, 
  password: String,
  created_date: Timestamp,
  updated_date: Timestamp,
  email: []
}

var eMail = {
  id: Number,
  name: String,
  emailAddress: String
}

3.
var exampleUser = {
  id: 10,
  name: 'John',
  username: 'J-dawg',
  password: '12345',
  created_date: July 25, 2017,
  updated_date: July 30, 2017,
  email: [{
    id: 5,
    name: 'Hotmail',
    emailAddress: 'John00@hotmail.com'
  }]
}

```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
1.
Radio Station: id number, name, channel, playlist
Playlist: id number, name, genre, songs

2.
var station = {
  id: Number,
  name: String,
  channel: String,
  playlist: []
}

var playlist = {
  id: Number,
  name: String,
  genre: String,
  songs: []
}

3.
var exampleStation = {
  id: 25,
  name: 'The Beat',
  channel: '103FM',
  playlist: [{
    id: 5,
    name:'Top Hits',
    genre: 'Rock',
    songs: ['Don't Stop Believin', 'Free Bird', 'Smells Like Teen Spirit']
  }]
}

```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
1.
Band: id number, name, concerts, upcoming show
Concerts: id number, name, state, date, ticket purchasing

2.
var band = {
  id: Number,
  name: String,
  concerts: [],
  next_shows: []
}

var concert = {
  id: Number,
  name: String, 
  location: String,
  date: String,
  ticket_purchasing: []
}

3.
var exampleBand = {
  id: 1045,
  name: 'Knee Boards',
  concerts: [{
    id: 8,
    name: 'And Another One', 
    location: 'Atlanta, GA',
    date: 'September 23, 2017',
    ticket_purchasing: ['Early Bird', 'Normal', 'At the Door']
  }],
  next_shows: ['The Rose is Black','You & You','Wat!']
}

```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.
```
1.
Coffee Shop: id number, name, address, coffee
Coffee: id number, name, type, size, temperature

2.
var coffeeShop = {
  id: Number,
  name: String,
  address: String,
  coffee: []
}

var coffee = {
  id: Number,
  name: String,
  type: String,
  size: String,
  temp: String
}

3.
var coffeeShop = {
  id: 123,
  name: 'Cool Java',
  address: '123 Lucky Street',
  coffee: [{
    id: 678,
    name: 'Vanilla Bean Frap',
    type: 'Frappuccino',
    size: 'Large',
    temp: 'Cold'
  }]
}

```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
1.
User: id number, name, username, password, created_date, updated_date, teams
team: id number, name, 

2.
var user = {
  id: Number, 
  name: String,
  username: String, 
  password: String,
  created_date: Timestamp,
  updated_date: Timestamp,
  teams: []
}

var team = {
  id: Number, 
  name: String, 
  sport: String,
  players: [],
  team_stats: []
}

3.
var exampleUser = {
  id: 456, 
  name: 'Bill',
  username: 'Billy99', 
  password: '67890',
  created_date: July 25, 2017,
  updated_date: July 30, 2017,
  teams: [{
    id: 5678, 
    name: 'Falcons', 
    sport: 'Football',
    players: [{
      id: 22,
      name: 'Matt Ryan',
      nickname: 'Matty Ice',
      number: 2,
      position: 'Quarterback',
    }],
    team_stats: [{
      points: 33.8,
      yards: 415.8,
      pass_yards: 295.3,
      rush_yards: 120.5
    }]
  }]
}

```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
Making sure the connection made sense before creating the relationship.
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
<<<<<<< HEAD
  2. Add a link to the slack channel theme along with your name and you comfort level with the homework.
=======
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
>>>>>>> b052ec792449f0b6ad8d99ec0236784a8673c690
