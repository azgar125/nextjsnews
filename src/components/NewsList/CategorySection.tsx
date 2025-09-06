import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface categoryprops {
  changecategory: (category: string) => void;
}

const CategorySection = ({ changecategory }: categoryprops) => {
  const categorymenu = [
    "All",
    "Business",
    "General",
    "Tech",
    "Sports",
    "Health",
    "Technology",
    "Environment",
    "Policy",
  ];
  return (
    <div>
      <div className=" flex items-center justify-between gap-3 md:mt-7">
        <h4 className=" shrink-0  ">Category Search</h4>
        <Select
          onValueChange={(value) => {
            if (value === "All") {
              changecategory(""); // সরাসরি empty পাঠানো
            } else {
              changecategory(value.toLowerCase()); // বাকি সব lowercase এ পাঠানো
            }
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            {categorymenu.map((category) => (
              <SelectItem key={category} value={category} className=" capitalize">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CategorySection;
