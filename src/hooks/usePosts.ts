import useSWR from "swr";

export const usePosts = (limit = 10) => {
  const { data, error, isLoading } = useSWR<Blog[], Error>(
    `https://jsonplaceholder.typicode.com/posts/?_limit=${limit}`,
    (arg: string) => fetch(arg).then((res) => res.json())
  );

  return { data, error, isLoading };
};
