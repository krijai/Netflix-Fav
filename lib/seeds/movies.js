const Movies = require('../models/Movies')
var fs = require('fs');
const path = require("path");

const movies = []

const movie = new Movies({
  title: 'Deadpool',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: "https://i.imgur.com/cvial2v.jpg",
  video: 'ONHBaC-pfsk',
  users_ratings_comments: [
    {user_id: '5b57ddfea7922f08b7cdaa7e',
    rating: 4.5,
    comments: "Cool Movie"
    },
    {user_id: '5b57e346ea80b60e08ae67c4',
    rating: 3.5,
    comments: "Amazing Movie"
    }
  ]
})

// movie.comments.push(comment)
movies.push(movie)

const movie2 = new Movies({
  title: 'Deadpool2',
  genres:'Action',
  release_date: new Date(),
  description: 'Funnier, filthier, and damn entertaining, Deadpool 2 leaves no stone un-deconstructed: the naughty man-child of the X-Men universe who manages to beat them at their own game.' ,
  image: 'https://i.imgur.com/MpuqIFt.jpg',
  video: 'D86RtevtfrA',
  users_ratings_comments: [
    {user_id: '5b57ddfea7922f08b7cdaa7e',
    rating: 5,
    comments: "Best Movie"
    }
  ]
})

// movie.comments.push(comment)
movies.push(movie2)

const movie3 = new Movies({
  title: 'Death Note',
  genres:'Adventure',
  release_date: new Date(),
  description: 'A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone whose name is written within its pages, and launches a secret crusade to rid the world of criminals.' ,
  image: 'https://i.imgur.com/YYLpe0v.jpg',
  video: 'gvxNaSIB_WI'
})

// movie.comments.push(comment)
movies.push(movie3)

const movie4 = new Movies({
  title: 'Okja',
  genres:'Action',
  release_date: new Date(),
  description: 'A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.' ,
  image: 'https://i.imgur.com/2ZUJTdx.jpg'
})

// movie.comments.push(comment)
movies.push(movie4)

const movie5 = new Movies({
  title: 'Bright',
  genres:'Action',
  release_date: new Date(),
  description: 'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.' ,
  image: 'https://i.imgur.com/T5ZlU63.jpg'
})

// movie.comments.push(comment)
movies.push(movie5)

const movie6 = new Movies({
  title: 'How It Ends',
  genres:'Action',
  release_date: new Date(),
  description: 'How It Ends tries to balance drama and thrills with a sci-fi premise, but ultimately fails to deliver in this bland but beautiful apocalypse film.' ,
  image: 'https://i.imgur.com/vGFtRVo.jpg',
  video: 'JyyJ7lexnM'
})

// movie.comments.push(comment)
movies.push(movie6)

const movie7 = new Movies({
  title: 'Annihilation',
  genres:'Adventure',
  release_date: new Date(),
  description: 'Drawing on mythology and body horror, Annihilation is an intelligent film that asks big questions and refuses to provide easy answers. Sci-fi at its best.' ,
  image: 'https://i.imgur.com/m4foJ1I.jpg',
  video: '89OP78l9oF0'
})

// movie.comments.push(comment)
movies.push(movie7)

const movie8 = new Movies({
  title: 'The Ritual',
  genres:'Horror',
  release_date: new Date(),
  description: 'A well-executed, deftly performed horror story supplies the requisite amount of scares along with some insightful notions about guilt, redemption, and maturity.' ,
  image: 'https://i.imgur.com/o70xFPE.jpg',
  video: 'Vfugwq2uoa0'
})

// movie.comments.push(comment)
movies.push(movie8)

const movie9 = new Movies({
  title: 'Cargo',
  genres:'Drama',
  release_date: new Date(),
  description: 'By making a father-daughter journey the core of this story, and by using horror tropes of the genre solely to impede them, the directors have made an original, highly satisfying film.' ,
  image: 'https://i.imgur.com/AZ3LoOb.jpg',
  video: 'W5QJW0M5pik'
})

