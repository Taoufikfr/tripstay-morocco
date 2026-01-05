import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RoomList } from './components/room-list/room-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RoomList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'reservation-app';
}