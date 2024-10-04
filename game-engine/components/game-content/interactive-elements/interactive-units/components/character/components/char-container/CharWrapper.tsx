import React, { useEffect } from 'react';

import { DEFAULT_CHAR_CONTEXT } from '../../shared/constants/charConstants';
import { useCharContext } from '../../shared/contexts/char-context/CharContext';
import { getCharDataByCharName, getCharStatsByCharDataAndCount } from '../../shared/utils/charUtils';
import { CharWrapperPropsI } from './charWrapper.types';

const CharWrapper = ({
    charName,
    charCount,
    charWidth,
    charAction,
    cellData,
    flipTrigger,
    shouldCharFlip,
    startCellNum,
    children,
}: CharWrapperPropsI) => {
    const { setCharCtx } = useCharContext();

    useEffect(() => {
        const charData = getCharDataByCharName(charName);
        const startingCharStats = getCharStatsByCharDataAndCount(
            charData?.stats ?? DEFAULT_CHAR_CONTEXT.charStats,
            charCount ?? DEFAULT_CHAR_CONTEXT.charCount,
        );
        setCharCtx((prev) => ({
            ...prev,
            ...{
                charName,
                charCount: charCount ?? DEFAULT_CHAR_CONTEXT.charCount,
                charImages: charData?.images ?? DEFAULT_CHAR_CONTEXT.charImages,
                charWidth: charWidth ?? DEFAULT_CHAR_CONTEXT.charWidth,
                charAction: charAction ?? DEFAULT_CHAR_CONTEXT.charAction,
                charStats: charData?.stats ?? DEFAULT_CHAR_CONTEXT.charStats,
                startingStats: startingCharStats,
                currentStats: startingCharStats,
                cellData: cellData ?? DEFAULT_CHAR_CONTEXT.cellData,
                startCellNum: startCellNum ?? DEFAULT_CHAR_CONTEXT.startCellNum,
                shouldUnitFlip: shouldCharFlip ?? DEFAULT_CHAR_CONTEXT.shouldCharFlip,
                flipTrigger: flipTrigger ?? DEFAULT_CHAR_CONTEXT.flipTrigger,
            },
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
};

export default CharWrapper;
