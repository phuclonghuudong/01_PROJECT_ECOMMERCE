import { Spin } from "antd";
import React, { Suspense, useEffect } from "react";
import { loginRedux } from "../../redux/auth.slice";
import * as UserService from "../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const LoadLazy = ({ children }) => {
  const auth = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFc = async () => {
      const { storageData, decode } = await handleDecode();
      if (decode?.id) {
        await handleGetDetailUser(decode?.id, storageData);
      }
    };
    asyncFc();
  }, []);

  const handleDecode = async () => {
    let storageData = localStorage.getItem("access_token");
    let decode = {};
    decode = jwtDecode(storageData);
    return { storageData, decode };
  };

  const handleGetDetailUser = async (id, token) => {
    const result = await UserService.getDetailUser(id, token);
    dispatch(loginRedux({ USER: result?.data?.DT, ACCESS_TOKEN: token }));
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { storageData, decode } = await handleDecode();

      if (decode?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        console.log("data--------", data);

        if (data?.EC === 0) {
          localStorage.setItem("access_token", data?.DT?.ACCESS_TOKEN);
          await handleGetDetailUser(decode?.id, data?.DT?.ACCESS_TOKEN);
          config.headers["authorization"] = "Bearer " + data?.DT?.ACCESS_TOKEN;
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return <Suspense fallback={<Spin size="small" />}>{children}</Suspense>;
};

export default LoadLazy;
