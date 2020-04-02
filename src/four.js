// four.js
import _ from 'lodash';
import { add } from 'lodash/fp';
import isEqual from 'lodash/isEqual';

const addOne = add(1);
_.map([1, 2, 3], addOne);
console.log(isEqual(NaN, NaN));
