import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
    });

    test('Should contain Copyright © 2023 Todor Borisov. All Rights Reserved. Boats4U', () => {
        const footerText = screen.getByTestId('footer');
        expect(footerText).toHaveTextContent('Copyright © 2023 Todor Borisov. All Rights Reserved. Boats4U');
        expect(footerText).toBeVisible();
    });

    test('Should contain the GitHub square icon', () => {
        const githubIcon = screen.getByTestId('github');
        expect(githubIcon).toBeInTheDocument(); 
    });

    test('Should contain the Linkedin square icon', () => {
        const linkedinIcon = screen.getByTestId('linkedin');
        expect(linkedinIcon).toBeInTheDocument(); 
    });

});

