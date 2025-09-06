export const MenuItems: {
  title: string;
  href: string;
  subMenu?: { title: string; href: string }[];
}[] = [
  {title:"Home", href:"/"},
  { title: "News", href: "/news" },
  {title: "Service", href: "/service",
   subMenu: [
  { title: "Web Design", href: "/service/webdesign" },
  { title: "App Development", href: "/service/appdevelopment" },
  { title: "SEO Optimization", href: "/service/seo" },
  { title: "Digital Marketing", href: "/service/digitalmarketing" }
],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
