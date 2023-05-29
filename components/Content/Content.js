import Filters from "components/Filters/Filters";
import Products from "components/Products/Products";
import React from "react";
import ContentClasses from "styles/components/Content.module.scss";
import useMobile from "utils/hooks/useMobile";

function Content(props) {
  const { isTabletOrSmaller } = useMobile();
  return (
    <main className={ContentClasses["content__main"]}>
      {!isTabletOrSmaller && (
        <div className={ContentClasses["content__left"]}>
          <Filters cardsData={props.cardsData} />
        </div>
      )}
      <div className={ContentClasses["content__right"]}>
        <Products cardsData={props.cardsData} />
      </div>
    </main>
  );
}

export default React.memo(Content);
