import React from "react";

import { Container } from "@components/ui";
import { SignUpView } from "@components/pages/auth";

export default function Join() {
  return (
    <>
      <Container verticalSidebarVisible={false}>
        <SignUpView />
      </Container>
    </>
  );
}
