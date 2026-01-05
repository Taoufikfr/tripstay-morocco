import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { LucideAngularModule, Star, Wifi, MapPin, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    CommonModule,        // Required for *ngIf
    RouterModule,        // Required for routerLink (Back button)
    LucideAngularModule  // Required for icons
  ],
  templateUrl: './room-detail.component.html',
styleUrls: ['./room-detail.component.css'] // or .scss depending on your project

})
export class RoomDetailComponent implements OnInit {
  room: any;
  
  // Define the icons you want to use in the HTML
  readonly Star = Star;
  readonly Wifi = Wifi;
  readonly MapPin = MapPin;
  readonly ArrowLeft = ArrowLeft;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    // 1. Get the 'id' from the URL (e.g., /details/2)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // 2. Ask the service for the specific room
    this.room = this.roomService.getRoomById(id);
  }
}