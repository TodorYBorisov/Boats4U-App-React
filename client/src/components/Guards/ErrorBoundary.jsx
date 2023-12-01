import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
    
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {

        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('React info for crash: ', info);
        console.error('React ErrorBoundary message: ', error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                <section className={styles['not-found']}>
                    <div className={styles['not-found-home']} >
                        <h2>404</h2>
                        <h2>Oh no! Something went wrong unexpectedly!</h2>
                        <p>Please try again later, go to </p>
                        <a href="/"><button className={styles['button']}>HOME</button></a>
                        
                    </div>
                </section>
                </>
            );
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}