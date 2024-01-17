type ThrottledFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  interval: number
): ThrottledFunction<T> {
  let lastExecTime: number | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    const now = Date.now();

    if (!lastExecTime || now - lastExecTime >= interval) {
      // Ejecutar inmediatamente si no hay ejecución previa o ha pasado suficiente tiempo
      func.apply(context, args);
      lastExecTime = now;
    }
  };
}
