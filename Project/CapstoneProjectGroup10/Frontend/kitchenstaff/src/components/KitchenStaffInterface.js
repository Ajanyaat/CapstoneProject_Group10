import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import OrderSearchForm from './OrderSearchForm';
import OrderList from './OrderList';

const KitchenStaffInterface = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    status: '',
    orderId: '',
    fromDate: '',
    toDate: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    
      try {
      const response = await fetch(`/api/kitchen/orders?status=${searchCriteria.status}&orderId=${searchCriteria.orderId}&fromDate=${searchCriteria.fromDate}&toDate=${searchCriteria.toDate}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching orders:', error);
    }
  };

  return (
    <Container>
      <h2 className="mt-4">Kitchen Staff Interface</h2>
      <OrderSearchForm
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        onSearch={handleSearch}
      />
      <OrderList orders={searchResults} />
      <Outlet />
    </Container>
  );
};

export default KitchenStaffInterface;
