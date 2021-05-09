import React from "react";

interface IModalProps {
  children: React.ReactNode | React.ReactNode[];
  open: boolean;
  color?: string;
  onHide: () => {};
};

export default IModalProps;