import { Alert } from "react-native/Libraries/Alert/Alert";
import { Server_url } from "./Api_Constants";
export function add_item(item_name, purchase_price, selling_price, Mrp, Distributor, opening_stk) {
  const param_data = {
    item_name:item_name,
    purchase_price:purchase_price,
    selling_price:selling_price,
    MRP:Mrp,
    dist_code:2,
    opening_stk:2,
    category:0,
    unit : 0
  }
  fetch(Server_url + '/api/pos/Add/Item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param_data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Sales:', data);
      //setSales(data)
      //setflatlistdata(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}