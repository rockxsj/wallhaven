const { clipboard, nativeImage } = require('electron')
const https = require('https')
const fs = require('fs')
const { sep } = require('path')
const wallpaper = require('wallpaper')

/**
 * 检查文件是否存在
 * 
 * 返回数组，第一个是标识；第二个是路径
 */
checkImageDone = (url, fileSize) => {
    let tempDir = utools.getPath('temp')
    const urlList = url.split('/')
    const tempFileName = urlList[urlList.length - 1]
    const dirPath = `${tempDir}${sep}wallhaven`
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }
    const filePath = `${dirPath}${sep}${tempFileName}`
    if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath)
        if (stat.isFile() && stat.size === fileSize) {
            return [true, filePath]
        }
    }
    return [false, filePath]
}

/**
 * 下载图片到本地临时目录
 */
window.downloadImageFact = async function (url, fileSize) {
    const imageDone = checkImageDone(url, fileSize)
    const filePath = imageDone[1]
    if (imageDone[0]) {
        return filePath
    }
    const file = fs.createWriteStream(filePath)
    return new Promise((resolve, reject) => {
        https.get(url, function (res) {
            if (res.statusCode !== 200) {
                console.error('下载状态码错误：', res.statusCode)
                utools.showNotification('下载出错', clickFeatureCode = null, silent = false)
                reject(false)
            }
            res.pipe(file)
            res.on('end', () => {
                resolve(filePath)
            })
        }).on('error', e => {
            console.error('下载出错', e)
            utools.showNotification('下载出错', clickFeatureCode = null, silent = false)
            reject(false)
        })
    })
}

/**
 * 保存图片到用户图片目录
 * 
 * 为啥不弹出对话框让用户选择？  因为utools把dialog类禁用了。
 */
window.saveImageFact = function (url, fileSize) {
    const imageDone = checkImageDone(url, fileSize)
    const filePath = imageDone[1]
    if (!imageDone[0]) {
        utools.showNotification('图片尚未下载完成，稍后再试', clickFeatureCode = null, silent = false)
        return false
    }
    const pathList = filePath.split(sep)
    const tempFileName = pathList[pathList.length - 1]
    const dirPath = `${utools.getPath('pictures')}${sep}wallhaven`
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }
    const des = `${dirPath}${sep}${tempFileName}`
    fs.copyFile(filePath, des, err => {
        if (err) {
            utools.showNotification(`保存图片到:${des}失败，请检查目录是否存在和可写`, clickFeatureCode = null, silent = false)
            return false
        }
        utools.showNotification(`图片已经保存到：${des}`, clickFeatureCode = null, silent = false)
    })
}

/**
 * 把图片复制到剪切板
 */
window.copyImageFact = function (url, fileSize) {
    const imageDone = checkImageDone(url, fileSize)
    const filePath = imageDone[1]
    if (!imageDone[0]) {
        utools.showNotification('图片尚未下载完成，稍后再试', clickFeatureCode = null, silent = false)
        return false
    }
    return clipboard.writeImage(nativeImage.createFromPath(filePath))
}

/**
 * 把图片设置为壁纸
 */
window.setWallPaperFact = function (url, fileSize) {
    const imageDone = checkImageDone(url, fileSize)
    const filePath = imageDone[1]
    if (!imageDone[0]) {
        utools.showNotification('图片尚未下载完成，稍后再试', clickFeatureCode = null, silent = false)
        return false
    }
    wallpaper.set(filePath)
}

/**
 * 把图片设置为锁屏
 */
window.setLockScreenFact = function(url, fileSize) {
    utools.showNotification('暂不支持设置锁屏', clickFeatureCode = null, silent = false)
}

/**
 * 把图片设置为桌面和锁屏
 */
window.setBothFact = function(url, fileSize) {
    utools.showNotification('暂不支持同时设置锁屏', clickFeatureCode = null, silent = false)
}

/**
 * 设置定时更换壁纸任务
 */
window.setAutoChangeFact = function(timing, params, resMeta) {
    let timingConfig = utools.db.get('timing_config')
    const dbObj = {
        _id: 'timing_config',
        data: {
            timing,
            params,
            resMeta
        }
    }
    if (!timingConfig) {
        timingConfig = utools.db.put(dbObj)
        return timingConfig
    }
    dbObj._rev = timingConfig._rev
    timingConfig = utools.db.put(dbObj)
    return timingConfig
}

/**
 * 获取定时更换壁纸任务
 */
window.getAutoChangeFact = function() {
    return utools.db.get('timing_config')
}
