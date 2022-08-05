import React from "react";
import create from "react-test-render";
import Paginator from "./Paginator";

test("page count is 11 but should be only 10", () => {
  const component = create(
    <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
  );
  const root = component.root;
  const spans = root.findAllByType("span");
  expect(spans.length).toBe(10);
});
test("if pages is more then 10 button NEXT should be present", () => {
  const component = create(
    <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
  );
  const root = component.root;
  const button = root.findAllByType("button");
  expect(button.length).toBe(1);
});
