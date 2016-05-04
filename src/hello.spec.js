'use strict';
import {hello} from './hello.spec';
describe('hello', () => {
    it('should return Hello Foo', function () {
        expect(hello()).toEqual('Hello Foo');
    });
});