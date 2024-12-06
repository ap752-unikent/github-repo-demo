import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "./components/ui/provider"
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Home />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
