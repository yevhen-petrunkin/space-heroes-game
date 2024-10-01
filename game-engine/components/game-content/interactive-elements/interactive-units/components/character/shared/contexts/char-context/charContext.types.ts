import { Dispatch, SetStateAction } from 'react';

import { CharI } from '../../types/character.types';

export type CharContextT = {
    charCtx: CharI;
    setCharCtx: Dispatch<SetStateAction<CharI>>;
};
