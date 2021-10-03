import "./Info.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Info() {
  return (
    <div className="info">
      <div className="info__items">
        <span className="info__title">Revanue</span>
        <div className="info__moneyContainer">
          <span className="info__money">-242345 Ft</span>
          <span className="info__rate">
            -5.9%{" "}
            <ArrowDownwardIcon className="info__icon minus" />{" "}
          </span>
        </div>
        <span className="info__compare">
          Compare to last mounth
        </span>
      </div>
      <div className="info__items">
        <span className="info__title">Cost</span>
        <div className="info__moneyContainer">
          <span className="info__money">-189868 Ft </span>
          <span className="info__rate">
            -8.9%{" "}
            <ArrowDownwardIcon className="info__icon minus" />{" "}
          </span>
        </div>
        <span className="info__compare">
          Compare to last mounth
        </span>
      </div>
      <div className="info__items">
        <span className="info__title">Sales</span>
        <div className="info__moneyContainer">
          <span className="info__money">
            213040
            <br /> Ft{" "}
          </span>
          <span className="info__rate">
            11.9 <ArrowUpwardIcon className="info__icon" />{" "}
          </span>
        </div>
        <span className="info__compare">
          Compare to last mounth
        </span>
      </div>
    </div>
  );
}
