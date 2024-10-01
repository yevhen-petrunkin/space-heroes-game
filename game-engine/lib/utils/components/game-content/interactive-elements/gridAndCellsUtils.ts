import { CellRawDataI } from '@/game-engine/lib/types/components/game-content/interactive-elements/gridAndCellsTypes';

/** This function is to get raw data about the cells of a game grid (etc. in the Battlefield)
 * @param cellsQty - desired quantity of cells in the grid
 * @returns {CellRawDataI[]} - an array of objects, each containing cell id, cell index in the array (starting from 0), and cell number (starting from 1)
 */
// eslint-disable-next-line import/prefer-default-export
export const getGridCellsRawData = (cellsQty: number): CellRawDataI[] => {
    const arr = [];
    for (let i = 0; i < cellsQty; i += 1) {
        arr.push({
            id: `cell_i${i}_n${i + 1}`,
            idx: i,
            number: i + 1,
        });
    }
    return arr;
};
