chrome.downloads.onDeterminingFilename.addListener(
    function(downloadItem, suggest) {
        console.log("A new download has started: " + downloadItem.url);
        suggest({filename: "renamed_download"});
    }
)
