import { GridCellDataI } from '@/game-engine/lib/types/components/game-content/interactive-elements/battlefieldTypes';

export interface BattleFieldInitState {
    gridCellData: GridCellDataI | undefined;
    currentUnitMovementDuration: number;
    isTurnInProcess: boolean;
    canMovementStart: boolean;
    showGrid: boolean;
}
