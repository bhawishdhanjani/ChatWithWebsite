import { Input } from "@nextui-org/react";
import Image from "next/image";
import UrlInputBox from "./components/UrlInputBox";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black opacity-60 h-full w-full absolute z-20"></div>
      <div className="z-10 w-full absolute h-screen bg-zinc-600">
        <div className="text-2xl lg:text-7xl md:text-4xl   h-full font-sans font-extrabold text-white flex justify-center items-start">
          <span className="mt-2">Chat With Website</span>
        </div>
      </div>
      <UrlInputBox />
    </div>
  );
}
