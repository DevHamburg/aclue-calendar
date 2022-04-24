import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { component: CalendarComponent, path: '', pathMatch: 'full' },
  { component: CalendarComponent, path: 'calendar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
