import React from "react";

interface TitleAndDescriptionProps {
  title: string;
  description?: React.ReactNode;
  rightElement?: React.ReactNode;
}
export function TitleAndDescription({
  title,
  description,
  rightElement,
}: TitleAndDescriptionProps) {
  return (
    <div className="my-4 mx-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-extrabold text-[#1E293B]">{title}</h2>
        {rightElement && <div>{rightElement}</div>}
      </div>
      <p className="text-base text-[#64748B] mt-1">{description}</p>
    </div>
  );
}
