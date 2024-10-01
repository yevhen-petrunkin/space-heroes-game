import dynamic from 'next/dynamic';

const BattlefieldNoSSR = dynamic(
    () =>
        import(
            '@/game-engine/components/game-content/interactive-elements/interactive-layouts/battlefield/Battlefield'
        ),
    {
        ssr: false,
    },
);

export default BattlefieldNoSSR;
