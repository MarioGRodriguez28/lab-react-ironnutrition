// import logo from './logo.svg';
import React, { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  const [newFood, setnewFood] = useState(foods);

  return (
<div className='App'>     




    </div>
  );
}

export default App;
