/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from "vitest";
import React from "react";
import Header from "../components/header/Header.jsx";

describe('Header Component', () => {
  it('Le logo est affiché correctement', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("logo de l'entreprise Kasa");
    // toBeInTheDocument() yerine Vitest ile çalışacak matcher
    expect(logo).toBeTruthy();
  });
});
