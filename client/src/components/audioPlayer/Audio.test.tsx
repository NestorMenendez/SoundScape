import { render, screen } from '@testing-library/react';
import { AudioPlayerComponent } from './AudioPlayer';
import { QueuePlayerProvider } from '../../context/QueuePlayerContext';
import { UserMusicProvider } from '../../context/UserMusicContext';


describe('AudioTest', () => {

    test('Verify that play, previous and skip buttons exists', () => {
        render(
            <UserMusicProvider>
                <QueuePlayerProvider>
                    <AudioPlayerComponent />
                </QueuePlayerProvider>
            </UserMusicProvider>
        )
        const playButton = screen.getByRole('button', { name: 'Play' });
        const previousButton = screen.getByRole('button', { name: 'Previous' });
        const skipButton = screen.getByRole('button', { name: 'Skip' });

        expect(playButton).toBeVisible();
        expect(previousButton).toBeDefined();
        expect(skipButton).toBeDefined();
    })

})



// vi.mock('../../context/QueuePlayerContext', () => {
//     useViQueuePlayerContext: () => ({
//         currentTrack: {
//             trackUrl: 'https://samplelib.com/sample-mp3.html'
//         }
//     })
// })


// test('Verify that pause renders after clicking play button', () => {
//     render(
//         <UserMusicProvider>
//             <QueuePlayerProvider>
//                 <AudioPlayerComponent />
//             </QueuePlayerProvider>
//         </UserMusicProvider>
//     )
//     const playButton = screen.getByRole('button', { name: 'Play' });

//     playButton.click();

//     const pauseButton = screen.getByRole('button', { name: 'Pause' });

//     expect(playButton).not.toBeDefined();
//     expect(pauseButton).toBeVisible();
// })