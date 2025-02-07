const cssGlobals = document.documentElement.style;
const darkModeLabel = document.querySelector('label[for="darkModeToggle"]');
const darkModeToggle = document.getElementById('darkModeToggle');

// dark mode toggle button (hidden checkbox)
if (darkModeToggle && darkModeLabel) {
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            darkModeLabel.innerHTML = 'Light Mode';
            cssGlobals.setProperty('--curModeForeground', 'var(--darkModeForeground)');
            cssGlobals.setProperty('--curModeBG', 'var(--darkModeBG)');
            cssGlobals.setProperty('--curModeMouseGreen', 'var(--darkModeMouseGreen)');
            cssGlobals.setProperty('--curModeMouseRed', 'var(--darkModeMouseRed)');
            cssGlobals.setProperty('--curModeMouseBlue', 'var(--darkModeMouseBlue)');
            cssGlobals.setProperty('--curModeMouseYellow', 'var(--darkModeMouseGray)');
            cssGlobals.setProperty('--curModeAccent', 'var(--darkModeAccent)');
            cssGlobals.setProperty('--curModeGlow', 'var(--darkModeGlow)');
            cssGlobals.setProperty('--curModeText', 'var(--darkModeText)');
            cssGlobals.setProperty('--curModeTextHover', 'var(--darkModeTextHover)');
            cssGlobals.setProperty('--curModeTextSelected', 'var(--darkModeTextSelected)');
        } else {
            darkModeLabel.innerHTML = 'Dark Mode';
            cssGlobals.setProperty('--curModeForeground', 'var(--lightModeForeground)');
            cssGlobals.setProperty('--curModeBG', 'var(--lightModeBG)');
            cssGlobals.setProperty('--curModeMouseGreen', 'var(--lightModeMouseGreen)');
            cssGlobals.setProperty('--curModeMouseRed', 'var(--lightModeMouseRed)');
            cssGlobals.setProperty('--curModeMouseBlue', 'var(--lightModeMouseBlue)');
            cssGlobals.setProperty('--curModeMouseYellow', 'var(--lightModeMouseGray)');
            cssGlobals.setProperty('--curModeAccent', 'var(--lightModeAccent)');
            cssGlobals.setProperty('--curModeGlow', 'var(--lightModeGlow)');
            cssGlobals.setProperty('--curModeText', 'var(--lightModeText)');
            cssGlobals.setProperty('--curModeTextHover', 'var(--lightModeTextHover)');
            cssGlobals.setProperty('--curModeTextSelected', 'var(--lightModeTextSelected)');
        }
    });
}