// movie.comments.push(comment)
movies.push(movie9)

const movie10 = new Movies({
  title: 'Jim & Andy: The Great Beyond',
  genres:'Documentary',
  release_date: new Date(),
  description: 'A behind-the-scenes look at how Jim Carrey adopted the persona of idiosyncratic comedian Andy Kaufman on the set of Man on the Moon (1999).' ,
  image: 'https://i.imgur.com/actwykz.jpg',
  video: 'kB15UFO5ebA'
})

// movie.comments.push(comment)
movies.push(movie10)

const movie11 = new Movies({
  title: 'Mudbound',
  genres:'Drama',
  release_date: new Date(),
  description: 'Tale of two families working the same patch of land in the Mississippi Delta, an unforgiving place where dreams go to die or be indefinitely and cruelly deferred.' ,
  image: 'https://i.imgur.com/3bgdihn.jpg',
  video: 'xucHiOAa8Rs'
})

// movie.comments.push(comment)
movies.push(movie11)

const movie12 = new Movies({
  title: 'Icarus',
  genres:'Thriller',
  release_date: new Date(),
  description: 'Bryan Fogel could be considered either daring or foolhardy for his initial plan. But his work with Dr. Grigory Rodchenkov is levelheaded, and his documentary illuminating.' ,
  image: 'https://i.imgur.com/SlB9mhW.jpg',
  video: 'qXoRdSTrR-4'
})

// movie.comments.push(comment)
movies.push(movie12)

const movie13 = new Movies({
  title: '13th',
  genres:'History',
  release_date: new Date(),
  description: 'In this fierce call to action, director Ava DuVernay effectively doubles down on both educating her viewers and inspiring them to take a stand against racial injustice in 2016 America.' ,
  image: 'https://i.imgur.com/PG9YIxf.jpg',
  video: 'V66F3WU2CKk'
})

// movie.comments.push(comment)
movies.push(movie13)

const movie14 = new Movies({
  title: 'To the Bone',
  genres:'Drama',
  release_date: new Date(),
  description: "Despite its controversial subject matter, Marti Noxon's drama is a moving, believable film made with earnestness, sensitivity, and skill, as well as riveting performances." ,
  image: 'https://i.imgur.com/2AP4w0l.jpg',
  video: '705yRfs6Dbs'
})

// movie.comments.push(comment)
movies.push(movie14)

const movie15 = new Movies({
  title: 'Beasts of No Nation',
  genres:'Drama',
  release_date: new Date(),
  description: "This is a harrowing film to watch. In spite of the vibrant jungle greens and the searing sun, it’s as bleak a vision of modern warfare as has ever been put on screen." ,
  image: 'https://i.imgur.com/JHD34AL.jpg',
  video: '2xb9Ty-1frw'
})

// movie.comments.push(comment)
movies.push(movie15)

const movie16 = new Movies({
  title: 'First Match',
  genres:'Drama',
  release_date: new Date(),
  description: "Not your typical underdog sports story, this film is about personal survival, the ability to accept hard truths, and resilience in the face of a lifetime of disappointment." ,
  image: 'https://i.imgur.com/bpj7gvF.jpg',
  video: 'Xva2FWNdcD0'
})

// movie.comments.push(comment)
movies.push(movie16)

const movie17 = new Movies({
  title: 'Extinction',
  genres:'Fantasy',
  release_date: new Date(),
  description: "A man's home life starts to suffer when he has recurring nightmares about a destructive and unknown force. He must soon find the strength to save his wife and two daughters when extraterrestrials launch a devastating attack on the planet." ,
  image: 'https://i.imgur.com/x1Arj4U.jpg',
  video: '-ePDPGXkvlw'
})

// movie.comments.push(comment)
movies.push(movie17)

module.exports = movies