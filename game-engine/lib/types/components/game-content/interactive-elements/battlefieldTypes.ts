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
