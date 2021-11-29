const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
  it('Should say Hello World', () => {
    const response = sayHelloWorld.sayHello();

    expect(response).toBe('Hello World!');
  });

  it('Should say Hello Molinero', () => {
    const response = sayHelloWorld.sayHello('Molinero');

    expect(response).toBe('Hello Molinero!');
  });
});
