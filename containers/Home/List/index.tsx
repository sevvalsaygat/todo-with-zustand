import React from "react";

import { Home } from "@app/containers";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  return (
    <div>
      <div>List</div>
      <Home.ListItem />
    </div>
  );
};

export default List;
