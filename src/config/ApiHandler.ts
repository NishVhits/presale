import { ResponseData } from "./apiHandlerInterFace";
import axios, { AxiosResponse } from "axios";
import { DataService } from "./DataService";
const apiGetHandler = (url: string, payload?: string) => {
  axios.defaults.withCredentials = true;
  if (payload) {
    return DataService.get(url + "/" + payload)
      .then((res: AxiosResponse<ResponseData>) => {
        return {
          data: res?.data?.data,
          status: res?.status,
          message: res?.data?.message,
        };
      })
      .catch((err: any) => {
        return {
          data: err?.response?.data?.data,
          status: err?.response?.status,
          message: err?.response?.data?.message || err?.response?.data?.data,
        };
      });
  } else {
    return DataService.get(url)
      .then((res: AxiosResponse<ResponseData>) => {
        return {
          data: res?.data?.data,
          status: res.status,
          message: res?.data?.message,
        };
      })
      .catch((err: any) => {
        return {
          data: err?.response?.data?.data,
          status: err?.response?.status,
          message: err?.response?.data?.message || err?.response?.data?.data,
        };
      });
  }
};

const apiGetHandlerAdmin = (url: string, payload?: string) => {
  axios.defaults.withCredentials = true;
  if (payload) {
    return DataService.get(url + "/" + payload)
      .then((res: AxiosResponse<ResponseData>) => {
        return {
          data: res?.data?.data,
          status: res?.status,
          message: res?.data?.message,
        };
      })
      .catch((err: any) => {
        return {
          data: err?.response?.data?.data,
          status: err?.response?.status,
          message: err?.response?.data?.message || err?.response?.data?.data,
        };
      });
  } else {
    return DataService.get(url)
      .then((res: AxiosResponse<ResponseData>) => {
        return {
          data: res?.data?.data,
          status: res.status,
          message: res?.data?.message,
        };
      })
      .catch((err: any) => {
        return {
          data: err?.response?.data?.data,
          status: err?.response?.status,
          message: err?.response?.data?.message || err?.response?.data?.data,
        };
      });
  }
};

const apiPostHandler = (url: string, payload?: object) => {
  axios.defaults.withCredentials = true;
  return DataService.post(url, payload)
    .then((res: AxiosResponse<ResponseData>) => {
      return {
        data: res?.data?.data,
        status: res?.status,
        message: res?.data?.message,
        htmlData: res?.data,
      };
    })
    .catch((err: any) => {
      return {
        data: err?.response?.data?.data,
        status: err?.response?.status,
        message: err?.response?.data?.message || err?.response?.data?.data,
      };
    });
};

const apiDeleteHandler = (url: string) => {
  axios.defaults.withCredentials = true;
  return DataService.delete(url)
    .then((res: AxiosResponse<ResponseData>) => {
      return {
        data: res?.data?.data,
        status: res?.status,
        message: res?.data?.message,
      };
    })
    .catch((err: any) => {
      return {
        data: err?.response?.data?.data,
        status: err?.response?.status,
        message: err?.response?.data?.message || err?.response?.data?.data,
      };
    });
};

export { apiGetHandler, apiPostHandler, apiDeleteHandler, apiGetHandlerAdmin };
