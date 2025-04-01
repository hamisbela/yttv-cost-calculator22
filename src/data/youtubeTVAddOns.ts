import { AddOnPackage } from '../types/calculator';

// Define categories for better organization
export type AddOnCategory = 
  | 'premium' 
  | 'sports' 
  | 'international' 
  | 'entertainment' 
  | 'movies' 
  | 'documentary' 
  | 'lifestyle' 
  | 'music' 
  | 'family';

// Extended add-on package with category
export interface CategoryAddOnPackage extends AddOnPackage {
  category: AddOnCategory;
}

// Complete list of YouTube TV add-ons
export const youtubeTVAddOns: CategoryAddOnPackage[] = [
  // Premium
  {
    id: '4k-plus',
    name: '4K Plus',
    price: 9.99,
    description: 'Watch select content in 4K resolution, plus unlimited streams at home.',
    category: 'premium'
  },

  // Entertainment packages
  {
    id: 'entertainment-plus',
    name: 'Entertainment Plus',
    price: 33.99,
    description: 'Bundle of Paramount+ with SHOWTIME, STARZ - save over buying separately.',
    category: 'entertainment'
  },
  {
    id: 'paramount-showtime',
    name: 'Paramount+ with SHOWTIME',
    price: 10.99,
    description: 'Paramount+ originals, movies, and SHOWTIME content.',
    category: 'entertainment'
  },
  {
    id: 'starz',
    name: 'STARZ',
    price: 10.99,
    description: 'STARZ original series and popular movies.',
    category: 'movies'
  },
  {
    id: 'starz-mgm',
    name: 'STARZ + MGM+',
    price: 11.99,
    description: 'Combined package with STARZ and MGM+ content.',
    category: 'movies'
  },
  {
    id: 'mgm-plus',
    name: 'MGM+',
    price: 6.99,
    description: 'Premium movies and original series.',
    category: 'movies'
  },
  {
    id: 'max',
    name: 'Max',
    price: 18.99,
    description: 'HBO content, Max originals, and more.',
    category: 'premium'
  },
  {
    id: 'cinemax',
    name: 'Cinemax',
    price: 9.99,
    description: 'Action movies, series, and more.',
    category: 'movies'
  },
  {
    id: 'amc-plus',
    name: 'AMC+',
    price: 9.99,
    description: 'AMC shows, movies, and exclusive content.',
    category: 'entertainment'
  },
  {
    id: 'bet-plus',
    name: 'BET+',
    price: 10.99,
    description: 'Black entertainment, originals, and movies.',
    category: 'entertainment'
  },
  {
    id: 'shudder',
    name: 'Shudder',
    price: 6.99,
    description: 'Horror, thriller, and supernatural content.',
    category: 'entertainment'
  },
  {
    id: 'sundance-now',
    name: 'Sundance Now',
    price: 6.99,
    description: 'Independent films, documentaries, and series.',
    category: 'entertainment'
  },
  {
    id: 'allblk',
    name: 'ALLBLK',
    price: 6.99,
    description: 'Black TV, movies, and entertainment.',
    category: 'entertainment'
  },
  
  // Sports packages
  {
    id: 'sports-plus',
    name: 'NFL RedZone with Sports Plus',
    price: 10.99,
    description: 'NFL RedZone, Fox College Sports, and more sports networks.',
    category: 'sports'
  },
  {
    id: 'nba-league-pass',
    name: 'NBA League Pass',
    price: 16.99,
    description: 'Live out-of-market NBA games.',
    category: 'sports'
  },
  {
    id: 'wnba-league-pass',
    name: 'WNBA League Pass',
    price: 12.99,
    description: 'Live out-of-market WNBA games.',
    category: 'sports'
  },
  {
    id: 'vsin',
    name: 'VSiN',
    price: 3.99,
    description: 'Sports betting network and analysis.',
    category: 'sports'
  },
  {
    id: 'pokergo',
    name: 'PokerGO',
    price: 19.99,
    description: 'Poker tournaments and content.',
    category: 'sports'
  },
  
  // International packages
  {
    id: 'spanish-plus',
    name: 'Spanish Plus',
    price: 14.99,
    description: 'Spanish-language channels and content.',
    category: 'international'
  },
  {
    id: 'filipino-plus',
    name: 'Filipino Plus',
    price: 14.99,
    description: 'Filipino programming and channels.',
    category: 'international'
  },
  {
    id: 'gma-pinoy',
    name: 'GMA Pinoy',
    price: 14.99,
    description: 'Filipino entertainment from GMA Network.',
    category: 'international'
  },
  {
    id: 'zee-family',
    name: 'Zee Family',
    price: 14.99,
    description: 'South Asian entertainment channels.',
    category: 'international'
  },
  {
    id: 'atresplayer',
    name: 'atresplayer',
    price: 5.99,
    description: 'Spanish content and programming.',
    category: 'international'
  },
  {
    id: 'vix-premium',
    name: 'ViX Premium',
    price: 6.99,
    description: 'Spanish-language movies, series, and sports.',
    category: 'international'
  },
  
  // Specialty channels
  {
    id: 'fox-nation',
    name: 'FOX Nation',
    price: 7.99,
    description: 'FOX original content and programming.',
    category: 'entertainment'
  },
  {
    id: 'hallmark-movies-now',
    name: 'Hallmark Movies Now',
    price: 7.99,
    description: 'Hallmark movies and series.',
    category: 'movies'
  },
  {
    id: 'curiositystream',
    name: 'CuriosityStream',
    price: 4.99,
    description: 'Documentary and educational content.',
    category: 'documentary'
  },
  {
    id: 'screenpix',
    name: 'ScreenPix',
    price: 2.99,
    description: 'Classic movies across multiple genres.',
    category: 'movies'
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    price: 7.99,
    description: 'Anime content and series.',
    category: 'entertainment'
  },
  {
    id: 'here-tv',
    name: 'Here TV',
    price: 7.99,
    description: 'LGBTQ+ focused content.',
    category: 'entertainment'
  },
  {
    id: 'acorn-tv',
    name: 'Acorn TV',
    price: 7.99,
    description: 'British and international TV.',
    category: 'entertainment'
  },
  {
    id: 'ifc-films-unlimited',
    name: 'IFC Films Unlimited',
    price: 5.99,
    description: 'Independent films and content.',
    category: 'movies'
  },
  {
    id: 'docurama',
    name: 'Docurama',
    price: 4.99,
    description: 'Documentary films and series.',
    category: 'documentary'
  },
  {
    id: 'contv',
    name: 'CONtv',
    price: 5.99,
    description: 'Fandom, comic-con, and pop culture content.',
    category: 'entertainment'
  },
  {
    id: 'dove-channel',
    name: 'Dove Channel',
    price: 4.99,
    description: 'Family-friendly content.',
    category: 'family'
  },
  {
    id: 'law-crime',
    name: 'Law & Crime',
    price: 1.99,
    description: 'Legal news, trials, and analysis.',
    category: 'entertainment'
  },
  {
    id: 'up-faith-family',
    name: 'UP Faith & Family',
    price: 5.99,
    description: 'Family and faith-based entertainment.',
    category: 'family'
  },
  {
    id: 'fandor',
    name: 'Fandor',
    price: 3.99,
    description: 'Independent and international films.',
    category: 'movies'
  },
  {
    id: 'screambox',
    name: 'Screambox',
    price: 6.99,
    description: 'Horror content and movies.',
    category: 'entertainment'
  },
  {
    id: 'comedy-dynamics',
    name: 'Comedy Dynamics',
    price: 4.99,
    description: 'Stand-up comedy and content.',
    category: 'entertainment'
  },
  {
    id: 'outside-features',
    name: 'Outside Features',
    price: 4.99,
    description: 'Outdoor activities and adventure content.',
    category: 'lifestyle'
  },
  {
    id: 'the-great-courses',
    name: 'The Great Courses',
    price: 7.99,
    description: 'Educational lectures and courses.',
    category: 'documentary'
  },
  {
    id: 'moviesphere',
    name: 'MovieSphere',
    price: 4.99,
    description: 'Selection of movies across various genres.',
    category: 'movies'
  },
  {
    id: 'myoutdoortv',
    name: 'MyOutdoorTV',
    price: 9.99,
    description: 'Hunting, fishing, and outdoor programming.',
    category: 'lifestyle'
  },
  {
    id: 'dekkoo',
    name: 'Dekkoo',
    price: 9.99,
    description: 'LGBTQ+ films and series.',
    category: 'entertainment'
  },
  {
    id: 'tastemade-plus',
    name: 'Tastemade+',
    price: 2.99,
    description: 'Food, travel, and lifestyle content.',
    category: 'lifestyle'
  },
  {
    id: 'magnolia-selects',
    name: 'Magnolia Selects',
    price: 4.99,
    description: 'Curated independent films.',
    category: 'movies'
  },
  {
    id: 'qello-concerts',
    name: 'Qello Concerts by Stingray',
    price: 8.99,
    description: 'Full-length concert films and music documentaries.',
    category: 'music'
  },
  {
    id: 'classica',
    name: 'Classica',
    price: 7.99,
    description: 'Classical music performances and opera.',
    category: 'music'
  },
  {
    id: 'hopster-learning',
    name: 'Hopster Learning',
    price: 4.99,
    description: 'Educational content for kids.',
    category: 'family'
  },
  {
    id: 'hi-yah',
    name: 'HI-YAH!',
    price: 3.99,
    description: 'Asian martial arts movies and action content.',
    category: 'entertainment'
  },
  {
    id: 'stingray-djazz',
    name: 'Stingray DJazz',
    price: 6.99,
    description: 'Jazz music and performances.',
    category: 'music'
  },
  {
    id: 'rcn-total',
    name: 'RCN Total',
    price: 4.99,
    description: 'Colombian entertainment and news.',
    category: 'international'
  }
];

// Function to get add-ons by category
export const getAddOnsByCategory = (category: AddOnCategory): CategoryAddOnPackage[] => {
  return youtubeTVAddOns.filter(addon => addon.category === category);
};

// Function to get all categories with their add-ons
export const getAddOnCategories = () => {
  const categories: Record<AddOnCategory, CategoryAddOnPackage[]> = {
    premium: [],
    sports: [],
    international: [],
    entertainment: [],
    movies: [],
    documentary: [],
    lifestyle: [],
    music: [],
    family: []
  };

  youtubeTVAddOns.forEach(addon => {
    categories[addon.category].push(addon);
  });

  return categories;
};