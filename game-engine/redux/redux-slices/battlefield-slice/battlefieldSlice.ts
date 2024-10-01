import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GridCellDataI } from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/types/gridAndCells.types';
import { DEFAULT_UNIT_MOVEMENT_SPEED } from '@/game-engine/shared/constants/unitConstants';

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
    reducers: {
        updateGridCellData: (state, action: PayloadAction<GridCellDataI>) => {
            state.gridCellData = action.payload;
        },
    },
});

// eslint-disable-next-line no-empty-pattern
export const { updateGridCellData } = battlefieldSlice.actions;

export default battlefieldSlice.reducer;
