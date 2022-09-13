import { queryString } from '.';

describe('Utils/QueryString', () => {
  it('should be transform an object in query params', () => {
    const developer = {
      name: 'Jhon',
      lastName: 'Duo'
    };

    const queryParam = queryString(developer);

    expect(queryParam).toBe('name=Jhon&lastName=Duo');
  });
});
