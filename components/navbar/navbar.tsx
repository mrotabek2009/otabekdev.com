import { Button } from "@/components/ui/button";
import { items } from "./items";
import Link from "next/link";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Icons } from "../ui/icons";
import { ModeToggle } from "../ui/mode-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MobileNav } from "./mobile-nav";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-background p-6 border-b xl:px-36 2xl:px-64">
      <Link href="/">
        <Icons.logo />
      </Link>
      <div className="hidden lg:flex items-center gap-2">
        {items.map((item) => (
          <Button key={item.name} variant={"ghost"} size={"lg"} asChild>
            <Link href={item.path}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <ModeToggle />
        <Button variant={"ghost"} size={"icon"}>
          <SearchRoundedIcon />
        </Button>
        <Button asChild>
          <Link href={"/signin"}>Login</Link>
        </Button>
      </div>
      <MobileNav />
    </nav>
  );
}

export default Navbar;
