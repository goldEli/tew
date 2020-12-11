import dayjs from 'dayjs';

export default function timer(time?:number, type='all'){
  if (!time) return ""
  return dayjs(time).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
}