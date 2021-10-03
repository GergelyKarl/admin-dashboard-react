import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <div className="sidebar__title">Dashboard</div>
          <ul className="sidebar__list">
            <li className="sidebar__listItem active">
              <LineStyleIcon className="sidebar__icon" />{" "}
              Home
            </li>
            <li className="sidebar__listItem">
              <TimelineIcon className="sidebar__icon" />{" "}
              Analytics
            </li>
            <li className="sidebar__listItem">
              <TrendingUpIcon className="sidebar__icon" />{" "}
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__title">Quick Menu</div>
          <ul className="sidebar__list">
            <li className="sidebar__listItem ">
              <PeopleIcon className="sidebar__icon" /> Users
            </li>
            <li className="sidebar__listItem">
              <StorefrontIcon className="sidebar__icon" />{" "}
              Products
            </li>
            <li className="sidebar__listItem">
              <AttachMoneyIcon className="sidebar__icon" />{" "}
              Transactions
            </li>
            <li className="sidebar__listItem">
              <DescriptionIcon className="sidebar__icon" />{" "}
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__title">
            Notifications
          </div>
          <ul className="sidebar__list">
            <li className="sidebar__listItem active">
              <EmailIcon className="sidebar__icon" /> Mail
            </li>
            <li className="sidebar__listItem">
              <DynamicFeedIcon className="sidebar__icon" />{" "}
              Feedback
            </li>
            <li className="sidebar__listItem">
              <MessageIcon className="sidebar__icon" />{" "}
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__title">Staff</div>
          <ul className="sidebar__list">
            <li className="sidebar__listItem active">
              <WorkIcon className="sidebar__icon" /> Manage
            </li>
            <li className="sidebar__listItem">
              <AddTaskIcon className="sidebar__icon" />{" "}
              Tasks
            </li>
            <li className="sidebar__listItem">
              <ReportProblemIcon className="sidebar__icon" />{" "}
              Warnings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
