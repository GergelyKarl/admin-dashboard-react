import React from "react";
import "./WidgetsTrans.css";
export default function WidgetsTrans() {
  const ButtonComp = ({ type }) => {
    return <button className={"widget__transactions__table__button " + type}>{type}</button>;
  };

  return (
    <div className="widget__transactions">
      <h3 className="widget__transactions__title">Latest Transactions</h3>
      <table className="widget__transactions__table">
        <tr className="widget__transactions__table__tr">
          <th className="widget__transactions__table__th">Customer</th>
          <th className="widget__transactions__table__th">Date</th>
          <th className="widget__transactions__table__th">Amount</th>
          <th className="widget__transactions__table__th">Status</th>
        </tr>
        <tr className="widget__transactions__table__tr">
          <td className="widget__transactions__table__user">
            <img
              src="https://images.unsplash.com/photo-1614760553312-4fde8eb121bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
              alt=""
              className="widget__transactions__table__user__image"
            />
            <span className="widget__transactions__table__user__name">Mockman 1</span>
          </td>
          <td className="widget__transactions__table__user__date">Jan 23 2021</td>
          <td className="widget__transactions__table__user__amount">58900 HUF</td>
          <td className="widget__transactions__table__user__status">
            <ButtonComp type="Approved" />
          </td>
        </tr>
        <tr className="widget__transactions__table__tr">
          <td className="widget__transactions__table__user">
            <img
              src="https://images.unsplash.com/photo-1614760553312-4fde8eb121bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
              alt=""
              className="widget__transactions__table__user__image"
            />
            <span className="widget__transactions__table__user__name">Mockman 1</span>
          </td>
          <td className="widget__transactions__table__user__date">Jan 23 2021</td>
          <td className="widget__transactions__table__user__amount">58900 HUF</td>
          <td className="widget__transactions__table__user__status">
            <ButtonComp type="Declined" />
          </td>
        </tr>
        <tr className="widget__transactions__table__tr">
          <td className="widget__transactions__table__user">
            <img
              src="https://images.unsplash.com/photo-1614760553312-4fde8eb121bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
              alt=""
              className="widget__transactions__table__user__image"
            />
            <span className="widget__transactions__table__user__name">Mockman 1</span>
          </td>
          <td className="widget__transactions__table__user__date">Jan 23 2021</td>
          <td className="widget__transactions__table__user__amount">58900 HUF</td>
          <td className="widget__transactions__table__user__status">
            <ButtonComp type="Pending" />
          </td>
        </tr>
        <tr className="widget__transactions__table__tr">
          <td className="widget__transactions__table__user">
            <img
              src="https://images.unsplash.com/photo-1614760553312-4fde8eb121bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
              alt=""
              className="widget__transactions__table__user__image"
            />
            <span className="widget__transactions__table__user__name">Mockman 1</span>
          </td>
          <td className="widget__transactions__table__user__date">Jan 23 2021</td>
          <td className="widget__transactions__table__user__amount">58900 HUF</td>
          <td className="widget__transactions__table__user__status">
            <ButtonComp type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
