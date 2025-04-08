import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name", () => {
    render(<Greet name="test" />);
    expect(screen.getByText("Hello test")).toBeInTheDocument();
  });
});
