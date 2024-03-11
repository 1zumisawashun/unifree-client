import { render, screen } from "@/__tests__/utilities/test-utils";
import { Button } from "@/components/buttons/Button";
import { ComponentProps } from "react";

describe("Buttonコンポーネントの単体テスト", () => {
  const setup = ({ children, ...props }: ComponentProps<typeof Button>) => {
    const handleClick = jest.fn();
    const { user } = render(
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
    );
    const button = screen.getByRole("button");
    return { button, user, handleClick };
  };

  it("正しくレンダリングされる", () => {
    // arrange
    const { button } = setup({ children: "Button" });
    // act

    // assert
    expect(button).toBeInTheDocument();
  });

  it("children propsからのテキストが正しく表示される", () => {
    // arrange
    setup({ children: "Button" });
    const button = screen.getByText("Button");
    // act

    // assert
    expect(button).toBeInTheDocument();
  });

  it("ボタン固有の属性(disabled)が正しく適用される", () => {
    // arrange
    const { button } = setup({ children: "Button", disabled: true });
    // act

    // assert
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("クリック時にonClickイベントハンドラがトリガーされる", async () => {
    // arrange
    const { user, button, handleClick } = setup({ children: "Button" });
    // act
    await user.click(button);
    // assert
    expect(handleClick).toHaveBeenCalled();
  });
});
