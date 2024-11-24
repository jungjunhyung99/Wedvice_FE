"use client";

import { useState } from "react";
import type { PropsWithChildren } from "react";
import type { QueryClientConfig } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: true,
      refetchOnReconnect: false,
      retry: false,
    },
    mutations: {
      networkMode: "always",
    },
  },
};

const BaseQueryClientProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient(queryClientOption));

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default BaseQueryClientProvider;
