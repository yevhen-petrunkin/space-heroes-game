'use client';

import { Provider } from 'react-redux';

import { store } from '@/game-engine/redux/redux-store/store';

const ReduxClient = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxClient;
