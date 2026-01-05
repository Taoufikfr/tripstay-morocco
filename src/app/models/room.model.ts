export interface Room {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  isFavorite?: boolean; // New optional property
  description?: string; // We will use this for the details page later
}