import axios from "axios";
import { useState, useEffect } from "react";

export type useAxiosProps = {
  method: string;
  url: string;
  propsData?: any;
};

export const useAxios = ({ method, url, propsData }: useAxiosProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    if (propsData) {
      axios({ method, url, data: propsData })
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      axios({ method, url })
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, []);

  return { loading, data, error };
};
