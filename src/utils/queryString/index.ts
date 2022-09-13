type QueryStringProps = {
  [key: string]: string;
};

export function queryString(params: QueryStringProps) {
  const value = Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');

  return value;
}
