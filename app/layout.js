"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen px-10`}>
        <Header />
        <Provider store={store}>
          <PersistGate
            loading={
              <div>
                <h1 className="text-4xl">loading...</h1>
              </div>
            }
            persistor={persistor}
          >
            <div className="h-5/6">{children}</div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
