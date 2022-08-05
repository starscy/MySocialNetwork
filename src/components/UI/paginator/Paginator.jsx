import React, { useState } from "react";
import classes from "../paginator/Paginator.module.css";
import MyButton from "../button/MyButton";

const Paginator = ({
  totalItemsCount,
  pageSize,
  changePage,
  currentPage,
  portionSize = 20,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftBorderPortion = (portionNumber - 1) * portionSize + 1;
  let rightBorderPortion = portionNumber * portionSize;

  return (
    <div className={classes.pageNumberString}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (page) => page >= leftBorderPortion && page < rightBorderPortion
        )
        .map((page) => (
          <div
            key={page}
            className={`${classes.pageNumberLink} ${
              currentPage === page && classes.selectedPage
            }`}
            onClick={() => {
              changePage(page);
            }}
          >
            {page}
          </div>
        ))}
      {portionNumber < pageSize && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
