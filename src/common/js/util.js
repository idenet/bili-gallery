export function format(date, formatStr) {
  if (formatStr === '1' || formatStr === 'L') {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1 + '').padStart(2, '0')
    const day = (date.getDate() + 1 + '').padStart(2, '0')
    return `${year}-${month}-${day}`
  }
}