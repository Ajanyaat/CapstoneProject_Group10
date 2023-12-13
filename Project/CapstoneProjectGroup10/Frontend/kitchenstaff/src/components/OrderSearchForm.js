import React from 'react';
import { Form, Button } from 'react-bootstrap';

const OrderSearchForm = ({ searchCriteria, setSearchCriteria, onSearch }) => {
  const handleInputChange = (field, value) => {
    setSearchCriteria(prevCriteria => ({
      ...prevCriteria,
      [field]: value,
    }));
  };

  return (
    <div className="mt-4">
      <h3>Search Orders</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Status:</Form.Label>
          <Form.Control
            type="text"
            value={searchCriteria.status}
            onChange={e => handleInputChange('status', e.target.value)}
          />
        </Form.Group>
        {/* Add more input fields for other search criteria */}
        <Button variant="primary" onClick={onSearch}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default OrderSearchForm;
