import icon from "../../../../../public/icon.svg";
import Image from "next/image";
import React from "react";
import { headerLink } from "../../constant";
import { GiShoppingCart } from "react-icons/gi";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b-2  flex px-20 justify-between align-middle items-center">
      <div className=" flex ">
        <Image src={icon} alt="icon" width={80} />
        
      </div>
      <div className="flex justify-between w-1/2">
        {headerLink &&
          headerLink.map((item) => (
            <Link key={item.name} href={item.link} >
              {item.name.toUpperCase()}
            </Link>
          ))}
      </div>
      <div className="flex justify-between w-1/12">
        <Link href={'/cart'}><GiShoppingCart/></Link>
          <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
