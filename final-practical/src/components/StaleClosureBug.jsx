import { useState, useEffect } from "react";

export function StaleClosureBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); 
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Buggy Counter</h2>
      <p>Count: {count}</p>
      <p>Expected: keeps increasing</p>
      <p>Actual: stops at 1</p>
    </div>
  );
}