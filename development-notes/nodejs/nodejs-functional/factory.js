
const dog = (s) => {
  const sound = s || "woof";

  return {
    talk: () => console.log(sound)
  }
}

class Dog {
  constructor(s) {
    this.sound = s || "woof";
  }

  talk() {
    console.log(this.sound);
  }
}

const fido = dog('meow');
fido.talk();

const pluto = new Dog('hhhh');
pluto.talk();