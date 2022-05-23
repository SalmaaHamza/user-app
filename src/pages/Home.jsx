import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import getAllLists from "../redux/actions/listsActions";
import HomeModule from "../modules/HomeModule";
const Home = ({ type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLists(type, ""));
  }, [dispatch, type]);

  return <HomeModule type={type} />;
};

export default Home;
