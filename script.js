console.log('#script run start');
console.time();
setTimeout(() => {
    console.log('time out');
    console.timeEnd();
}, 2000)
console.log('#script run end');

/**
 * 预取 的时候，script.js 被 fetch 下来，size 列的两个数字，275 B 表示下载的字节大小，0 B 表示解析的字节大小（即目前并没有解析）
控制台是空的，即脚本没有运行

点击页面上的 Add Script，会在页面增加地址为 script.js 的 <script> 标签，此时网络选项卡会增加以下内容


下载字节量为 (prefetch cache) ，即直接从预取缓存获取资源，下面的解析后的字节不再为 0
控制台打印出脚本中的调试内容，即这时脚本才被解析并运行
 */

 /**
  * 预加载 的时候，script.js 被优先下载， size 列的解压字节不再为 0，即 preload 除了把脚本下载了下来，还进行了解析
控制台目前仍为空，即脚本虽然被解析，但并没有运行

点击 Add Script，网络选项卡并没有增加任何记录，但是控制台输出了脚本的打印内容

因为脚本已经解析完成，所以连从缓存获取都不需要了，直接运行即可
如果没有在 3 秒内点击 Add Script，控制台会进行警告，因为没有及时使用应该优先加载的资源

  */
