import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Login.jsx';
import Home from './Home.jsx';
import AddMoney from './Components/AddMoney.jsx';
import Transaction from './Components/Transaction.jsx';
import Cashout from './Components/Cashout.jsx';
import Transfer from './Components/Transfer.jsx';
import Bonus from './Components/Bonus.jsx';
import PayBill from './Components/PayBill.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element:<Home></Home>,
    children:[
      {
        path: "/home/add-money",
        element:<AddMoney></AddMoney>,
      },
      {
        path: "/home/transaction",
        element:<Transaction></Transaction>,
      },
      {
        path: "/home/cashout",
        element:<Cashout></Cashout>,
      },
      {
        path: "/home/transfer",
        element:<Transfer></Transfer>,
      },
      {
        path: "/home/bonus",
        element:<Bonus></Bonus>,
      },
      {
        path: "/home/pay-bill",
        element:<PayBill></PayBill>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
