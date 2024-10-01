import {
    GridCellDataI,
    GridCellRawDataI,
    GridCellsFullDataParamsI,
    GridGeometryData,
    GridGeometryParamsI,
} from '@/game-engine/lib/types/components/game-content/interactive-elements/gridAndCellsTypes';

/** This function is to get raw data about the cells of a game grid (etc. in the Battlefield)
 * @param cellsQty - desired quantity of cells in the grid
 * @returns {GridCellRawDataI[]} - an array of objects, each containing cell id, cell index in the array (starting from 0), and cell number (starting from 1)
 */
export const getGridCellsRawData = (cellsQty: number): GridCellRawDataI[] => {
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

/** This function is to get full data about the cells of an existing game grid (etc. in the Battlefield)
 * @param gridRefChildren - html elements of a grid container element, which are going to be used as grid cells
 * @param cellsQty - desired quantity of cells in the grid
 * @param horizontalCellsQty - desired quantity of cells in one row of the grid
 * NB: cellsQty must be divisible by horizontalCellsQty!
 * @returns {GridCellDataI | undefined} - an object where each key is the number of a cell, and value is an object with cell data
 */
export const getGridCellsFullData = ({
    gridRefChildren,
    cellsQty,
    horizontalCellsQty,
}: GridCellsFullDataParamsI): GridCellDataI | undefined => {
    if (!gridRefChildren) return undefined;
    let rowNumber = 1;
    let rowLength = 1;
    let columnNumber = 1;
    return Array.from(gridRefChildren).reduce((aggr, cell, idx) => {
        if (idx >= cellsQty) return aggr;
        const cellElem = cell as HTMLElement;
        const cellData = {
            id: `cell_i${idx}_n${idx + 1}`,
            idx: idx,
            number: Number(cellElem.id) ?? idx + 1,
            row: rowNumber,
            column: columnNumber,
            occupied: false,
            suspended: false,
            offsetTop: cellElem.offsetTop ?? 0,
            offsetLeft: cellElem.offsetLeft ?? 0,
            offsetWidth: cellElem.offsetWidth ?? 0,
            offsetHeight: cellElem.offsetHeight ?? 0,
            clientTop: cellElem.clientTop ?? 0,
            clientLeft: cellElem.clientLeft ?? 0,
            clientWidth: cellElem.clientWidth ?? 0,
            clientHeight: cellElem.clientHeight ?? 0,
        };

        if (rowLength === horizontalCellsQty) {
            rowLength = 1;
            rowNumber += 1;
            columnNumber = 1;
        } else {
            rowLength += 1;
            columnNumber += 1;
        }

        return { ...aggr, [cellData.number]: cellData };
    }, {});
};

/** This function is to get data about the geometry of an existing game grid (etc. in the Battlefield)
 * @param gridAspectRatio - desired aspect ratio of the grid (width units / height units)
 * @param horizontalCellsQty - desired quantity of cells in one row of the grid
 * @param verticalCellsQty - desired quantity of cells in one column of the grid
 * NB: cellsQty must be divisible by horizontalCellsQty and by verticalCellsQty!
 * @param unitWidthFactor - optional value which indicates how many cells will a unit occupy horizontally and vertically on the grid (e.g. in the Battlefield)
 * @param setGridWidth - optional setter function of React useState hook to set the grid width locally in a component
 * @returns {GridGeometryData} - an object with data on widths and heights of the grid itself and its elements
 */

export const getGridGeometryData = ({
    gridAspectRatio,
    horizontalCellsQty,
    verticalCellsQty,
    unitWidthFactor,
    setGridWidth,
}: GridGeometryParamsI): GridGeometryData => {
    const windowWidth = window.innerWidth ?? 1;
    const windowHeight = window.innerHeight ?? 1;
    const optimalGridWidth = windowHeight * gridAspectRatio;
    const gridWidth = windowHeight > windowWidth || windowWidth < optimalGridWidth ? windowWidth : optimalGridWidth;
    const cellWidth = gridWidth / horizontalCellsQty;
    let unitWidth = null;

    if (unitWidthFactor !== undefined) unitWidth = cellWidth * unitWidthFactor;

    if (setGridWidth) setGridWidth(gridWidth);

    return {
        windowWidth,
        windowHeight,
        cellWidth,
        gridWidth,
        gridHeight: cellWidth * verticalCellsQty,
        unitWidth,
    };
};
