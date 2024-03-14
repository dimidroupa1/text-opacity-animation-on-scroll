"use client";

import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

type Props = {
  paragraph: string;
};

const Paragraph = ({ paragraph }: Props) => {
  const element = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div>
      <Text ref={element} style={{ opacity: scrollYProgress }}>
        {paragraph}
      </Text>
    </div>
  );
};

export default Paragraph;

const Text = styled(motion.p)`
  font-size: 50px;
  max-width: 1280px;
  padding: 40px;
  font-weight: 600;
`;
