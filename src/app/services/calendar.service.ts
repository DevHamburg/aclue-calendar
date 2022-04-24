import { Injectable } from '@angular/core';
import { Year, Month, Day } from 'src/app/models/date.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  currentYear: number = new Date().getFullYear();
  months: any = new Date().getMonth();
  days: any = new Date().getDate();

  /*   public getCurrentYear(): Year {
    let year: Year = {} as Year;
    let day: Day = {} as Day;
    let month: Month = {} as Month;

    year.value = new Date().getFullYear();
    year.months = [];
    for (let i = 0; i < 12; i++) {
      month = {} as Month;
      month.name = new Date(year.value, i, 1).toLocaleString('default', {
        month: 'long',
      });
      month.days = [];
      for (let j = 0; j < new Date(year.value, i + 1, 0).getDate(); j++) {
        day = {} as Day;
        const test = new Date(year.value, i, j + 1);
        console.log(test)
        day.weekDay = new Date(year.value, i + 1, j);
        month.days.push(day);
      }
      year.months.push(month);
    }
    const currentYear = this.checkForCurrentMonthAndDate(
      year,
      new Date().getMonth(),
      new Date().getDate()
    );
    return currentYear;
  }

  private checkForCurrentMonthAndDate(
    year: Year,
    month: number,
    day: number
  ): Year {
    for (let i = 0; i < year.months.length; i++) {
      if (
        year.months[i].name ===
        new Date(year.value, month, day).toLocaleString('default', {
          month: 'long',
        })
      ) {
        year.months[i].currentMonth = true;
        for (let j = 0; j < year.months[i].days.length; j++) {
          if (year.months[i].days[j].value === day) {
            year.months[i].days[j].currentDay = true;
          }
        }
      }
    }
    return year;
  } */
}
