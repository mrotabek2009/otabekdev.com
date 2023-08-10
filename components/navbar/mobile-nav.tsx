import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchIcon from "@mui/icons-material/Search";
import { items } from "./items";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { DialogTitle } from "@mui/material";

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex lg:hidden" size={"icon"} variant={"ghost"}>
          <HamburgerMenuIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>otabekdev.com</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex items-center justify-between">
            <Button variant={"ghost"} size={"icon"}>
              <SearchIcon />
            </Button>
            <Button variant={"ghost"} size={"icon"} asChild>
              <ModeToggle />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            {items.map((item) => (
              <Button key={item.name} variant={"ghost"} size={"lg"} asChild>
                <Link href={item.path}>{item.name}</Link>
              </Button>
            ))}
            <DialogFooter className="flex items-center gap-4">
              <Button className="w-96">Login</Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
