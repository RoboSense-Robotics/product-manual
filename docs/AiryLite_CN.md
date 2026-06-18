# Airy Lite 用户手册

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/c28d43229bff7f2b955350469ee77201cc7f53bf3de366c0b2476ddfbd51a792.jpg)

## 1 安全提示

--8<-- "snippets/safety-reminder.md"

## 2 产品描述

### 2.1 产品概要

Airy Lite 是 RoboSense 专门为消除盲区设计的新型低成本 3D 激光雷达，主要应用于消费机器人、工业机器人、商用机器人等领域。

Airy Lite 最小探测距离可近至 0.1m，同时提供 $360^{\circ}(H)\times45^{\circ}(V)$ 的宽广 FOV 和最远 60m 的测距能力，可大范围内有效探测各类近距离障碍物。整机重量 200g，外露部分仅 $\varphi44\times20mm$ 的紧凑结构，显著降低空间占用，安装灵活便捷，轻松嵌入各类设备。依托于 RoboSense 数字化平台，采用革新的芯片化收发方案与数字化架构及信号处理技术，在实现高性能的同时兼顾成本优化与可靠性保障。

### 2.2 产品结构

Airy Lite 结构图如图 1 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/fb353f7454683c8c765bb9c9d772c136e711e45fd97c69586c2bd444c58538fa.jpg)



图 1 产品结构说明


其中包括以下结构:

#### 1) 防护罩

激光雷达发射激光束和接收到的激光回波都需透过弧形特制防护罩，因

此在激光发散的 FOV 范围内，严禁遮挡。

#### 2) 底座

激光雷达的底座部分，包含底部的透气膜、螺钉安装孔、定位孔以及出线接口。

#### 3) 线束

Airy Lite 本体配备一条线束，实现供电和数据传输的功能。关于线束接口的详细定义见章节 3.3。

线束上的密封胶塞与推荐材料和开孔尺寸后，可以实现 IPX7 要求；推荐开孔材料为铝合金，推荐开孔尺寸如下：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/cc62fbe811be2d4769e805871c4c32f17193698f83f3e1d09d97acbe117b275e.jpg)



图 2 胶塞推荐开孔尺寸


线束上的另一密封结构（图 1 所指示的密封结构）是为了实现芯线间的密封，避免水等其他污染源倒灌进入雷达。

#### 4) M3 螺钉安装孔

用于激光雷达与安装支架间的固定，通过 M3 螺钉进行锁紧。

#### 5) 定位孔

用于支撑、固定激光雷达与支架之间的位置和方向，可提高安装效率与精度。

上述结构的详细尺寸和参数见附录 B 结构图纸部分。

### 2.3 雷达 FOV 分布

Airy Lite 的 FOV 在水平方向的角度范围是 0 ~ 360°，在垂直方向的角度范围是 $-11.5^{\circ} \sim +33.5^{\circ}$ ，垂直方向角度间隔约为 $1.96^{\circ}$ 。24路通道与真实的垂直角度对应关系如图3所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/c2ab3ee2481da94f35d669ac61b9da6938df9d7201623762ea6c14a2a88d5547.jpg)



图 3 FOV 示意图


Airy Lite 因其设计架构及扫描时序限制，每秒约有 5ms 时间无法接收点云，也就是每 10 帧点云中有 1 帧点云出现约 30° 的点云缺口。

### 2.4 规格参数 $^{1}$


表 1 Airy Lite 规格参数


<table><tr><td colspan="4">规格参数</td></tr><tr><td>线数</td><td>24</td><td>水平视场角<eq>^{2}</eq></td><td>0°~360°</td></tr><tr><td>激光安全等级</td><td>Class1人眼安全</td><td>垂直视场角<eq>^{3}</eq></td><td>-11.5°~+33.5°</td></tr><tr><td>测距能力<eq>^{4}</eq></td><td colspan="3">最远测距:60m上下两边视场(-11.5°~-0.25°&amp;+22.25°~+33.5°):30m@10% NIST中间视场(-0.25°~+22.25°):40m@10% NIST</td></tr><tr><td>水平角分辨率</td><td>0.6°</td><td>垂直角分辨率</td><td>1.96°</td></tr><tr><td>盲区</td><td>&lt;0.1m</td><td>精度(典型值)<eq>^{5}</eq></td><td>1 cm (1σ)</td></tr><tr><td>出点数</td><td>144,000 pts / s</td><td>帧率</td><td>10 Hz</td></tr><tr><td>数据接口</td><td colspan="3">RS485 (双路 4000000 8-N-1)</td></tr><tr><td>输出数据内容</td><td colspan="3">三维空间坐标、反射强度、时间戳等</td></tr><tr><td>工作电压</td><td>10V - 16V</td><td>回波模式</td><td>单回波:最强回波</td></tr><tr><td>产品功率<eq>^{6}</eq></td><td>4.5W</td><td>尺寸(H x W x D)</td><td>整机:69*64*62 mm</td></tr><tr><td></td><td></td><td></td><td>(包含出线接口)防护罩: Φ44mm*20 mm</td></tr><tr><td>重量</td><td>210±10g(激光雷达本体)</td><td>工作温度7</td><td>-20°C ~+60°C</td></tr><tr><td>时间同步</td><td>GPS</td><td>存储温度</td><td>-40°C ~+85°C</td></tr><tr><td>产品型号</td><td>Airy Lite</td><td>防护等级</td><td>IP67(不含线束接口位置)</td></tr></table>

