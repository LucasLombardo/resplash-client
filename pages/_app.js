import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from '../components';

class CustomApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Layout>
                    <Component />
                </Layout>
            </Container>
        );
    }
}

export default CustomApp;
