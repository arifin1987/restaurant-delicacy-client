import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import 'react-tabs/style/react-tabs.css';
import Cover from "../Shared/Cover/Cover"
import orderPic from '/assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useState } from "react";

const Order = () => {
    const[tabIndex, setTabIndex]= useState(0);
    const [menu] = useMenu();
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const desserts = menu.filter(item=> item.category === 'dessert');
  return (
    <div>
      <Cover img={orderPic} title={'Please Order '}/>
      <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      
      <Tab>pizza</Tab>
      <Tab>salad</Tab>
      <Tab>desserts</Tab>
    </TabList>
    

    <TabPanel>
    <OrderTab items = {pizza}/>
    
    </TabPanel>
    <TabPanel>
    <OrderTab items = {salad}/>
    
    </TabPanel>
    <TabPanel>
    <OrderTab items = {desserts}/>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Order
