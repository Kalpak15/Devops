import { render, screen, fireEvent } from '@testing-library/react';
import Login from './pages/Login';

test('logs email and password on login click', () => {
  // Mock console.log
  console.log = jest.fn();

  render(<Login />);
  
  const emailInput = screen.getByPlaceholderText(/email address/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const loginButton = screen.getByRole('button', { name: /login/i });


  


  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'test123' } });

  fireEvent.click(loginButton);

  expect(console.log).toHaveBeenCalledWith('Email:', 'test@example.com');
  expect(console.log).toHaveBeenCalledWith('Password:', 'test123');
});
