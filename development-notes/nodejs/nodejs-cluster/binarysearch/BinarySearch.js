
export default class BinarySearch {

  static search(value, data) {
    if (!data.length) {
      return -1;
    }

    let left = 0;
    let right = data.length;

    while (right !== left) {
      let i = Math.floor((right + left) / 2);

      if (value === data[i]) {
        return i;
      }
      if (i === 0 || i === data.length) {
        return value === data[i] ? i : -1;
      }

      if (data[i] > value) {
        right = i;
      } else {
        left = i + 1;
      }
    }

    return -1;
  }
}