### 2.5 产品原理

#### 2.5.1 坐标映射

由于激光雷达封装的数据包仅为水平旋转角度和距离参量, 为了呈现三维点云图的效果, 将极坐标下的角度和距离信息转化为了笛卡尔坐标系下的 x, y, z 坐标, 它们的转换关系如下式所示:

$$
\left\{ \begin{array}{c} x = r c o s (w) \cos (a) + R c o s (a) \\ y = - r \cos (w) \sin (a) - R s i n (a) \\ Z = r s i n (w) + z \end{array} \right.
$$

其中 r 为实测距离， $\omega$ 为激光的垂直角度， $\alpha$ 为激光的水平旋转角度，R 为光心到原点的平面半径，Z 为光心到原点的 Z 轴高度，x, y, z 为极坐标投影到笛卡尔 X, Y, Z 轴上的坐标。

#### 2.5.2 反射强度解读

Airy Lite 激光雷达提供了反射强度信息来表征被测物体的反射率。在 Airy Lite 数据中，标定后的反射强度范围区间为 1～255（该范围区间为 RoboSense 产品自定义的对目标反射率探测的数值）。

#### 2.5.3 时间同步方式

Airy Lite 当前仅支持 GPS 同步方式。

##### 2.5.3.1 GPS 时间同步原理

GPS 模块连续向产品发送 GPRMC 数据和 PPS 同步脉冲信号，PPS 同步脉冲长度为 20～200 ms，GPRMC 数据必须在 PPS 同步脉冲下降沿后 10 ms 之后发射，时序图如图 4 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/308535a366acac65c88b28d3d0a76f5e98e2d432aaed2a3929cda18fa121e743.jpg)



图 4 GPS 时间同步时序图


> **提示**：

为确保时间同步的准确性, 建议将 PPS 的脉宽设置在 20 ~ 200 ms 之间。发送周期为 1s。先发送 PPS, 然后通过后续 GPRMC 的时间内容确定之前发送 PPS 的授时 master 时间。

##### 2.5.3.2 GPS 时间同步使用

Airy Lite 激光雷达 GPS 接口电平协议为 TTL 电平标准，详情参见表 2。


表 2 产品授时引脚定义


<table><tr><td rowspan="2">通讯方式</td><td colspan="2">接收引脚定义</td></tr><tr><td>GPS GPRMC</td><td>GPS PULSE</td></tr><tr><td>TTL</td><td>接 GPS 模块输出的 TTL 电平标准的串口数据</td><td>接 GPS 模块输出的同步脉冲信号,电平要求 3.3V</td></tr></table>

外接的 GPS 模块需要设置输出串口的波特率为 9600 bps，数据位 8 bits，无校验位，停止位 1 bit。Airy Lite 只读取 GPS 模块发出的 GPRMC 格式的数据，其标准格式如下：

$$
\text {   GPRMC, } <   1 >, <   2 >, <   3 >, <   4 >, <   5 >, <   6 >, <   7 >, <   8 >, <   9 >, <   1 0 >, <   1 1 >, <   1 2 > * \text {   hh }
$$

<1> UTC 时间

<2> 定位状态，A = 有效定位，V = 无效定位

<3> 纬度

<4> 纬度半球 N(北半球)或 S(南半球)

<5> 经度

<6> 经度半球 E(东经)或 W(西经)

<7> 地面速率

<8> 地面航向

<9> UTC 日期

<10> 磁偏角

<11> 磁偏角方向，E(东)或 W(西)

<12> 模式指示(A = 自主定位, D = 差分, E = 估算, N = 数据无效)

*后 hh 为$到*所有字符的异或和

提示:

1) 1 PPS 脉冲的发送时间间隔需控制在 $1 \, s \pm 200 \, us$ 内。

2) 年份若在 00-69，解析为 2000-2069 年；若在 70-99，解析为 1970 年到 1999 年。

3) 目前市场的 GPS 模块发出的 GPRMC 消息长度存在不一致情况，本产品可兼容市场上大部分 GPS 模块发出来的 GPRMC 消息格式，如果在使用过程中发现不兼容的情况，请联系 RoboSense。

4) 使用时消息需要满足仅 GPRMC 消息，其他信息需屏蔽。

5) 模式指示必须为 A（有效定位）时，才可以同步成功。

6) PPS 频率要求：1s 一次

7) GPRMC 频率要求：1s 一次

## 3 产品安装

### 3.1 配件说明

Airy Lite 标配出货配件清单如表 3 所示，清单仅供参考。


表 3 出厂标准配件清单


<table><tr><td>序号</td><td>配件名称</td><td>规格</td><td>数量</td></tr><tr><td>1</td><td>激光雷达LiDAR</td><td>Airy Lite</td><td>1</td></tr><tr><td>2</td><td>螺丝包(选配)Screw Pack</td><td>M3* 8</td><td>4</td></tr><tr><td>3</td><td>产品包装清单和出货检验报告Product Packing List and Shipment Inspection Report</td><td>/</td><td>1</td></tr></table>

如特殊要求请以商务协议为准。

### 3.2 机械安装

