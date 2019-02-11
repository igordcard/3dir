function getDomainName(url) {
    // TODO rough version for now
    return url.split('//')[1].split('/')[0].split(':')[0].split('?')[0];
}

function getFileName(url) {
    // TODO rough version for now
    return url.split('/').pop();
}

function getIgorsDate(d) {
        var month = "0" + (d.getMonth()+1);
        month = month.substring(month.length - 2);
        var day = "0" + d.getDate();
        day = day.substring(day.length -2 );

        return "".concat(d.getFullYear(), month, day);
}

chrome.downloads.onDeterminingFilename.addListener(
    function(downloadItem, suggest) {
        var useTopDir = false  // will be set by options
        var useSecond = false  // will be set by options
        var useDateDir = false // will be set by options TODO
        var topDir = "3dir"    // will be set by options
        var secondDir = "cd"  // will be set by options TODO
        var d = new Date();
        var dateDir = getIgorsDate(d);

        console.log("A new download has started: " + downloadItem.url);

        // async
        chrome.storage.sync.get(['subdir', 'secondary'], function(result) {
            useTopDir = result.subdir
            useSecond = result.secondary

            var domainName = getDomainName(downloadItem.url);
            //fileName = getFileName(downloadItem.url);
            var fileName = downloadItem.filename;

            var filePath = domainName + "/" + fileName;

            if(useDateDir) {
                filePath = dateDir + "/" + filePath;
            }

            if(useTopDir) {
                if(useSecond) {
                    filePath = secondDir + "/" + filePath;
                }
                else {
                    filePath = topDir + "/" + filePath;
                }
            }

            suggest({filename: filePath});
        });
        return true;
    }
)
