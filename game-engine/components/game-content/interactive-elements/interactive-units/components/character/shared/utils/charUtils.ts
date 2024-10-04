import characters from '../data/characters.json';
import { CharDataI, CharNameT, CharStatsI } from '../types/character.types';

export const getCharDataByCharName = (charName: CharNameT): CharDataI => {
    if (!characters?.[charName]) return characters['robot'] as CharDataI;
    return characters[charName] as CharDataI;
};

export const getCharStatsByCharDataAndCount = (
    charStats: CharStatsI | undefined,
    charCount: number,
): CharStatsI | undefined => {
    if (!charStats) return undefined;
    return {
        health: charStats.health * charCount,
        meleeAttack: charStats.meleeAttack === null ? null : charStats.meleeAttack * charCount,
        rangeAttack: charStats.rangeAttack === null ? null : charStats.rangeAttack * charCount,
        meleeDefence: charStats.meleeDefence === null ? null : charStats.meleeDefence * charCount,
        rangeDefence: charStats.rangeDefence === null ? null : charStats.rangeDefence * charCount,
        count: charCount,
        status: charStats.status,
    };
};
