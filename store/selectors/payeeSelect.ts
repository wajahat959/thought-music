/* eslint-disable import/prefer-default-export */
import { RootState } from '../store';

export const selectMain = (state: RootState) => state.payee;
