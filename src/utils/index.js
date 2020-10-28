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
