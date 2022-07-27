import React, { createContext, useState } from 'react'


export const Contextdata = React.createContext();

const MyContext = (props) => {
  const [cart ,set_cart] = useState([]);
  const [Amount,set_total_amount] =useState(0);
  return (
    <Contextdata.Provider value={[cart ,set_cart,Amount,set_total_amount]}>
      {props.children}
    </Contextdata.Provider>
  )
}

export default MyContext