激光雷达的结构安装图如图 5 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/863f7a98dccf04abfb7aa4476a11adfe8ab011504a977f5f56827f95299b42b5.jpg)



图 5 激光雷达结构安装示意图


#### 1) 螺钉规格

a) GB/T70.1，M3*8，内六角圆柱头，强度等级不低于8.8级；

#### 2) 安装及定位方式

a) 支架与激光雷达定位如图所示；推荐采用雷达底部定位柱方式进行定位；

b) 底部支架建议在 4 个安装孔附近使用小凸台与激光雷达配合，凸台整体平面度要求 0.05 mm 以内；

c) 底面用 4 个 M3 螺钉安装，超出安装面 4～5mm，推荐锁紧扭矩 6.6

$$
\pm 0. 5 \mathrm{kgf} \cdot \mathrm{cm};
$$

d) 底面用 2 个 $\Phi2.5$ 定位销进行安装定位, 高度不能高于安装面 1.5 mm;

e) 激光雷达安装的时候，如果激光雷达上下面都有接触式的安装面，请确保安装面之间的间距大于激光雷达高度，避免挤压激光雷达；

f) 防护罩属于光学器件&塑胶材质，安装或使用过程避免其受力；

g) 由于激光雷达需要线束与外界进行通信，如果线束走线空间太小，弯折半径太小，会对线束寿命与信号质量有影响，对线束安装的要求如下：

i. 激光雷达安装走线时，请勿使激光雷达接线线缆太过紧绷，确保线缆具有一定的松弛度；

ii. 线束直径 $5 \pm 0.2 ~mm$ ，线束最小弯折半径为 5 倍线束直径。

3) 支架刚度和强度要求

固定支架需有较好的刚性用于安装固定激光雷达，并在各种工况下保持激光雷达处于一个稳定的状态，设计要求如下：

a) 推荐激光雷达固定支架保持一定的刚性，具体边界要求由用户感知侧需求评估决定；

b) 激光雷达支架在经历随机振动、机械冲击等工况下会承受较大的负载，应结合实际工况校核支架强度。机械冲击工况，支架最大应力应小于拉伸强度的 2/3。随机振动工况，支架 1sigma RMS 应力应小于拉伸强度的 1/5。

4) 支架散热要求

Airy Lite 在使用过程中会有一定程度的温升，且受周边热源、环境温度、太阳辐射等因素的影响，可能会加剧激光雷达的温升。RoboSense 可根据具体设计方案提供热仿真评估及优化建议。常规散热建议如下：

a) 激光雷达附近环境温度需控制在工作温度范围内 $(-20^{\circ}\mathrm{C} \sim +60^{\circ}\mathrm{C})$ ;

b) 支架材料建议采用导热系数大于 $50 \, W/m \cdot K$ 的铝合金等材料，尽量在支架上做一些散热鳍片，并合理的控制鳍片间距、高度和方向，增大散热面积，方向上与空气对流方向一致，可更有效散热。支架表面积不小于 $10000 \, mm^{2}$ ;

c) 激光雷达底座或顶部需确保不被非金属材质包覆，以免影响整机散热，造成激光雷达温升过高；

d) 激光雷达底座和下方金属支架之间，建议增加导热材料（导热系数3W/mK以上）以提升激光雷达向支架的热传导效率。

#### 5) 透气要求

Airy Lite 底座有透气孔、透气通道。支架、导热材料等不能封闭透气孔或透气通道。同时建议支架底部开孔透气（如图 6 所示）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/81a10bfd9b5e7ad85a1bceeacf13316e4787f42f1d987fb39d0083b777ff8621.jpg)



图 6 激光雷达底部透气孔及透气通道示意图


### 3.3 接口说明

Airy Lite 激光雷达自带一条甩出线，线束末端为连接器。

连接器型号为：连大 2HCB20010209，其引脚序号如图 7 所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/bb70b40333507290354473bd669412cc840212b7cac0f977dfdebe0184923f3d.jpg)



图 7 连接器接口引脚序号


具体引脚定义参见表 4。

表 4 连接器接口引脚定义

<table><tr><td>引脚编号</td><td>线规</td><td>定义</td><td>颜色</td><td>备注</td></tr><tr><td>1</td><td>AWG28</td><td>VIN</td><td>红色</td><td></td></tr><tr><td>2</td><td>AWG28</td><td>GND</td><td>黑色</td><td></td></tr><tr><td>3</td><td>/</td><td>NC</td><td>/</td><td></td></tr><tr><td>4</td><td>/</td><td>NC</td><td>/</td><td></td></tr><tr><td>5</td><td>AWG28</td><td>A485_A</td><td>绿色</td><td rowspan="2">波特率 4000000 双绞≥50 绞/m</td></tr><tr><td>6</td><td>AWG28</td><td>A485_B</td><td>青色</td></tr><tr><td>7</td><td>AWG28</td><td>PPS</td><td>黄色</td><td>电平:3.3V TTL</td></tr><tr><td>8</td><td>AWG28</td><td>GPS</td><td>棕色</td><td>电平:3.3V TTL, 波特率9600bps</td></tr><tr><td>9</td><td>AWG28</td><td>B485_B</td><td>紫色</td><td rowspan="2">波特率 4000000 双绞≥50 绞/m</td></tr><tr><td>10</td><td>AWG28</td><td>B485_A</td><td>蓝色</td></tr></table>

