import objectValues from '.';

describe('Utility: objectValues', () => {
  test('null object', () => {
    const values = objectValues(null);
    expect(values).toMatchObject([]);
  });

  test('undefined object', () => {
    const values = objectValues(undefined);
    expect(values).toMatchObject([]);
  });

  test('not a object', () => {
    const values = objectValues('string');
    expect(values).toMatchObject([]);
  });

  test('empty object', () => {
    const values = objectValues({});
    expect(values).toMatchObject([]);
  });

  test('one element object', () => {
    const values = objectValues({ one: '1one1' });
    expect(values).toEqual(expect.arrayContaining(['1one1']));
  });

  test('many elements object', () => {
    const values = objectValues({ one: '1one1', two: '2two2', three: '3three3' });
    expect(values).toEqual(expect.arrayContaining(['1one1', '2two2', '3three3']));
  });
});
