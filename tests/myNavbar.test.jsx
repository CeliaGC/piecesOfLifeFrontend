import { render, screen } from "@testing-library/react";
import MyNavbar from "../src/components/MyNavbar";
import '@testing-library/jest-dom'


test('should render app logo', () => { 
    render(<MyNavbar />); 
    const logoElement = screen.getByAltText('camera-logo'); 
    expect(logoElement).toBeInTheDocument(); 
});

// describe('MyNavbar', () => {
//     it('2 buttons exists', () => {
//       const { getByRole } = render(<MyNavbar />);
//       expect(getByRole('img',(name=)).length).toBe(1);
//     });
//   });