import "./NewProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProduct__title">New Product</h1>
      <form action="" className="newProduct__form">
        <div className="newProduct__item">
          <label htmlFor="">id</label>
          <input type="text" placeholder="6" />
        </div>
        <div className="newProduct__item">
          <label htmlFor="">name</label>
          <input type="text" placeholder="Product name" />
        </div>
        <div className="newProduct__item">
          <label htmlFor="">Image URL</label>
          <input type="text" placeholder="http://......" />
        </div>
        <div className="newProduct__item">
          <label htmlFor="">Stock</label>
          <input type="number" />
        </div>
        <div className="newProduct__item">
          <label htmlFor="">Status</label>
          <input type="text" placeholder="active" />
        </div>
        <div className="newProduct__item">
          <label htmlFor="">Price</label>
          <input type="text" placeholder="28900 FT" />
        </div>
        <button className="newProduct__button">Create</button>
      </form>
    </div>
  );
}
