import { useEffect, useState } from 'react'
// import './App.css'

const inventory = [
{ name: 'bacon', unitPrice: 10.99, quantity: 10},
{ name: 'eggs', unitPrice: 3.99, quantity: 10},
{ name: 'cheese', unitPrice: 6.99, quantity: 10},
{ name: 'chives', unitPrice: 1.00, quantity: 10},
{ name: 'wine', unitPrice: 11.99, quantity: 10},
{ name: 'brandy', unitPrice: 17.55, quantity: 10},
{ name: 'bananas', unitPrice: 0.69, quantity: 10},
{ name: 'ham', unitPrice: 2.69, quantity: 10},
{ name: 'tomatoes', unitPrice: 3.26, quantity: 10},
{ name: 'tissue', unitPrice: 8.45, quantity: 10},
];

function App() {
  const [inventoryItems, setInventoryItems] = useState(inventory)
  const [selectedItems, setSelectedItems] = useState([]);

  // useEffect(()=> {
  //   setInventoryItems(inventory)
  // }, [])

  console.log('inventory', inventoryItems)

  const onSelectItems = (name) => {
    const valueCount = selectedItems.filter(i => name).length
    console.log('valueCount', valueCount)
    if (selectedItems.filter(item => item === name).length > 0) {
      const items = selectedItems.map((i) => {
        return {...i, count: valueCount+1}
      })
      setSelectedItems(items)
    }
    else {
      const obj = {
        itemName: name,
        count: valueCount + 1
      }
      setSelectedItems([...selectedItems, obj])
    }
  }

  const updateItemsCart = (itemName) => {
    
  }

  const deleteItems = (itemName) => {
    const items = inventoryItems.filter((item) => item.name !== itemName)
    setInventoryItems(items)
  }

  const renderInventoryList = (list) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '20px'}}>
        {list.map((item)=> (
          <div key={item.name.toString()} style={{ display: 'flex', flexDirection: 'row'}}>
            <p style={{ color: 'black' }}>{item.name}</p>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <p style={{ color: 'white' }}>{item.unitPrice}</p>
              <p style={{ color: 'white' }}>{item.quantity}</p>
            </div>
            <button style={{ backgroundColor: 'blue', height: '30px', width: '70px', color: 'white' }} onClick={() => onSelectItems(item.name)}>
              <p>Select</p>
            </button>
            <button style={{ backgroundColor: 'red', height: '30px', width: '70px', color: 'white' }} onClick={() => deleteItems(item.name)}>
              <p>Delete</p>
            </button>
        </div>
        ))}
      </div>
    )
  }

  const renderCart = (selectedItems) => {

    return (
      <div>
        <h2>Shopping Cart</h2>
        {selectedItems.map((item) => (
          <div key={item.itemName.toString()} style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{item.itemName}</p>
            <p>{item.count}</p>
            <button style={{ backgroundColor: 'red', height: '30px', width: '70px', color: 'white' }} onClick={() => updateItemsCart(item.name)}>
              <p>Update</p>
            </button>
          </div>
        ))}
      </div>
    )
  }
  console.log('selectedItems', selectedItems)
  return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {renderInventoryList(inventoryItems)}
        <div style={{ marginLeft: '100px' }}>
        {renderCart(selectedItems)}
        </div>
      </div>
  )
}

export default App
