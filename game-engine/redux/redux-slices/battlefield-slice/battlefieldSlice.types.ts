import { GridCellDataI } from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/types/gridAndCells.types';

export interface BattleFieldInitState {
    gridCellData: GridCellDataI | undefined;
    currentUnitMovementDuration: number;
    isTurnInProcess: boolean;
    canMovementStart: boolean;
    showGrid: boolean;
}
