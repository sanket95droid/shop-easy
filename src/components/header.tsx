import { UploadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import img1 from "/public/icon.png";

export default function Header() {
  return (
    <header className="w-full h-[58px] backdrop-blur-sm bg-transparent border-b sticky top-0 text-black flex flex-row py-2 px-3 justify-between">
      <Link href="/" className="flex flex-row gap-2 py-2 font-semibold text-[#9077e7]">
        <Image width="25" height="15" src={img1} alt="EasyShop" />
        EasyShop
      </Link>

      <Link href="/product/upload" className="mr-3">
        <Button color="secondary">
          Upload
          <UploadIcon className="w-4 h-4 mt-[1px] ml-2"/>
        </Button>
      </Link>
    </header>
  );
}
