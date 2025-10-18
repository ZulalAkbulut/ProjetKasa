import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import Collapse from "../components/collapse/Collapse.jsx";

describe("Collapse Component", () => {
  it("Le titre s'affiche correctement", () => {
    render(<Collapse title="Explication" text="Texte détaillé" />);
    expect(screen.getByText("Explication")).toBeInTheDocument();
  });

  it("Lorsque vous cliquez, le contenu s'ouvre et se ferme.", async () => {
    const { container } = render(<Collapse title="Explication" text="Texte détaillé" />);
    const collapse = container.querySelector(".collapse");
    const icon = collapse.querySelector('img[alt="icône flèche"]');
    const collapseContent = collapse.querySelector(".collapse-content");

    expect(collapseContent.classList.contains("open")).toBe(false);

    fireEvent.click(icon);
    await waitFor(() => expect(collapseContent.classList.contains("open")).toBe(true));

    fireEvent.click(icon);
    await waitFor(() => expect(collapseContent.classList.contains("open")).toBe(false));
  });
});
