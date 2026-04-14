export const debounce = <args extends unknown[]>(
  fn: (...args: args) => void,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
