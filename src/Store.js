import React, { useState } from 'react';
import './Store.css'; // Import the CSS file
import CopperBottle from './images/CopperBottle.jpg';
import DiaryPen from './images/DiaryPen.jpg';
import LaptopCover from './images/LaptopCover.jpg';
import SmartWatch from './images/SmartWatch.jpg';
import Button from '@mui/material/Button';

const prizes = [
    { id: 1, name: 'Copper Bottle', cost: 3000, image: CopperBottle },
    { id: 2, name: 'Diary Pen', cost: 1500, image: DiaryPen },
    { id: 3, name: 'Laptop Backpack', cost: 7000, image: LaptopCover },
    { id: 4, name: 'Smart Watch', cost: 12500, image: SmartWatch},
    { id: 5, name: 'Copper Bottle', cost: 3000, image: CopperBottle },
    { id: 6, name: 'Diary Pen', cost: 1500, image: DiaryPen },
    { id: 7, name: 'Laptop Backpack', cost: 7000, image: LaptopCover },
    { id: 8, name: 'Smart Watch', cost: 12500, image: SmartWatch},
    // ... (add image URLs for all prizes)
  ];



const Store = () => {
  const [coins, setCoins] = useState(10000); // Initial coins for the user

  const handleRedeem = (prize) => {
    if (coins >= prize.cost) {
      setCoins(coins - prize.cost);
      alert(`You redeemed ${prize.name}`);
    } else {
      alert('Not enough coins to redeem this prize');
    }
  };

  return (
    <div className="prize-store">
      <div style={{backgroundColor:"#1565c0", height:"60px"}}>
      <p style={{marginRight:"20px", padding:"8px"}}><span style={{color:"white", fontWeight:"bold", marginRight:"1100px",marginTop:"100px", fontSize:"30px"}}>🎁Reward Zone</span><Button variant="contained" color="primary">{coins} 🪙</Button></p>
      </div>
      <h2 style={{color:"#1565c0"}}>Redeem your rewards for free by using your Supercoins!</h2>
      <div className="prize-list">
        {prizes.map((prize) => (
          <div key={prize.id} className="prize-item">
            <img src={prize.image} alt={prize.name} />
            <p><span style={{fontWeight:"bold", marginRight:"40px"}}>{prize.name}</span> <Button variant="contained" color="primary" onClick={() => handleRedeem(prize)} style={{margin: "5px", marginRight:"40px"}}>Redeem</Button> Cost: {prize.cost}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;



