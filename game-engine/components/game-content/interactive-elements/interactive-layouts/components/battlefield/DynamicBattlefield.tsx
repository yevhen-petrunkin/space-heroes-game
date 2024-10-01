import dynamic from 'next/dynamic';

const DynamicBattlefield = dynamic(
    () =>
        import(
            '@/game-engine/components/game-content/interactive-elements/interactive-layouts/components/battlefield/Battlefield'
        ),
    {
        ssr: false,
    },
);

export default DynamicBattlefield;
