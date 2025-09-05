
// darkmode
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
          document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    // On page load, check for saved preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }