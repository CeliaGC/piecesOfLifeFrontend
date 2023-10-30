import { render, screen, waitFor } from "@testing-library/react";
import Wellcome from "../src/components/Wellcome";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test('Wellcome text renders', () => { 
    render(
        <MemoryRouter>
        <Wellcome />
      </MemoryRouter>
    ); 
    const wellComeText = screen.getByText('Wellcome to Pieces of life. This is a place to storage any pictures of your own or those you find in the Worl Wide Web.');
    expect(wellComeText).toBeVisible(); 
});