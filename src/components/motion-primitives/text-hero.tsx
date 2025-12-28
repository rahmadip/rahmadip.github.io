import { TextEffect } from './text-effect';
import { TextLoop } from './text-loop';

export function TextEffectHero() {
    return (
        <TextEffect
            per='line'
            as='h1'
            variants={{
                container: {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 },},
                },
                item: {
                    hidden: { opacity: 0, y: 40,},
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4,},},
                },
            }}
        >
            {`
            Design that Shine.
            Beyond the Line.
            `}
        </TextEffect>
    );
}

export function TextLoopHero() {
    return (
        <h2>
        Portfolio {' '}
        <TextLoop
            className='overflow-y-clip inline-flex'
            transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
            }}
            variants={{
                initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: 'blur(4px)',
                },
                animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                },
                exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: 'blur(4px)',
                },
            }}
        >
            <span className='text-chart-3 italic'>Graphic Design</span>
            <span className='text-chart-3 italic'>Creative</span>
            <span className='text-chart-3 italic'>Anything</span>
        </TextLoop>
        </h2>
    );
}