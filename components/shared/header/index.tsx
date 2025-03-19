import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
const Header = () => {
  return (
    // tailwind is flex columns of width full.
    //  border-b is a border on the bottom of the element.
    <header className="w-full border-b">
      {/* flex-between is a custom class */}
      {/* flex justify-between items-center; */}
      <div className="wrapper flex-between">
        {/* logo on left hand side */}
        <div className="flex-start">
          <Link href="/" className="flex-start">
            {/* public/images/logo.svg */}
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />
            {/* show on large screens and up */}
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        {/* Right hand side menu in its own component */}
        <Menu />
        
      </div>
    </header>
  );
};

export default Header;
