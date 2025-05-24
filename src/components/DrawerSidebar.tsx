// src/components/DrawerSidebar.tsx
import React from "react";
import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";

interface DrawerSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function DrawerSidebar({ open, onClose }: DrawerSidebarProps) {
  return (
    <Drawer open={open} onClose={onClose} anchor="left">
      <Sidebar onClose={onClose} />
    </Drawer>
  );
}
