export interface Tour {
    id: string;
    name: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    image: string;
    description: string;
    itinerary: string[];
    includes: string[];
}