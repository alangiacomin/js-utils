import defineDocumentTitle from '.';

describe('Utility: defineDocumentTitle', () => {
  beforeAll(() => {
    window.appname = 'APPNAME';
  });

  test('no params', () => {
    const result = defineDocumentTitle();
    expect(result).toEqual('APPNAME');
  });

  test('text with default separator', () => {
    const result = defineDocumentTitle('text');
    expect(result).toEqual('APPNAME - text');
  });

  test('text with null separator', () => {
    const result = defineDocumentTitle('text', null);
    expect(result).toEqual('text');
  });

  test('text with empty string separator', () => {
    const result = defineDocumentTitle('text', '');
    expect(result).toEqual('text');
  });

  test('text with custom separator', () => {
    const result = defineDocumentTitle('text', '/');
    expect(result).toEqual('APPNAME/text');
  });
});
