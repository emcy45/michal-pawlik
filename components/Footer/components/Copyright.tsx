import { FunctionComponent } from "react";

const YEAR = new Date().getFullYear();
type CopyrightProps = {
  className?: string;
};

export const Copyright: FunctionComponent<CopyrightProps> = ({ className }) => (
  <div className="flex gap-2 justify-center p-2 border-t-2 border-dark-primary">
    Made by Michał Pawlik
    <span className="text-dark-special font-medium animate-pulse ">
      {YEAR} ©
    </span>
  </div>
);
