"use client";

import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null;
  return <>{year}</>;
}
