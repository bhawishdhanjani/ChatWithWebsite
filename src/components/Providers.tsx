import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