## 4 产品使用

### 4.1 产品坐标系

产品的坐标系及旋转方向如图 8 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/7b81568248af8f7b6803ae5d6ca023822eb1e3bbd8422c5f848798ce864c5e94.jpg)



图 8 激光雷达坐标及旋转方向示意图


提示说明

激光雷达的坐标原点定义在激光雷达底座中心处。

### 4.2 通信协议

Airy Lite 输出内容主要分为三大类，详情参见表 5。


表 5 产品协议一览表


<table><tr><td>(协议/包)名称</td><td>简写</td><td>功能</td><td>包大小</td><td>发送间隔</td></tr><tr><td>Main data Stream Output Protocol</td><td>MSOP</td><td>扫描数据输出</td><td>104 bytes</td><td>约 166.67 us</td></tr><tr><td>Device Information Output Protocol</td><td>DIFOP</td><td>产品信息输出</td><td>337 bytes</td><td>约 1 s</td></tr><tr><td>IMU Output Protocol.</td><td>IMU</td><td>惯量传感器信息</td><td>51 bytes</td><td>约 5ms</td></tr></table>

提示说明

1) 产品手册 4.2 节为对协议中的有效载荷部分进行描述和定义。

2) 主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射强度等信息封装成包输出。

3) 产品信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出。

4) 惯量传感器信息协议 IMU，输出雷达 6 轴加速度和角速度信息。

5) IMU 和 DIFOP 通过 A485 发出，MSOP 通过 A485 和 B485 共同发出。

6) GPS 接口正常使用时用于时间同步，在 OTA 固件时用于切换功能。

7) MSOP 发送间隔与 485 传输路数以及角度缺失时间相关，IMU 发送间隔和频率相关，200Hz 下默认是 5ms。

8) 当前手册未包含升级等诊断协议描述，如有需求请联系速腾技术支持人员获取。

#### 4.2.1 输出数据结构

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/b35607bd2fc8150a7dcf2e7ac4a9ee14ff88f27364bc32b967498ba4dae611b5.jpg)



图 9 激光雷达数据结构示意图


#### 4.2.2 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：产品输出，电脑解析。

##### 4.2.2.1 帧头

帧头 Packet Header 共 16 bytes，用于识别出此 Packet 的开始位置，数据结构详情参见表 6。


表 6 MSOP Header 数据表


<table><tr><td>信息</td><td>Offset</td><td>长度 (byte)</td><td>说明</td><td>总长度 (byte)</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>包起始标志 固定值 0x5A 0xFF 0x55 0xAA</td><td rowspan="4">16</td></tr><tr><td>预留</td><td>4</td><td>1</td><td></td></tr><tr><td>数据类型</td><td>5</td><td>1</td><td>值为 1,表示点云数据</td></tr><tr><td>timestamp</td><td>6</td><td>10</td><td>时间戳,前 6 byte 表示秒,后 4 byte 表示微秒</td></tr></table>

> **提示说明**：

定义的时间戳用来记录系统的时间，分辨率为 1 us。

##### 4.2.2.2 数据块区间

如表 7 所示，数据块区间 Data block 是 MSOP 包中传感器测量值部分，共 86 bytes。


表 7 Data Block 数据包定义


<table><tr><td>信息</td><td>Offset</td><td>长度 (byte)</td><td>说明</td><td>总长度 (byte)</td></tr><tr><td>Azimuth</td><td>0</td><td>2</td><td>极坐标系下,水平夹角,分辨率 0.01</td><td rowspan="10">86</td></tr><tr><td rowspan="2">Channel data 1</td><td>2</td><td>2</td><td>测距,取低 14bits,高 2bit 用于标记点云属性。[bit15:bit14] 0:正常点云;1:轻度脏污 2:重度脏污;3:遮挡</td></tr><tr><td>4</td><td>1</td><td>反射率</td></tr><tr><td>Channel data 2</td><td>5</td><td>3</td><td>同 data 1</td></tr><tr><td>Channel data 3</td><td>8</td><td>3</td><td>同 data 1</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>Channel data 23</td><td>68</td><td>3</td><td>同 data 1</td></tr><tr><td>Channel data 24</td><td>71</td><td>3</td><td>同 data 1</td></tr><tr><td>预留</td><td>74</td><td>10</td><td></td></tr><tr><td>包计数</td><td>84</td><td>2</td><td>包计数范围:0-0xFFFF</td></tr></table>

Data block 中 86 bytes 的空间包括：2 bytes 的 Azimuth，表示水平旋转角度信息，每个角度信息对应着 24 个 channel data；10 bytes 的预留位；2 bytes 的包计数信息。

##### 1）角度值定义

在每个 Block 中，Airy Lite 输出的 Azimuth 角度值是该 Block 中第一个通道激光测距时的角度值。角度值来源于角度编码器，角度编码器的零位即角度的零点，水平旋转角度值的分辨率为 $0.01^{\circ}$ 。

##### 2) 通道数据定义

通道数据 Channel data 是 3 bytes，高两字节用于表示距离信息，低一字节用于表示反射强度信息，如表 8 所示。


表 8 Channel Data 示意表


