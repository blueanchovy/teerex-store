import { useCardsContext } from "Context/cardsProvider";
import Filters from "components/Filters/Filters";
import Products from "components/Products/Products";
import React from "react";
import ContentClasses from "styles/components/Content.module.scss";
import useMobile from "utils/hooks/useMobile";

function Content() {
  const { cardsData = [] } = useCardsContext();
  const colors = [...new Set(cardsData?.map((card) => card?.color))];
  const genders = [...new Set(cardsData?.map((card) => card?.gender))];
  const types = [...new Set(cardsData?.map((card) => card?.type))];
  const prices = ["0-250", "250-450", "450"];
  const { isTabletOrSmaller } = useMobile();
  return (
    <div className={ContentClasses["content__main"]}>
      {!isTabletOrSmaller && (
        <div className={ContentClasses["content__left"]}>
          <Filters
            colors={colors}
            genders={genders}
            types={types}
            prices={prices}
            hasApplyButton={false}
          />
        </div>
      )}
      <div className={ContentClasses["content__right"]}>
        <Products />
      </div>
    </div>
  );
}

export default React.memo(Content);
