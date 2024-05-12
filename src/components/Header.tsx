import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const url: string =
    "https://www.seekpng.com/png/detail/413-4139803_unknown-profile-profile-picture-unknown.png";

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
      <Link
        href="https://mail.google.com"
        target="_blank"
        className="text-sm hover:underline cursor-pointer"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        target="_blank"
        className="text-sm hover:underline cursor-pointer"
      >
        Images
      </Link>
      <BsGrid3X3GapFill
        className="text-4xl hover:bg-gray-200 p-2 rounded-full"
        style={{ height: 32 }}
      />
      <Image
        src={url}
        alt="dp"
        width={30}
        height={30}
        className="rounded-full object-cover"
        style={{ height: 30 }}
      />
    </div>
  );
};

export default Header;
