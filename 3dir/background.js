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
        var useTopDir = false // will be set by options
        var topDir = "3dir"   // will be set by options

        console.log("A new download has started: " + downloadItem.url);

        // async
        chrome.storage.sync.get(['subdir'], function(result) {
            useTopDir = result.subdir

            domainName = getDomainName(downloadItem.url);
            //fileName = getFileName(downloadItem.url);
            fileName = downloadItem.filename;

            filePath = domainName + "/" + fileName;

            if(useTopDir) {
                filePath = topDir + "/" + filePath;
            }

            suggest({filename: filePath});
        });
        return true;
    }
)
