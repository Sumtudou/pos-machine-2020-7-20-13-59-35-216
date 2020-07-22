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

### 5.PDCA分析

| 方法名 | countGoodsNum() |
| :----: | :-------------: |
|  plan  |     10分钟      |
|   do   |     10分钟      |
| check  |     没问题      |
| action |     没问题      |

| 方法名 |                         findGoods()                          |
| :----: | :----------------------------------------------------------: |
|  plan  |                            10分钟                            |
|   do   |                            30分钟                            |
| check  | 问题：JS的Map遍历不太熟。换了好几种办法。<br>JS对于Json数组的处理也不太熟。 |
| action |                  好好学习JS以上遇到的模块。                  |

| 方法名 | getEachGoodsPrice() |
| :----: | :-----------------: |
|  plan  |        6分钟        |
|   do   |        6分钟        |
| check  |       没问题        |
| action |       没问题        |

| 方法名 | countGoodsTotalPrice() |
| :----: | :--------------------: |
|  plan  |         6分钟          |
|   do   |         6分钟          |
| check  |         没问题         |
| action |         没问题         |

| 方法名 |                       formatReceipt()                        |
| :----: | :----------------------------------------------------------: |
|  plan  |                            10分钟                            |
|   do   |                            15分钟                            |
| check  | 问题：字符串处理出问题很常见。这里是少了个空格，<br>之后我改用了ES6提供的字符串模板的方式，就搞定了。 |
| action |                            仔细点                            |
