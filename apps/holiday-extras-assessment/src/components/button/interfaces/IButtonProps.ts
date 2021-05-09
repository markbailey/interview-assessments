import React from "react";

interface IButtonProps {
  children: React.ReactNode | React.ReactNode[];
  primary?: boolean;
  [p: string]: any;
};

export default IButtonProps;