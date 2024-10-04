import { memo } from 'react';

import CharContextProvider from '../../shared/contexts/char-context/CharContext';
import CharWrapper from '../char-container/CharWrapper';
import { CharPropsI } from './charUnit.types';

const CharUnit = memo((props: CharPropsI) => {
    return (
        <CharContextProvider>
            <CharWrapper {...props}>CharUnit</CharWrapper>
        </CharContextProvider>
    );
});

CharUnit.displayName = 'CharUnit';

export default CharUnit;
