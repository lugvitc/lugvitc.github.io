import React, { useState, useRef } from "react";
import Particle from "../../components/Particle/Particle";
import EventsLanding from "../../components/landing/EventsLanding";
import EventsTimeLine from "../../components/timeline/EventsTimeLine";
function Event() {
  return (
    <>
      <Particle />
      <EventsLanding />
      <h3 class="w-full px-5 mt-2 text-3xl font-space leading-tight text-center text-gray-100 sm:mt-0 sm:px-0 sm:text-7xl mb-5 py-6">
        Event Timeline
      </h3>
      <EventsTimeLine />
    </>
  );
}

export default Event;
