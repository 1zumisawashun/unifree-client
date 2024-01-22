// NOTE:Newline to brの略
export const Nl2br = ({ children }: { children: string }) => (
  <>
    {children
      .split(/(\n)/g)
      .map((t, index) => (t === "\n" ? <br key={index} /> : t))}
  </>
);
