import "./ProductListPage.scss";
import ProductItems from "./ProductItem/ProductItems";
import FavoriteItems from "./FavoriteItems/FavoriteItems";
import { useEffect, useState } from "react";
import { getProducts } from "../../shared/services/products";
import { useFavorite } from "../../shared/state/state";

const ProductListPage = () => {
  const [list, setList] = useState([]);
  const { favorite, toggleFavorite } = useFavorite();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setList(data);
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  return (
    <div className="wrapper">
      <ul className="favorite-list">
        <FavoriteItems />
      </ul>
      <ul className="list">
        <ProductItems
          list={list}
          clickHandler={toggleFavorite}
          favList={favorite}
        />
      </ul>
    </div>
  );
};

export default ProductListPage;
