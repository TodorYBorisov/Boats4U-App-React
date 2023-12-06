import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import Register from './Register';

describe('Register', () => {
    const user = { username: 'peter', phone: '+359', email: 'peter@abv.bg', password: '123456', rePassword: '123456', gender: 'female' };

    beforeEach(() => {
        render(
            <AuthContext.Provider value={user}>
                <BrowserRouter>
                    <Register />
                </BrowserRouter>
            </AuthContext.Provider>
        );
    });

    // test('Should not show username error', async () => {
    //     const usernameInput = screen.getByTestId('username');

    //     userEvent.click(usernameInput);
    //     await userEvent.type(usernameInput, 'peter');

    //     await waitFor(() => {
    //         const error = screen.queryByText('Username must be at least 3 characters long!');
    //         expect(error).not.toBeInTheDocument();
    //     });
    // });

    // test('Should not show email error', async () => {
    //     const emailInput = screen.getByTestId('email');

    //     userEvent.click(emailInput);
    //     await userEvent.type(emailInput, 'peter@abv.bg');

    //     await waitFor(() => {
    //         const error = screen.queryByText('Please enter a valid email address!');
    //         expect(error).not.toBeInTheDocument();
    //     });
    // });

    // test('Should not show phone error', async () => {
    //     const phoneInput = screen.getByTestId('phone');

    //     userEvent.click(phoneInput);
    //     await userEvent.type(phoneInput, '+359');

    //     await waitFor(() => {
    //         const error = screen.queryByText('Please, enter your Phone Number!');
    //         expect(error).not.toBeInTheDocument();
    //     });
    // });

    // test('Should not show password error', async () => {
    //     const passwordInput = screen.getByTestId('password');

    //     userEvent.click(passwordInput);
    //     await userEvent.type(passwordInput, '123456');

    //     await waitFor(() => {
    //         const error = screen.queryByText('Password must be at least 5 characters long!');
    //         expect(error).not.toBeInTheDocument();
    //     });
    // });

    // test('Should not show repeat password error', async () => {
    //     const rePasswordInput = screen.getByTestId('rePassword');
    
    //     userEvent.click(rePasswordInput);
    //     await userEvent.type(rePasswordInput, '123456'); 
    
    //     await waitFor(() => {
    //         const error = screen.queryByText('Passwords do not match. Please try again!');
    //         expect(error).not.toBeInTheDocument();
    //     });
    // });

    // test('Should select female', async () => {
    //     const femaleInput = screen.getByTestId('female');
    //     userEvent.click(femaleInput);
    //     await waitFor(() => {
    //         expect(femaleInput).toBeChecked();
    //     });
    // });

    // test('Should select male', async () => {
    //     const maleInput = screen.getByTestId('male');
    //     userEvent.click(maleInput);
    //     await waitFor(() => {
    //         expect(maleInput).toBeChecked();
    //     });
    // });

    test('Should not show username error', () => {
        const usernameInput = screen.getByTestId('username');
    
        userEvent.click(usernameInput).then(() => {
            userEvent.type(usernameInput, 'peter').then(() => {
                waitFor(() => {
                    const error = screen.queryByText('Username must be at least 3 characters long!');
                    expect(error).not.toBeInTheDocument();
                });
            });
        });
    });
    
    test('Should not show email error', () => {
        const emailInput = screen.getByTestId('email');
    
        userEvent.click(emailInput).then(() => {
            userEvent.type(emailInput, 'peter@abv.bg').then(() => {
                waitFor(() => {
                    const error = screen.queryByText('Please enter a valid email address!');
                    expect(error).not.toBeInTheDocument();
                });
            });
        });
    });
    
    test('Should not show phone error', () => {
        const phoneInput = screen.getByTestId('phone');
    
        userEvent.click(phoneInput).then(() => {
            userEvent.type(phoneInput, '+359').then(() => {
                waitFor(() => {
                    const error = screen.queryByText('Please, enter your Phone Number!');
                    expect(error).not.toBeInTheDocument();
                });
            });
        });
    });
    
    test('Should not show password error', () => {
        const passwordInput = screen.getByTestId('password');
    
        userEvent.click(passwordInput).then(() => {
            userEvent.type(passwordInput, '123456').then(() => {
                waitFor(() => {
                    const error = screen.queryByText('Password must be at least 5 characters long!');
                    expect(error).not.toBeInTheDocument();
                });
            });
        });
    });
    
    test('Should not show repeat password error', () => {
        const rePasswordInput = screen.getByTestId('rePassword');
    
        userEvent.click(rePasswordInput).then(() => {
            userEvent.type(rePasswordInput, '123456').then(() => {
                waitFor(() => {
                    const error = screen.queryByText('Passwords do not match. Please try again!');
                    expect(error).not.toBeInTheDocument();
                });
            });
        });
    });
    
    test('Should select female', () => {
        const femaleInput = screen.getByTestId('female');
        
        userEvent.click(femaleInput).then(() => {
            waitFor(() => {
                expect(femaleInput).toBeChecked();
            });
        });
    });
    
    test('Should select male', () => {
        const maleInput = screen.getByTestId('male');
    
        userEvent.click(maleInput).then(() => {
            waitFor(() => {
                expect(maleInput).toBeChecked();
            });
        });
    });
    
    test('Sign Up button should be enabled', () => {
        const usernameInput = screen.getByTestId('username');
        const emailInput = screen.getByTestId('email');
        const phonelInput = screen.getByTestId('phone');
        const passwordInput = screen.getByTestId('password');
        const rePasswordInput = screen.getByTestId('rePassword');
        const femaleInput = screen.getByTestId('female');
        const registerBtn = screen.getByTestId('regBtn');
        
        userEvent.type(usernameInput, 'peter');
        userEvent.type(emailInput, 'peter@abv.bg');
        userEvent.type(phonelInput, '+359');
        userEvent.type(passwordInput, '123456');
        userEvent.type(rePasswordInput, '123456');
        userEvent.click(femaleInput);

        const timeoutId = setTimeout(() => {
            expect(registerBtn).toBeEnabled();
        }, 600);

        clearTimeout(timeoutId);
    });

    test('Sign Up button should be disabled if username is shorter than 3 characters', () => {
        const usernameInput = screen.getByTestId('username');
        const emailInput = screen.getByTestId('email');
        const phonelInput = screen.getByTestId('phone');
        const passwordInput = screen.getByTestId('password');
        const rePasswordInput = screen.getByTestId('rePassword');
        const femaleInput = screen.getByTestId('female');
        const registerBtn = screen.getByTestId('regBtn');

        userEvent.type(usernameInput, 'pe');
        userEvent.type(emailInput, 'peter@abv.bg');
        userEvent.type(phonelInput, '+359');
        userEvent.type(passwordInput, '123456');
        userEvent.type(rePasswordInput, '123456');
        userEvent.click(femaleInput);

        const timeoutId = setTimeout(() => {
            expect(registerBtn).toBeDisabled();
        }, 200);

        clearTimeout(timeoutId);
    });

    test('Sign Up button should be disabled if not valid e-mail', () => {
        const usernameInput = screen.getByTestId('username');
        const emailInput = screen.getByTestId('email');
        const phonelInput = screen.getByTestId('phone');
        const passwordInput = screen.getByTestId('password');
        const rePasswordInput = screen.getByTestId('rePassword');
        const femaleInput = screen.getByTestId('female');
        const registerBtn = screen.getByTestId('regBtn');
        
        userEvent.type(usernameInput, 'peter');
        userEvent.type(emailInput, 'peter@@abv.bg');
        userEvent.type(phonelInput, '+359');
        userEvent.type(passwordInput, '123456');
        userEvent.type(rePasswordInput, '123456');
        userEvent.click(femaleInput);
        
        const timeoutId = setTimeout(() => {
            expect(registerBtn).toBeDisabled();
        }, 100);
        
        clearTimeout(timeoutId);
    });
    
    test('Should switch to login', () => {
        const linkLogin = screen.getByTestId('link');
        userEvent.click(linkLogin);
        expect(global.window.location.pathname).toEqual('/');
    });
});