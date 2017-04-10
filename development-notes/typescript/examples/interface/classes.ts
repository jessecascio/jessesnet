/*
  - forces memeber functions, class properties, but only on the public side
  - interfaces can extend (multiple) other interfaces
*/

interface IProjecter {
  status: boolean;
  run(): boolean;
}

class Projecter implements IProjecter {
  public status: boolean = false; // cant use private

  public run(): boolean {
    return true;
  }
}
