import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { LucideAngularModule, Star, Heart } from 'lucide-angular';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.scss']
})
export class RoomList implements OnInit {
  rooms: Room[] = [];
  
  // Define icons
  readonly StarIcon = Star;
  readonly HeartIcon = Heart;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    // This subscribes to the behavior subject
    // Whenever search changes, this updates automatically!
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }
}