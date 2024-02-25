import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './components/App.tsx';
const queryClient = new QueryClient();
document.addEventListener('DOMContentLoaded', () => {
    createRoot(document.getElementById('app')).render(_jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(App, {}), _jsx(ReactQueryDevtools, {})] }));
});
