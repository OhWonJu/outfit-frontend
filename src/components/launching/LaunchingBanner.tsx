import React, { useEffect, useRef } from "react";

import useTheme from "@lib/hooks/useTheme";
import useWindowSize from "@lib/hooks/useWindowSize";

import {
  Banner,
  BannerTitle,
  Canvas,
  Context,
  Headline,
  Video,
} from "./launching.styles";

const LaunchingBanner = () => {
  const theme = useTheme();

  const { width: windowWidth, height: windowHeight } = useWindowSize();

  let canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(windowWidth, windowHeight);
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode() as HTMLCanvasElement;

    let renderingCtx = renderingElement.getContext("2d");
    let drawingCtx = drawingElement.getContext("2d");

    let lastX: number;
    let lastY: number;

    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = theme.theme_color;
    renderingCtx.fillRect(0, 0, windowWidth, windowHeight);
    // ----------------------------------------------------- //
    // mouse Events //
    renderingElement.addEventListener("mouseover", event => {
      moving = true;
      lastX = event.pageX - renderingElement.offsetLeft;
      lastY = event.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseup", event => {
      moving = false;
      lastX = event.pageX - renderingElement.offsetLeft;
      lastY = event.pageY - renderingElement.offsetTop;
    });
    //erazing
    renderingElement.addEventListener("mousemove", event => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX: number = event.pageX - renderingElement.offsetLeft;
        let currentY: number = event.pageY - renderingElement.offsetTop;

        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  });

  const title = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const context = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
          src="./launching/launching_1.mp4"
        />
      </Video>
      <Canvas height={windowHeight} width={windowWidth} ref={canvas} />
      <BannerTitle variants={title} initial="initial" animate="animate">
        <Headline variants={item}>OUR</Headline>
        <Headline variants={item}>FIT</Headline>
      </BannerTitle>
      <Context
        className="absolute opacity-0 "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <span className="font-bold text-xl">
          Our Original Brand Launching now!
        </span>
      </Context>
    </Banner>
  );
};

export default LaunchingBanner;
