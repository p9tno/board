

const checkbox = document.getElementById('cor_switcher');
const root = document.getElementById('root');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
})
