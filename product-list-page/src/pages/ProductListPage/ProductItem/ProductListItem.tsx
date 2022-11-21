import { Link } from "react-router-dom";
import { base } from "../../../shared/services/products";
import { Items } from "../../../types/types";
import { memo } from "react";
import white from "../../../assets/images/white-heart.svg";
import black from "../../../assets/images/dark-heart.svg";

interface Prop {
  clickHandler: (product: Items) => void;
  favList: Items[];
  item: Items;
}

const ProductListItem = ({ item, favList, clickHandler }: Prop) => {
  return (
    <li className="item" key={item.id}>
      <Link
        to={{
          pathname: `/products/${item.id}`,
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="image">
          <img
            className="img"
            src={`${base}${item.src}`}
            alt="product-img"
            max-width="232"
          />
        </div>

        <div className="description">
          <div className="title-wrapper">
            <h3 className="title">{item.name}</h3>
          </div>
          <div className="text-wrapper">
            <p className="text">$ {item.price}</p>
            <button
              type="button"
              className="like-btn"
              onClick={(e) => {
                e.preventDefault();
                clickHandler(item);
              }}
            >
              {favList.find((elem) => elem.id === item?.id) ? (
                <img src={black} alt="favorite-icon" width={36} />
              ) : (
                <img src={white} alt="favorite-icon" width={36} />
              )}
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default memo(ProductListItem);
