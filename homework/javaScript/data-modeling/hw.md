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
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

>var task = { 
  name: 'build HTML page',
  startTime: '3:00PM',
  endTime: '3:30PM' 
};

var projects = {
  name: 'First Project',
  description: 'Build a Holy Grail page',
  taskRundown: ['build HTML page', 'build CSS page', 'build a boiler plate', 'modify content', 'make sure the site is responsive']
};

The app will need to know what task is being completed and what the start and end times are for each task in order to calculate how long each takes to finish.
The app will organize each task by placing them in an array under the correct project name and description.

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

> var photos = {
  name: 'Pikachu',
  date: '07/05/2017'
  link: 'cat.jpg'
};

var albums = {
  name: 'Pokemon',
  listOfPhotos: ['Pikachu.jpg', 'Bulbasaur.jpg', 'Charmander.jpg']
};

var users = {
  idName: 'DarkPrinceOfAwesome',
  photosPosted: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  albumNames: ['Cats', 'Pokemon', 'Vacation']
}

For each posted photo there will be information about the name of the photo, when it was taken, and link to where the image is located.
Each album will be given a name describing what image files are in there, along with a list of images. 

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

> var light = {
  brightnessLevel: 'bright',
  roomLocation: 'living room',
  typeOfLight: 'lamp',
};

var thermostat = {
  temperature: 70,
  area: ['kitchen', 'bedroom', 'bathroom', 'living room']
}

The automation system will need to track the level of brightness for each type of light fixture in each room.
The app will also keep track of and automate the thermostat based on the temperature in each room of the house. 

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> var product = {
  name: 'Nike Flyknit Running Shoes', 
  color: 'black', 
  cost: '$70.89'
};

var cart = {
  productName: 'Nike Flyknit Running Shoes',
  quantity: 1
};

var order = {
  listOfItems: [cart],
  totalCost: '$70.89',
  shippingStatus: 'on route'
};

The app will provide users with information on the name of the shoe, its color, and its cost.
After adding the item(s) to the cart, the user will be able to see what was added and how many of each product was added.
The user will then see a list of the items he or she created, the total cost of all the products, and shipping information on their package.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> The information above does not tell the user how many stops it will take for them to go from one station to another.
However, users will be able to determine where each station is located.


### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> The first option makes it easier to find an appointment because they are subrooted under the doctor variable making it easier to know each doctors schedule.
However, it would be a bit more difficult to find if a patient were to have several appointments but across several doctors. 
The appointments variable should also list the name of the doctor in order to keep things more organized.

On the other hand, the second option would make it harder to find all the appointments for a specific doctor because you would have to cycle through all the appointments on the list.
However, it is easier to find a patients appointments if there are any.

Deciding whether one option is better than the other depends entirely on how the user will want to use the application. If the user really wants to focus on organizing and managing their appointments, then I think option 2 would be better.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > A player has:
    - username
    - icon picture

    A game has:
    - several outcomes
    - winner
    - loser

b.  How might those entities be represented in JavaScript code?

  > var player = {
    username: 'RichKing25',
    pictureURL: 'http://www.facebook.com/RichKing25'
  };

    var game = {
      winner: 'RichKing25',
      loser: 'Loser88',
      outcomes: ['method 1', 'method 2', 'method 3', 'method 4']
    };

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > The game has as at least a single or multiple players who will have a username and an image of the player or one that represents the player.
  The outcome of the game will include a winner and a loser and several paths that were taken to get the outcomes. 
  
