import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  yearNumber = new Date().getFullYear();
  monthNumber = new Date().getMonth();
  monthAndYear = new Date();
  currentDate = new Date();
  days: Date[] = [];

  ngOnInit(): void {
    this.getDaysInMonth();
  }
 
  getDaysInMonth(): void {
    this.monthAndYear = new Date(this.yearNumber, this.monthNumber + 1, 0);
    this.days = [];
    const daysInMonth = new Date(
      this.yearNumber,
      this.monthNumber + 1,
      0
    ).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push(new Date(this.yearNumber, this.monthNumber, i));
    }
  }

  decrementMonth(): void {
    this.monthNumber--;
    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.yearNumber--;
    }
    this.getDaysInMonth();
  }

  incrementMonth(): void {
    this.monthNumber++;
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.yearNumber++;
    }
    this.getDaysInMonth();
  }

  incrementYear(): void {
    this.yearNumber++;
    this.getDaysInMonth();
  }

  decrementYear(): void {
    this.yearNumber--;
    this.getDaysInMonth();
  }

  onDayClickHandler() {
    console.log('clicked');
  }

  isCurrentDay(day: Date): boolean {
    return (
      day.getDate() === new Date().getDate() &&
      day.getMonth() === new Date().getMonth() &&
      day.getFullYear() === new Date().getFullYear()
    );
  }
}
