import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.scss';

import { DomainData } from './Data';

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

/*
ME provu prej git push qito tan me bo deply prej git en netfly

Ose me bo reclone appet ne git me fal se mu blloku llaptopi se ehapa nje xd file shume te rand smujsha as me te tregu, okeje beje deploy ne git e provoje se keshtu ska asnje prb tjeter pervec asaj shkronjes ma heret
se shum wierd pse DomainCard.js nuk e ka bo push en git me capital letter?

Me fshi krejt prej git me bo readd ? jo vec fshije kete file domainCard e beje tjeter
okej?

Okej
*/