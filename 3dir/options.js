document.getElementById("subdir").addEventListener('change', (event) => {
    if (event.target.checked) {
        chrome.storage.sync.set({subdir: true}, function() {
            console.log("Using 3dir subdirectory.");
        });
    } else {
        chrome.storage.sync.set({subdir: false}, function() {
            console.log("Not using 3dir subdirectory.");
        });
    }
  })
