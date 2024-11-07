import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";

function TanstackQueryProvider({ children }) {
  //INSTANCE-QUERY CLIENT
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        cacheTime: 10000,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