<table><tr><td colspan="2">通道数据(3 bytes)</td></tr><tr><td>2 bytes Distance</td><td>1 byte Reflectivity</td></tr><tr><td>测距,取低 14bits,高 2bit 用于标记点云属性。[bit15:bit14] 0:正常点云;1:轻度脏污 2:重度脏污;3:遮挡</td><td>反射强度信息</td></tr></table>

> **提示说明**：

Distance 是 2 bytes，分辨率为 0.5 cm。

#### 4.2.3 产品信息输出协议（DIFOP）

产品信息输出协议，Device Info Output Protocol，简称：DIFOP。

I/O 类型：产品输出，电脑解析

DIFOP 是为了将产品序列号（S/N）、固件版本、校准角度、运行状态等信息，定期发送给用户的“仅输出”协议，用户可以通过读取 DIFOP 解读当前使用产品的各种参数的具体信息。

一个完整的 DIFOP Packet 的基本数据格式结构为 DIFOP 帧头，数据区，帧尾。每个 Packet 共 337 bytes。数据包的基本结构如表 9 所示。


表 9 DIFOP Packet 的数据格式结构


<table><tr><td>信息</td><td>Offset</td><td>长度 (byte)</td><td>说明</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>包起始标志 固定值 0x5A 0xFF 0x55 0xAA</td></tr><tr><td>预留</td><td>4</td><td>1</td><td></td></tr><tr><td>数据类型</td><td>5</td><td>1</td><td>值为3,表示状态信息</td></tr><tr><td rowspan="2">timestamp</td><td>6</td><td>6</td><td>时间戳的秒部分</td></tr><tr><td>12</td><td>4</td><td>时间戳的微秒部分。u32类型单位:μs范围:0~999 999 μs (1 s)</td></tr><tr><td>预留</td><td>16</td><td>2</td><td></td></tr><tr><td>电机实时转速</td><td>18</td><td>2</td><td>见附录A.1</td></tr><tr><td>预留</td><td>20</td><td>8</td><td></td></tr><tr><td>主板PL固件版本</td><td>28</td><td>5</td><td>首字节为0,其他字节表示版本信息。见附录A.2</td></tr><tr><td>APP固件版本</td><td>33</td><td>5</td><td>首字节为0,其他字节表示版本信息。见附录A.3</td></tr><tr><td>电机固件版本</td><td>38</td><td>5</td><td>首字节为0,其他字节表示版本信息。见附录A.4</td></tr><tr><td>预留</td><td>43</td><td>14</td><td></td></tr><tr><td>产品序列号</td><td>57</td><td>6</td><td>见附录A.5</td></tr><tr><td>预留</td><td>63</td><td>18</td><td></td></tr><tr><td>GPS状态</td><td>81</td><td>1</td><td>bit0(PPS锁定标志):锁相=1,失锁=0bit1-bit2预留bit3(GPRMC输入状态):有输入=1,无输入=0bit4(PPS输入状态):有输入=1,无输入=0bit5-bit7预留</td></tr><tr><td>垂直角校准</td><td>82</td><td>48</td><td rowspan="2">见附录A.6</td></tr><tr><td>垂直角校准符号位</td><td>130</td><td>3</td></tr><tr><td>水平角校准</td><td>133</td><td>48</td><td rowspan="2">见附录A.7</td></tr><tr><td>水平角校准符号位</td><td>181</td><td>3</td></tr><tr><td>预留</td><td>184</td><td>101</td><td></td></tr><tr><td rowspan="7">IMU外参标定数据</td><td>285</td><td>4</td><td rowspan="7">见附录A.8</td></tr><tr><td>289</td><td>4</td></tr><tr><td>293</td><td>4</td></tr><tr><td>297</td><td>4</td></tr><tr><td>301</td><td>4</td></tr><tr><td>305</td><td>4</td></tr><tr><td>309</td><td>4</td></tr><tr><td>预留</td><td>313</td><td>20</td><td></td></tr><tr><td>包计数</td><td>333</td><td>2</td><td>包序号,u16格式,范围为0~0xFFFF</td></tr><tr><td>帧尾</td><td>335</td><td>2</td><td>CRC16</td></tr></table>

> **提示说明**：

每一项信息的寄存器的定义以及使用参见产品手册附录 A 中的详细描述, 对应关系见表 9

说明栏内容。

#### 4.2.4 雷达 IMU 数据流输出协议

I/O 类型：产品输出，电脑解析。

IMU 输出的为产品内部 IMU 的姿态信息，可用于客户产品外参调整。每个数据包共 51 bytes。数据包的基本结构如表 10 所示。


表 10 IMU 数据格式结构


