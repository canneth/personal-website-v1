/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import {  } from '@testing-library/jest-dom';
import MainPage from '@/pages/index';

describe('Main page', () => {
  it('Renders a h1 element that says Hello!', () => {
    render(<MainPage />);
    const element = screen.getByText('Hello!');
    expect(element.textContent).toBe('Hello!');
  });
});