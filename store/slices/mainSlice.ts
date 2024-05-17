/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPayeeState } from '../types/userData';

const initialState: IPayeeState = {
  accessToken: '',
  data: null,
  selectedBank: {},
 


};
export const mainSlice = createSlice({
  name: 'payee',
  initialState,
  reducers: {
  

    payeeBeneficiaryDetails: (state, action) => {
      state.data = action.payload.data;
      console.log('REDUX_GetBenificiary Data', state.data);
    },

  
  },
 
});
export const {

  payeeBeneficiaryDetails,


} = mainSlice.actions;

export const selectPayeeState = (state: RootState) => state.payee;

// export const selectUserAuthModal = (state: RootState) => state.user.authModal;

export default mainSlice.reducer;
