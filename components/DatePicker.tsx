'use client';

import * as React from 'react';

const styles = {
  root: "inline-block select-none",
  controls: "items-center bg-[var(--theme-border)] flex justify-between",
  button: "self-stretch bg-none border-none text-[var(--theme-text)] cursor-pointer inline-block leading-[calc(var(--theme-line-height-base)*1em)] m-0 outline-0 px-[1ch] focus:bg-[var(--theme-focused-foreground)] focus:outline-0",
  date: "min-w-[10%] px-[1ch] text-left w-full",
  header: "bg-[var(--theme-border)] grid grid-cols-7 text-center",
  days: "bg-[var(--theme-border-subdued)] grid grid-cols-7 grid-rows-[repeat(6,min-content)] items-start min-h-[calc(var(--theme-line-height-base)*6em)]",
  cell: "outline-none px-[1ch] text-center focus:bg-[var(--theme-focused-foreground)]",
  dayCell: "outline-none px-[1ch] text-center"
};

export interface DatePickerProps {
  year?: number;
  month?: number;
}

const WEEKDAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MAX_CELLS = 42;

export const DatePicker: React.FC<DatePickerProps> = ({ year, month }) => {
  const today = new Date();
  const [currentYear, setYear] = React.useState(year || today.getFullYear());
  const [currentMonth, setMonth] = React.useState(month || today.getMonth() + 1);

  const first = new Date(currentYear, currentMonth - 1, 1);
  const startingWeekday = first.getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const cells: React.ReactNode[] = [];

  for (let i = 0; i < startingWeekday; i++) {
    cells.push(<div key={`empty-start-${i}`} className={styles.dayCell} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const presentationDay = String(day).padStart(2, '0');
    cells.push(
      <div
        key={day}
        className={styles.cell}
        tabIndex={0}
        aria-label={`${currentYear}-${String(currentMonth).padStart(2, '0')}-${presentationDay}`}
      >
        {presentationDay}
      </div>
    );
  }

  while (cells.length < MAX_CELLS) {
    cells.push(<div key={`empty-end-${cells.length}`} className={styles.dayCell} />);
  }

  const onSwitchPreviousMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  const onSwitchNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <button type="button" className={styles.button} onClick={onSwitchPreviousMonth} aria-label="Previous month">
          ▲
        </button>
        <div className={styles.date}>
          {currentYear} {MONTH_NAMES[currentMonth - 1].toUpperCase()}
        </div>
        <button type="button" className={styles.button} onClick={onSwitchNextMonth} aria-label="Next month">
          ▼
        </button>
      </div>
      <div className={styles.header}>
        {WEEKDAYS.map((day) => (
          <div key={day} className={styles.cell}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.days}>{cells}</div>
    </div>
  );
};

export default DatePicker;