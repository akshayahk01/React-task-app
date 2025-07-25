import React from 'react';

export default function List() {
  
  const items = [
    { name: "banana", calories: 105 },
    { name: "apple", calories: 95 },
    { name: "grapes", calories: 62 },
    { name: "parrot", calories: 16},
    { name: "mango", calories: 150 },
  ];

const vegetables = [
  { name: "carrot", calories: 41 },
  { name: "broccoli", calories: 34 },
  { name: "spinach", calories: 23 },
  { name: "potato", calories: 77 },
  { name: "onion", calories: 40 },
  { name: "tomato", calories: 18 },
  { name: "cauliflower", calories: 25 },
  { name: "peas", calories: 81 },
  { name: "beetroot", calories: 43 },
  { name: "cucumber", calories: 16 }
];
   items.sort((a, b) => a.name.localeCompare(b.name));
   vegetables.sort((a, b) => a.name.localeCompare(b.name));

  
  const itemList = items.map((item, index) => (
    <li key={index}>
      {item.name.charAt(0).toUpperCase() + item.name.slice(1)} - {item.calories} calories
    </li>
  ));
  const vegi = vegetables.map((vegetable, index) => (
    <li key={index}>
      {vegetable.name.charAt(0).toUpperCase() + vegetable.name.slice(1)} - {vegetable.calories} calories
    </li>
  ));


  return (
    <div>
      <ol>
        {itemList}
      </ol>
      <h2>Vegetables</h2>
      <ol>{vegi}</ol>

      
    </div>
  );
}
