import { Items } from "../../../types/types";
import ProductListItem from "./ProductListItem";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
// import ReactImageMagnify from "react-image-magnify";

import "../ProductListPage.scss";

interface Prop {
  list: Items[];
  clickHandler: (product: Items) => void;
  favList: Items[];
}

interface Row {
  style: React.CSSProperties;
}

const ProductItems = ({ list, clickHandler, favList }: Prop) => {
  const Row = ({ style }: Row) => (
    <div className="cell" style={style}>
      {list.map((item) => (
        <ProductListItem
          item={item}
          favList={favList}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          className="List"
          height={height}
          width={width}
          itemSize={35}
          itemCount={1}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ProductItems;

{
  /* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product-Image",
                  isFluidWidth: true,
                  src: `${base}${item.src}`,
                  sizes: "(max-width: 232px)",
                },
                largeImage: {
                  src: `${base}${item.src}`,
                  width: 1200,
                  height: 1800,
                },
              }}
            /> */
}
