declare module "@remix-run/router" {
  interface FutureConfig {
    v7_startTransition?: boolean;
    v7_relativeSplatPath?: boolean;
  }
}

declare module "react-router" {
  interface FutureConfig {
    v7_startTransition?: boolean;
    v7_relativeSplatPath?: boolean;
  }
}

