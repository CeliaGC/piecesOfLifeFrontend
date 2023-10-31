import { render, screen } from "@testing-library/react";
import MyNavbar from "../src/components/MyNavbar";
import '@testing-library/jest-dom'


test('should render app logo', () => { 
    render(<MyNavbar />); 
    const logoElement = screen.getByAltText('camera-logo'); 
    expect(logoElement).toBeInTheDocument(); 
});

