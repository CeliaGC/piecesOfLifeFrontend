import { render, screen } from "@testing-library/react";
import UpLoadForm from "../src/components/UploadForm";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test('Form renders without crashing', () => { 
    render(
        <MemoryRouter>
        <UpLoadForm />
      </MemoryRouter>
    ); 
    const pageName = screen.getByText('New Image');
    expect(pageName).toBeInTheDocument(); 
});
