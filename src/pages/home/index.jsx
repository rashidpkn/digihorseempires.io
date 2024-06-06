import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Refer from "./Refer";
import RoadMap from "./RoadMap";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Hero />
      <Welcome />
      <Refer />
      <RoadMap/>
    </main>
  );
}
