import "./FavoriteItems.scss";
import { base } from "../../../shared/services/products";
import black from "../../../assets/images/dark-heart.svg";
import { useFavorite } from "../../../shared/state/state";

const FavoriteItems = () => {
  const { favorite, toggleFavorite } = useFavorite();

  return (
    <>
      <div className="favorite-items">
        <h3 className="favorite-title">Favorites</h3>
        {favorite.length >= 1 ? (
          favorite?.map((item) => (
            <li key={item.id}>
              <div className="favorite-wrap">
                <div className="favorite-item-image">
                  <img
                    className="favorite-item-img"
                    src={`${base}${item.src}`}
                    alt="one-product"
                  />
                </div>
                <div className="favorite-item-description">
                  <h3 className="favorite-item-title">{item.name}</h3>
                  <div className="favorite-item-block">
                    <p className="favorite-item-text">$ {item.price}</p>
                    <button
                      type="button"
                      value={item.id}
                      className="like-btn"
                      onClick={() => toggleFavorite(item)}
                    >
                      <img src={black} alt="favorite-icon" width={36} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>There's nothing here.</p>
        )}
      </div>
    </>
  );
};

export default FavoriteItems;
