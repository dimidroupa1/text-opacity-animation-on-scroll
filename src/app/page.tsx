"use client";

import styled from "styled-components";

import Paragraph from "@/components/Paragraph";
import Word from "@/components/Word";
import Character from "@/components/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function Home() {
  return (
    <Container>
      <Content />
      {/* <Paragraph paragraph={paragraph} /> */}
      {/* <Word paragraph={paragraph} /> */}
      <Character paragraph={paragraph}/>
      <Content />
    </Container>
  );
}

const Container = styled.div`
  background-color: #171717;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
`;
