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
