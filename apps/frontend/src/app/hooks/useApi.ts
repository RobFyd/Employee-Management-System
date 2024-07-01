import { useEffect, useState } from "react";

interface ApiResponse {
  results: any;
}

export const useApi = (url: string) => {
  const [state, setState] = useState<State>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //
      })
      .then((responseData) => {
        setState({
          data: (responseData as ApiResponse).results,
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      });
  }, []);

    return state;
};
