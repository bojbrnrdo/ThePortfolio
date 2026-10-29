'use client';
import { Component, type ReactNode } from 'react';

/** Graphics are optional; the server-rendered image and links remain underneath. */
export class GraphicsBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}
