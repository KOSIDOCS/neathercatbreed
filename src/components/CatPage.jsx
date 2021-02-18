import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startLoading } from "../actions/breeds";
import { initiateGetImages } from "../actions/images";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { logout } from "../utils/common";
import { Link } from "react-router-dom";
import Photo from "./Photo";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CatPage = ({ errors, breeds, images, dispatch }) => {
  const [selectBreed, setSelectBreed] = useState("abys");

  useEffect(() => {
    dispatch(startLoading());
  }, []);

  const classes = useStyles();

  const handleLogout = () => {
    logout();
  };

  const handleSelectBreed = (e) => {
    e.preventDefault();
    const name = e.target.value;
    setSelectBreed(name);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(initiateGetImages(selectBreed));
  };

  return (
    <div className="App">
      <header className="App-header">
        <HeadWrap className={classes.root}>
          <p>Welcome to Cat Breeds App</p>
          <LinkWrap onClick={() => handleLogout()} to="/">
            Logout
          </LinkWrap>
        </HeadWrap>
        <SelectWrapper>
          <label htmlFor="breed-select">Choose a breed:</label>
          <select
            value={selectBreed}
            name="breeds"
            id="breed-select"
            onChange={handleSelectBreed}
          >
            <option>choose a breed</option>
            {breeds.map((breed, index) => (
              <option value={breed.id} key={index}>
                {breed.name}
              </option>
            ))}
          </select>
          <Button
            type="submit"
            onClick={handleSearch}
            variant="outlined"
            color="primary"
          >
            Search
          </Button>
        </SelectWrapper>
        <div className="photos-list">
          {images.map((img, index) => (
            <Photo img={img.url} key={index} />
          ))}
        </div>
      </header>
    </div>
  );
};

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & p {
    margin-right: 50px;
  }
`;

const LinkWrap = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem 0 1rem;
  font-weight: 700;
  font-size: 1.3em;
  color: white;
  height: 56px;
  line-height: 64px;
  cursor: pointer;
  background-color: none;
  border: 1px solid red;
  outline: none;
  appearance: none;
  text-decoration: none;
  border-radius: 12px;
  position: relative;
  top: -1em;
  margin-left: 3.8em;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & select {
    margin-right: 30px;
    margin-left: 20px;
  }
`;

const mapStateToProps = (state) => ({
  breeds: state.breeds || [],
  errors: state.errors || {},
  images: state.images || [],
});

export default connect(mapStateToProps)(CatPage);
