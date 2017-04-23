console.log("loading js");
console.log("setting cookie");
chrome.cookies.set({ domain: ".youtube.com", url: "http://www.youtube.com/", name: "VISITOR_INFO1_LIVE", value: "fPQ4jCL6EiE"});
chrome.cookies.set({ domain: ".youtube.com", url: "https://www.youtube.com/", name: "VISITOR_INFO1_LIVE", value: "fPQ4jCL6EiE"});
chrome.cookies.set({ domain: ".youtube.com", url: "http://www.youtube.com/", name: "PREF", value: "f6=4"});
chrome.cookies.set({ domain: ".youtube.com", url: "https://www.youtube.com/", name: "PREF", value: "f6=4"});
alert("Enabled!!\n1) Reload Youtube\n2) Click on the image on top right\n3) Click 'Dark Mode'");
console.log("done");