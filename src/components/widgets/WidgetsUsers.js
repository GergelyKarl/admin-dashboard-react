import React from "react";
import "./WidgetsUsers.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetsUsers() {
  return (
    <div className="widget__users">
      <h3 className="widget__users__title">Latest Members</h3>
      <ul className="widget__users__list">
        <li className="widget__users__item">
          <img
            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80"
            alt=""
            className="widget__users__image"
          />
          <div className="widget__users__user">
            <span className="widget__users__name">Mockman 1</span>
            <span className="widget__users__userTitle">Recruiter</span>
          </div>
          <button className="widget__users__button">
            <VisibilityIcon />
            Display
          </button>
        </li>
      </ul>
      <ul className="widget__users__list">
        <li className="widget__users__item">
          <img
            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80"
            alt=""
            className="widget__users__image"
          />
          <div className="widget__users__user">
            <span className="widget__users__name">Mockman 2</span>
            <span className="widget__users__userTitle">Recruiter</span>
          </div>
          <button className="widget__users__button">
            <VisibilityIcon />
            Display
          </button>
        </li>
      </ul>
      <ul className="widget__users__list">
        <li className="widget__users__item">
          <img
            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80"
            alt=""
            className="widget__users__image"
          />
          <div className="widget__users__user">
            <span className="widget__users__name">Mockman 3</span>
            <span className="widget__users__userTitle">Recruiter</span>
          </div>
          <button className="widget__users__button">
            <VisibilityIcon />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
