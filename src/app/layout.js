import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>dhiyaan</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
