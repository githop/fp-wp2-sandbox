
import {map, prop, add, match, concat, ioWindow, split, head, $, toUpperCase} from './lib';
import {Maybe, IO} from './functors';

// let result = Maybe.of(2).map((two: number) => two + 2).value;
// const flamethrowers = Maybe.of('flamethrowers').map(toUpperCase).value;
// const ba = Maybe.of('bombs').map(x => concat(' away ', x));
// const ba = Maybe.of("bombs").map(concat(' away')).map(prop('length'));
// const ba = Maybe.of("bombs").map(concat('away ')).map(compose(join(' '), reverse, split(' '))).value;
// const types = [null, undefined, 0, '', false, 1, true];
// const maybes = map(Maybe.of, types);
// const compLaw1 = compose(map(concat(' world')), map(concat(' cruel')));
// const gb = compLaw1(Maybe.of('Goodbye'))
// console.log(result, flamethrowers, ba, gb);
const addMaybe = Maybe.of({ 
  name: 'Dinah',
  age: 14,
}).map(prop('derp'));
// .map(add(10));
const aVowels = Maybe.of('Malkovich Malkovich').map(match(/a/ig));
const ba = Maybe.of('away').map(x => concat('Bombs ', x))
const iw = ioWindow.map(w => w.innerWidth);
const url = ioWindow.map(prop('location')).map(prop('href')).map(split('/'));
const headers = $('#fp').map(head).map(h3 => h3.innerText);

console.log(addMaybe.value, ba.value, iw.value(), url.value(), headers.value());