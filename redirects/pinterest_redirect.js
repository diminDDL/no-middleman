// create a table of the styles we want to follow
var styles = ["underline"]  // the pinterest structure is auto generated garbage so, we have to use this,
// and thankfully, pinterest uses underline for the link we want to click

// function to find all elements with a style
function getElementsByStyle(styles) {
    var all = document.getElementsByTagName("*");
    var elements = [];
    for (var i = 0; i < all.length; i++) {
        var element = all[i];
        var style = window.getComputedStyle(element);
        for (var j = 0; j < styles.length; j++) {
            if (style.textDecoration.indexOf(styles[j]) >= 0) {
                elements.push(element);
                break;
            }
        }
    }
    return elements;
}

// wait for the page to load by continiously checking if the element is present
var checkExist = setInterval(function() {
    if (getElementsByStyle(styles).length) {
        clearInterval(checkExist);
        // locate the first element which matches one of the classes in the styles array
        var element = getElementsByStyle(styles)[0];
        
        // click the element
        element.click();
        // close the tab
        //window.close();
    }
}, 100); // check every 100ms
