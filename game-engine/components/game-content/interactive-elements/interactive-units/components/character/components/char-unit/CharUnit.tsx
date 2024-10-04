import { memo } from 'react';

import CharContextProvider from '../../shared/contexts/char-context/CharContext';
import CharWrapper from '../char-container/CharWrapper';
import CharFrame from '../char-frame/CharFrame';
import { CharPropsI } from './charUnit.types';

const CharUnit = memo((props: CharPropsI) => {
    return (
        <CharContextProvider>
            <CharWrapper {...props}>
                <CharFrame>CharUnit</CharFrame>
            </CharWrapper>
        </CharContextProvider>
    );
});

CharUnit.displayName = 'CharUnit';

export default CharUnit;
