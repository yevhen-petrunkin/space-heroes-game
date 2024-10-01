import { CharStatusesE } from '../enums/charEnums';
import { CharI, CharNameT } from '../types/character.types';

export const DEFAULT_CHAR_MOVEMENT_SPEED = 300;

export const DEFAULT_CHAR_CONTEXT: CharI = {
    charName: 'robot' as CharNameT,
    charCount: 1,
    charImages: undefined,
    charWidth: 200,
    charAction: {
        id: Math.random(),
        action: CharStatusesE.IDLE,
    },
    charStats: undefined,
    startingStats: undefined,
    currentStats: undefined,
    cellData: undefined,
    startCellNum: 1,
    shouldCharFlip: false,
    flipTrigger: 0,
};
