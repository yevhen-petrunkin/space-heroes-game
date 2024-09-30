import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_UNIT_MOVEMENT_SPEED } from '@/game-engine/lib/constants/components/game-content/interactive-elements/unitConstants';

import { BattleFieldInitState } from './battlefieldSlice.types';

const initialState: BattleFieldInitState = {
    gridCellData: undefined,
    currentUnitMovementDuration: DEFAULT_UNIT_MOVEMENT_SPEED,
    isTurnInProcess: false,
    canMovementStart: false,
    showGrid: true,
};

export const battlefieldSlice = createSlice({
    name: 'battleField',
    initialState,
    reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = battlefieldSlice.actions;

export default battlefieldSlice.reducer;
