import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import { fetchProducts } from '../../slices/products';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import { Container, Row, Col, Spinner, Alert } from 'reactstrap';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { loading, hasErrors } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const renderContent = () => {
        if (loading) {
            return (<Spinner type="grow" color="primary">{' '}</Spinner>);
        }
        if (hasErrors) {
            return (
                <Alert color="danger">
                    Something went wrong, Please reload the page
                </Alert>
            );
        }
        return (
            <Container fluid>
                <Row>
                    <Col md="3">
                        <Filters />
                    </Col>
                    <Col md="9">
                        <Products />
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <Header />
            <main className="mt-3 d-flex justify-content-center">
                {renderContent()}
            </main>
        </>
    );
};

export default Dashboard;
