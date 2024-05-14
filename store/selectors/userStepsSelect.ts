/* eslint-disable import/prefer-default-export */
import { RootState } from '../store';

export const selectStepsUser = (state: RootState) => state.userSteps;
