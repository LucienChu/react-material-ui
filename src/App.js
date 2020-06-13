import React from 'react';
import './App.css';
import RegularRouter from './routerDemo/routers/regularRouter/RegularRouter';
import { PrivateRouter } from './routerDemo/routers/privateRouter/PrivateRouter';
import EnhancedTable from './components/tables/PaginationTable';

function App() {
  return (
    // <EnhancedTable />
    <RegularRouter />
    // <PrivateRouter />
  );
}

export default App;
