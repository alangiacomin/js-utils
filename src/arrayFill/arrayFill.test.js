import arrayFill from '.';

describe('Utility: arrayFill', () => {
  test('missing count', () => {
    const result = arrayFill();
    expect(result).toEqual([]);
  });

  test('zero count', () => {
    const result = arrayFill(0);
    expect(result).toEqual([]);
  });

  test('fill none', () => {
    const result = arrayFill(2);
    expect(result).toEqual([undefined, undefined]);
  });

  test('fill null', () => {
    const result = arrayFill(2, null);
    expect(result).toEqual([null, null]);
  });

  test('fill undefined', () => {
    const result = arrayFill(2, undefined);
    expect(result).toEqual([undefined, undefined]);
  });

  test('fill string', () => {
    const result = arrayFill(2, 'xyz');
    expect(result).toEqual(['xyz', 'xyz']);
  });

  test('fill object', () => {
    const result = arrayFill(2, { id: 'abc' });
    expect(result).toEqual([{ id: 'abc' }, { id: 'abc' }]);
  });
});
