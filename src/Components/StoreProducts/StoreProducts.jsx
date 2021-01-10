import React from 'react';
import './StoreProducts.css';
import { Container } from 'react-bootstrap';
import EnhancedTable from '../EnhancedTable/EnhancedTable';

export default function StoreProducts(props) {
    return (
        <Container className="p-3 mt-5">
            <h2 className="form-title dashboard-header">Store Products</h2>
            <EnhancedTable />
        </Container>
    )
}