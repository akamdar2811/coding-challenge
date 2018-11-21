import axios from 'axios';
 
export const getProducts = () => {
  try{
    return axios.get('./products.json');
  } catch(error) {
    console.log(error);
  }
}