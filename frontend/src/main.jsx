import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from "@sentry/react";

// --- Initialize Sentry ---
Sentry.init({
  dsn: "https://017f7c5b783dc07c4e762ae0209c4f37@o4510149085626368.ingest.de.sentry.io/4510149196578896",

  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect, // ✅ Now works since React is imported
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  // --- Performance monitoring ---
  tracesSampleRate: 1.0, // 1.0 = capture all traces (use lower in production)
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // --- Session Replay ---
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0,  // 100% when errors occur
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
