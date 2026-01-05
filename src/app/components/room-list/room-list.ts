import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- 1. Add this!
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { LucideAngularModule, Star, Heart } from 'lucide-angular';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule, 
    LucideAngularModule, 
    RouterModule // <--- 2. Add this so [routerLink] works!
  ], 
  templateUrl: './room-list.html', // Make sure this matches your HTML file name
  styleUrls: ['./room-list.scss']
})
export class RoomList implements OnInit {
  rooms: Room[] = [];
  
  // Define icons
  readonly StarIcon = Star;
  readonly HeartIcon = Heart;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  // <--- 3. Add this function for the Heart button
  toggleFavorite(room: any, event: Event) {
    event.stopPropagation(); // Stops the click from opening the details page
    event.preventDefault();  // Stops the page from jumping
    
    // If 'isFavorite' doesn't exist yet, it treats it as false
    room.isFavorite = !room.isFavorite;
  }
}