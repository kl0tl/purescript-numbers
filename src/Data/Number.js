/* globals exports */
"use strict";

export var nan = NaN;

export { isNaN };

export var infinity = Infinity;

export { isFinite };

export var fromStringImpl = function(str, isFinite, just, nothing) {
  var num = parseFloat(str);
  if (isFinite(num)) {
    return just(num);
  } else {
    return nothing;
  }
};
