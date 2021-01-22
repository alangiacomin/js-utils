import trimStart from '../trimStart';

const absoluteUrl = (path) => window.baseurl + '/' + trimStart(path, '/');

export default absoluteUrl;
