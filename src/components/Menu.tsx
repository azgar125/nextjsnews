"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MenuItems } from "@/lib/MenuItems";
import { usePathname } from "next/navigation";


export default function MainMenu() {
 const pathname = usePathname();

  return (
    <NavigationMenu className=" hidden md:flex">
      <NavigationMenuList>
        {MenuItems.map((menu, index) => (
          <NavigationMenuItem key={index}>
            {menu.subMenu ? (
              <>
                <NavigationMenuTrigger className= {`bg-transparent text-xl px-2 ${pathname.startsWith(menu.href) ? "text-green-400 font-semibold" : ""}`} >
                  {menu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-2 w-48 space-y-3">
                    {menu.subMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <NavigationMenuLink asChild>
                          <Link className={`${pathname === sub.href? "text-green-400 font-semibold": ""}`} href={sub.href}>{sub.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className="text-xl "
                asChild
              >
                <Link className={`${pathname === menu.href? "text-green-400 font-semibold": ""}`} href={menu.href}>{menu.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}