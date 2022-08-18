import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomerPrivateOutlet from "../components/CustomerPrivateOutlet";
import BulkPurchase from "../pages/bulk_purchase";
import Dashboard from "../pages/dashboard";
import Notification from "../pages/notification";
import Order from "../pages/orders";
import DisputeList from "../pages/orders/dispute_list";
import Payment from "../pages/payments";
import Product from "../pages/products";
import Settings from "../pages/settings";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/customer/*" element={<CustomerPrivateOutlet />}>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="order" element={<Order />} />
        <Route path="order/dispute-list" element={<DisputeList />} />
        <Route path="bulkpurchase" element={<BulkPurchase />} />
        <Route path="payment" element={<Payment />} />
        <Route path="notification" element={<Notification />} />
        <Route path="setting" element={<Settings />} />
      </Route>
    </Routes>
  );
}
