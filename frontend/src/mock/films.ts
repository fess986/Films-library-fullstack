export type FilmProps = {
  id: number,
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime:number;
  genre: string[];
  released: number;
  isFavorite: boolean;
}

export const Films : FilmProps[] = [
  {
    id: 0,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski
    resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby
    boy, becomes Gustave's friend and protege.`,
    rating: 9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: ['Comedy'],
    released: 2014,
    isFavorite: false,
  },

  {
    id: 1,
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
    previewImage: 'img/moonrise-kingdom.jpg',
    backgroundImage: 'img/moonrise-kingdom.jpg',
    backgroundColor: '#E1DD8F',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them',
    rating: 3,
    scoresCount: 800,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: ['Comedy'],
    released: 2012,
    isFavorite: false,
  },

  {
    id: 2,
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    previewImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: '#4C86A8',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Pulp Fiction is the story of three men — Jules, Vincent, and Butch — and the choices each of them makes regarding life and death, honor and disgrace, and the vagaries of chance',
    rating: 8.8,
    scoresCount: 700,
    director: 'Quentin Tarantino',
    starring: ['John Travolta', 'Samuel L. Jackson', 'Bruce Willis', 'Tim Roth', 'Ving Rhames', 'Uma Thurman'],
    runTime: 154,
    genre: ['Drama'],
    released: 1994,
    isFavorite: true,
  },

  {
    id: 3,
    name: 'The Darjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    previewImage: 'img/dardjeeling-limited.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: '#8E3B46',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A year after their father`s funeral, three brothers travel across India by train in an attempt to bond with each other',
    rating: 7.2,
    scoresCount: 185,
    director: 'Wes Anderson',
    starring: ['Owen Wilson', 'Adrien Brody', 'Jason Schwartzman', 'Anjelica Huston'],
    runTime: 91,
    genre: ['Adventure'],
    released: 2007,
    isFavorite: true,
  },

  {
    id: 4,
    name: 'The Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#477890',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes` career from the late 1920s to the mid 1940s',
    rating: 7.5,
    scoresCount: 340,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsal', 'Jude Law'],
    runTime: 170,
    genre: ['Drama'],
    released: 2004,
    isFavorite: false,
  },

  {
    id: 5,
    name: 'The Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#FF784F',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team',
    rating: 8.0,
    scoresCount: 300,
    director: 'Alejandro G. Iñárritu',
    starring: ['Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson', 'Will Poulter'],
    runTime: 156,
    genre: ['Action'],
    released: 2015,
    isFavorite: false,
  },

  {
    id: 6,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: '#DB9D47',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'After a sudden attack on MI5, Johnny English, Britain`s most confident, yet unintelligent spy, becomes Britain`s only spy',
    rating: 6.2,
    scoresCount: 151,
    director: 'Quentin Tarantino',
    starring: ['Kevin Eldon', 'Emma Thompson', 'Adam James', 'Rowan Atkinson'],
    runTime: 89,
    genre: ['Comedy'],
    released: 2003,
    isFavorite: true,
  },

  {
    id: 7,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: '#3A3042',
    videoLink: 'https://download.blender.org/peach/trailer/trailer_400p.ogg',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)',
    rating: 7.9,
    scoresCount: 472,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee', 'Ben Hardy'],
    runTime: 134,
    genre: ['Biography'],
    released: 2018,
    isFavorite: false,
  },

];