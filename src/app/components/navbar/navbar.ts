import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import Forms
import { RoomService } from '../../services/room.service';
import { LucideAngularModule, Search, Menu, User, Globe } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  searchTerm: string = '';
  
  // Define icons for HTML
  readonly SearchIcon = Search;
  readonly MenuIcon = Menu;
  readonly UserIcon = User;
  readonly GlobeIcon = Globe;

  constructor(private roomService: RoomService) {}

  onSearch() {
    this.roomService.searchRooms(this.searchTerm);
  }
}