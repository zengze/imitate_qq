import config from '../configs';
import qs from 'query-string';

const urlPrefix = config.domain +  config.apiPath;

export function get(url, params) {
  var isOk;
  return new Promise((resolve, reject) => {
    var requstUrl = urlPrefix + url;
    if (params) {
		  requstUrl += `?${qs.stringify(params)}`;
	  }
    fetch(requstUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         }
      })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function post(url, body) {
  var isOk;
  return new Promise((resolve, reject) => {
    fetch(urlPrefix + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: qs.stringify(body)
      })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
