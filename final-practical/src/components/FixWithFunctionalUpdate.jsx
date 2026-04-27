import { useState, useEffect } from "react";

export function FixWithFunctionalUpdate() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Fix with Functional Updater</h2>
      <p>Count: {count}</p>
      <p>Efficient and correct</p>
    </div>
  );
}