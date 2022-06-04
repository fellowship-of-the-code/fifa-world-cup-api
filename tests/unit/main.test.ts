import helloWorld from '../../src/main';

describe('helloWorld', () => {
  it('should return "Hello World"', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
