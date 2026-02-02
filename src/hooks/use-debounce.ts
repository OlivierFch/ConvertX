import { useEffect, useState } from "react";

const useDebounce = <T, >(defaultValue: T, defaultDelay?: number) => {
  const [data, setData] = useState<T | undefined>(defaultValue);
  const delay = defaultDelay ?? 500;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData(defaultValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [data, defaultValue]);

  return data;
};

export { useDebounce };
