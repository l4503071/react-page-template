import { useMemo } from "react";
import { createSelector } from "reselect";

export const makeSelectCardList = function () {
  return useMemo(
    () =>
      createSelector(
        (state) => state,
        (state) => {
          return state;
        }
      ),
    []
  );
};
