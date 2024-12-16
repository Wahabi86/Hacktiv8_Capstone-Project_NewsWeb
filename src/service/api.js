import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchNews = async (query) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const res = await axios.get(API_URL, {
    params: {
      q: query,
      "api-key": API_KEY,
    },
  });
  return res.data.response.docs;
};

export const useFetchNews = (query) => {
  return useQuery({
    queryKey: ["news", query],
    queryFn: () => fetchNews(query),
    staleTime: 5 * 60 * 1000, // untuk menahan data selama 5 menit setelah melakukan fethcing api
  });
};
