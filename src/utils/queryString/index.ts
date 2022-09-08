export function queryString(params: any) {
  const value = Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');

  return value;
}
