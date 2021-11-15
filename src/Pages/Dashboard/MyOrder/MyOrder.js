import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import OrderCard from "./OrderCard/OrderCard";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <Container>
        {orders.map((order) => (
          <OrderCard order={order}></OrderCard>
        ))}
      </Container>
    </div>
  );
};

export default MyOrder;
