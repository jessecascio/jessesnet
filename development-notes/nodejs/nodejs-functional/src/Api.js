

// mock api, private
const api = {
  call: ({path, data}, cb) => cb(null, {success: true}),
  get: ({path, data}, cb) => cb(null, {success: false})
};

export function call(path, data) {
  return new Promise((resolve, reject) => {
    api.call({path, data} , (e, d) => {
      return resolve(d);
    });
  });
}

export function get(path, data) {
  return new Promise((resolve, reject) => {
    api.get({path, data} , (e, d) => {
      return resolve(d);
    });
  });
}

