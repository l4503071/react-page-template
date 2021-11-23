import { useMemo } from "react";
import { createSelector } from "reselect";

export const makeSelectCardList = function () {
  return useMemo(
    () =>
      createSelector(
        (state) => state.home.cardList,
        (state) => state.home.filter,
        (cardList, filter) => {
          return cardList.filter((card) => {
            const str = card.labels.join("");
            return str.includes(filter);
          });
        }
      ),
    []
  );
};
