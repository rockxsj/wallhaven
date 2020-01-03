function getScrollTop() {
    let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0
    if (document.body) {
        bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
    return scrollTop
}

function getScrollHeight() {
    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
    if (document.body) {
        bSH = document.body.scrollHeight
    }
    if (document.documentElement) {
        dSH = document.documentElement.scrollHeight
    }
    scrollHeight = (bSH - dSH > 0) ? bSH : dSH
    return scrollHeight
}

function getWindowHeight() {
    let windowHeight = 0
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight
    } else {
        windowHeight = document.body.clientHeight
    }
    return windowHeight
}

function object2URL(obj) {
    var str = []
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
    return str.join("&")
}
