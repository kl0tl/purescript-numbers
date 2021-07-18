/* globals exports */
"use strict";

export var nan = NaN;

export var isNaN = Number.isNaN;

export var infinity = Infinity;

export var isFinite = Number.isFinite;

export var fromStringImpl = function(str, isFinite, just, nothing) {
  var num = parseFloat(str);
  if (isFinite(num)) {
    return just(num);
  } else {
    return nothing;
  }
};
