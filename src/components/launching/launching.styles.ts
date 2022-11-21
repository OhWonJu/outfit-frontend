import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import tw from "twin.macro";

export const Banner = styled.div`
  background: ${props => props.theme.theme_color};
  height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  z-index: 20;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -50px;
  left: 10px;
  color: ${props => props.theme.text_primary_color};
  pointer-events: none;
  z-index: 30;
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 13rem;
  font-weight: 700;
  line-height: 0.76;
`;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Context = styled.div`
  opacity: 0;
  animation: ${animation} 1000ms ease-out 1;
  animation-delay: 1500ms;
  animation-fill-mode: forwards;
  z-index: 10;
`;
