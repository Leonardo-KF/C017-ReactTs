import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        if (localStorage.getItem("token") !== null) {
          localStorage.removeItem("token");
        }
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token") !== null) {
        config.headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return <></>;
}
