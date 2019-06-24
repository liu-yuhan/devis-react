import { reqDevis } from "../api_connection/index";
import { DEV_RCV, ERR_MSG } from "./action_type";

// synchronize function wait to be called in asyn function register
const devisReveived = devis => ({ type: DEV_RCV, data: devis });
const errorMsg = err => ({ type: ERR_MSG, data: err });

export const getDevis = () => {
  return async dispatch => {
    console.log("in redux");
    const response = await reqDevis();
    console.log("response : ", response);
    const result = response.data;
    console.log("result1 : ", result);
    dispatch(devisReveived(result));
  };
};
