import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {

    beforeEach(() => {
        render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
        );
    });

    test('Home page should have header text', () => {
        const message = screen.queryByText('It\'s time to start your adventures!');
        expect(message).toBeVisible();
    });

    test('Home page should have p tag with text inside', () => {
        const textP = screen.queryByText('We invite you to embark on your next adventure with us.');
        expect(textP).toBeVisible();
    });

    test('Home page should have second p tag with text inside', () => {
        const textP2 = screen.queryByText('Discover the freedom of the open sea, the beauty of the coastline, and the joy of yacht living.');
        expect(textP2).toBeVisible();
    });
    
    test('Should have a button link leading to catalog page', () => {
        const linkBoats = screen.getByTestId('linkBoats');
        userEvent.click(linkBoats);
        expect(global.window.location.pathname).toEqual('/');
    });
    
    test('Button should have text - YOUR NEXT JOURNEY', () => {
        const linkBoats = screen.getByTestId('linkBoats');
        expect(linkBoats).toHaveTextContent('YOUR NEXT JOURNEY');
        expect(linkBoats).toBeInTheDocument();
    });
    
    test('Should have a button leading to About Us page', () => {
        const linkAbout = screen.getByTestId('linkAbout');
        userEvent.click(linkAbout);
        expect(global.window.location.pathname).toEqual('/');
    });
    
    test('The button should have text - ABOUT US', () => {
        const linkAbout = screen.getByTestId('linkAbout');
        expect(linkAbout).toHaveTextContent('ABOUT US');
        expect(linkAbout).toBeInTheDocument();
    });
    
});