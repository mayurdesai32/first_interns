import Rating from "./Rating";

export default function Product({ ele }) {
  return (
    <>
      <div className="item " key={ele.id}>
        <div className="product_image">
          <img src={ele.product_image} alt="product_image" />
        </div>
        <div className="product_detail">
          <div className="product_title">{ele.title}</div>
          <div className="product_desc">{ele.description.slice(0, 30)}</div>

          <div className="product_rating">{/* <Rating /> */}</div>
          <div className="product_price">
            {ele.price}${ele.discount && <span>{ele.discount}% discount</span>}
          </div>
          <div className="product_bottom">
            <div className="product_delivery">
              {/* {ele.earliest_shipping.parseInt().toLocaleDateString() <=
              Date.now().toLocaleDateString() + 2 ? (
                <>
                  {" "}
                  <i className="fas fa-truck"></i> deleve
                </>
              ) : (
                <></>
              )} */}
            </div>
            <div className="product_addToCard">add to</div>
          </div>
        </div>
      </div>
    </>
  );
}
