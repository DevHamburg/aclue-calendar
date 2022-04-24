export interface Year {
  value: number;
  months: Month[];
}

export interface Month {
  currentMonth: boolean;
  name: string;
  days: Day[];
}

export interface Day {
  currentDay: boolean;
  value: number;
  weekDay: Date;
}
