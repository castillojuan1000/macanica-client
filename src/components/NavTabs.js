import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchCustomer from './SearchCustomer';
import AddCustomer from './AddCustomer';


export default function NavTabs(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "create",
    1: "search"
  };

  const indexToTabName = {
    create: 0,
    search: 1
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

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
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <AddCustomer />}
      {selectedTab === 1 && <SearchCustomer />}
    </Fragment>
  );
}