<table><tr><td>信息</td><td>Offset</td><td>长度 (byte)</td><td>说明</td></tr><tr><td>IMU 帧头</td><td>0</td><td>4</td><td>0x5A 0xFF 0x55 0xAA</td></tr><tr><td>预留</td><td>4</td><td>1</td><td></td></tr><tr><td>数据类型</td><td>5</td><td>1</td><td>值为2,表示 IMU 数据</td></tr><tr><td rowspan="2">Timestamp</td><td>6</td><td>6</td><td>时间戳的秒部分</td></tr><tr><td>12</td><td>4</td><td>时间戳的微秒部分。u32 类型单位: μs范围: 0~999 999 μs (1 s)</td></tr><tr><td>AccelX</td><td>16</td><td>4</td><td>X 轴加速度值,浮点数,单位 m/s^2</td></tr><tr><td>AccelY</td><td>20</td><td>4</td><td>Y 轴加速度值,浮点数,单位 m/s^2</td></tr><tr><td>AccelZ</td><td>24</td><td>4</td><td>Z 轴加速度值,浮点数,单位 m/s^2</td></tr><tr><td>GyroX</td><td>28</td><td>4</td><td>X 轴角速度值,浮点数,单位 rad/s</td></tr><tr><td>GyroY</td><td>32</td><td>4</td><td>Y 轴角速度值,浮点数,单位 rad/s</td></tr><tr><td>GyroZ</td><td>36</td><td>4</td><td>Z 轴角速度值,浮点数,单位 rad/s</td></tr><tr><td>内部温度</td><td>40</td><td>4</td><td>IMU 内部温度,有符号,分辨率 0.01 度</td></tr><tr><td>ODR</td><td>44</td><td>1</td><td>数据输出频率0:25Hz1:50Hz2:100Hz3:200Hz</td></tr><tr><td>AccelFsr</td><td>45</td><td>1</td><td>加速度计量程0: +/- 2g1: +/- 4g2: +/- 8g3: +/- 16g</td></tr><tr><td>GyroFsr</td><td>46</td><td>1</td><td>陀螺仪量程0: +/- 250 dps1: +/- 500 dps2: +/- 1000 dps3: +/- 2000 dps</td></tr><tr><td>包计数</td><td>47</td><td>2</td><td>包序号 u16 0~0xFFFF</td></tr><tr><td>帧尾</td><td>49</td><td>2</td><td>CRC16</td></tr></table>

## 5 产品维护

### 5.1 运输与物流

> **重要**：

运输不当会导致产品损坏！

1) 应采用防震防潮包装材料包装产品，以避免运输途中损毁。建议使用原始包装；

2) 运输过程务必小心轻放，避免磕碰、摔落等危险行为；

3) 每次运输收到货物时，必须详细检查交付货物清单与是否有损坏（含产品与包装）；

4) 如若有运输损坏，请拒绝收货，并及时联系 RoboSense。

### 5.2 存储

> **重要**：

存储不当可能会导致产品损坏！

1) 请将产品存储于室内常温、干燥的环境中；

2) 请轻拿轻放，避免产品遭受磕碰、摔落等；

3) 产品应存放于安全环境中，避免腐蚀、机械冲击及暴露于超过防护等级的环境中；

4) 请定期检查所有组件和包装的状态，建议检查周期为 3 个月。

### 5.3 产品清洁

为了能够准确地感知周围环境，激光雷达需保持防护罩洁净。

#### 5.3.1 注意事项

请在清理激光雷达前仔细并完整的阅读本节的内容，否则不当的操作可能会损坏产品。

! 激光雷达在环境比较恶劣的情况下使用时，需及时清理表面的脏污保持激光

雷达清洁，否则会影响激光雷达的正常使用。

#### 5.3.2 需要的材料

1) 洁净的无尘布;

2）温度适中的中性溶液（如肥皂水、蒸馏水、99%浓度乙醇等）。

#### 5.3.3 清洁方法

1) 如果激光雷达的表面只是粘附了一些灰尘/粉尘:

a) 首先用洁净的无尘布，蘸取少量的中性溶液；

b) 其次轻轻地对激光雷达表面拭擦清洁;

c) 最后用一块干燥洁净的无尘布将其擦干。

2) 如果激光雷达表面沾上了泥浆等块状异物:

a) 首先应使用洁净水喷洒在激光雷达脏污部位表面让泥浆等异物脱离（注意：不能直接用无尘布将泥浆擦掉，这样做可能会划伤表面特别是防护罩表面）；

b) 其次用温的肥皂水喷洒在脏污部位，因肥皂水的润滑作用可加速异物的脱离。再次用纤维布轻轻试擦激光雷达表面，但注意不要擦伤表面；

c) 最后用洁净的水清洗激光雷达表面肥皂的残留（如果表面仍有残留，可用 99% 乙醇对其再次清洁），同时用一块干燥的无尘布擦干即可。

## 6 故障诊断

本章列举了部分在使用产品的过程中常见的问题以及对应的问题排查方法，详情参见表 11。


表 11 常见故障排查方法表


<table><tr><td>故障现象</td><td>解决方法</td></tr><tr><td>产品电机不旋转</td><td>检查接线是否松动及线束破损。</td></tr><tr><td>产品在启动时不断重启</td><td>检查输入电源连接和极性是否正常;检查输入电源的电压和电流是否满足要求;检查产品安装平面是否水平或激光雷达底部固定螺丝是否拧的太紧。</td></tr><tr><td>产品内部旋转,但是没有数据</td><td>检查激光是否正常发射;检查串口连接是否正常;确认串口号配置是否正确;使用另外的软件(例如XCOM)检查数据是否有被接收;检查电源供电正常;尝试重启产品。</td></tr><tr><td>产品存在频发的数据丢失</td><td>确认是否安装高速串口驱动;确认电脑的性能和接口性能是否满足要求;直连电脑确认是否存在丢包现象。</td></tr></table>

