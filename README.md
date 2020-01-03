# utools的壁纸插件

## Why

作为一个喜新厌旧的“渣男”，实在受不了一成不变的壁纸，所以就写了个插件方便自己换壁纸。

> 建议分离插件，然后最大化使用，否则排版可能不够美观。

## How

壁纸全部来自[wallhaven](https://wallhaven.cc)，根据抓取的接口，来请求壁纸列表。

## Features
#### 浏览壁纸
#### 搜索壁纸
#### 保存壁纸原图到本地
#### 一键设置壁纸


## Limit

由于electron没有提供设置壁纸的接口，所以依赖了github上的：[wallpaper](https://github.com/sindresorhus/wallpaper)包。最终导致的结果就是设置壁纸功能只支持：windows 10+和mac OS 10.12+，但是你依然可以使用下载壁纸和复制壁纸功能。

另外，由于wallpaper包使用了bin程序进行壁纸设置，所以导致本插件比较大，如不需要设置壁纸功能，可以自行移除依赖。

最后，如果有人知道有什么办法可以实现linux下和更低版本的windows、mac OS支持或者知道怎么设置为锁屏，欢迎提issue或者邮箱联系，邮箱地址：rockxsj#gmail.com。

## ScreenShot
![UTOOLS1578032217254.png](https://user-gold-cdn.xitu.io/2020/1/3/16f6a0cb905daca8?w=2880&h=1800&f=png&s=3541085)
![UTOOLS1578032254791.png](https://user-gold-cdn.xitu.io/2020/1/3/16f6a0d47430599d?w=2878&h=1795&f=png&s=2610213)
![UTOOLS1578032311551.png](https://user-gold-cdn.xitu.io/2020/1/3/16f6a0e3088e547e?w=2865&h=1800&f=png&s=4438309)


## TODO

[x]定时自动设置壁纸

[x]支持登录wallpaper账号

[x]可以添加收藏到wallpaper的个人账号

## Thanks
[wallhaven](https://wallhaven.cc)

[wallpaper](https://github.com/sindresorhus/wallpaper)

[bulma](https://bulma.io/)
