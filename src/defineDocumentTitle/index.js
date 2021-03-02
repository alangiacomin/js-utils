import isEmptyString from '../isEmptyString';

const defineDocumentTitle = (text, separator = ' - ') => {
  const rootTitle = window.appname;
  if (isEmptyString(text)) {
    return rootTitle;
  }
  if (isEmptyString(separator)) {
    return text;
  }
  return [rootTitle, text].join(separator);
};

export default defineDocumentTitle;
