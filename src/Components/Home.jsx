import React from "react";
import { Feed } from "./Feed";
import { Head } from "./Helper/Head";

export const Home = () => {
  return <section className="container mainContainer">
    <Head title="Fotos" />
    <Feed />
  </section>;
};
