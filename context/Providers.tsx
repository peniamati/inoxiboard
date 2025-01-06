"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({
  children,
}: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>;
}
