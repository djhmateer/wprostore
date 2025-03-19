"use client";

// for hydration warning fix
import { useState, useEffect } from "react";

// hooks from next-themes
import { useTheme } from "next-themes";

// for dropdown menu
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
  // hydration warning fix
  const [mounted, setMounted] = useState(false);

  // setTheme called from onClick on dropdown menu from chadcn ui
  const { theme, setTheme } = useTheme();

  // useEffect to prevent hydration warning
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    // https://ui.shadcn.com/docs/components/dropdown-menu
    <DropdownMenu>
      {/* asChild as we've got a butotn inside of it */}
      <DropdownMenuTrigger asChild>
        {/* border on icon get rid of */}
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
