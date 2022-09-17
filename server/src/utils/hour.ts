// 18:00 -> 1080
export function convertHoursStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);
  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}

//1080 -> 18:00
export function convertMinutesToHoursString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}`;
}
