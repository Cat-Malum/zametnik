//Функции для календаря
export const formatingCurrentDate = (date) => {
  const ruFormatDate = date.toLocaleString('ru', {month: 'long', year: 'numeric'});
  const firstletter = ruFormatDate.slice(0, 1).toUpperCase();
  const substring = ruFormatDate.slice(1, -2);
  const result = firstletter + substring;

  return result;
}

export const getNumberOfDaysInMonth = (date) => {
  const result = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
  
  return result;
}

export const getWeekdayIndex = (date) => {
  const dayIndex = date.getDay();
  const index = dayIndex ? dayIndex : 7;
  
  return index;
}

export const getStartWeekday = (date) => {
  date.setDate(1);

  const weekdayIndex = getWeekdayIndex(date);
  
  return weekdayIndex;
}

//Функции для заметок
export const formatingDateForNote = () => {
  const date = new Date();
  const result = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  return result;
}

export const generateId = () => {
  const abc = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  while (id.length < 10) {
    id += abc[Math.floor(Math.random() * abc.length)];
  }

  return id;
}