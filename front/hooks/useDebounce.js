import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
      console.log(value)
      const [debouncedValue, setDebouncedValue] = useState(value);

      useEffect(() => {
            const handler = setTimeout(() => {
                  if (value.length >= 3) {
                        setDebouncedValue(value);
                  } else {
                        setDebouncedValue(""); 
                  }
            }, delay);

            return () => clearTimeout(handler);
      }, [value, delay]);

      return debouncedValue;
};

export default useDebounce;
