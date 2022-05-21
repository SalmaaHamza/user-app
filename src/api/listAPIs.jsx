import * as api from "../config/appConfig";
import axios from "axios";

export const fetchList = (type, genere) =>
  axios.get(api.endpoints.getAllLists(type, genere));
