import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import img1 from "/public/icon.png";

export default function Header() {
  const { userId } = auth();
  return (
    <header className="z-10 w-full h-[58px] backdrop-blur-sm bg-transparent border-b sticky top-0 text-black flex flex-row py-2 px-3 justify-between">
      <Link
        href="/"
        className="flex flex-row gap-2 py-2 font-semibold text-[#9077e7]"
      >
        <Image width="25" height="15" src={img1} alt="EasyShop" />
        EasyShop
      </Link>

      <div className="flex">
        {userId ? (
          <div className="mt-1">
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button className="bg-black hover:bg-[#9077e7] duration-300">Sign-in</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-black hover:bg-[#9077e7] duration-300">Sign-up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
