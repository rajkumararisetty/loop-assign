import React from 'react';
import { useSelector } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col,
} from 'reactstrap';
import { productsSelector } from '../../../slices/products';

const Products = () => {
    const products = useSelector(state => productsSelector(state));
    return (
        <Row>
            {products.map((product) => {
                return (
                    <Col md={4} key={product.productId}>
                        <Card className="mb-3">
                            <CardImg top width="100%" src={product.searchImage} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-truncate" tag="h5" title={product.productName}>{product.productName}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{product.category}</CardSubtitle>
                                <CardText>{product.additionalInfo}</CardText>
                                <Button>Add To Cart</Button>
                            </CardBody>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default Products;
