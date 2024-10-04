import { SingleCellDataT } from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/types/gridAndCells.types';

export type CharStatusT = 'idle' | 'move' | 'melee' | 'range' | 'hurt' | 'die' | 'disable' | 'enable' | 'off' | 'dead';

export type CharNameT = 'robot'; // TODO: Prolong this list in the future with other char names

export type CharBasicStatT = number | null;

export type CharImageT = {
    src: string;
    alt: string;
    duration: number;
} | null;

export interface CharStatsI {
    health: number;
    meleeAttack: CharBasicStatT;
    rangeAttack: CharBasicStatT;
    meleeDefence: CharBasicStatT;
    rangeDefence: CharBasicStatT;
    count: number;
    status: CharStatusT;
}

export interface CharImagesI {
    idle: CharImageT;
    move: CharImageT;
    melee: CharImageT;
    range: CharImageT;
    hurt: CharImageT;
    die: CharImageT;
    disable: CharImageT;
    enable: CharImageT;
    off: CharImageT;
    dead: CharImageT;
}

export interface CharDataI {
    id: string;
    charName: string;
    stats: CharStatsI;
    images: CharImagesI;
}

export interface CharActionI {
    id: number;
    action: CharStatusT;
    duration?: number | undefined;
}

export interface CharI {
    charName: CharNameT;
    charCount: number;
    charImages: CharImagesI | undefined;
    charWidth: number | null;
    charAction: CharActionI;
    charStats: CharStatsI | undefined;
    startingStats: CharStatsI | undefined;
    currentStats: CharStatsI | undefined;
    startCellNum: number;
    cellData: SingleCellDataT | undefined;
    shouldCharFlip: boolean;
    flipTrigger: number;
}
