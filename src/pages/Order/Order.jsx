import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import 'react-tabs/style/react-tabs.css';
import Cover from "../Shared/Cover/Cover"
import orderPic from '/assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['pizza', 'salad', 'dessert', 'soup'];
    
    const {category} = useParams() ;
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex)
    const[tabIndex, setTabIndex]= useState(initialIndex);
    const [menu] = useMenu();
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
  return (
    <div>
      <Cover img={orderPic} title={'Please Order '}/>
      <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      
      <Tab>pizza</Tab>
      <Tab>salad</Tab>
      <Tab>desserts</Tab>
      <Tab>soup</Tab>
    </TabList>
    

    <TabPanel>
    <OrderTab items = {pizza}/>
    
    </TabPanel>
    <TabPanel>
    <OrderTab items = {salad}/>
    
    </TabPanel>
    <TabPanel>
    <OrderTab items = {dessert}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items = {soup}/>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Order
