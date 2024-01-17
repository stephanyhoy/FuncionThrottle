// memoize.ts

type MemoizedFunction<T> = (...args: any[]) => T;

export function memoize<T>(func: (...args: any[]) => T): MemoizedFunction<T> {
  const cache: { [key: string]: T } = {};

  return (...args: any[]): T => {
    const key = JSON.stringify(args);

    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }

    return cache[key];
  };
}
