{
    const initDarkThemeToggleButton = function () {
        const checkbox = document.getElementById('toggleTheme');
        const body = document.getElementsByTagName('body')[0];

        const setDarkTheme = function () {
            body.classList.add('dark-theme');
        }

        const setdefaultTheme = function () {
            body.classList.remove('dark-theme');
        }

        const saveSessionVariable = function (key, value) {
            sessionStorage.setItem(key, value);
        }

        const getSessionVariable = function (key) {
            return sessionStorage.getItem(key);
        }

        const saveDarkTheme = function (value) {
            saveSessionVariable('darkTheme', value);
        }

        const updateCheckbox = function () {
            checkbox.checked = getSessionVariable('darkTheme') == 'true';
        }

        const updateTheme = function () {
            if (checkbox.checked) {
                setDarkTheme();
            } else {
                setdefaultTheme();
            }
        }

        const loadDarkTheme = function () {
            updateCheckbox();
            updateTheme();
        }

        checkbox.addEventListener('change', function (e) {
            updateTheme();
            saveDarkTheme(checkbox.checked);
        });

        loadDarkTheme();
    }

    document.addEventListener("DOMContentLoaded", initDarkThemeToggleButton);
}