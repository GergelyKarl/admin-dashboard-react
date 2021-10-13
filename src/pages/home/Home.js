import React from "react";
import Chart from "../../components/charts/Chart";
import Info from "../../info/Info";
import "./Home.css";
import { data } from "../../MockData";
import WidgetsTrans from "../../components/widgets/WidgetsTrans";
import WidgetsUsers from "../../components/widgets/WidgetsUsers";
export default function Home() {

  return (
    <div className="home">
      <Info />
      <Chart
        data={data}
        title="New Users"
        grid
        dataKey="Users"
      />
      <div className="transactions">
          <WidgetsUsers />
          <WidgetsTrans />
      </div>
    </div>
  );
}
