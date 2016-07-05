import {Maybe, IO} from './functors';

const map = require('ramda/src/map');
const concat = require('ramda/src/concat');
const prop = require('ramda/src/prop');
const compose = require('ramda/src/compose');
const join = require('ramda/src/join');
const reverse = require('ramda/src/reverse');
const split = require('ramda/src/split');
const match = require('ramda/src/match');
const add = require('ramda/src/add');
const curry = require('ramda/src/curry');
const head = require('ramda/src/head');

const toUpperCase = (str) => str.toUpperCase();
const existy = (x) => (x != null);
// const truthy = (x) => (x != false && existy(x));

const safeHead = function (xs) {
  return Maybe.of(xs[0]);
};

const fmaybe = curry((x, f, m) => {
  return x.exists() ? f(m.value) : x;
});

const ioWindow = new IO(() => window);
const $ = (selector) => new IO(() => document.querySelectorAll(selector));

export {
    toUpperCase,
    existy,
    safeHead,
    fmaybe,
    map,
    concat,
    prop,
    compose,
    join,
    reverse,
    split,
    match,
    add,
    ioWindow,
    head,
    $
}
