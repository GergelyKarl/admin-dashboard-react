import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, IconButton } from "@mui/material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <span className="logo">LOGO</span>
        </div>
        <div className="topbar__right">
          <div className="topbar__icons">
            <NotificationsNoneIcon />
          </div>
          <div className="topbar__icons">
            <LanguageIcon />
          </div>
          <div className="topbar__icons">
            <IconButton size="large">
              <SettingsIcon />
            </IconButton>
          </div>
          <IconButton size="large">
            <Avatar className="topbar__avatar">G</Avatar>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
