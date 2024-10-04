import React, { useEffect, useRef, useState } from 'react';

import { useReduxSelector } from '@/game-engine/redux/redux-store/store';
import cn from '@/game-engine/shared/utils/classNames';

import { DEFAULT_CHAR_MOVEMENT_SPEED } from '../../shared/constants/charConstants';
import { useCharContext } from '../../shared/contexts/char-context/CharContext';
import { CharStatusesE } from '../../shared/enums/charEnums';
import { CharStatusT } from '../../shared/types/character.types';
import { CharFramePropsI } from './charFrame.types';

const CharFrame = ({ children }: CharFramePropsI) => {
    const charFrameRef = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { charCtx, setCharCtx } = useCharContext();

    const showGrid: boolean = useReduxSelector((state) => state.battleField.showGrid);

    const [unitFrameStatus, setUnitFrameStatus] = useState<CharStatusT>(
        charCtx?.currentStats?.status ?? CharStatusesE.IDLE,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [unitPosition, setUnitPosition] = useState({
        number: 1,
        top: 0,
        left: 0,
    });

    useEffect(() => {
        if (!charCtx || !charCtx?.currentStats?.status) return;
        setUnitFrameStatus(charCtx?.currentStats?.status);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (charCtx?.currentStats?.status !== CharStatusesE.DEAD || charCtx?.currentStats?.count !== 0) return;
        setTimeout(() => setUnitFrameStatus(CharStatusesE.DEAD), 3000);
    }, [charCtx?.currentStats?.status, charCtx?.currentStats?.count]);

    return (
        <>
            {charCtx?.charWidth ? (
                <div
                    ref={charFrameRef}
                    className={cn('absolute transition-all ease-linear', {
                        hidden: unitFrameStatus === CharStatusesE.DEAD,
                    })}
                    style={{
                        width: `${charCtx?.charWidth / 3}px`,
                        height: `${charCtx?.charWidth / 3}px`,
                        top: `${unitPosition.top}px`,
                        left: `${unitPosition.left}px`,
                        transitionDuration: `${DEFAULT_CHAR_MOVEMENT_SPEED}ms`,
                    }}
                >
                    <div
                        className={cn('pointer-events-none absolute bottom-0 left-[50%] -translate-x-[50%]', {
                            'bg-amber-400/20': showGrid,
                        })}
                        style={{
                            width: `${charCtx?.charWidth}px`,
                            height: `${charCtx?.charWidth}px`,
                        }}
                    >
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default CharFrame;
