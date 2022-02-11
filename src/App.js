import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.scss';

import { DomainData } from './Data';
import DomainCard from './components/DomainCard';

class App extends Component {
  render() {
    return (
      <div className="app">        
        <Tabs>
          <TabList>
            <Tab>Domains</Tab>
            <Tab>Web Hosting</Tab>
            <Tab>Dedicated Servers</Tab>
            <Tab>Virtual Cloud Servers</Tab>
            <Tab>WordPress Hosting </Tab>
            <Tab>Email Hosting</Tab>
            <Tab>VPS Hosting Servers</Tab>
            <Tab>Free Hosting</Tab>
          </TabList>

          <TabPanel>
            <div className="domain">
              {
                DomainData.domains.map((el, index) => {
                  return (
                    <DomainCard
                      type={el.type}
                      price={el.price}
                      priceInfo={el.priceInfo}
                    />                  
                  );
                })
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 6</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 7</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 8</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;

