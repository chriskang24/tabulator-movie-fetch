import { useState, useEffect } from "react";

export default function useDebounce(input, ms) {
  const [delay, setDelay] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setDelay(input), ms);
    return () => clearTimeout(timeout);
  }, [input, ms])

  return delay;
}