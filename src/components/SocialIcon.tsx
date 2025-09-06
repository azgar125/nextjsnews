import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SocialItem = {
  name: string;
  icon: React.ElementType;
  url: string;
};

const socialIcons: SocialItem[] = [
  { name: "Facebook", icon: Facebook, url: "/" },
  { name: "Twitter", icon: Twitter, url: "/" },
  { name: "Instagram", icon: Instagram, url: "/" },
  { name: "Linkedin", icon: Linkedin, url: "/" },
];

const SocialIcon: React.FC = () => {
  return (
    <div className="flex gap-x-2 mt-5 pl-0 -ml-2">
      {socialIcons.map(({ name, icon: Icon, url }) => (
        <Tooltip key={name}>
          <TooltipTrigger asChild>
            <Link href={url} className="group hoverEffect">
              <Icon
                size={26}
                strokeWidth={0.5}
                absoluteStrokeWidth
                className="text-white hover:text-green-500"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialIcon;
