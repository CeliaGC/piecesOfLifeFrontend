import { render, screen } from "@testing-library/react";
import MyNavbar from "../src/components/MyNavbar";
import '@testing-library/jest-dom'

test('should render app title', () => { 
    render(<MyNavbar />); 
    const titleElement = screen.getByText(/My fave Images/i); 
    expect(titleElement).toBeInTheDocument(); 
});