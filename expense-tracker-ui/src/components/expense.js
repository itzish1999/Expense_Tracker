import React, { Component } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './BudgetCard';

export default class Expense extends Component {
    render() {
        return (
            <Container className="my-4">
                <Stack direction="horiontal" gap="2" className="mb-4">
                    <h1 className="me-auto">Budgets</h1>
                    <Button variant="primary">Add Button</Button>
                    <Button variant="outline-primary">Add Expense</Button>
                </Stack>
                <div style={{ 
                display:"grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
                gap: "1rem", 
                alignItems: "flex-start"
            }}
        >
                <BudgetCard name="Entertainment" amount={200} max={1000}></BudgetCard> 

                </div>
            </Container>
        );
    }
}