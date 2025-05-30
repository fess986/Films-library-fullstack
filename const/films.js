import { FILM_GENRES, FILM_LIST, FILM_LIST_RUS } from './const.js'

const initialFilms = [
  {
    // пока ещё не смотрел но обязательно нужно
    name: FILM_LIST.TheGrandBudapestHotel,
    localizedName: FILM_LIST_RUS.TheGrandBudapestHotel,
    posterImage: '/images/posters/The grand budapest hotel poster.jpg',
    previewImage: '/images/the-grand-budapest-hotel.jpg',
    videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
    tmdbId: 120467,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski
    resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby
    boy, becomes Gustave's friend and protege.`,
    rating: 8.1,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
    ],
    runTime: 99,
    genre: [FILM_GENRES.Comedy, FILM_GENRES.Criminal],
    similarFilms: [],
    released: 2014,
    isFavorite: false,
    likedByUsers: [],
    similarMockFilms: [
      FILM_LIST.JohnyEnglish,
      FILM_LIST.MoonriseKingdom,
      FILM_LIST.Clue,
    ],
  },

  // {
  //   name: FILM_LIST.MoonriseKingdom,
  //   localizedName: FILM_LIST_RUS.MoonriseKingdom,
  //   posterImage: '/images/posters/Moonrise Kingdom.jpg',
  //   previewImage: '/images/moonrise-kingdom.jpg',
  //   playerImage: '/images/posters/The grand budapest hotel poster.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them',
  //   rating: 3,
  //   scoresCount: 800,
  //   director: 'Wes Anderson',
  //   starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
  //   runTime: 94,
  //   genre: [FILM_GENRES.Comedy, FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2012,
  //   isFavorite: false,
  //   similarMockFilms: [
  //     FILM_LIST.MoonriseKingdom,
  //     FILM_LIST.TheDarjeelingLimited,
  //   ],
  // },

  // {
  //   name: FILM_LIST.PulpFiction,
  //   localizedName: FILM_LIST_RUS.PulpFiction,
  //   posterImage: '/images/posters/Pulp Fiction.jpg',
  //   previewImage: '/images/pulp-fiction.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'Pulp Fiction is the story of three men — Jules, Vincent, and Butch — and the choices each of them makes regarding life and death, honor and disgrace, and the vagaries of chance',
  //   rating: 8.8,
  //   scoresCount: 700,
  //   director: 'Quentin Tarantino',
  //   starring: [
  //     'John Travolta',
  //     'Samuel L. Jackson',
  //     'Bruce Willis',
  //     'Tim Roth',
  //     'Ving Rhames',
  //     'Uma Thurman',
  //   ],
  //   runTime: 154,
  //   genre: [FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 1994,
  //   isFavorite: true,
  //   similarMockFilms: [FILM_LIST.PulpFiction, FILM_LIST.JohnyEnglish],
  // },

  // {
  //   name: FILM_LIST.TheDarjeelingLimited,
  //   localizedName: FILM_LIST_RUS.TheDarjeelingLimited,
  //   posterImage: '/images/posters/The Darjeeling Limited.jpg',
  //   previewImage: '/images/dardjeeling-limited.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'A year after their father`s funeral, three brothers travel across India by train in an attempt to bond with each other',
  //   rating: 7.2,
  //   scoresCount: 185,
  //   director: 'Wes Anderson',
  //   starring: [
  //     'Owen Wilson',
  //     'Adrien Brody',
  //     'Jason Schwartzman',
  //     'Anjelica Huston',
  //   ],
  //   runTime: 91,
  //   genre: [FILM_GENRES.Adventure, FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2007,
  //   isFavorite: true,
  //   similarMockFilms: [
  //     FILM_LIST.TheDarjeelingLimited,
  //     FILM_LIST.MoonriseKingdom,
  //   ],
  // },

  // {
  //   name: FILM_LIST.TheAviator,
  //   localizedName: FILM_LIST_RUS.TheAviator,
  //   posterImage: '/images/posters/The Aviator.jpg',
  //   previewImage: '/images/aviator.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'A biopic depicting the early years of legendary Director and aviator Howard Hughes` career from the late 1920s to the mid 1940s',
  //   rating: 7.5,
  //   scoresCount: 340,
  //   director: 'Martin Scorsese',
  //   starring: [
  //     'Leonardo DiCaprio',
  //     'Cate Blanchett',
  //     'Kate Beckinsal',
  //     'Jude Law',
  //   ],
  //   runTime: 170,
  //   genre: [FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2004,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.TheAviator, FILM_LIST.TheRevenant],
  // },

  // {
  //   name: FILM_LIST.TheRevenant,
  //   localizedName: FILM_LIST_RUS.TheRevenant,
  //   posterImage: '/images/posters/The Revenant.jpg',
  //   previewImage: '/images/revenant.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team',
  //   rating: 8.0,
  //   scoresCount: 300,
  //   director: 'Alejandro G. Iñárritu',
  //   starring: [
  //     'Leonardo DiCaprio',
  //     'Tom Hardy',
  //     'Domhnall Gleeson',
  //     'Will Poulter',
  //   ],
  //   runTime: 156,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2015,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.TheAviator, FILM_LIST.TheRevenant],
  // },

  // {
  //   name: FILM_LIST.JohnnyEnglish,
  //   localizedName: FILM_LIST_RUS.JohnnyEnglish,
  //   posterImage: '/images/posters/Johnny English.jpg',
  //   previewImage: '/images/johnny-english.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'After a sudden attack on MI5, Johnny English, Britain`s most confident, yet unintelligent spy, becomes Britain`s only spy',
  //   rating: 6.2,
  //   scoresCount: 151,
  //   director: 'Quentin Tarantino',
  //   starring: ['Kevin Eldon', 'Emma Thompson', 'Adam James', 'Rowan Atkinson'],
  //   runTime: 89,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Comedy],
  //   similarFilms: [],
  //   released: 2003,
  //   isFavorite: true,
  //   similarMockFilms: [
  //     FILM_LIST.JohnnyEnglish,
  //     FILM_LIST.TheGrandBudapestHotel,
  //     FILM_LIST.PulpFiction,
  //   ],
  // },

  // {
  //   name: FILM_LIST.BohemianRhapsody,
  //   localizedName: FILM_LIST_RUS.BohemianRhapsody,
  //   posterImage: '/images/posters/Bohemian Rhapsody.jpg',
  //   previewImage: '/images/bohemian-rhapsody.jpg',
  //   videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)',
  //   rating: 7.9,
  //   scoresCount: 472,
  //   director: 'Bryan Singer',
  //   starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee', 'Ben Hardy'],
  //   runTime: 134,
  //   genre: [FILM_GENRES.Biography],
  //   similarFilms: [],
  //   released: 2018,
  //   isFavorite: false,
  //   // similarMockFilms: ['Bohemian Rhapsody', 'The Darjeeling Limited'],
  //   similarMockFilms: [
  //     FILM_LIST.BohemianRhapsody,
  //     FILM_LIST.TheDarjeelingLimited,
  //   ],
  // },
]

