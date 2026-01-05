import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // Master list of all data
  private allRooms: Room[] = [
    {
      id: 1,
      name: "Luxury Riad with Pool",
      location: "Marrakech , Quartier Gueliz",
      price: 150,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the ultimate luxury in this traditional Riad featuring a private pool and exquisite Moroccan architecture."
    },
    {
      id: 2,
      name: "Ocean View Apartment",
      location: "Tangier, Malabata",
      price: 85,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Wake up to the sound of waves in this modern apartment overlooking the Strait of Gibraltar."
    },
    {
      id: 3,
      name: "Berber Tent Experience",
      location: "Merzouga, Desert",
      price: 60,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sleep under the stars in a luxury tent in the middle of the Sahara dunes. Includes camel ride."
    },
    {
      id: 4,
      name: "Modern Villa",
      location: "Casablanca, Anfa",
      price: 200,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A spacious contemporary villa in the heart of Casablanca's most prestigious neighborhood."
    }
  ];

  // BehaviorSubject holds the current state of rooms (for search filtering)
  private roomsSubject = new BehaviorSubject<Room[]>(this.allRooms);

  // Components subscribe to this
  getRooms(): Observable<Room[]> {
    return this.roomsSubject.asObservable();
  }

  // Filter logic
  searchRooms(searchTerm: string) {
    const term = searchTerm.toLowerCase();
    const filtered = this.allRooms.filter(room => 
      room.location.toLowerCase().includes(term) || 
      room.name.toLowerCase().includes(term)
    );
    this.roomsSubject.next(filtered);
  }

  // FIXED METHOD: Finds a single room by ID
  getRoomById(id: number) {
    return this.allRooms.find(room => room.id === id);
  }
}