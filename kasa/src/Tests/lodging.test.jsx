/**
 * @vitest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import Lodging from "../pages/lodging/lodging.jsx";

describe('Lodging bileşeni', () => {
  it('Le contenu est affiché avec ID du paramètre URL', async () => {
    // Mock veri
    const mockData = {
      title: "Appartement cosy",
      location: "Paris",
      description: "Un bel appartement",
      tags: ["tag1", "tag2"],
      host: { name: "John Doe", picture: "url" },
      rating: 4,
      pictures: [],
      equipments: ["WiFi", "Chauffage"],
    };

    // fetch'i mockla
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    ));

    render(
      <MemoryRouter initialEntries={['/lodging/c67ab8a7']}>
        <Routes>
          <Route path="/lodging/:id" element={<Lodging />} />
        </Routes>
      </MemoryRouter>
    );

    // Asenkron olarak yüklenmesini bekle
    await waitFor(() => {
      expect(screen.getByText("Appartement cosy")).toBeTruthy();
      expect(screen.getByText("Paris")).toBeTruthy();
      expect(screen.getByText("Un bel appartement")).toBeTruthy();
    });
  });
});
