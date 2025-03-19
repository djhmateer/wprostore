import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import ModeToggle from './mode-toggle';

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="md:flex hidden w-full max-w-xs gap-1">
          {/* Light and dark mode toggle */}
          <ModeToggle />

          {/* Cart button */}
          <Button asChild variant="ghost">
            <Link href="/cart">
              {/* Shopping cart icon */}
              <ShoppingCart />
              Cart
            </Link>
          </Button>

          {/* Sign in button */}
          <Button asChild>
            <Link href="/sign-in">
              {/* User icon */}
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </nav>

        {/* sheet component for mobile */}
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              {/* the vertical dots */}
              <EllipsisVertical />
            </SheetTrigger>
            {/* the sheet menu content */}
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>Menu</SheetTitle>
              {/* light and dark mode toggle */}
              <ModeToggle />
              {/* cart button */}
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart />
                  Cart
                </Link>
              </Button>
              {/* sign in button - will be in another component soon*/}
              <Button asChild>
                <Link href="/sign-in">
                  <UserIcon />
                  Sign In
                </Link>
              </Button>
              {/* need description for the sheet otherwise get a warning */}
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
