
export { load, del }

function isValid(user) {
  return true;
}

function load(user) {

  if (!isValid(user)) {
    throw new Error('Invalid User');
  }

  return (id) => {

    return new Promise(async (resolve, reject) => {
      return resolve({ loaded: id });
    });

  }
  
}

function del(user) {

  if (!isValid(user)) {
    throw new Error('Invalid User');
  }

  return (id) => {

    return new Promise(async (resolve, reject) => {
      return resolve({ deleted: id });
    });

  }
  
}

