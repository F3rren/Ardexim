"use client";

import React from "react";

// Intercetta gli errori di caricamento del modello (es. file mancante) dentro
// il Canvas e notifica il genitore per mostrare un fallback HTML.
export default class ModelErrorBoundary extends React.Component<
  { onError: () => void; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
