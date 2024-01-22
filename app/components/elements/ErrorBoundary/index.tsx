"use client";
import React, { ReactNode } from "react";

type Props = { fallback: ReactNode; children: ReactNode };

/**
 * @description イベントハンドラ・非同期コード・SSRは下記ではキャッチできないのでreact-error-boundaryが必要になる
 * @see https://ja.legacy.reactjs.org/docs/react-component.html#error-boundaries
 * @see https://zenn.dev/azukiazusa/articles/60933e9cb1a4bc
 */
export class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return <>{this.props.children}</>;
  }
}
