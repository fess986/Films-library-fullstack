const initialFilms = [
  {
    // пока ещё не смотрел но обязательно нужно
    id: 0,
    name: 'The Grand Budapest Hotel',
    posterImage: '/images/posters/The grand budapest hotel poster.jpg',
    previewImage: '/images/the-grand-budapest-hotel-poster.jpg',
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
    genre: ['Comedy', 'Criminal'],
    similarFilms: [],
    released: 2014,
    isFavorite: false,
    likedByUsers: [],
    similarMockFilms: ['The Grand Budapest Hotel', 'Johnny English'],
  },

  // {
  //   id: 1,
  //   name: 'Moonrise Kingdom',
  //   posterImage: '/images/posters/Moonrise Kingdom.jpg',
  //   previewImage: '/images/moonrise-kingdom.jpg',
  //   playerImage: '/images/posters/The grand budapest hotel poster.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them',
  //   rating: 3,
  //   scoresCount: 800,
  //   director: 'Wes Anderson',
  //   starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
  //   runTime: 94,
  //   genre: ['Comedy'],
  //   similarFilms: [],
  //   released: 2012,
  //   isFavorite: false,
  //   similarMockFilms: ['Moonrise Kingdom', 'The Darjeeling Limited'],
  // },

  // {
  //   id: 2,
  //   name: 'Pulp Fiction',
  //   posterImage: '/images/posters/Pulp Fiction.jpg',
  //   previewImage: '/images/pulp-fiction.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
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
  //   genre: ['Drama'],
  //   similarFilms: [],
  //   released: 1994,
  //   isFavorite: true,
  //   similarMockFilms: ['Pulp Fiction', 'Johnny English'],
  // },

  // {
  //   id: 3,
  //   name: 'The Darjeeling Limited',
  //   posterImage: '/images/posters/The Darjeeling Limited.jpg',
  //   previewImage: '/images/dardjeeling-limited.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
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
  //   genre: ['Adventure'],
  //   similarFilms: [],
  //   released: 2007,
  //   isFavorite: true,
  //   similarMockFilms: ['The Darjeeling Limited', 'Moonrise Kingdom'],
  // },

  // {
  //   id: 4,
  //   name: 'The Aviator',
  //   posterImage: '/images/posters/The Aviator.jpg',
  //   previewImage: '/images/aviator.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
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
  //   genre: ['Drama'],
  //   similarFilms: [],
  //   released: 2004,
  //   isFavorite: false,
  //   similarMockFilms: ['The Aviator', 'The Revenant'],
  // },

  // {
  //   id: 5,
  //   name: 'The Revenant',
  //   posterImage: '/images/posters/The Revenant.jpg',
  //   previewImage: '/images/revenant.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
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
  //   genre: ['Action'],
  //   similarFilms: [],
  //   released: 2015,
  //   isFavorite: false,
  //   similarMockFilms: ['The Aviator', 'The Revenant'],
  // },

  // {
  //   id: 6,
  //   name: 'Johnny English',
  //   posterImage: '/images/posters/Johnny English.jpg',
  //   previewImage: '/images/johnny-english.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'After a sudden attack on MI5, Johnny English, Britain`s most confident, yet unintelligent spy, becomes Britain`s only spy',
  //   rating: 6.2,
  //   scoresCount: 151,
  //   director: 'Quentin Tarantino',
  //   starring: ['Kevin Eldon', 'Emma Thompson', 'Adam James', 'Rowan Atkinson'],
  //   runTime: 89,
  //   genre: ['Comedy'],
  //   similarFilms: [],
  //   released: 2003,
  //   isFavorite: true,
  //   similarMockFilms: [
  //     'Johnny English',
  //     'The Grand Budapest Hotel',
  //     'Pulp Fiction',
  //   ],
  // },

  // {
  //   id: 7,
  //   name: 'Bohemian Rhapsody',
  //   posterImage: '/images/posters/Bohemian Rhapsody.jpg',
  //   previewImage: '/images/bohemian-rhapsody.jpg',
  //   videoLink:
  //     'https://assets.mixkit.co/videos/4078/4078-720.mp4',
  //   description:
  //     'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)',
  //   rating: 7.9,
  //   scoresCount: 472,
  //   director: 'Bryan Singer',
  //   starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee', 'Ben Hardy'],
  //   runTime: 134,
  //   genre: ['Biography'],
  //   similarFilms: [],
  //   released: 2018,
  //   isFavorite: false,
  //   similarMockFilms: ['Bohemian Rhapsody', 'The Darjeeling Limited'],
  // },
]

const additionalFilms = [
  {
    // пока ещё не смотрел но обязательно нужно
    id: 8,
    name: 'City Hunter',
    posterImage: '/images/to-compress/posters/City Hunter poster.jpg',
    previewImage: '/images/to-compress/City Hunter.jpg',
    // videoLink: 'https://assets.mixkit.co/videos/4078/4078-720.mp4',
    tmdbId: 469274,
    description: `Nicky Larson, the best private investigator in the business, is called for a high-risk mission: to recover the perfume of Cupid, a perfume that would make irresistible the one who uses it.`,
    rating: 9.5,
    scoresCount: 260,
    director: '    Philippe Lacheau',
    starring: [
      'Philippe Lacheau',
      'Élodie Fontan ',
      'Tarek Boudali',
      'Julien Arruti',
      'Didier Bourdon',
    ],
    runTime: 91,
    genre: ['Comedy', 'Criminal', 'Action'],
    similarFilms: [],
    released: 2018,
    isFavorite: false,
    likedByUsers: [],
    similarMockFilms: ['Johnny English', 'Why Him?'],
  },

  {
    id: 9,
    name: 'Why Him?',
    posterImage: '/images/posters/why him poster.jpg',
    previewImage: '/images/why him.jpg',
    tmdbId: 356305,
    description:
      'A holiday gathering threatens to go off the rails when Ned Fleming realizes that his daughters Silicon Valley millionaire boyfriend is about to pop the question.',
    rating: 6.5,
    scoresCount: 300,
    director: 'John Hamburg',
    starring: ['Zoey Deutch', 'James Franco', 'Tangie Ambrose'],
    runTime: 111,
    genre: ['Comedy'],
    similarFilms: [],
    released: 2016,
    isFavorite: false,
    similarMockFilms: ['City Hunter'],
  },
]

export const Films = [...initialFilms, ...additionalFilms]
