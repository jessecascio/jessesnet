

// mock api, private
const api = {
  call: ({path, data}, cb) => cb(null, {success: true})
};

export function call(path, data) {
  return new Promise((resolve, reject) => {
    api.call({path, data} , (e, d) => {
      return resolve(d);
    });
  });
}

