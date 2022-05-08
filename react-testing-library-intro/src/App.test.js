import React from 'react';

import { render, screen } from "@testing-library/react";
import App from "./App";


describe('proves in App component', () => { 

  beforeEach(() => {
    render(<App />);
  });
  
  it('shoul render the h1 text', () => {
    const h1Text = screen.getByText(/Welcome to React-testing-library/i);
    expect(h1Text).toBeInTheDocument();
  })

  it('should render the h2 text', () => {
    const h2Text = screen.getByTestId('mytestid');
    expect(h2Text).toBeInTheDocument();
  });

  it('should render the span text', () => {
    const spanText = screen.getByTitle(/time/i);
    expect(spanText.textContent).toBe('when you can');
  });

  
 })

