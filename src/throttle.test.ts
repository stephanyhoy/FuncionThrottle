import { throttle } from "./throttle";

jest.useFakeTimers();

describe("throttle", () => {
  it("debería throttlear la ejecución de la función", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    // Llamar a la función throttle varias veces en un corto periodo
    throttledFn();
    throttledFn();
    throttledFn();

    // Avanzar rápidamente el tiempo por 1000 milisegundos
    jest.advanceTimersByTime(1000);

    // Asegurar que la función solo se llama una vez después de que ha pasado el tiempo
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("debería respetar el intervalo entre llamadas", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    // Llamar a la función throttled varias veces en un corto periodo
    throttledFn();
    throttledFn();

    // Utilizar setTimeout para esperar 1000 milisegundos y luego llamar a la función nuevamente
    setTimeout(() => {
      throttledFn();
    }, 1000);

    // Avanzar rápidamente el tiempo por otros 1000 milisegundos
    jest.advanceTimersByTime(1000);

    // Asegurar que la función se llama dos veces después de que ha pasado el tiempo
    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
