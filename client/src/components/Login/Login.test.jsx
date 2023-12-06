import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import Login from './Login';

describe('Login', () => {
  const user = { email: 'peter@abv.bg', password: '123456' };

  beforeEach(() => {
    render(
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  });

  test('Should not show email error', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    userEvent.click(emailInput).then(() => {
      userEvent.type(emailInput, 'peter@abv.bg').then(() => {
        userEvent.click(passwordInput);

        waitFor(() => {
          const error = screen.queryByText('Please enter a valid email address!');
          expect(error).not.toBeInTheDocument();
        });
      });
    });
  });

  test('Should not show password error', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    userEvent.click(emailInput).then(() => {
      userEvent.click(passwordInput).then(() => {
        userEvent.type(passwordInput, '123456').then(() => {
          waitFor(() => {
            const error = screen.queryByText('Password must be at least 5 characters long!');
            expect(error).not.toBeInTheDocument();
          });
        });
      });
    });
  });

  test('Button should be enabled', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginBtn = screen.getByTestId('loginBtn');

    userEvent.type(emailInput, 'peter@abv.bg').then(() => {
      userEvent.type(passwordInput, '123456').then(() => {
        expect(loginBtn).toBeEnabled();
      });
    });
  });

  test('Password should be wrong', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginBtn = screen.getByTestId('loginBtn');

    userEvent.type(emailInput, 'peter@abv.bg');
    userEvent.type(passwordInput, '12');
    userEvent.click(loginBtn);

    const error = screen.queryByText('Login or password don\'t match');
    expect(error).not.toBeInTheDocument();
  });

  test('Email should be wrong', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginBtn = screen.getByTestId('loginBtn');

    userEvent.type(emailInput, 'toshko@abv.bg').then(() => {
      userEvent.type(passwordInput, '123456').then(() => {
        userEvent.click(loginBtn);

        waitFor(() => {
          const error = screen.queryByText('Login or password don\'t match');
          expect(error).not.toBeInTheDocument();
        });
      });
    });
  });

  test('Email and Password should be wrong', () => {
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginBtn = screen.getByTestId('loginBtn');

    userEvent.type(emailInput, 'mitko@abv').then(() => {
      userEvent.type(passwordInput, '12').then(() => {
        userEvent.click(loginBtn);

        waitFor(() => {
          const error = screen.queryByText('Login or password don\'t match');
          expect(error).not.toBeInTheDocument();
        });
      });
    });
  });

  test('Should switch to Sign Up', () => {
    const linkSignUp = screen.getByTestId('link');
    userEvent.click(linkSignUp);
    expect(global.window.location.pathname).toEqual('/');
  });

});
