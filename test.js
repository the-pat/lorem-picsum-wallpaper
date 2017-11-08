'use strict';

import test from 'ava';
import loremPicsum from './';

test('defaults', async t => {
    await loremPicsum();
    t.pass();
});