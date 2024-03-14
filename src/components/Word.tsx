"use client";

import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

type Props = {
  paragraph: string;
};

type SimpleWordProps = {
  word: string;
  range: number[];
  progress: MotionValue<number>;
};

const SimpleWord = ({ word, range, progress }: SimpleWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <SingleWord>
      <WordShadow>{word}</WordShadow>
      <motion.span style={{ opacity: opacity }}>{word}</motion.span>
    </SingleWord>
  );
};

const Word = ({ paragraph }: Props) => {
  const element = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <div>
      <Text ref={element}>
        {words.map((word: string, index: number) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <SimpleWord
              key={index}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </Text>
    </div>
  );
};

export default Word;

const Text = styled(motion.p)`
  font-size: 50px;
  max-width: 1280px;
  padding: 40px;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
`;

const SingleWord = styled.span`
  margin-right: 12px;
  margin-top: 12px;
  position: relative;
`;

const WordShadow = styled.span`
    position: absolute;
    opacity: 0.3;
`;
