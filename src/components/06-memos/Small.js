import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("im exposed");
  return <small>{value} </small>;
});
