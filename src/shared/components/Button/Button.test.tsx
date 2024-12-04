import "@testing-library/jest-dom/vitest"
import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi, afterEach } from "vitest"
import { Button } from "."

describe("Button", () => {
  afterEach(() => {
    cleanup()
  })

  it("renders children correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies default classes", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("rounded", "bg-blue-500", "px-2", "py-0.5", "text-white")
  })

  it("merges custom className with default classes", () => {
    render(<Button className="custom-class">Click me</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("custom-class", "rounded", "bg-blue-500")
  })

  it("handles click events", async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole("button")
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
