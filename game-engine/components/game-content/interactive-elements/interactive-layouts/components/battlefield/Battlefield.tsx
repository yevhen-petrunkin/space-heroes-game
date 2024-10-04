'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import {
    BATTLEFIELD_ASPECT_RATIO,
    BATTLEFIELD_GRID_CELLS_QTY,
    BATTLEFIELD_GRID_HORIZONTAL_CELLS_QTY,
    BATTLEFIELD_GRID_VERTICAL_CELLS_QTY,
    BATTLEFIELD_UNIT_WIDTH_FACTOR,
} from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/components/battlefield/lib/constants/battlefieldConstants';
import {
    GridCellDataI,
    GridCellRawDataI,
    GridGeometryData,
} from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/types/gridAndCells.types';
import {
    getGridCellsFullData,
    getGridCellsRawData,
    getGridGeometryData,
} from '@/game-engine/components/game-content/interactive-elements/interactive-layouts/shared/utils/gridAndCellsUtils';
import { updateGridCellData } from '@/game-engine/redux/redux-slices/battlefield-slice/battlefieldSlice';
import { useReduxDispatch, useReduxSelector } from '@/game-engine/redux/redux-store/store';
import cn from '@/game-engine/shared/utils/classNames';

import CharUnit from '../../../interactive-units/components/character/components/char-unit/CharUnit';

const Battlefield = () => {
    const gridRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useReduxDispatch();
    const showGrid: boolean = useReduxSelector((state) => state.battleField.showGrid);

    const [battleFieldWidth, setBattleFieldWidth] = useState<number>(0);

    const gridCellsRawData: GridCellRawDataI[] = useMemo(() => getGridCellsRawData(BATTLEFIELD_GRID_CELLS_QTY), []);

    const gridGeometryData: GridGeometryData = useMemo(
        () => {
            const windowWidth = window?.innerWidth ?? 1;
            const windowHeight = window?.innerHeight ?? 1;

            return getGridGeometryData({
                windowWidth,
                windowHeight,
                gridAspectRatio: BATTLEFIELD_ASPECT_RATIO,
                horizontalCellsQty: BATTLEFIELD_GRID_HORIZONTAL_CELLS_QTY,
                verticalCellsQty: BATTLEFIELD_GRID_VERTICAL_CELLS_QTY,
                unitWidthFactor: BATTLEFIELD_UNIT_WIDTH_FACTOR,
                setGridWidth: setBattleFieldWidth,
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [window?.innerWidth],
    );

    /** This useEffect gathers actual data on the grid cells and updates them in redux */
    useEffect(() => {
        if (!gridRef || !gridRef?.current || !gridRef?.current?.children) return;

        const gridCellData: GridCellDataI | undefined = getGridCellsFullData({
            gridRefChildren: gridRef?.current?.children,
            cellsQty: BATTLEFIELD_GRID_CELLS_QTY,
            horizontalCellsQty: BATTLEFIELD_GRID_HORIZONTAL_CELLS_QTY,
        });

        if (!gridCellData) return;
        dispatch(updateGridCellData(gridCellData));
    }, [dispatch]);

    return (
        <div className='h-[100vh] w-[100vw]'>
            <div
                className='battlefield mx-auto aspect-[5/3.34]'
                style={{ width: `${battleFieldWidth}px` }}
            >
                <div className='flex aspect-[5/3.34] w-full items-end justify-center px-[0.4%] py-[2%]'>
                    <div
                        ref={gridRef}
                        className={cn('relative grid cursor-pointer grid-cols-20 grid-rows-9')}
                        style={{
                            width: `${gridGeometryData.gridWidth}px`,
                            height: `${gridGeometryData.gridHeight}px`,
                        }}
                    >
                        {gridCellsRawData &&
                            gridCellsRawData.map((cell) => {
                                return (
                                    <div
                                        key={cell.id}
                                        id={cell.number.toString()}
                                        style={{
                                            width: `${gridGeometryData.cellWidth}px`,
                                            height: `${gridGeometryData.cellWidth}px`,
                                        }}
                                        className={cn('hover:bg-accent-foreground/80 focus:bg-accent-foreground/80', {
                                            'border border-border bg-foreground/60 transition-colors': showGrid,
                                        })}
                                        /** TODO: Uncomment this attribute when onCellClick function ready */
                                        // onMouseDown={(e) => onCellClick(e)}
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        {showGrid ? cell.number : null}
                                    </div>
                                );
                            })}
                        <CharUnit
                            charName='robot'
                            charCount={20}
                            charWidth={gridGeometryData.unitWidth}
                            cellData={undefined}
                            flipTrigger={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Battlefield;
