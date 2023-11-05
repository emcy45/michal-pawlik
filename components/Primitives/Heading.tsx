import { type ClassName, cn } from "@/public/utilis/styles/utilis";
import { FunctionComponent, ReactNode } from "react";

type TitleProps = {
  className?: ClassName;
  children: ReactNode;
};

export const H1: FunctionComponent<TitleProps> = ({ className, children }) => (
  <h1 className={cn("text-4xl font-medium drop-shadow mb-5 mt-5", className)}>
    {children}
  </h1>
);

export const H2: FunctionComponent<TitleProps> = ({ className, children }) => (
  <h2
    className={cn(
      "text-2xl font-normal drop-shadow text-gray-400 mb-5",
      className
    )}
  >
    {children}
  </h2>
);
