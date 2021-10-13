import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../MockData";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h1 className="product__title">Product</h1>
        <Link to="/newproduct">
          <button className="product__button">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product__top__left">
          <Chart data={productData} dataKey="Sales" title="Sales" grid />
        </div>
        <div className="product__top__right">
          <div className="product__info__top">
            <img
              className="product__info__image"
              src="https://images.unsplash.com/photo-1561808843-7adeb9606939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="product"
            />
            <span className="product__name">Product 1</span>
          </div>
          <div className="product__info__bottom">
            <div className="product__info__item">
              <span className="product__info__key">id :</span>
              <span className="product__info__values">795648</span>
            </div>
            <div className="product__info__item">
              <span className="product__info__key">sales: </span>
              <span className="product__info__values">79</span>
            </div>
            <div className="product__info__item">
              <span className="product__info__key">active: </span>
              <span className="product__info__values">no</span>
            </div>
            <div className="product__info__item">
              <span className="product__info__key">in stock:</span>
              <span className="product__info__values">out of stock</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form action="" className="product__form">
          <div className="product__form__left">
            <label htmlFor="">Product Name :</label>
            <input type="text" placeholder="Product name" />
            <label htmlFor="">In Stock : </label>
            <select name="inStock" id="inStock">
              <option value="in stock">In Stock</option>
              <option value="out of stock">Out of Stock</option>
            </select>
          </div>
          <div className="product__form__right">
            <div className="product__upload">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                alt=""
                className="product__upload__image"
              />
              <label htmlFor="file">
                <PublishIcon />
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
            <button className="product__button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
