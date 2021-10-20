import React, { Fragment, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchCustomer from './SearchCustomer';
import AddCustomer from './AddCustomer';
import CustomerProfile from './Profile/CustomerProfile';


export default function NavTabs(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [customerSelected, setCustomerSelected] = useState({})

  const tabNameToIndex = {
    0: "create",
    1: "search",
    2: "profile",
  };

  const indexToTabName = {
    create: 0,
    search: 1,
    profile: 2,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const handleShowCustomer = (customer) => {
    setCustomerSelected(customer)
    setSelectedTab(2)
    history.push(`/profile`);
    window.localStorage.setItem('customer', JSON.stringify(customer));
  }

  const handleSelectCustomer = () => {
    setSelectedTab(1)
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Tabs
          // variant="fullWidth"
          value={selectedTab}
          onChange={handleChange}
          centered
          // aria-label="nav tabs example"
        >
          <Tab label="Crear Cliente" />
          <Tab label="Buscar Cliente" />
          <Tab label="Perfil Del Cliente" />
          
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <AddCustomer />}
      {selectedTab === 1 && <SearchCustomer showCustomer={handleShowCustomer} />}
      {selectedTab === 2 && <CustomerProfile customer={customerSelected} selectCustomer={handleSelectCustomer}/>}
      
    </Fragment>
  );
}

