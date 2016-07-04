import {existy, compose} from './lib';

export class Maybe {
  constructor(private __value) {}

  static of(x) {
    return new Maybe(x);
  }

  get value() {
    return this.__value;
  }

  exists() {
    return existy(this.value);
  }

  map(f) {
    return this.exists() ? Maybe.of(f(this.value)) : Maybe.of(null);
  }
}

export class IO {
  constructor(private __value) {}

  static of(x) {
    return new IO(() => x);
  }

  get value() {
    return this.__value;
  }

  map(f) {
    return new IO(compose(f, this.value));
  }
}
