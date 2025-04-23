// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Login from './pages/Login';

// // ✅ Mock react-toastify
// jest.mock('react-toastify', () => ({
//   toast: {
//     success: jest.fn(),
//   },
// }));


// test('logs email and password on login click', () => {
//   // Mock console.log
//   console.log = jest.fn();

//   render(<Login />);
  
//   const emailInput = screen.getByPlaceholderText(/email address/i);
//   const passwordInput = screen.getByPlaceholderText(/password/i);
//   const loginButton = screen.getByRole('button', { name: /login/i });


  


//   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//   fireEvent.change(passwordInput, { target: { value: 'test123' } });

//   fireEvent.click(loginButton);

//   expect(console.log).toHaveBeenCalledWith('Email:', 'test@example.com');
//   expect(console.log).toHaveBeenCalledWith('Password:', 'test123');
// });


/**
 * @jest-environment jsdom
 */

import React from 'react'; // ✅ Required
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './pages/Login';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

test('logs email and password on login click', () => {
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

