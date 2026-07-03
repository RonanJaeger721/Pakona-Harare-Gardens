export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'specials' | 'fried-rice' | 'chips' | 'hotdogs' | 'drinks' | 'desserts';
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  prepTime?: string;
  customizations?: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  isVerified?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  tag: 'Live Music' | 'Dj Set' | 'Food Challenge' | 'Creative Meet';
  image: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  time: string; // e.g. "12:34"
  date: string;
  burgerCount: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedCustomization?: string;
}