> **提示说明**：

如若以上排查均未能解决问题，请联系 RoboSense。

## 7 售后

如故障诊断章节 6 内容未能解决问题，请及时联系 RoboSense。

官网：https://www.robosense.cn/contact

邮箱：support@robosense.cn

电话：0755-86325830 / 15338772453

> **提示说明**：

1) 请在收到 RoboSense 售后服务回信确认后，再寄回产品；

2) 产品只能使用原包装或等效的软垫防潮包装寄回

## 附录 A DIFOP 数据定义

本附录内容补充章节 4.2.3 的 DIFOP 协议里各个信息定义的说明，便于用户对产品的使用和开发。涉及到计算部分，均采用大端模式，Value 代表对应 offset 字节换算后得出的十进制数值。

### A.1 电机实时转速


表 12 电机实时转速


<table><tr><td colspan="3">电机实时转速(共2 bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td></tr><tr><td>功能</td><td colspan="2">REALTIME_ROTATION_SPEED</td></tr></table>

i 寄存器说明

1) 该寄存器用于读取电机的实时转速值，单位为 0.1RPM;

2) 例如读取 byte 1 = 0x17, byte 2 = 0x70, Value = 6000。则实时转速为 6000 × 0.1 RPM = 600 RPM

### A.2 主板固件版本


表 13 主板固件版本


<table><tr><td colspan="6">主板固件版本(共5 bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>功能</td><td colspan="5">TOP_FRM</td></tr></table>

i 寄存器说明

1) 该寄存器用于读取主板固件版本号，首字节为 0;

2) 如 byte 1=0x00, byte 2=0x10, byte 3=0x04, byte 4=0x0c, byte 5=0x00, 则固件版本号为：10 04 0c 00。

### A.3 雷达 APP 固件版本


表 14 APP 固件版本


<table><tr><td colspan="6">APP固件版本(共5bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>功能</td><td colspan="5">SOF_FRM</td></tr></table>

**寄存器说明：**

1) 该寄存器用于读取 APP 固件版本号，首字节为 0;

2) 如 byte 1=0x00, byte 2=0x24, byte 3=0x12, byte 4=0x13, byte 5=0x12, 则固件版本号为：24 12 13 12。

### A.4 电机固件版本


表 15 电机固件版本


<table><tr><td colspan="6">电机固件版本(共5 bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>功能</td><td colspan="5">MOT_FRM</td></tr></table>

**寄存器说明：**

1) 该寄存器用于读取电机固件版本号，首字节为 0;

2) 如 byte 1=0x00, byte 2=0x24, byte 3=0x12, byte 4=0x12, byte 5=0x25, 则固件版本号为：24 12 12 25。

### A.5 序列号


表 16 序列号寄存器


<table><tr><td colspan="7">序列号(共6 bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td></tr><tr><td>功能</td><td colspan="6">SN</td></tr></table>

**寄存器说明：**

1) 该寄存器用于设备序列号;

2) 共 6 bytes，以 16 进制表示产品序列号。

### A.6 垂直角校准与垂直角校准符号位


表 17 垂直角校准寄存器


<table><tr><td colspan="9">垂直角校准寄存器(共48bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td></tr><tr><td>功能</td><td colspan="2">1通道垂直角度</td><td colspan="2">2通道垂直角度</td><td colspan="2">3通道垂直角度</td><td colspan="2">4通道垂直角度</td></tr><tr><td>序号</td><td colspan="8">...</td></tr><tr><td>功能</td><td colspan="8">...</td></tr><tr><td>序号</td><td>byte 41</td><td>byte 42</td><td>byte 43</td><td>byte 44</td><td>byte 45</td><td>byte 46</td><td>byte 47</td><td>byte 48</td></tr><tr><td>功能</td><td colspan="2">21通道垂直角度</td><td colspan="2">22通道垂直角度</td><td colspan="2">23通道垂直角度</td><td colspan="2">24通道垂直角度</td></tr></table>


表 18 垂直角校准符号位寄存器


<table><tr><td colspan="4">垂直角校准符号位寄存器(共3bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td></tr><tr><td>功能</td><td colspan="3">24通道垂直角度对应符号位</td></tr></table>

i 寄存器说明

1) 每个通道的垂直校准角度，需结合垂直角校准与垂直角校准符号位共同计算。

2) 如表 17 所示，各通道垂直角度值用 2 bytes 表示，角度分辨率为 $0.01^{\circ}$ ;

3) 如表 18 所示，24 通道共使用 3bytes，24bits 来表示各通道符号位。每个 bit 用于表示对应通道垂直校准角度的符号（0 为正，1 为负），byte1 的 bit1 对应 1 通道，byte1 的 bit2 对应 2 通道，以此类推

4) 例如表 17 中 1 通道寄存器的值为 byte 1=0x01, byte 2=0x71 转换为十进制得到 369，乘以角度分辨率后得到 $3.69^{\circ}$ ; 同时在表 18 中 1 通道对应的符号位为 byte1 的 bit1，值为 0 表示正；则 1 通道的垂直角度值为 $3.69^{\circ}$ 。

### A.7 水平角校准与水平角校准符号位


表 19 水平角校准寄存器


