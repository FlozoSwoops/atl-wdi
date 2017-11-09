1.
user
  name
  screenname
  location  
email
  title
  content
  
const station = {
  name: String,
  screenName: String,
  location: String
}

const email = {
  title: String,
  content: String
}

const exampleUser {
  id: 1,
  name: "mr. bannana",
  screenName: "i<3bannana",
  location: "Here",
    email:[{
      title: "The Bannanna Memo",
      content: "I might have a problem...."
}

2.
Station
  station id
  nickname
  genre
  popularity
  number subscribers
User
  name
  username
  favorite station
  year joined

Playlists
  id
  #of songs
  genre
  playtime

  const station = {
      id: number,
      nickname: string,
      gerne: string,
      popularity: number,
      subscribers: number,
  }

  const user = {
      id: number,
      name: string,
      age: number
      username: string,
      favoriteStation: string,
      yearJoined: number
  }

  const playlist = {
    id: number,
    numberOfSongs: number,
    genre: string,
    playtime: number,
  }

  const exampleUser {
    id: 2380,
    name: 'Ricky Bananna',
    age: 25,
    username: 'random_user',
    yearJoined: 2006,
    favoriteStation: [{
      id: 0012,
      nickname: 'hip-hop radio',
      ,
        playlist:[{
          id: 1,
          genre: "hip-hop",
          playtime: 8,
          numberOfSongs: 500,
        }]
    }
  }

  3. 
  bands
    name: string
    genre: string
    setLength: string
    concertDate: number
    venue: string
  
  user:
    name: string
    username: string
    bandSelected: string
    favoriteGenre: string

    const exampleUser = {
      name: "bob",
      username: "Bob_Swarly_mon",
      favoriteBand: [{
        name: "metallica",
        genre: "metal",
        setLength: "90 mins",
        consertDate: 10092017,
        venue: "Georgia Dome",
      }]
    }

4. 

drink:
    name: string
    price: number
    temp: string


coffee shop
    name: string
    location: string
    
const exampleCoffeeShop = {
  name: "BeansR'US",
  location: "ponce market",
    drink:[{
      drink: "regular coffee",
      price: 5,
      temp: "hot"
    }]
}
  
5. 
sport: 
  name: String,
  contact: Boolean,

team:
  name:String
  wins: Number
  Loss: Number

 const exampleSport ={
   name: "football",
   contact: true,
    team [{
      name: "Cowgirls",
      wins: 0,
      loss: 1000
    }]
 }
