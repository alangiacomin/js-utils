import axios from 'axios';
import { HttpRequest } from './HttpRequest';

jest.mock('axios');
axios.request.mockImplementation(() => Promise.resolve({ data: {} }));

describe('httpRequest get', () => {
  it('is function', () => {
    const { get } = HttpRequest;
    expect(typeof get).toEqual('function');
  });

  it('only url', () => {
    const { get } = HttpRequest;
    get('url');
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('empty params', () => {
    const { get } = HttpRequest;
    get('url', []);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('with params', () => {
    const { get } = HttpRequest;
    get('url', [{ first: 1 }]);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [{ first: 1 }],
    });
  });

  it('empty options', () => {
    const { get } = HttpRequest;
    get('url', [], {});
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('fullResponse false', () => {
    const { get } = HttpRequest;
    get('url', [], { fullResponse: false });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('fullResponse true', () => {
    const { get } = HttpRequest;
    get('url', [], { fullResponse: true });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });
});

describe('httpRequest post', () => {
  it('is function', () => {
    const { post } = HttpRequest;
    expect(typeof post).toEqual('function');
  });

  it('only url', () => {
    const { post } = HttpRequest;
    post('url');
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('empty data', () => {
    const { post } = HttpRequest;
    post('url', []);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('with data', () => {
    const { post } = HttpRequest;
    post('url', [{ first: 1 }]);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [{ first: 1 }],
    });
  });

  it('empty options', () => {
    const { post } = HttpRequest;
    post('url', [], {});
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('fullResponse false', () => {
    const { post } = HttpRequest;
    post('url', [], { fullResponse: false });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('fullResponse true', () => {
    const { post } = HttpRequest;
    post('url', [], { fullResponse: true });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });
});
