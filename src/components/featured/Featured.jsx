import { React, useEffect } from "react";
import {useDispatch} from 'react-redux'
import styles from "./featured.module.css";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import getAllGeneres from "../../redux/actions/genreActions";
import Categories from "./Categories";
const Featured = ({ type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGeneres());
  }, [dispatch]);
  return (
    <div className={styles?.featured}>
      <Categories type={type} />
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Trail"
        className={styles?.featuredImg}
      />
      <div className={styles?.info}>
        <div className={styles?.movieHeader}>
          <h1> Movie Name</h1>
        </div>

        <span className={styles.desc}>
          n order for react to understand your css file is a css-module, you
          need to add the suffix .module to the file name while using a
          react-script
        </span>
        <div className={styles?.buttons}>
          <button className={styles?.playbtn}>
            <PlayArrow />
            <span className={styles.spanbtn}>Play</span>
          </button>
          <button className={styles?.infobtn}>
            <InfoOutlined />
            <span className={styles.spanbtn}>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
