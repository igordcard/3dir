# 3dir

## 3Dir (Dynamic Download Directories)

The goal of 3Dir is very straightforward: to save your downloads in different locations based on different attributes and conditions... so you don't have to waste time doing it by hand.

At the time of writing, pre-alpha version 0.1.0.0 is available at the Chrome Web Store [1]. This very first version includes the most basic, but personally most useful, feature I could think of:

* always move your download to a folder named the same as the domain name of the download's URL

For example, if the user decides to download 3Dir's release zipfile from GitHub, a directory named "github.com" is automatically created inside the root Downloads folder and 3Dir's release zipfile gets saved there.

Apart from automatically saving downloads that result from clicking on a download link, the extension also moves downloaded files in other types of interactions:

* Choosing to "Save link as..."
* Choosing to "Save image as..."
* Choosing to save a non-webpage using "Save as", such as PDF document or an image
* Using the Save Page WE [2] extension that downloads the current page as a single HTML file
* Likely other interactions work as well

However, when choosing to save a webpage, either by using the CTRL+S shortcut (or whichever is assigned) or "Save as...", will not activate 3Dir.

No ETAs and no commitments with regards to 3Dir! I am using it in my own browser and will add/fix features/issues as I need/find them.

Your feedback is very welcome though!

### Links

* [[1] 3Dir at the Chrome Web Store](https://chrome.google.com/webstore/detail/3dir-dynamic-download-dir/miiniiahifdfcapppoecnajdjjolemao)
* [[2] Save Page WE at the Chrome Web Store](https://chrome.google.com/webstore/detail/save-page-we/dhhpefjklgkmgeafimnjhojgjamoafof)
