import { SingleCellDataT } from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/types/gridAndCells.types';

import { CharActionI, CharNameT } from '../../shared/types/character.types';

export interface CharPropsI {
    charName: CharNameT;
    charCount: number;
    charWidth: number | null;
    charAction?: CharActionI;
    cellData?: SingleCellDataT | undefined;
    flipTrigger?: number;
    shouldCharFlip?: boolean;
    startCellNum?: number;
}
