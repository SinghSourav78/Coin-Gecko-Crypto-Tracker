
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    // and technically you can see you passing app component as the plot here technically queryClientProvider must be able to access our App component using the children props
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
  
)
