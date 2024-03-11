// import { ClientProvider } from "@/providers/client";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return children;
  // return <ClientProvider>{children}</ClientProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
