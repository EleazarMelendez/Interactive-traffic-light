import react, { useState } from "react";

export function TrafficLight() {
  const [color, setColor] = useState("");

  return (
    <div className="text-center">
      <div className="light-top">
        <img src="/images/TrafficTop.jpg" />
      </div>
      <div className="red-light">
        <img
          src={color === "red" ? "/images/RedOn.jpg" : "/images/RedOff.jpg"}
          onClick={() => {
            setColor("red");
          }}
        />
      </div>
      <div
        className="yellow-light"
        onClick={() => {
          setColor("yellow");
        }}
      >
        <img
          src={
            color === "yellow"
              ? "/images/YellowOn.jpg"
              : "/images/YellowOff.jpg"
          }
        />
      </div>
      <div
        className="green-light"
        onClick={() => {
          setColor("green");
        }}
      >
        <img
          src={
            color === "green" ? "/images/GreenOn.jpg" : "/images/GreenOff.jpg"
          }
        />
      </div>
      <div className="light-bottom">
        <img src="/images/TrafficBottom.jpg" />
      </div>
      {color === "green" ? (
        <audio
          src="/images/car-horn-6408.mp3"
          id="my_audio"
          loop="loop"
          autoplay="autoplay"
        ></audio>
      ) : null}
    </div>
  );
}
