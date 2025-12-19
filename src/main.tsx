import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { B1ndToastContainer } from '@b1nd/b1nd-toastify'

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <B1ndToastContainer autoClose={1000} limit={1}/>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);    