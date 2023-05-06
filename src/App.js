import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Router } from './Routers/Router';

import './root.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