const additionalFilms = [
  // {
  //   name: FILM_LIST.CityHunter,
  //   localizedName: FILM_LIST_RUS.CityHunter,
  //   posterImage: '/images/posters/City Hunter poster.jpg',
  //   previewImage: '/images/City Hunter.jpg',
  //   // videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   tmdbId: 469274,
  //   description: `Nicky Larson, the best private investigator in the business, is called for a high-risk mission: to recover the perfume of Cupid, a perfume that would make irresistible the one who uses it.`,
  //   rating: 9.5,
  //   scoresCount: 260,
  //   director: 'Philippe Lacheau',
  //   starring: [
  //     'Philippe Lacheau',
  //     'Élodie Fontan ',
  //     'Tarek Boudali',
  //     'Julien Arruti',
  //     'Didier Bourdon',
  //   ],
  //   runTime: 91,
  //   genre: [FILM_GENRES.Comedy, FILM_GENRES.Criminal, FILM_GENRES.Action],
  //   similarFilms: [],
  //   released: 2018,
  //   isFavorite: false,
  //   likedByUsers: [],
  //   similarMockFilms: [
  //     FILM_LIST.UNCLE,
  //     FILM_LIST.WhyHim,
  //     FILM_LIST.KingsmanTheSecretService,
  //   ],
  // },

  // {
  //   name: FILM_LIST.WhyHim,
  //   localizedName: FILM_LIST_RUS.WhyHim,
  //   posterImage: '/images/posters/why him poster.jpg',
  //   previewImage: '/images/why him.jpg',
  //   tmdbId: 356305,
  //   description:
  //     'A holiday gathering threatens to go off the rails when Ned Fleming realizes that his daughters Silicon Valley millionaire boyfriend is about to pop the question.',
  //   rating: 6.5,
  //   scoresCount: 300,
  //   director: 'John Hamburg',
  //   starring: ['Zoey Deutch', 'James Franco', 'Tangie Ambrose'],
  //   runTime: 111,
  //   genre: [FILM_GENRES.Comedy, FILM_GENRES.Action],
  //   similarFilms: [],
  //   released: 2016,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.CityHunter, FILM_LIST.Crank],
  // },

  // {
  //   name: FILM_LIST.Crank,
  //   localizedName: FILM_LIST_RUS.Crank,
  //   posterImage: '/images/posters/crank poster.jpg',
  //   previewImage: '/images/crank.jpg',
  //   tmdbId: 1948,
  //   description:
  //     'Chev Chelios, a hit man wanting to go straight, lets his latest target slip away. Then he awakes the next morning to a phone call that informs him he has been poisoned and has only an hour to live unless he keeps adrenaline coursing through his body while he searches for an antidote',
  //   rating: 7.5,
  //   scoresCount: 300,
  //   director: 'Mark Neveldine',
  //   starring: ['Jason Statham', 'Amy Smart', 'Jose Pablo '],
  //   runTime: 88,
  //   genre: [FILM_GENRES.Comedy, FILM_GENRES.Action, FILM_GENRES.Criminal],
  //   similarFilms: [],
  //   released: 2016,
  //   isFavorite: false,
  //   similarMockFilms: [
  //     FILM_LIST.CityHunter,
  //     FILM_LIST.KingsmanTheSecretService,
  //     FILM_LIST.Oldboy,
  //   ],
  // },

  // {
  //   name: FILM_LIST.BadSanta,
  //   localizedName: FILM_LIST_RUS.BadSanta,
  //   posterImage: '/images/posters/bad santa poster.jpg',
  //   previewImage: '/images/bad santa.jpg',
  //   tmdbId: 10147,
  //   description:
  //     'Youd better watch out - Santa Claus Willie T. Soke is coming to town and he doesnt care if youve been naughty or nice. Willes favorite holiday tradition is to fill his sacks with loot lifted from shopping malls across the country. But this year his plot gets derailed by a wisecracking store detective, a sexy bartender, and a kid whos convinced Willie is the real Santa Claus.',
  //   rating: 7.0,
  //   scoresCount: 300,
  //   director: 'Terry Zwigoff',
  //   starring: ['Billy Bob Thornton', 'Tony Cox', 'Lauren Graham '],
  //   runTime: 92,
  //   genre: [FILM_GENRES.Comedy],
  //   similarFilms: [],
  //   released: 2003,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.CityHunter],
  // },

  // {
  //   name: FILM_LIST.EuroTrip,
  //   localizedName: FILM_LIST_RUS.EuroTrip,
  //   posterImage: '/images/posters/eurotrip poster.jpg',
  //   previewImage: '/images/eurotrip.jpg',
  //   tmdbId: 9352,
  //   description:
  //     'When Scott learns that his longtime cyber-buddy from Berlin is a gorgeous young woman, he and his friends embark on a trip across Europe.',
  //   rating: 7.5,
  //   scoresCount: 300,
  //   director: 'Jeff Schaffer',
  //   starring: ['Scott Mechlowicz', 'Jacob Pitts', 'Michelle Trachtenberg'],
  //   runTime: 92,
  //   genre: [FILM_GENRES.Comedy],
  //   similarFilms: [],
  //   released: 2004,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.TheGrandBudapestHotel, FILM_LIST.TheGirlNextDoor],
  // },

  // {
  //   name: FILM_LIST.IronMan,
  //   localizedName: FILM_LIST_RUS.IronMan,
  //   posterImage: '/images/posters/ironman poster.jpg',
  //   previewImage: '/images/ironman.jpg',
  //   tmdbId: 1726,
  //   description:
  //     'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
  //   rating: 7.9,
  //   scoresCount: 300,
  //   director: 'Jon Favreau',
  //   starring: ['Robert Downey Jr.', 'Terrence Howard', 'Gwyneth Paltrow'],
  //   runTime: 126,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Adventure],
  //   similarFilms: [],
  //   released: 2008,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.Crank, FILM_LIST.KingsmanTheSecretService],
  // },

  // {
  //   name: FILM_LIST.KingsmanTheSecretService,
  //   localizedName: FILM_LIST_RUS.KingsmanTheSecretService,
  //   posterImage: '/images/posters/kingsman poster.jpg',
  //   previewImage: '/images/kingsman.jpg',
  //   tmdbId: 207703,
  //   description:
  //     'The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agencys ultra-competitive training program just as a global threat emerges from a twisted tech genius.',
  //   rating: 7.1,
  //   scoresCount: 300,
  //   director: 'Matthew Vaughn',
  //   starring: ['Taron Egerton', 'Colin Firth', 'Samuel L. Jackson'],
  //   runTime: 126,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Adventure, FILM_GENRES.Comedy],
  //   similarFilms: [],
  //   released: 2014,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.Crank, FILM_LIST.IronMan],
  // },

  // {
  //   name: FILM_LIST.Oldboy,
  //   localizedName: FILM_LIST_RUS.Oldboy,
  //   posterImage: '/images/posters/oldboy poster.jpg',
  //   previewImage: '/images/oldboy.jpg',
  //   tmdbId: 670,
  //   description:
  //     'With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate man seeks revenge on his captors.',
  //   rating: 7.5,
  //   scoresCount: 300,
  //   director: 'Park Chan-wook',
  //   starring: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
  //   runTime: 120,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2003,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.Crank],
  // },

  // {
  //   name: FILM_LIST.Thursday,
  //   localizedName: FILM_LIST_RUS.Thursday,
  //   posterImage: '/images/posters/thursday poster.jpg',
  //   previewImage: '/images/thursday.jpg',
  //   tmdbId: 9812,
  //   description:
  //     'A former Los Angeles drug dealer moves far away to Texas, making a new life for himself as a married architect in the suburbs. His old crime partner unexpectedly shows up with heroin and gangster business, attracting a slew of violent unsavory characters.',
  //   rating: 8.5,
  //   scoresCount: 300,
  //   director: 'Skip Woods',
  //   starring: ['Thomas Jane', 'Paula Marshall', 'Aaron Eckhart'],
  //   runTime: 87,
  //   genre: [FILM_GENRES.Action, FILM_GENRES.Comedy, FILM_GENRES.Thriller],
  //   similarFilms: [],
  //   released: 1998,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.Crank, FILM_LIST.Oldboy],
  // },

  // {
  //   name: FILM_LIST.Clue,
  //   localizedName: FILM_LIST_RUS.Clue,
  //   posterImage: '/images/posters/clue poster.jpg',
  //   previewImage: '/images/clue.jpg',
  //   tmdbId: 15196,
  //   description:
  //     'Clue finds six colorful dinner guests gathered at the mansion of their host, Mr. Boddy -- who turns up dead after his secret is exposed: He was blackmailing all of them. With the killer among them, the guests and Boddys chatty butler must suss out the culprit before the body count rises.',
  //   rating: 8.5,
  //   scoresCount: 300,
  //   director: 'Jonathan Lynn',
  //   starring: ['Christopher Lloyd', 'Tim Curry', 'Eileen Brennan'],
  //   runTime: 94,
  //   genre: [FILM_GENRES.Comedy, FILM_GENRES.Criminal],
  //   similarFilms: [],
  //   released: 1985,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.TheGrandBudapestHotel],
  // },

  // {
  //   name: FILM_LIST.TheLostRoom,
  //   localizedName: FILM_LIST_RUS.TheLostRoom,
  //   posterImage: '/images/posters/the lost room poster.jpg',
  //   previewImage: '/images/the lost room.jpg',
  //   tmdbId: 3868,
  //   description:
  //     'A detective investigates a mysterious motel room, which acts as a portal to an alternate universe.',
  //   rating: 8.5,
  //   scoresCount: 300,
  //   director: 'Christopher Leone',
  //   starring: ['Peter Krause', 'Julianna Margulies', 'Peter Jacobson'],
  //   runTime: 0,
  //   genre: [FILM_GENRES.Mystery],
  //   similarFilms: [],
  //   released: 2006,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.Oldboy, FILM_LIST.Firefly, FILM_LIST.StonehearstAsylum],
  // },

  // {
  //   name: FILM_LIST.Firefly,
  //   localizedName: FILM_LIST_RUS.Firefly,
  //   posterImage: '/images/posters/firefly poster.jpg',
  //   previewImage: '/images/firefly.jpg',
  //   tmdbId: 1437,
  //   description:
  //     'In the year 2517, after the arrival of humans in a new star system, follow the adventures of the renegade crew of Serenity, a "Firefly-class" spaceship.',
  //   rating: 9.1,
  //   scoresCount: 300,
  //   director: 'Joss Whedon',
  //   starring: ['Nathan Fillion', 'Alan Tudyk', 'Morena Baccarin'],
  //   runTime: 0,
  //   genre: [FILM_GENRES.Fantasy, FILM_GENRES.Action, FILM_GENRES.Drama],
  //   similarFilms: [],
  //   released: 2002,
  //   isFavorite: false,
  //   similarMockFilms: [FILM_LIST.TheLostRoom, FILM_LIST.SpartacusBloodAndSand],
  // },

  {
    name: FILM_LIST.SpartacusBloodAndSand,
    localizedName: FILM_LIST_RUS.SpartacusBloodAndSand,
    posterImage: '/images/posters/spartacus poster.jpg',
    previewImage: '/images/spartacus.jpg',
    tmdbId: 1437,
    description:
      'Torn from his homeland and the woman he loves, Spartacus is condemned to the brutal world of the arena where blood and death are primetime entertainment.',
    rating: 9.3,
    scoresCount: 300,
    director: 'Steven S. DeKnight',
    starring: ['Manu Bennett', 'Lucy Lawless', 'Peter Mensah'],
    runTime: 0,
    genre: [FILM_GENRES.Drama, FILM_GENRES.Action],
    similarFilms: [],
    released: 2010,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.Firefly],
  },

  {
    name: FILM_LIST.ClockworkOrange,
    localizedName: FILM_LIST_RUS.ClockworkOrange,
    posterImage: '/images/posters/clockwork orange poster.jpg',
    previewImage: '/images/clockwork orange.jpg',
    tmdbId: 185,
    description:
      'In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. The state, eager to crack down on juvenile crime, gives an incarcerated Alex the option to undergo an invasive procedure thatll rob him of all personal agency. In a time when conscience is a commodity, can Alex change his tune?',
    rating: 7.9,
    scoresCount: 300,
    director: 'Stanley Kubrick',
    starring: ['Malcolm McDowell', 'James Marcus', 'Carl Duering'],
    runTime: 137,
    genre: [FILM_GENRES.Drama, FILM_GENRES.Criminal],
    similarFilms: [],
    released: 1971,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.Thursday, FILM_LIST.Oldboy],
  },

  {
    name: FILM_LIST.Equilibrium,
    localizedName: FILM_LIST_RUS.Equilibrium,
    posterImage: '/images/posters/Equilibrium poster.jpg',
    previewImage: '/images/Equilibrium.jpg',
    tmdbId: 7299,
    description:
      'In a dystopian future, a totalitarian regime maintains peace by subduing the populace with a drug, and displays of emotion are punishable by death. A man in charge of enforcing the law rises to overthrow the system.',
    rating: 7.5,
    scoresCount: 300,
    director: 'Kurt Wimmer',
    starring: ['Christian Bale', 'Taye Diggs', 'Angus Macfadyen'],
    runTime: 107,
    genre: [FILM_GENRES.Drama, FILM_GENRES.Action],
    similarFilms: [],
    released: 2002,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.Oldboy, FILM_LIST.EdgeOfTomorrow],
  },

  {
    name: FILM_LIST.EdgeOfTomorrow,
    localizedName: FILM_LIST_RUS.EdgeOfTomorrow,
    posterImage: '/images/posters/Edge of Tomorrow poster.jpg',
    previewImage: '/images/Edge of Tomorrow.jpg',
    tmdbId: 137113,
    description:
      'Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.',
    rating: 7.9,
    scoresCount: 300,
    director: 'Doug Liman',
    starring: ['Tom Cruise', 'Emily Blunt', 'Bill Paxton'],
    runTime: 114,
    genre: [FILM_GENRES.Fantasy, FILM_GENRES.Action],
    similarFilms: [],
    released: 2014,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.Equilibrium],
  },

  {
    name: FILM_LIST.StonehearstAsylum,
    localizedName: FILM_LIST_RUS.StonehearstAsylum,
    posterImage: '/images/posters/Stonehearst Asylum poster.jpg',
    previewImage: '/images/Stonehearst Asylum.jpg',
    tmdbId: 207933,
    description:
      'An Oxford Medical School graduate takes a position at a mental institution and soon becomes obsessed with a female mental patient, but he has no idea of a recent and horrifying staffing change.',
    rating: 7.5,
    scoresCount: 300,
    director: 'Brad Anderson',
    starring: ['Kate Beckinsale', 'Jim Sturgess', 'Ben Kingsley'],
    runTime: 112,
    genre: [FILM_GENRES.Thriller, FILM_GENRES.Horror],
    similarFilms: [],
    released: 2014,
    isFavorite: false,
    similarMockFilms: [
      FILM_LIST.TheLostRoom,
      FILM_LIST.TheShawshankRedemption,
      FILM_LIST.ThePlatform,
    ],
  },

  {
    name: FILM_LIST.TheShawshankRedemption,
    localizedName: FILM_LIST_RUS.TheShawshankRedemption,
    posterImage: '/images/posters/The Shawshank Redemption poster.jpg',
    previewImage: '/images/The Shawshank Redemption.jpg',
    tmdbId: 278,
    description:
      'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    rating: 7.5,
    scoresCount: 300,
    director: 'Frank Darabont',
    starring: ['Morgan Freeman', 'Tim Robbins', 'Clancy Brown'],
    runTime: 142,
    genre: [FILM_GENRES.Thriller, FILM_GENRES.Drama],
    similarFilms: [],
    released: 2014,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.StonehearstAsylum],
  },

  {
    name: FILM_LIST.UNCLE,
    localizedName: FILM_LIST_RUS.UNCLE,
    posterImage: '/images/posters/UNCLE poster.jpg',
    previewImage: '/images/UNKLE.jpg',
    tmdbId: 203801,
    description:
      'At the height of the Cold War, a mysterious criminal organization plans to use nuclear weapons and technology to upset the fragile balance of power between the United States and Soviet Union. CIA agent Napoleon Solo and KGB agent Illya Kuryakin are forced to put aside their hostilities and work together to stop the evildoers in their tracks. The duos only lead is the daughter of a missing German scientist, whom they must find soon to prevent a global catastrophe.',
    rating: 8.0,
    scoresCount: 300,
    director: 'Guy Ritchie',
    starring: ['Henry Cavill', 'Armie Hammer', 'Alicia Vikander'],
    runTime: 118,
    genre: [FILM_GENRES.Action, FILM_GENRES.Comedy],
    similarFilms: [],
    released: 2015,
    isFavorite: false,
    similarMockFilms: [
      FILM_LIST.Crank,
      FILM_LIST.CityHunter,
      FILM_LIST.KingsmanTheSecretService,
    ],
  },

  {
    name: FILM_LIST.ThePlatform,
    localizedName: FILM_LIST_RUS.ThePlatform,
    posterImage: '/images/posters/The Platform poster.jpg',
    previewImage: '/images/The Platform.jpg',
    tmdbId: 619264,
    description:
      'A slab of food descends down a vertical facility. The residents above eat heartily, leaving those below starving and desperate. A rebellion is imminent.',
    rating: 7.5,
    scoresCount: 300,
    director: 'David Desola',
    starring: ['Ivan Massagué', 'Antonia San Juan', 'Zorion Eguileor'],
    runTime: 95,
    genre: [FILM_GENRES.Drama, FILM_GENRES.Thriller],
    similarFilms: [],
    released: 2019,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.TheLostRoom, FILM_LIST.StonehearstAsylum],
  },

  {
    name: FILM_LIST.TheGirlNextDoor,
    localizedName: FILM_LIST_RUS.TheGirlNextDoor,
    posterImage: '/images/posters/The Girl Next Door poster.jpg',
    previewImage: '/images/The Girl Next Door.jpg',
    tmdbId: 10591,
    description:
      'Exceptionally ambitious high schooler Matthew has aspirations for a career in politics when he falls in love with his gorgeous 19-year-old neighbor, Danielle. But Matthews bright future is jeopardized when he finds Danielle was once a porn star. As Danielles past catches up with her, Matthews love for her forces him to re-evaluate his goals.',
    rating: 8.0,
    scoresCount: 300,
    director: 'Luke Greenfield',
    starring: ['Emile Hirsch', 'Elisha Cuthbert', 'Timothy Olyphant'],
    runTime: 110,
    genre: [FILM_GENRES.Comedy],
    similarFilms: [],
    released: 2004,
    isFavorite: false,
    similarMockFilms: [FILM_LIST.WhyHim, FILM_LIST.EuroTrip],
  },

  {
    name: FILM_LIST.TuckerAndDale,
    localizedName: FILM_LIST_RUS.TuckerAndDale,
    posterImage: '/images/posters/Tucker and Dale poster.jpg',
    previewImage: '/images/Tucker and Dale.jpg',
    tmdbId: 46838,
    description:
      'Two hillbillies are suspected of being killers by a group of paranoid college kids camping near the duos West Virginian cabin. As the body count climbs, so does the fear and confusion as the college kids try to seek revenge against the pair.',
    rating: 8.5,
    scoresCount: 300,
    director: 'Eli Craig',
    starring: ['Tyler Labine', 'Alan Tudyk', 'Katrina Bowden'],
    runTime: 99,
    genre: [FILM_GENRES.Comedy],
    similarFilms: [],
    released: 2010,
    isFavorite: false,
    similarMockFilms: [
      FILM_LIST.WhyHim,
      FILM_LIST.EuroTrip,
      FILM_LIST.TheGirlNextDoor,
    ],
  },
]

export const Films = [...initialFilms, ...additionalFilms]
