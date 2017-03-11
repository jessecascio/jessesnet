

// mock db, private
const database = {
  get: (q, cb) => cb(null, {results: true})
};

export function query(q, creds) {
  return new Promise((resolve, reject) => {
    database.get(q, (e, d) => {
      return resolve(d);
    });
  });
}

