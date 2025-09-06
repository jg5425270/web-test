import * as React from "react"

export interface TooltipProps {
  children: React.ReactNode;
}

export function TooltipProvider({ children }: TooltipProps) {
  return <>{children}</>;
}

export function Tooltip({ children }: TooltipProps) {
  return <>{children}</>;
}

export function TooltipTrigger({ children }: TooltipProps) {
  return <>{children}</>;
}

export function TooltipContent({ children }: TooltipProps) {
  return <>{children}</>;
}