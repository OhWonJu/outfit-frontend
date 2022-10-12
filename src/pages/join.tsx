import React from "react";

import { Container } from "@components/ui";
import { SignUpView } from "@components/auth";
import AppHead from "@components/common/AppHead";
import { TestSidebar } from "@components/VerticalSidebar";
import { SYMBOL_TEXT } from "src/constants";

const TITLE = "Join | " + SYMBOL_TEXT;

export default function Join() {
  return (
    <>
      <AppHead title={TITLE} />
      <Container
        verticalSidebarVisible={true}
        verticalSidebarChildren={<TestSidebar />}
      >
        <SignUpView />
      </Container>
    </>
  );
}
