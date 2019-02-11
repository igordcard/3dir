document.getElementById("subdir").addEventListener('change', (event) => {
    if (event.target.checked) {
        document.getElementById("secondary").disabled = false;
        chrome.storage.sync.set({subdir: true}, function() {
            console.log("Using 3dir subdirectory.");
        });
    } else {
        document.getElementById("secondary").disabled = true;
        chrome.storage.sync.set({subdir: false}, function() {
            console.log("Not using 3dir subdirectory.");
        });
    }
});

document.getElementById("secondary").addEventListener('change', (event) => {
    if (event.target.checked) {
        chrome.storage.sync.set({secondary: true}, function() {
            console.log("Using secondary subdirectory.");
        });
    } else {
        chrome.storage.sync.set({secondary: false}, function() {
            console.log("Not using secondary subdirectory.");
        });
    }
});

chrome.storage.sync.get(['subdir'], function(result) {
    useTopDir = result.subdir
    document.getElementById("subdir").checked = useTopDir;
    document.getElementById("secondary").disabled = !useTopDir;
});

chrome.storage.sync.get(['secondary'], function(result) {
    useSecondary = result.secondary
    document.getElementById("secondary").checked = useSecondary;
});
