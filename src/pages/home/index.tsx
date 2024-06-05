import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Refer from "./Refer";

export default function HomePage(): React.ReactElement {
  return (
    <main className="bg-black">
      <Hero />
      <Welcome />
      <Refer />
      
    </main>
  );
}
