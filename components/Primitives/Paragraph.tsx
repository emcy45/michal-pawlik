import { ClassName, cn } from "@/public/utilis/styles/utilis";
import type { FunctionComponent, ReactNode } from "react";

type ParagraphProps = {
  className?: ClassName;
  children: ReactNode;
};

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  className,
  children,
}) => (
  <p className={cn("whitespace-pre-wrap my-4 text-justify", className)}>
    {children}
  </p>
);
