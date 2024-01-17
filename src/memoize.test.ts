// memoize.test.ts

import { memoize } from "./memoize";

describe("memoize", () => {
  it("should memoize a function", () => {
    const originalFunction = jest.fn((a: number, b: number) => a + b);
    const memoizedFunction = memoize(originalFunction);

    // First call
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(originalFunction).toHaveBeenCalledWith(1, 2);

    // Second call with the same arguments, should use the cache
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(originalFunction).toHaveBeenCalledTimes(1);

    // Third call with different arguments, should call the original function
    expect(memoizedFunction(3, 4)).toBe(7);
    expect(originalFunction).toHaveBeenCalledWith(3, 4);
  });
});
