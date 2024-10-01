'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { DEFAULT_CHAR_CONTEXT } from '../../constants/charConstants';
import { CharI } from '../../types/character.types';
import { CharContextT } from './charContext.types';

const CharContext = createContext<CharContextT>({} as CharContextT);
export const useCharContext = () => useContext(CharContext);

const CharContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [charCtx, setCharCtx] = useState<CharI>(DEFAULT_CHAR_CONTEXT);

    const charCtxState: CharContextT = useMemo(
        () => ({
            charCtx,
            setCharCtx,
        }),
        [charCtx],
    );

    return <CharContext.Provider value={charCtxState}>{children}</CharContext.Provider>;
};

export default CharContextProvider;
