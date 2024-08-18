"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
const UrlInputBox = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [disable, setDisable] = useState(false);
  return (
    <div className=" absolute z-30 w-full h-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full md:w-1/3">
        <Input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          variant="bordered"
          label="URL"
        />
      </div>
      <Button
        onPress={(e) => {
          setDisable(true);
          router.push("/" + url);
        }}
        isDisabled={disable}
        className="font-bold"
        color="default"
      >
        Talk With Website
      </Button>
    </div>
  );
};

export default UrlInputBox;
