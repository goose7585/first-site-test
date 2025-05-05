document.addEventListener('DOMContentLoaded', () => {
    const soundButtons = document.querySelectorAll('.sound-button');

    soundButtons.forEach(button => {
        button.addEventListener('click', () => {
            const soundId = button.getAttribute('data-sound');
            const audioElement = document.getElementById(`${soundId}-sound`);

            if (audioElement) {
                // Stop other sounds maybe? Or allow chaos? Allow chaos for 90s feel.
                // Optional: Pause other sounds
                // document.querySelectorAll('audio').forEach(audio => {
                //     if (audio !== audioElement) {
                //         audio.pause();
                //         audio.currentTime = 0;
                //     }
                // });

                audioElement.currentTime = 0; // Rewind to start
                audioElement.play().catch(error => {
                    console.error("Audio playback failed:", error);
                    // Inform user audio couldn't play, maybe requires interaction.
                    alert("Couldn't play audio. Please interact with the page first.");
                });
            } else {
                console.warn(`Audio element not found for sound: ${soundId}`);
            }
        });
    });

    // Add a little sparkle - maybe make an element follow the mouse slightly?
    // Or just stick to the 90s basics. Let's keep it simple.

    console.log("Welcome to 1998!");
});

