// src/app/not-found.tsx
'use client';

import { useEffect, useState } from "react"

const NotFound = () => {
  const [backCounter, setBackCounter] = useState<number>(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackCounter((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Lo sentimos esta ruta no existe.</h1>
      <p>Serás redirigido en {backCounter}</p>
    </div>
  );
}

export default NotFound;  