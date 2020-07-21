### 1.上下文图

图片可能加载不出来，可以单击右边查看[image link](http://sumtudou.oss-cn-shanghai.aliyuncs.com/something/cash.jpg "With a Title").

![](http://sumtudou.oss-cn-shanghai.aliyuncs.com/something/cash.jpg)

### 2.所有方法

1. countGoodsNum()
   - 输入：条形码列表。
   - 输出：各类条形码及其出现次数的Map。
2. findGoods()
   - 输入：各类条形码及其出现次数的Map。
   - 输出：一个Json对象，包括条形码对应商品的所有信息。
3. getEachGoodsPrice()
   - 输入：一个Json对象，包括条形码对应商品的所有信息。
   - 输出：每类商品的小总价的列表。
4. countGoodsTotalPrice()
   - 输入：每类商品的小总价的列表。
   - 输出：所有商品的总价。
5. formatReceipt()
   - 输入：一个Json对象，包括条形码对应商品的所有信息以及总价。
   - 输出：已经格式化好的账单字符串。

### 3,4 功能实现

&emsp;&emsp;实现见代码，即根目录下的main.js

