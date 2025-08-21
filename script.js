// First video toggle
        const vid1 = document.getElementById('cod-vid');
        const btn1 = document.getElementById('mute1');
        let mute1State = true;

        btn1.addEventListener('click', () => {
            mute1State = !mute1State;
            vid1.muted = mute1State;
            btn1.textContent = mute1State ? 'Unmute 🔊' : 'Mute 🔇';
        });

        // Second video toggle
        const vid2 = document.getElementById('cod-vid2');
        const btn2 = document.getElementById('mute2');
        let mute2State = true;

        btn2.addEventListener('click', () => {
            mute2State = !mute2State;
            vid2.muted = mute2State;
            btn2.textContent = mute2State ? 'Unmute 🔊' : 'Mute 🔇';
        });