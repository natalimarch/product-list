import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../shared/services/products";
import { base } from "../../shared/services/products";
import { Items } from "../../types/types";
import "./ProductPage.scss";
import "../ProductListPage/ProductListPage.scss";
import white from "../../assets/images/white-heart.svg";
import black from "../../assets/images/dark-heart.svg";
import zoom from "../../assets/images/zoom.svg";
import FavoriteItems from "../ProductListPage/FavoriteItems/FavoriteItems";
import { useFavorite } from "../../shared/state/state";

const ProductPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const { prodId } = useParams();
  const [item, setItem] = useState<Items>();
  const { favorite, toggleFavorite } = useFavorite();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await getProductById(Number(prodId));
        setItem(data);
      } catch (error) {}
    };
    fetchItem();
  }, [prodId]);

  const handleBack = () => {
    if (location?.state?.from) {
      const prevLocation = location.state.from;
      history(prevLocation);
    } else {
      history("/products");
    }
  };

  const isFavorite = favorite.find((elem) => elem.id === item?.id);

  return (
    <>
      {item && (
        <>
          <div className="item-container" key={item.id}>
            <button className="button" type="button" onClick={handleBack}>
              Go back
            </button>
            <div className="main-container">
              <ul className="favorite-list" style={{ marginTop: 160 }}>
                <FavoriteItems />
              </ul>
              <div className="wrap">
                <div className="image-zoom-group">
                  <div className="item-image">
                    <img
                      className="item-img"
                      src={`${base}${item.src}`}
                      alt="one-product"
                    />
                  </div>
                  <button type="button" className="zoom-btn">
                    <img src={zoom} alt="zoom-icon" width={58} />
                  </button>
                </div>
                <div className="item-description">
                  <div className="item-title-wrapper">
                    <h3 className="item-title">{item.name}</h3>
                  </div>
                  <div className="item-text-wrapper">
                    <p className="item-text">$ {item.price}</p>
                    <button
                      type="button"
                      className="like-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(item);
                      }}
                    >
                      {isFavorite ? (
                        <img src={black} alt="favorite-icon" width={86} />
                      ) : (
                        <img src={white} alt="favorite-icon" width={86} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
