import { Dispatch, SetStateAction } from 'react';

export interface GridCellRawDataI {
    id: string;
    idx: number;
    number: number;
}

export interface GridCellsFullDataParamsI {
    gridRefChildren: HTMLCollection;
    cellsQty: number;
    horizontalCellsQty: number;
}

export interface GridGeometryParamsI {
    windowWidth: number;
    windowHeight: number;
    gridAspectRatio: number;
    horizontalCellsQty: number;
    verticalCellsQty: number;
    unitWidthFactor?: number;
    setGridWidth?: Dispatch<SetStateAction<number>>;
}

export interface GridGeometryData {
    windowWidth: number;
    windowHeight: number;
    cellWidth: number;
    gridWidth: number;
    gridHeight: number;
    unitWidth: number | null;
}

export interface GridCellDataValuesI {
    id: string;
    idx: number;
    number: number;
    row: number;
    column: number;
    occupied: boolean;
    suspended: boolean;
    offsetTop: number;
    offsetLeft: number;
    offsetWidth: number;
    offsetHeight: number;
    clientTop: number;
    clientLeft: number;
    clientWidth: number;
    clientHeight: number;
}

export interface GridCellDataI {
    [cellNumber: number]: GridCellDataValuesI;
}

export type SingleCellDataT = {
    cellNumber: number;
    cellOffsetTop?: number;
    cellOffsetLeft?: number;
    cellOffsetWidth?: number;
    cellOffsetHeight?: number;
    cellClientTop?: number;
    cellClientLeft?: number;
    cellClientWidth?: number;
    cellClientHeight?: number;
};
