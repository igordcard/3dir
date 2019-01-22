function getDomainName(url) {
    // TODO rough version for now
    return url.split('//')[1].split('/')[0].split(':')[0].split('?')[0];
}

function getFileName(url) {
    // TODO rough version for now
    return url.split('/').pop();
}

chrome.downloads.onDeterminingFilename.addListener(
    function(downloadItem, suggest) {
        console.log("A new download has started: " + downloadItem.url);

        domainName = getDomainName(downloadItem.url);
        fileName = getFileName(downloadItem.url);

        suggest({filename: domainName + "/" + fileName});
    }
)