<table><tr><td colspan="9">水平角校准寄存器(共48bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td></tr><tr><td>功能</td><td colspan="2">1通道水平角度</td><td colspan="2">2通道水平角度</td><td colspan="2">3通道水平角度</td><td colspan="2">4通道水平角度</td></tr><tr><td>序号</td><td colspan="8">...</td></tr><tr><td>功能</td><td colspan="8">...</td></tr><tr><td>序号</td><td>byte 41</td><td>byte 42</td><td>byte 43</td><td>byte 44</td><td>byte 45</td><td>byte 46</td><td>byte 47</td><td>byte 48</td></tr><tr><td>功能</td><td colspan="2">21通道水平角度</td><td colspan="2">22通道水平角度</td><td colspan="2">23通道水平角度</td><td colspan="2">24通道水平角度</td></tr></table>


表 20 水平角校准符号位寄存器


<table><tr><td colspan="4">水平角校准符号位寄存器(共3bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td></tr><tr><td>功能</td><td colspan="3">24通道水平角度对应符号位</td></tr></table>

i 寄存器说明

1) 水平角校准计算方式与垂直角校准计算方式相同，详见附录 A.6。

### A.8 雷达 IMU 标定数据


表 21 IMU 数据


<table><tr><td colspan="9">IMU 标定数据(共 28 bytes)</td></tr><tr><td>序号</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td></tr><tr><td>功能</td><td colspan="4">q_x</td><td colspan="4">q_y</td></tr><tr><td>序号</td><td>byte 9</td><td>byte 10</td><td>byte11</td><td>byte 12</td><td>byte 13</td><td>byte 14</td><td>byte 15</td><td>byte 16</td></tr><tr><td>功能</td><td colspan="4">q_z</td><td colspan="4">q_w</td></tr><tr><td>序号</td><td>byte 17</td><td>byte 18</td><td>byte19</td><td>byte 20</td><td>byte 21</td><td>byte 22</td><td>byte 23</td><td>byte 24</td></tr><tr><td>功能</td><td colspan="4">x</td><td colspan="4">y</td></tr><tr><td>序号</td><td>byte 25</td><td>byte 26</td><td>byte27</td><td>byte 28</td><td></td><td></td><td></td><td></td></tr><tr><td>功能</td><td colspan="4">z</td><td colspan="4"></td></tr></table>

i 寄存器说明

1) 该寄存器用于读取 IMU 相对于激光雷达坐标系的标定数据;

2) 该标定数据包含姿态估计和位置偏移, 数据类型为 32 位 float(符合 IEEE 754 标准);

3) 例如当前 x（byte 17~byte20）的字节为 3b 8b 43 96，其计算方式如下：

a) 首先将 4 个字节组合为 32 为二进制数，即 00111011 10001011 01000011 10010110;

b) 分出符号位，指数域和尾数域。其中符号位是 31 位，即 0，指数域是 23 位 ~30 位，即 01110111，尾数域是 0~22 位，即 00010110100001110010110;

c) 计算各个域的值，根据 IEEE 754，其中符号域是 0，代表正数。指数域是 01110111，转换为十进制为 119，实际指数为 119-127=-8。尾数域是 00010110100001110010110，该二进制代表的是小数位，因此先将其转化为十进制小数，即约为 0.086，实际尾数计算 =1+0.086=1.086;

d) 计算浮点数，利用公式:

$$
\begin{array}{l} \text {Float32 = (-1) ^ {\text {符号域}} *尾数域* 2 ^ {\text {指数域}} = (-1) ^ {0} *1.086* 2 ^ {-8} =} \\ 0. 0 0 4 2 4 \end{array}
$$

## 附录 B 结构图纸

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/acdc8ce2-4b9f-4a84-9ff8-d25746acdaf7/e427a0197336dc50f93f5936b6a6618ff9cccce6450ee7e2074e74f4667f61a1.jpg)


#### 技术要求：

1、未注圆角R0.2mm,未注倒角C0.2mm;

2、未注尺寸参照3D,未注线性及角度尺寸公差按GB/T1804-C级,未注形位公差按GB/T1184-L级;

3、产品有良好的外观,不得有变形、缺胶等对产品性能产生不良影响的缺陷；

4、防护罩属光学器件，严禁与其他零件有任何摩擦、碰撞；

5、a1~a4推荐使用强度等级不低于8.8级的M3螺钉，拧紧扭矩：0.5~0.7N·m；

6、底座对手件安装面平面度：≤0.05mm；

7、底座对手件导热系数：≥96W/m·K，散热表面积：≥20000mm²；

8、线束拉拔力：≥6Kgf；使用时，避免雷达线束太过紧绷，确保线缆具有一定的松弛度，折弯半径不小于25mm；

9、产品必须符合欧盟RoHS指令、REACH法规、POPS法规、美国加州65提案、

美国TSCA法案、新国标VOCs标准等法律法规及其修订指令的最新要求。

## 附录 C 各通道发射延时表


表 22 各通道发射延时表


<table><tr><td>通道序号</td><td>发射延时(μs)</td><td>通道序号</td><td>发射延时(μs)</td></tr><tr><td>00-05</td><td>0</td><td>12-17</td><td>64</td></tr><tr><td>06-11</td><td>21</td><td>18-23</td><td>107</td></tr></table>

![](assets/em4/end.jpg){: .manual-img--xl }
