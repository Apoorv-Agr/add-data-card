import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  getMaleUserRequest,
  getMaleUserSuccess,
  getMaleUserFail,
  getFeMaleUserRequest,
  getFeMaleUserSuccess,
  getFeMaleUserFail,
  addToCard,
} from "../actions";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [singleUserData, setSingleUserData] = useState({
    email: "",
    userName: "",
    dob: "",
    city: "",
    country: "",
    thumbNail: "",
    id: "",
  });

  const onFetchMaleData = () => {
    dispatch(getMaleUserRequest());
    axios
      .get("https://randomuser.me/api/?gender=male")
      .then((resp) => {
        const resultsArr = resp.data.results;
        const { dob, name, location, picture, email, login } = resultsArr[0];
        setSingleUserData({
          email: email,
          dob: `${dob.date}`,
          userName: `${name.title} ${name.first} ${name.last}`,
          city: location.city,
          country: location.country,
          thumbNail: picture.thumbnail,
          id: login.uuid,
        });
        dispatch(
          getMaleUserSuccess([
            {
              email: email,
              dob: `${dob.date}`,
              userName: `${name.title} ${name.first} ${name.last}`,
              city: location.city,
              country: location.country,
              thumbNail: picture.thumbnail,
              id: login.uuid,
            },
          ])
        );
      })
      .catch((err) => {
        dispatch(getMaleUserFail(err.message));
      });
  };

  const onFetchFeMaleData = () => {
    dispatch(getFeMaleUserRequest());
    axios
      .get("https://randomuser.me/api/?gender=female")
      .then((resp) => {
        const resultsArr = resp.data.results;
        const { dob, name, location, picture, email } = resultsArr[0];
        setSingleUserData({
          email: email,
          dob: `${dob.date}`,
          userName: `${name.title} ${name.first} ${name.last}`,
          city: location.city,
          country: location.country,
          thumbNail: picture.thumbnail,
        });
        dispatch(
          getFeMaleUserSuccess([
            {
              email: email,
              dob: `${dob.date}`,
              userName: `${name.title} ${name.first} ${name.last}`,
              city: location.city,
              country: location.country,
              thumbNail: picture.thumbnail,
            },
          ])
        );
      })
      .catch((err) => {
        dispatch(getFeMaleUserFail(err.message));
      });
  };

  const addToCardHandler = (e) => {
    e.preventDefault();
    dispatch(addToCard());
  };
  return (
    <div>
      <Button type="primary" onClick={onFetchMaleData}>
        Fetch Male Data
      </Button>
      <Button type="primary" onClick={onFetchFeMaleData}>
        Fetch Female Data
      </Button>
      <br />
      <form action="">
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={singleUserData.email}
          />
        </div>
        <div>
          <label htmlFor="userName">UserName : </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={singleUserData.userName}
          />
        </div>
        <div>
          <label htmlFor="dob">Dob : </label>
          <input type="text" name="dob" id="dob" value={singleUserData.dob} />
        </div>
        <div>
          <label htmlFor="city">City : </label>
          <input
            type="text"
            name="city"
            id="city"
            value={singleUserData.city}
          />
        </div>
        <div>
          <label htmlFor="country">Country : </label>
          <input
            type="text"
            name="country"
            id="country"
            value={singleUserData.country}
          />
        </div>
        <div>
          <label htmlFor="thumbNail">Profile Thumbnail : </label>
          <img src={singleUserData.thumbNail} alt="Profile" />
        </div>
        <div>
          <Button type="submit" onClick={addToCardHandler}>
            Add to Card
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
