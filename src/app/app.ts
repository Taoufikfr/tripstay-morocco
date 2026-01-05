import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RoomList } from './components/room-list/room-list';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'reservation-app';
}