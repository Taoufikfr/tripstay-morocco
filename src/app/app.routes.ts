import { Routes } from '@angular/router';
import { RoomList } from './components/room-list/room-list'; // Your home page
import { RoomDetailComponent } from './components/room-detail/room-detail.component'; // <--- Import this

export const routes: Routes = [
  { path: '', component: RoomList },
  { path: 'details/:id', component: RoomDetailComponent } // <--- Add this line!
];