// Create LoginContext to manage login state
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../page/Login';
import PrivateRoute from '../Components/PrivateRoute';
import Tasks from '../page/Tasks';
import Customer from '../page/Customer';



export default function TasksManagementWithZustand() {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <div className="container-fluid mx-auto px-8 py-4">
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/tasks"
              element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
              }
            />
            <Route
              path="/customer"
              element={
                <PrivateRoute>
                  <Customer />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}