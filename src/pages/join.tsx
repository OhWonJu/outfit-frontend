import { Container } from "@components/ui";
import { SignUpView } from "@components/auth";
import React from "react";

export default function Join() {
  return (
    <Container sideNavVisible={false}>
      <SignUpView />
    </Container>
  );
}
