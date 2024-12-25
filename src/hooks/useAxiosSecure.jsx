import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "../utils/toast";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch(({ code }) => toast("error", code));
        }
      }
    );
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
