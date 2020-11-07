export function getApiUrl(point, params) {
  let res = `${point}?`;

  for (let key in params) {
    res += `${key}=${params[key]}&`;
  }
  return res += 'site=stackoverflow';
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function getShortenNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'm';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + 'k';
  }
  return number;
}

export function getDateFormat(secDate) {
  const date = new Date(secDate * 1000);
  const dateArr = date.toString().split(' ');
  let s = date.getSeconds(),
    h = date.getHours(),
    m = date.getMinutes();
  
  return `${dateArr[1]} ${dateArr[2]} '${s < 10 ? '0' + s : s} at ${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m} `;
}

export const mainSorts = [
  {field: "activity", label: "Activity"},
  {field: "votes", label: "Votes"},
  {field: "creation", label: "Creation"},
]