import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

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

        {/* Cart button */}
        {/* horizontal space between the cart and sign in elements */}
        <div className="space-x-2">
          {/* chadcn cart button. This isn't a button with a click handler */}
          <Button asChild variant="ghost">
            <Link href="/cart">
              {/* shopping cart icon */}
              <ShoppingCart /> Cart
            </Link>
          </Button>

          {/* Sign in button with default Primary background for a more visible text */}
          {/* https://ui.shadcn.com/docs/components/button */}
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
