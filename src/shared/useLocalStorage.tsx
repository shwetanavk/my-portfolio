import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValuse] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValuse];
};

export default useLocalStorage;
