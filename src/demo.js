import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const OuterView = styled.div`
  width: 409px;
  height: 45px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 8px 0px rgba(67, 86, 100, 0.1),
    0px 0px 16px 0px rgba(67, 86, 100, 0.08);
  border-radius: 31px;
`;

const InputBaseElement = styled(InputBase)`
  flex: 1;
`;

const IconButtonElement = styled(IconButton)`
  padding: 10;
`;

export default function SearchInputBase() {
  return (
    <OuterView component="form">
      <IconButtonElement type="submit" aria-label="search">
        <SearchIcon />
      </IconButtonElement>
      <InputBaseElement
        placeholder="Search Causes"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </OuterView>
  );
}
