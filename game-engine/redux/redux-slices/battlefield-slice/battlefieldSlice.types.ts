import { GridCellDataI } from '@/game-engine/lib/types/components/game-content/interactive-elements/gridAndCellsTypes';

export interface BattleFieldInitState {
    gridCellData: GridCellDataI | undefined;
    currentUnitMovementDuration: number;
    isTurnInProcess: boolean;
    canMovementStart: boolean;
    showGrid: boolean;
}
