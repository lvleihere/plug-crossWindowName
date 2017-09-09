# plug-crossWindowName
crossWindowName can cross domain was my package

#### Explanation and configuration instructions:
/*
* auther:lvleihere
* date:17/9/9
* v:1.0
* Explanation:
1. First of all need to introduce an empty page 
2. In the data page to write data to window.name
3. Parameter one: dataUrl; 
   Parameter two: proxyUrl;
   parameter three is a successful callback function
*/

for example：
```
crossWindowName({
        dataUrl:'http://jobhere.cn',
        proxyUrl:'proxy.html', 
        success:function(data){
        console.log(data);
        }
    });
```
