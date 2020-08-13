'use strict';

const Request = require('../lib/notes');

describe('request', () => {
    it('requests command', (obj) => {
        expect(this.command).toBe(obj);
        expect(this.command instanceof Request).toBeTruthy();
    })
})

