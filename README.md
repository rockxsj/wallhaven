# utools的壁纸插件

## Why

作为一个喜新厌旧的“渣男”，实在受不了一成不变的壁纸，所以就写了个插件方便自己换壁纸。

> 建议分离插件，然后最大化使用，否则排版可能不够美观。

## How

壁纸全部来自[wallhaven](https://wallhaven.cc)，根据抓取的接口，来请求壁纸列表。

## Features
#### 浏览壁纸
按照默认条件和排序方式可以浏览壁纸。
#### 搜索壁纸
支持输入关键词和选择过滤条件搜索壁纸。
#### 保存壁纸原图到本地
支持保存原尺寸壁纸到用户目录的pictures/wallhaven目录。
#### 一键设置壁纸
windows 10 & mac OS 10.12以上支持一键设置壁纸。
#### 按照保存的条件自动更换壁纸
windows 10 & mac OS 10.12以上支持按照设定的条件和更新周期自动更换壁纸。
1. 开启自动更换：选择好条件后选择定时更换周期；
2. 关闭自动更换：修改切换周期为不自动切换。

注意：
1. 完全退出插件后将失去自动更换壁纸功能，因为插件进程不在了定时任务也就无效了。
2. 重新进入插件会重启最后一次保存的自动更换壁纸任务，如需要取消参考关闭自动更换。


## Limit

由于electron没有提供设置壁纸的接口，所以依赖了github上的：[wallpaper](https://github.com/sindresorhus/wallpaper)包。最终导致的结果就是设置壁纸功能只支持：windows 10+和mac OS 10.12+，但是你依然可以使用下载壁纸和复制壁纸功能。

另外，由于wallpaper包使用了bin程序进行壁纸设置，所以导致本插件比较大，如不需要设置壁纸功能，可以自行移除依赖。

最后，如果有人知道有什么办法可以实现linux下和更低版本的windows、mac OS支持或者知道怎么设置为锁屏，欢迎提issue或者邮箱联系，邮箱地址：rockxsj#gmail.com。

## ScreenShot
![labFIJ.png](https://s2.ax1x.com/2020/01/03/labFIJ.png)
![labnsK.png](https://s2.ax1x.com/2020/01/03/labnsK.png)
![labQde.png](https://s2.ax1x.com/2020/01/03/labQde.png)
![labUL8.png](https://s2.ax1x.com/2020/01/03/labUL8.png)


## TODO

[x]支持登录wallpaper账号

[x]可以添加收藏到wallpaper的个人账号

## Thanks
[wallhaven](https://wallhaven.cc)

[wallpaper](https://github.com/sindresorhus/wallpaper)

[bulma](https://bulma.io/)
