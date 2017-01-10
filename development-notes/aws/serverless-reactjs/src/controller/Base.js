
import fetch from 'whatwg-fetch';

export default class Base {

  fetch(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': 'SUPER-SECRET-KEY'
      }
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.json();
    }).then((d) => {
      return d;
    });
  }
}
