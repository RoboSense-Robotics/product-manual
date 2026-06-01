# Helios 32 产品手册

**手册版本 V1.1**

---

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/8d77b40a32abd114794bd6ff57b0f28936daeecd78f520434ace193d2826c04b.jpg)


## 变更说明

| 版本 | 修订日期 | 说明 |
| --- | --- | --- |
| 1.0 | 2023/8/19 | 初版发布 |
| 1.1 | 2023/11/6 | 1. 增加雷达重量公差范围2. 更新角度脉冲参数描述 |

## 阅读提示

## 产品说明

本产品手册适用于 Helios 32 中所有规格型号。

## 符号说明

- **警告**：使用过程应严格遵守，否则可能会导致轻微伤害或者财产损失等潜在危险状况
- **重要**：使用过程应遵守，否则可能会导致产品受损等潜在有害状况
- **提示**：使用过程应足够重视，实现高效、顺利发挥产品的最大价值

## 资源下载

最新产品手册、RSview 等资源请点击以下链接进行下载:

https://www.robosense.cn/resources 

## 更多信息

- **制造商信息**：深圳市速腾聚创（RoboSense）科技有限公司
- **官网**：https://www.robosense.cn/
- **技术支持**：support@robosense.cn
- **地址**：中国·广东省深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区 2 区 9 栋
- **座机**：0755-86325830
- **电话**：15338772453（市场合作）
- **邮箱**：service@robosense.cn
- **工作时间**：周一至周五，09:00 - 18:00（GMT/UTC + 8）

## 1 安全提示

### 1.1 法律声明

除非我们另行声明，RoboSense 的所有产品、技术、软件、程序、数据及其他信息（包括文字、图标、照片、音频、视频、图表、色彩组合、版面设计等）的所有权利（报告版权、商标权、专利权、商业秘密及其他相关权利）均归 RoboSense 及其授权方所有。

未经 RoboSense 书面同意，任何人不得以任何方式非法使用本手册中所承载在的任何内容。

“RoboSense”、“速腾聚创”等文字及/或标识，以及其他标识、产品和服务名称等均为 RoboSense 所有，如有宣传、展示等任何使用需要，您必须取得 RoboSense 的事先书面授权。

### 1.2 使用规范

! 请按以下要求，规范使用本产品：

1) 请严格遵守国家激光安全相关法律法规；

2) 请在使用产品前，详细阅读本产品手册；

3) 请在相关针对的领域范围内使用本产品;

4) 请避免在爆炸性、高腐蚀性、超越产品 IP 防护等级的环境中使用本产品。

### 1.3 违规操作

请按规定使用本产品，否则可能会造成产品损坏、财产损失及人员受伤。对违反规定的操作行为，需用户自行承担风险。

1) 请勿私自拆解、改装本产品（包含配套配件）；

2) 禁止使用非规定供电电源及配套配件;

3) 请避免跌落、碰撞、焚烧等非正常操作；

4) 如发现产品外观受损（弧形防护罩），请立即停止使用；

5) 如发现产品工作异常等情况，请立即停止使用，并及时联系 RoboSense。

### 1.4 操作人员的要求

本产品的使用，对操作人员的基础专业知识及其他相关资质有一定要求。对无基础知识及未经培训上岗人员的不当操作行为，给产品及人员财产造成损害、伤害、损失等后果，RoboSense 不承担相关责任。

1) 使用产品前，详细阅读本产品手册；

2) 禁止违规操作;

3) 上岗前需经过培训，且有相关工种施工资格；

4) 有一定的计算机数据连接、电气等基础知识。

### 1.5 工作安全和特殊危险

使用本产品前，为避免对用户或他人产生意外，同时损坏产品及违反保修条款，请务必仔细阅读并遵循本说明书中的操作及规范。

1) 激光安全：本产品激光安全等级符合 IEC 60825-1:2014 标准：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/b6cc3b8eb4a14ef07e02ef3b5f7e05c5a03f90f839594512874b642cb8765706.jpg)


2) 高温注意：注意表面过热标识，谨防发生意外。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/a79945dab47bb354b215c1d0fe7909e8342862cb40c264c9177d2b99b95eb3aa.jpg)


3) 保留说明：请保留所有安全和操作说明，以备将来参考。

4) 注意警告：请遵守产品和操作说明中的所有警告，以免发生意外。

5) 产品维修：请勿在缺少官方指导的情况下尝试打开产品进行维修。如需维修，请及时联系 RoboSense。

## 2 产品描述

### 2.1 产品概要

Helios 32 是 RoboSense 全新的采用模块化架构设计的 32 线束高精度 3D 激光雷达，主要应用于机器人环境感知、无人驾驶汽车环境感知、V2X、智慧城市等领域。

Helios 32 一共有 3 个规格，主要区别为垂直 FOV 的不同，分别为： $70^{\circ}$ FOV ( $-55^{\circ} \sim +15^{\circ}$ )、 $31^{\circ}$ FOV ( $-16^{\circ} \sim +15^{\circ}$ )、 $26^{\circ}$ FOV ( $-16^{\circ} \sim +10^{\circ}$ )。

同时，Helios 32 支持抗多雷达对射与环境光干扰，可在-40°C超低温运行，满足商用车振动要求，可在复杂严苛高要求的环境下使用。

### 2.2 产品结构

Helios 32 结构图如图 1 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/22880cac5768071e08ffe7642eda1ae42ff1009dbd73be1eca01dce5d9426c01.jpg)


图 1 产品结构说明图


主要包括以下结构:

1. **防护罩**：

激光雷达发射激光束和接收到的激光回波都需透过弧形特制防护罩, 因此在激光发散的 FOV 范围内, 严禁遮挡。

2. **航空插头**：

激光雷达本体通过航插头与接口盒连接，实现供电和数据传输的功能。

3. **定位孔**：

用于支撑、固定激光雷达与支架之间的位置和方向，可提高安装效率与精度。

4. **M3 螺钉安装孔**：

用于激光雷达与安装支架间的固定，通过 M3 螺丝进行锁紧。

### 2.3 FOV 分布

Helios 32 的 FOV 分布如表 1 所示。


表 1 Helios 32 FOV


| 规格 | 水平方向 | 垂直方向 |
| --- | --- | --- |
| 70° FOV | 0° ~ 360° | -55° ~ +15° |
| 31° FOV | 0° ~ 360° | -16° ~ +15° |
| 26° FOV | 0° ~ 360° | -16° ~ +10° |

将 32 个激光器定义为 32 路通道，与真实的垂直角度对应关系如图 2、图 3、图 4 (b) 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/784483b406e88314a5d861c42a4aa81e240d456f9d9011dc05097b4421a41ad1.jpg)


(a)FOV 区域分布


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/77ed1d28bdc02fdf71d773205c1e58556a181721fcf267cdfd8673bf95f323ae.jpg)


(b)竖直方向角度分布


图 2 70° FOV 示意图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/5216e50ac63448ee727bf822c51c1a732032a8d701dc944e3fbaab3c435c8448.jpg)


(a)FOV 区域分布


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/f68b0054e6f36b912cc3db55b2bddf5907178a02d4d31de06938b0a8e5d6f734.jpg)


(b)竖直方向角度分布


图 3 31° FOV 示意图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/65a9a328cc6e799d96be483574aee11acd8621c1577cf677ec683b4d71582648.jpg)


(a)FOV 区域分布


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/c4a57baf608ccf1806e44c9c8f2c7ddffb8c4bed1a30fb12130f63a61e663880.jpg)


(b)竖直方向角度分布


图 4 26° FOV 示意图


### 2.4 规格参数


表 2 Helios 32 规格参数


| 规格参数 | 70° FOV | 31° FOV | 26° FOV |
| --- | --- | --- | --- |
| 线数 | 32 |  |  |
| 激光波长 | 905 nm |  |  |
| 激光安全等级 | Class 1 人眼安全 |  |  |
| 测距能力 | 0.2 m至150 m(110 m@10% NIST,详细参见产品手册附录E) |  |  |
| 盲区 | 0.2 m |  |  |
| 精度1(典型值) | 1 cm(1σ)/3 cm(3σ) |  |  |
| 水平视场角 | 360° |  |  |
| 水平角分辨率 | 0.1°/0.2°/0.4° |  |  |
| 帧率 | 5 Hz/10 Hz/20 Hz |  |  |
| 转速 | 300/600/1200 rpm(5/10/20 Hz) |  |  |
| 激光发射角(全角) | 水平5.9 mrad,垂直6.9 mrad | 水平3 mrad,垂直5 mrad |  |
| 垂直视场角 | 70°(-55°~+15°) | 31°(-16°~+15°) | 26°(-16°~+10°) |
| 垂直角分辨率 | 高达1.33°(详见表34) | 均匀1°(详见表35) | 高达0.5°(详见表36) |
| 出点数 | 576,000 pts/s(单回波模式),1,152,000 pts/s(双回波模式) |  |  |
| 以太网输出 | 100 Base-T1 |  |  |
| 输出数据协议 | UDP packets over Ethernet |  |  |
| 激光雷达数据包内容 | 三维空间坐标、反射强度、时间戳等 |  |  |
| 工作电压 | 9 V~32 V | 尺寸 | 直径100 mm×高100 mm |
| 产品功率2 | 12 W(典型值) | 工作温度3 | -40°C~+60°C |
| 重量 | 1000g±50g(激光雷达本体) | 存储温度 | -40°C~+85°C |
| 时间同步 | GPS,PTP & gPTP | 防护等级 | IP67/IP6K9K |
| 产品型号 | H32F70 | H32F31 | H32F26 |

### 2.5 产品原理

#### 2.5.1 坐标映射

由于激光雷达封装的数据包仅为水平旋转角度和距离参量, 为了呈现三维点云图的效果, 将极坐标下的角度和距离信息转化为了笛卡尔坐标系下的 x, y, z 坐标, 它们的转换关系如下式所示:

$$
\left\{ \begin{array}{l} x = r \cos (\omega) \sin (\alpha) + \mathrm{R} \cos (\alpha); \\ y = r \cos (\omega) \cos (\alpha) + \mathrm{R} \sin (\alpha); \\ z = r \sin (\omega); \end{array} \right.
$$

其中 r 为实测距离， $\omega$ 为激光的垂直角度， $\alpha$ 为激光的水平旋转角度，R 为光心到原点的平面半径，x, y, z 为极坐标投影到笛卡尔 X, Y, Z 轴上的坐标。

#### 2.5.2 反射强度解读

Helios 32 激光雷达提供了反射强度信息来表征被测物体的反射率。在 Helios 32 数据中，标定后的反射强度范围区间为 1～255。

#### 2.5.3 回波模式

##### 2.5.3.1 回波模式原理

Helios 32 支持多种回波模式, 包括最强回波(Strongest Return)、最后回波(Last Return)、最近回波(First Return)及双回波(Dual Return)模式。在双回波模式下, 目标物的详细信息得以展现, 并且数据量是单回波的两倍。

Helios 32 能够分析接收到的多个返回值，并根据用户选择分别输出最强、最后、最近一个回波值，或者输出双回波值。若设置为最强回波模式，则仅输出最强的反射回波值；若设置为最后回波模式，则仅输出时域上检测到的最后回波。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/88fc000e7018d1c058a1292a4a6431485c47957ebc5dbd25d422a7fe00fbf050.jpg)


图 5 双回波检测


> **提示说明**：

在双回波模式下，当激光打到多个目标物，且目标物之间距离大于1米时，激光雷达可检测到两个回波，如图5所示。

##### 2.5.3.2 回波模式标志

Helios 32 出厂默认为最强回波（Strongest Return）模式，如若用户需更改设置，请参照章节 A.2 中产品参数设定进行配置。在 DIFOP 中第 300 个 byte 是回波模式的标志位，详情参见表 3。


表 3 回波模式和标志位对照表


| DIFOP Offset | 标志位 | 回波模式 |
| --- | --- | --- |
| 300 | 00 | 双回波 |
| 300 | 04 | 最强回波 |
| 300 | 05 | 最后回波 |
| 300 | 06 | 最近回波 |

#### 2.5.4 相位锁定

Helios 32 相位锁定功能可用于设定 Helios 32 在整秒时刻，传感器旋转到特定的角度发射激光。

图 6 为 Helios 32 设置不同相位的示意图，红色箭头表明，在整秒时刻，传感器分别旋转到 $0^{\circ}$ 、 $135^{\circ}$ 、 $270^{\circ}$ 发射激光，坐标系详情参见图 15。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/7a2758d57ae8a126557ee40f52bba6a1bac1a60e08eb576e4b30fed4919c5dfc.jpg)


图 6 Helios 32 不同相位设定示意图


Web 端 Setting >Phase Lock Setting 中提供了一个“Phase Lock”的参数设定，可用于设定锁定的相位角度，输入范围为 0～359 的整数，详情参见产品手册章节 4.2。

#### 2.5.5 时间同步方式

Helios 32 支持 GPS+PPS、PTP（IEEE 1588V2 协议）、gPTP（IEEE802.1AS 协议）三种同步方式，用户可在 Web 端进行设置，详情参见产品手册章节 4.2。

##### 2.5.5.1 GPS 时间同步原理

GPS 模块连续向产品发送 GPRMC 数据和 PPS 同步脉冲信号，PPS 同步脉冲长度为 20～200 ms，GPRMC 数据必须在同步脉冲 500 ms 内完成，时序图如图 7 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/a786f2de450a76d669a79325bb70df80353a671b8a9ad6531331e078a70f723f.jpg)


图 7 GPS 时间同步时序图


> **提示说明**：

为确保时间同步的准确性，建议将 PPS 的脉宽设置在 20～200 ms 之间。GPRMC 的完

成时间建议为 PPS 上升沿后 500 ms 内。

##### 2.5.5.2 GPS 时间同步使用

Helios 32 的 GPS_REC 接口电平协议为 RS232 电平标准，详情参见表 4。


表 4 产品授时引脚定义


| 通讯方式 | 接收引脚定义 |  |
| 通讯方式 | GPS REC | GPS PULSE |
| --- | --- | --- |
| RS232 | 接 GPS 模块输出的 RS232 电平标准的串口数据 | 接 GPS 模块输出的正同步脉冲信号,电平要求 3.0~15.0 V |

外接的 GPS 模块需要设置输出串口的波特率为 9600 bps，数据位 8 bits，无校验位，停止位 1 bit。Helios 32 只读取 GPS 模块发出的 GPRMC 格式的数据，其标准格式如下：

$$
\text {   GPRMC,   } <   1 >, <   2 >, <   3 >, <   4 >, <   5 >, <   6 >, <   7 >, <   8 >, <   9 >, <   1 0 >, <   1 1 >, <   1 2 > * h h
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

*后 hh 为$到*所有字符的异或和。

> **提示说明**：

1) Helios 32 电源盒上面的 GPS_REC 接口规格为 SH1.0 - 6P 母座, 引脚定义如表 8 所示;

2) 1 PPS 脉冲的发送时间间隔需控制在 $1 \, s \pm 200 \, us$ 内；

3) GPRMC 消息中状态位必须在 A 有效的情况才允许进行时间同步授时；

4) 目前市场的 GPS 模块发出的 GPRMC 消息长度存在不一致情况，本产品可兼容市场上大部分 GPS 模块发出来的 GPRMC 消息格式，如果在使用过程中发现不兼容的情况，请联系 RoboSense。

##### 2.5.5.3 PTP 同步原理

PTP（Precision Time Protocol，IEEE 1588V2 协议）是一种时间同步的协议，其本身只是用于设备之间的高精度时间同步，但也可被借用于设备之间的频率同步。相比现有的各种时间同步机制，PTP 具备以下优势：

1) 相比 NTP（Network Time Protocol，网络时间协议），PTP 能够满足更高精度的时间同步要求，NTP 一般只能达到亚秒级的时间同步精度，而 PTP 则可达到亚微秒级。

2) 相比 GPS（Global Positioning System，全球定位系统），PTP 具备更低的建设和维护成本。

##### 2.5.5.4 gPTP 同步原理

gPTP（general Precise Time Protocol，IEEE802.1AS 协议）是 PTP 在时效性网络（Time-Sensitive Networking）的派生协议。同步机制采用和 PTP 协议一致的 P2P 端延迟机制（Peer Delay Mechanism），同时采用以太网 L2 层通信。与 PTP 不同，gPTP 要求使用硬件方式打时间戳，即硬件时间戳，所以对于交换机和 Master 时钟要求较为严苛，需满足 IEEE802.1AS 协议。

##### 2.5.5.5 PTP / gPTP 接线方式

使用 PTP / gPTP 同步方式，需要做以下准备，连接方式详情参见产品手册章节 3.4:

1) 在 Web 端中选择 PTP / gPTP 模式，详情参见产品手册章节 4.2;

2) PTP Master / gPTP Master 授时主机（即插即用，无需额外配置）；

3) 以太网交换机;

4) 支持 PTP / gPTP 协议的待授时设备。

> **提示说明**：

1) Master 授时设备属于第三方设备，RoboSense 出货时不包含此配件，需用户自行采购；

2) RoboSense 产品作为 Slave 设备只获取 Master 发出的时间, 不对 Master 时钟源的准确度判断, 若解析激光雷达点云时间出现突变, 请检查 Master 提供的时间是否准确;

3) 激光雷达同步之后, Master 断开连接, 点云数据包中的时间则会按照激光雷达内部时钟进行叠加, 激光雷达断电重启后才会被重置。

## 3 产品安装

### 3.1 配件说明

Helios 32 标配出货配件清单如表 5 所示，清单仅供参考。


表 5 出厂标准配件清单


| 序号 | 配件名称 | 规格 | 数量 |
| --- | --- | --- | --- |
| 1 | 激光雷达LiDAR | Helios 32 | 1 |
| 2 | 接口盒Interface Box | 线长3m | 1 |
| 3 | 电源适配器Power Adapter | DC12 V × 3.34 A / 40 W | 1 |
| 4 | 电源线Power Cable | 1.2 m | 1 |
| 5 | 网线Ethernet Cable | 1.5 m | 1 |
| 6 | 螺丝包Screw Pack | M3 × 8 | 4 |
| 6 | 螺丝包Screw Pack | M3 × 12 | 4 |
| 7 | 延长线(选配)Extended Cable (optional) | 6 m | 1 |
| 8 | 产品包装清单和出货检验报告Product Packing List and Shipment Inspection Report | / | 1 |

> **提示说明**：

如特殊要求请以商务协议为准。

### 3.2 机械安装

激光雷达的结构安装图如图 8 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/35e963a666f62182ab4a8d32a14ebe6f67ba7616731de54f9780c8036bc56d0f.jpg)


图 8 激光雷达结构安装示意图


1. **螺丝规格**：

a) GB/T70.1, M3 × 12, 内六角杯头, 强度等级 10.9, 带耐落;

b) GB/T70.1，M3×8，内六角杯头，强度等级10.9，带耐落。

2. **安装要求**：

a) 安装面平面度应优于 0.2 mm;

b) 底面用 3 个 M3 螺钉安装，出安装面 4～5 mm，推荐锁紧扭矩 $13 \pm 1$ kgf.cm;

c) 底面用 2 个 $\Phi 4$ 定位销进行安装定位, 不能高于 $4 \mathrm{~mm}$ ;

d) 激光雷达安装倾斜角度不超过 $15^{\circ}$ ;

e) 激光雷达安装的时候，如果激光雷达上下面都有接触式的安装面，请确保安装面之间的间距大于激光雷达高度，避免挤压激光雷达；

f) 激光雷达安装走线时, 请勿使激光雷达接线线缆太过紧绷(预留 2 cm 以上安装裕量), 确保线缆具有一定的松弛度。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/47a100066c38e0c56c230cd04513b75e185ac4e23f6b463fa969cd6314ccd673.jpg)


图 9 激光雷达底部定位销及螺丝示意图


3. **支架刚度和强度要求**：

a) 固定支架需有较好的刚性用于安装固定激光雷达，并在各种工况下保持激光雷达处于一个稳定的状态，因此要求激光雷达及其固定支架整体的一阶模态频率至少大于 50 Hz;

b) 激光雷达在使用过程中会经受各种随机振动、机械冲击等工况。在这些工况下，支架需承受较大的负载，因此支架还需有足够的强度。支架材质建议使用铝合金（厚度 4 mm 以上）或镀锌钢板（厚度 2 mm 以上），同时在各个方向尽可能增加加强筋以提高其刚度和强度，尽量避免设计出现尖角或小于 0.3 mm 的圆角、缺口等易产生应力集中的结构，支架强度需要经过仿真校核。

4. **散热要求**：

a) 支架材料建议采用导热系数大于 $50 \, W/m \cdot K$ 的铝合金或者镀锌钢板等材料，尽量在支架上做一些散热鳍片，并合理的控制鳍片间距、高度和方向，尽量增大散热面积，方向上与空气对流方向一致，可以更有效散热；

b) 激光雷达底座或顶盖部位，确保不被非金属材质包覆，以免影响整机散热，造成激光雷达温升过高。

### 3.3 接口说明

#### 3.3.1 航插接口及定义

Helios 32 的产品底部出线航插头，如图 10 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/f3984063594af99170de79146e73fd6849ee1b28f3c1173071bd6e531ff0fe0f.jpg)


图 10 航插接口引脚序号


航插接口上引脚定义详情参见表6。


表 6 航插接口引脚定义


| 引脚编号 | 颜色 | 信号 | 工作电压范围 | 工作电流 | 其它 |
| --- | --- | --- | --- | --- | --- |
| 1 | 红色 | PWR | 9~32 V | 1.2 A | / |
| 2 | 黑色 | PWR | 9~32 V | 1.2 A | / |
| 3 | 灰色 | GND | / | 1.2 A | / |
| 4 | 蓝色 | GND | / | 1.2 A | / |
| 5 | 棕色 | GPS_PPS | 3~15 V | / | / |
| 6 | 白色 | GPS_GPRMC | -15 V ~ +15 V | / | / |
| 7 | 紫色 | SYNC_OUT1 | 0~3.3 V | / | / |
| 8 | 绿色 | SYNC_OUT2 | 0~3.3 V | / | / |
| 9 | 橙色 | TRD_N | 0~3.3 V | / | Twisted Pair |
| 10 | 黄色 | TRD_P | 0~3.3 V | / | Twisted Pair |

#### 3.3.2 接口盒接口

Helios 32 附件接口盒具有工作状态指示灯及各类的接口，如图 11 所示，可接驳电源输入、RJ45 网口及 GPS 输入线（航插版接口盒线长为 3 m，有其它线长需求请联系 Robosense）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/f445e9efeb7fab219bb28d3cbb3cd6f546fd4446c595d7708ca7d3f06b623d21.jpg)


图 11 接口盒示意图


其各接口定义及规格详情参见表 7。


表 7 接口盒接口规格


| 序号 | 接口名称 | 规格 |
| --- | --- | --- |
| 1 | 同步接口 | SH1.0 - 6P 母座 |
| 2 | 电源接口 | 标准 DC 5.5 - 2.1 接口 |
| 3 | 网络接口 | 标准 RJ45 接口 |
| 4 | 输入指示灯 | 红色 |
| 5 | 输出指示灯 | 绿色 |
| 6 | 线缆 | / |

#### 3.3.3 电源接口

Helios 32 电源接口使用标准 DC 5.5 - 2.1 接口。

接口盒正常工作时,红色输入和绿色输出指示灯亮起。当外部电源输入正常,但接口盒指示灯均未正常亮灯,接口盒可能已经损坏。该情况下,请联系Robosense。

#### 3.3.4 RJ45 网口

Helios 32 网络接口使用标接口：网络接口遵循 EIA / TIA568B 标准。

#### 3.3.5 同步接口

Helios 32 同步接口定义: GPS REC 为 GPS UART 输入; GPS PULSE 为 GPS PPS 输入。

接口盒同步接口的 PIN 脚位置如图 12 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/3e6737109d47ffb7350e5cda1488665db14cec3a23b4287c3e77d92f83b27da2.jpg)


图 12 同步接口位置图


其各接口定义详情参见表 8。


表 8 同步接口定义


| 引脚编号 | 信号 |
| --- | --- |
| PIN 1 | GPS_PPS |
| PIN 2 | +5 V(输出) |
| PIN 3 | GND |
| PIN 4 | GPS_GPRMC |
| PIN 5 | GND |
| PIN 6 | SYNC_OUT1 |

重要说明：

Helios 32 的 “地” 与外部系统连接时，外部系统供电电源负极（“地”）与 GPS 系统的 “地” 必须为非隔离共地系统。

### 3.4 快速连接

Helios 32 网络参数可配置，出厂默认采用固定 IP 和端口号模式，详情参见表 9。


表 9 出厂默认网络配置表


| 设备 | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| --- | --- | --- | --- |
| Helios 32 | 192.168.1.200 | 6699 | 7788 |
| 电脑 | 192.168.1.102 | 6699 | 7788 |

用户使用产品时，需要把电脑的 IP 设置为与产品同一网段上，例如 192.168.1.x(x 的取值范围为 1～254)，子网掩码为 255.255.255.0。若未知产品的网络配置信息，请连接产品并使用 Wireshark 抓取产品输出包进行分析。配置 IP 与连接方式如下。

1. **连接激光雷达**：

连接方式如图 13 所示。

a) 激光雷达与接口盒间通过航插头进行连接;

b) PC 与接口盒间通过 RJ45 网口接头进行连接;

c) 通电后，正常工作情况下，激光雷达的接口盒的红色和绿色电源指示灯会常亮，指示灯位置详情参见图11。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/07139f3c751bb94dbd21e3994d7faa4e0f587896e6fdf3e90d7a22b383476b70.jpg)


图 13 接口盒连接示意图


2) 通过 Wireshark 抓包，解析 ARP 报文进行本地 IP 配置

a) 如上步骤，激光雷达与 PC 完成连接后，启动 Wireshark（第三方网络解析工具），选择正确的网口，开始抓包；

b) 通过 Wireshark 的搜索框，输入 “arp” 进行搜索激光雷达与 PC 间的互相寻址报文，如图 14 所示；

| No. | Time | Source | Destination | Protocol | Length Info |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | 12 0.530047 | SutengIn 1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |
|  | 13 0.607377 | HP_7a:ae:1d | Broadcast | ARP | 42 Who has 192.168.1.101? (ARP Probe) |  |
|  | 68 1.570011 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |
|  | 69 1.607549 | HP_7a:ae:1d | Broadcast | ARP | 42 Who has 192.168.1.101? (ARP Probe) |  |
|  | 98 2.606604 | HP_7a:ae:1d | Broadcast | ARP | 42 ARP Announcement for 192.168.1.101 |  |
|  | 99 2.610787 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |
|  | 130 3.650056 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |
|  | 162 4.690102 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |
|  | 251 5.730812 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |

图 14 解析 ARP 报文


c) 如图 14 所示，Source 列中的 SutengIn 字样为激光雷达的信息源，提示 192.168.1.200 为 Source IP，即为激光雷达 IP，再请求访问 192.168.1.102，即为 PC IP。如若本地 IP 非请求访问的 IP，则需配置 PC 的本地 IP 为 192.168.1.102，详情操作见步骤 3)；如若可以正常访问，则跳转至步骤 4)。

3. **配置 PC 的本地 IP**：

a) 在控制面板中，通过 “网络与 Internet” 进入 “网络与共享中心”，在 “查看活动网络” 内容中，点击对应的以太网连接，进入对应的 “以太网状态”，点击其中的 “属性” 设置；

b) 双击 Internet 协议版本 4（TCP / IPv4），进入 IP 信息设置，使用静态 IP 进行配置；

c) 将本地 IP 地址设置为 192.168.1.102，子网掩码 255.255.255.0，点击 “确认”，完成 PC 的静态 IP 设置。

4. **连接完成**：

> **提示说明**：

1) 时间同步模块（PTP&gPTP、GPS 时间同步模块）非出厂标配产品，如需使用相关功能，请自行购买，按照图 13 方式连接即可；

2) 以上配置本地静态 IP 仅以 Windows 系统操作为例，其它操作系统请以实际为准。

## 4 产品使用

### 4.1 产品坐标系

产品的坐标及旋转方向如图 15 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/9cf37ddb070ac02664fbe77d99f94f430b4346b011a3850184d999f7e57684f4.jpg)


图 15 激光雷达坐标及旋转方向示意图


> **提示说明**：

激光雷达的坐标原点定义在激光雷达结构中心，高度距离底座 63.5 mm。

### 4.2 Web 端使用

#### 4.2.1 Web 端功能

Helios 32 仅支持通过网页端对产品进行参数设定、运行信息/状态查看及固件升级等操作。

Helios 32 的 Web 地址跟随 Device IP 变化而变化，出厂默认 Device IP 为 192.168.1.200，若用户更改过 Device IP，则 Web 地址变更为新设定的 IP 地址。

#### 4.2.2 访问Web端

产品按照要求连接及正确配置完成后, 使用连接激光雷达的电脑浏览器访问产品 IP 地址（默认 Device IP:192.168.1.200）进入激光雷达 Web 首页，首页默

认为“Device”栏。

#### 4.2.3 使用 Web 端

关于使用 Web 进行操作详情参见产品手册附录 A。

### 4.3 RSView 使用

在 Helios 32 的数据的检测上，可使用 Wireshark 和 tcp-dump 等免费工具获取原始数据，而 RSView 可帮助用户更为便捷的实现对原始数据的可视化。

#### 4.3.1 软件功能

RSView 提供将 RS-Helios 数据进行实时可视化的功能。RSView 也能回放保存为 “.pcap” 文件格式的数据，但是目前还不支持 “.pcapng” 格式的文件。

RSView 将 Helios 32 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如反射强度、时间、距离、水平角度和激光线束序号。所显示的数据能够导出保存为 “.csv” 格式，RSView 3.1.3 以后的版本支持导出 “.las” 格式的数据。

RSView 包含以下功能:

1) 通过以太网实时显示数据;

2) 将实时数据记录保存为 PCAP 文件;

3) 从记录的 PCAP 文件中回放;

4) 不同类型可视化模式，例如距离、时间、水平角度等等；

5) 用表格显示点的数据;

6) 将点云数据导出为 CSV 格式文件;

7) 测量距离工具;

8) 将回放数据的连续多帧同时显示;

9) 显示或者隐藏 Helios 32 中个别线束;

10) 裁剪显示。

#### 4.3.2 安装 RSView

RSView 支持在 Windows 64 位、Ubuntu 18.04 以上操作系统上运行。可从 Robosense 的官网（http://www.robosense.cn/resources）下载最新版本 RSView 软件压缩包。下载后，软件的解压路径请勿出现中文字符，软件无需安装，解压后运行可执行文件即可正常使用。

#### 4.3.3 使用RSView

打开 RSview 后，在软件界面，可通过 F1 按钮打开软件使用指南，或通过点击软件菜单栏 Help 选项中的 RS-LiDAR User Guide 进行查阅。

### 4.4 通信协议

Helios 32 与电脑之间的通信采用以太网介质，使用 UDP 协议，和电脑之间的通信协议主要分为两类，详情参见表 10。


表 10 产品协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 | 发送间隔 |
| --- | --- | --- | --- | --- | --- |
| Main data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 1248 bytes | 约 666.67 us |
| Device Information Output Protocol | DIFOP | 产品信息输出 | UDP | 1248 bytes | 约 1 s |

> **提示说明**：

1) 产品手册 4.4 节皆为对协议中的有效载荷（1248 bytes）部分进行描述和定义；

2) 主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射强度等信息封装成包输出；

3) 产品信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出。

#### 4.4.1 MSOP 与 DIFOP 数据协议

Helios 32 发出的 UDP 协议为 1248 bytes 有效载荷，主数据流（MSOP）及产品信息（DIFOP）的数据结构如图 16 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/8a9d12e6acd2022488ee00e0b8f45315a2b64e0636a1955d072249b4a171613e.jpg)


图 16 激光雷达数据结构示意图


#### 4.4.2 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：产品输出，电脑解析。

出厂默认端口号为 6699。

##### 4.4.2.1 帧头

帧头 Header 共 42 bytes，用于识别出数据的开始位置，数据结构详情参见表 11。


表 11 MSOP Header 数据表


| 帧头(42 bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | Offset | 长度 (byte) | 定义说明 |
| Header ID | 0 | 4 | 55_aa_05_5a |
| 预留 | 4 | 8 | / |
| 包计数 | 12 | 4 | / |
| 预留 | 16 | 4 | / |
| 帧头(42 bytes) |  |  |  |
| 字段 | Offset | 长度 (byte) | 定义说明 |
| 时间戳 | 20 | 10 | 前 6 个 byte 是秒位,后 4 个 byte 是微秒位 |
| 预留 | 30 | 1 | / |
| LiDAR Type | 31 | 1 | 用于表示激光雷达的系列0x06: Helios |
| LiDAR Model | 32 | 1 | 0x01: Helios 32 (70° FOV: -55° ~ +15°)0x02: Helios 32 (31° FOV: -16° ~ +15°)0x03: Helios 160x04: Helios 32 (26° FOV: -16° ~ +10°) |
| 预留 | 33 | 9 | / |

> **提示说明**：

定义的时间戳用来记录系统的时间，分辨率为 1 us，具体参见产品手册附录 C.11 中的时间定义。

##### 4.4.2.2 数据块区间

如表 12 所示，数据块区间 Data block 是 MSOP 包中传感器的测量值部分，共 1200 bytes。它由 12 个 Data block 组成，每个 block 长度为 100 bytes，代表一组完整的测距数据。

Data block 中 100 bytes 的空间包括：2 bytes 的标志位，使用 0xffee 表示；2 bytes 的 Azimuth，表示水平旋转角度信息，每个角度信息对应着 32 个的 channel data，包含 1 组完整的 32 通道信息。（通道序号与垂直角度的关系参见产品手册附录 D）。


表 12 Data Block 数据包定义


| 说明 | 数据块(1200 bytes) |  |  |  |
| --- | --- | --- | --- | --- |
| 数据块序号 | Data Block 1 | Data Block 2 | ... | Data Block 12 |
| 标志位 | 0xff,0xee | 0xff,0xee | ... | 0xff,0xee |
| 水平旋转角 | Azimuth 1 | Azimuth 2 | ... | Azimuth 12 |
| 通道 1 | Channel data 1 | Channel data 1 | ... | Channel data 1 |
| 通道 2 | Channel data 2 | Channel data 2 | ... | Channel data 2 |
| ... | ... | ... | ... | ... |
| 通道 31 | Channel data 31 | Channel data 31 | ... | Channel data 31 |
| 通道 32 | Channel data 32 | Channel data 32 | ... | Channel data 32 |

> **提示说明**：

双回波模式时，Data Block 的奇数列 32 个通道数据存储第一个回波，偶数列 32 个通道数据存储第二个回波。

1. **通道数据定义**：

通道数据 Channel data 是 3 bytes，高两字节用于表示距离信息，低一字节用于表示反射强度信息，如表 13 所示。


表 13 Channel Data 示意表


| 通道数据(3 bytes) |  |  |
| --- | --- | --- |
| 2 bytes Distance |  | 1 byte Reflectivity |
| Distance1 [15:8] | Distance2 [7:0] | Reflectivity(反射强度信息) |

> **提示说明**：

Distance 是 2 bytes，分辨率为 0.25 cm。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/40d5d21a2f3980dfdafbd377e3208fb5b1beb0f5f5caf8b8112933da63e7e71e.jpg)


图 17 MSOP 包示意图


红色框：Header ID;

黄色框：Data Block 标志位；

蓝色框：Channel data 1 的 Azimuth 值；

绿色框：Channel data 1 的 Distance 值。

数据包的距离值计算，参考图 17，计算方式如下：

a) 数据包里的距离值的十六进制数：0x01, 0x40;

b) 将数据组成 16 bits，为 16 bits 无符号整型数据。表示为：0x0140；

c) 距离值转换为十进制数字：320;

d) 根据距离分辨率不同，进行计算；

e) 结果 $320 \times 0.25 \, cm = 80 \, cm$ 。

数据包的角度值计算，参考图 17，计算方式如下：

a) 数据包里的角度值得十六进制数：0x88，0xdb;

b) 将数据组成 16 bits，为 16 bits 无符号整型数据。表示为：0x88db;

c) 转换为十进制数字：35035;

d) 将转化成十进制后的数据除以 100;

e) 结果 $35035^{\circ}/100=350.35^{\circ}$ 。

2. **角度值定义**：

在每个 Block 中, Helios 32 输出的角度值是该 Block 中第一个通道激光测距时的角度值。角度值来源于角度编码器, 角度编码器的零位即角度的零点, 水平旋转角度值的分辨率为 $0.01^{\circ}$ 。

##### 4.4.2.3 帧尾

帧尾（Tail）长度 6 bytes，4 bytes 位预留信息，2 bytes 的 0x00, 0xFF。

#### 4.4.3 产品信息输出协议（DIFOP）

产品信息输出协议，Device Info Output Protocol，简称：DIFOP。

I/O 类型：产品输出，电脑读取。

默认端口号为 7788。

DIFOP 是为了将产品序列号（S/N）、固件版本信息、配置信息、角度信息、运行状态、故障诊断等信息，定期发送给用户的“仅输出”协议，用户可以通过读取 DIFOP 解读当前使用产品的各种参数的具体信息。

一个完整的 DIFOP Packet 的数据格式结构为同步帧头，数据区，帧尾。每个数据包共 1248 bytes: 包括 8 bytes 同步帧头 Header, 1238 bytes 的数据区 Data, 以及 2 bytes 帧尾 Tail。数据包的基本结构如表 14 所示。


表 14 DIFOP Packet 的数据格式结构


| 段落划分 | 序号 | 信息 | Offset | 长度 (byte) | 备注 |
| --- | --- | --- | --- | --- | --- |
| Header | 0 | DIFOP 识别头 | 0 | 8 | a5_ff_00_5a_11_11_55_55 |
| Data | 1 | 转速设置值 | 8 | 2 | 附录 C.1 |
| Data | 2 | 以太网 | 10 | 22 | 附录 C.2 |
| Data | 3 | FOV 设置值 | 32 | 4 | 附录 C.3 |
| Data | 4 | 预留 | 36 | 2 | / |
| Data | 5 | 电机锁相设置值 | 38 | 2 | 附录 C.4 |
| Data | 6 | 主板固件版本号 | 40 | 5 | 附录 C.5 |
| Data | 7 | 底板固件版本号 | 45 | 5 | 附录 C.6 |
| Data | 8 | 底板软件版本号 | 50 | 5 | 附录 C.7 |
| Data | 9 | 电机固件版本号 | 55 | 5 | 附录 C.8 |
| Data | 10 | 预留 | 60 | 232 | / |
| Data | 11 | 序列号 | 292 | 6 | 附录 C.9 |
| Data | 12 | 预留 | 298 | 2 | / |
| Data | 13 | 回波模式 | 300 | 1 | 章节 2.5.3.2 |
| Data | 14 | 时间同步信息 | 301 | 2 | 附录 C.10 |
| Data | 15 | 时间 | 303 | 10 | 附录 C.11 |
| Data | 16 | 运行状态 | 313 | 18 | 附录 C.12 |
| Data | 17 | 预留 | 331 | 17 | / |
| Data | 18 | 故障诊断 | 342 | 18 | 附录 C.13 |
| Data | 19 | 预留 | 360 | 22 | / |
| Data | 20 | GPRMC | 382 | 86 | 附录 C.14 |
| Data | 21 | 垂直角校准 | 468 | 96 | 附录 C.15 |
| Data | 22 | 水平角校准 | 564 | 96 | 附录 C.16 |
| Data | 23 | 预留 | 660 | 586 | / |
| Tail | 24 | 帧尾 | 1246 | 2 | 0f_f0 |

> **提示说明**：

1) Header（DIFOP 识别头）内容为：0xA5,0xFF,0x00,0x5A,0x11,0x11,0x55,0x55，可作为包的检查序列；

2) Tail 帧尾内容为 0x0F, 0xF0;

3) 每一项信息的寄存器的定义以及使用参见产品手册附录 C 中的详细描述，对应关系见表 14 备注栏内容。

## 5 产品维护

### 5.1 运输与物流

重要

运输不当会导致产品损坏！

1) 应采用防震防潮包装材料包装产品，以避免运输途中损毁。建议使用原始包装；

2) 运输过程务必小心轻放，避免磕碰、摔落等危险行为；

3) 每次运输收到货物时，必须详细检查交付货物清单与是否有损坏（含产品与包装）；

4) 如若有运输损坏，请拒绝收货，并及时联系 RoboSense。

### 5.2 存储

重要

存储不当可能会导致产品损坏！

1) 请将产品存储于室内常温、干燥的环境中；

2) 请轻拿轻放，避免产品遭受磕碰、摔落等；

3）产品应存放于安全环境中，避免腐蚀、机械冲击及暴露于超过防护等级的环境中；

4) 请定期检查所有组件和包装的状态，建议检查周期为 3 个月。

### 5.3 产品清洁

为了能够准确地感知周围环境，RS-LiDAR 需保持环形防护罩洁净。

#### 5.3.1 注意事项

请在清理 RS-LiDAR 前仔细并完整的阅读本节的内容，否则不当的操作可能会损坏产品。

! 激光雷达在环境比较恶劣的情况下使用时，需及时清理表面的脏污保持激光雷达清洁，否则会影响激光雷达的正常使用。

#### 5.3.2 需要的材料

1) 洁净的无尘布;

2) 温度适中的中性溶液（如肥皂水、蒸馏水、99%浓度乙醇等）。

#### 5.3.3 清洁方法

1) 如果激光雷达的表面只是粘附了一些灰尘/粉尘:

a) 首先用洁净的无尘布，蘸取少量的中性溶液；

b) 其次轻轻地对激光雷达表面拭擦清洁;

c) 最后用一块干燥洁净的无尘布将其擦干。

2) 如果激光雷达表面沾上了泥浆等块状异物:

a) 首先应使用洁净水喷洒在激光雷达脏污部位表面让泥浆等异物脱离（注意：不能直接用无尘布将泥浆擦掉，这样做可能会划伤表面特别是防护罩表面）；

b) 其次用温的肥皂水喷洒在脏污部位，因肥皂水的润滑作用可加速异物的脱离。再次用纤维布轻轻试擦激光雷达表面，但注意不要擦伤表面；

c) 最后用洁净的水清洗激光雷达表面肥皂的残留（如果表面仍有残留，可用 $99 \%$ 乙醇对其再次清洁），同时用一块干燥的无尘布擦干即可。

## 6 故障诊断

本章列举了部分在使用产品的过程中常见的问题以及对应的问题排查方法，详情参见表 15。


表 15 常见故障排查方法表


| 故障现象 | 解决方法 |
| --- | --- |
| 接口盒上面红/绿色指示灯不亮/闪烁 | 检查接口盒与电源端的连接线是否松动;检查线束是否破损。 |
| 产品电机不旋转 | 检查接口盒上面指示灯是否正常;检查接口盒与电源/产品端的连接线是否松动及线束破损。 |
| 产品在启动时不断重启 | 检查输入电源连接和极性是否正常;检查输入电源的电压和电流是否满足要求(12V电压输入条件下,输入电流≥2A);检查产品安装平面是否水平或激光雷达底部固定螺丝是否拧的太紧。 |
| 产品内部旋转,但是没有数据 | 检查激光是否正常发射;检查网络连接是否正常;确认电脑端网络配置是否正确;使用另外的软件(例如Wireshark)检查数据是否有被接收;关闭防火墙和其它可能阻止网络的安全软件;检查电源供电正常;尝试重启产品。 |
| Wireshark可以收到数据但是RSView不显示点云 | 关闭电脑防火墙,并且运行RSView通过防火墙;确认电脑的IP配置和产品设置的目的地址一致;确认RSView中Sensor Network Configuration设置正确;确认RSView安装目录或配置文件存放目录不包含任何中文字符;确认Wireshark中收到的数据包是MSOP类型的包。 |
| 产品存在频发的数据丢失 | 确认网络中是否有大量的其它网络数据包或网路冲突;确认网络中是否存在其它网络产品以广播模式发送大量数据造成传感器数据阻塞;确认电脑的性能和接口性能是否满足要求;移除其它所有网络产品,直连电脑确认是否存在丢包现象。 |
| 无法同步 GPS / PTP / gPTP时间 | 确认已在网页端将同步模式切换到正确模式下;在 GPS + PPS 时间同步方式下:确认 GPS 模块波特率为 9600 bps,8 bits 数据位,无校验位,停止位 1;确认 GPS 模块输出为 3.3 V TTL 还是 RS232 电平;确认 1 PPS 脉冲连续且接线正确;确认 GPRMC 的 NMEA 消息格式正确;确认 GPS 模块和接口盒共地;确认 GPS 模块收到了有效的解;确认 GPS 模块是否为有效定位(室外);在 PTP / gPTP 时间同步方式下:确认 PTP / gPTP Master 同步协议是否符合当前 PTP / gPTP 协议;确认 PTP / gPTP Master 是否正常工作。 |
| 产品通过路由器后无数据输出 | 关闭路由器的 DHCP 功能或在路由器内部设置传感器的 IP 为正确的 IP。 |
| ROS 驱动显示点云时有固定的空白区域不断旋转 | 此现象正常,是因为 ROS 驱动按照固定包数进行分帧显示,空白部分的数据会在下一帧进行显示。 |
| RSView 软件输出点云成一条射线 | 如果是 Windows 10 系统请设置 RSView 使用成 Windows 7 兼容模式运行。 |

> **提示说明**：

如若以上排查均未能解决问题，请联系 RoboSense。

## 7 售后

如故障诊断章节 6 内容未能解决问题，请及时联系 RoboSense。

官网：https://www.robosense.cn/contact

邮箱：support@robosense.cn

电话：0755-86325830 / 15338772453

> **提示说明**：

1) 请在收到 RoboSense 售后服务回信确认后，再寄回产品；

2) 产品只能使用原包装或等效的软垫防潮包装寄回。

## 附录 A Web 端操作

### A.1 产品信息

激光雷达 Web 端默认为产品信息页，如图 18 所示:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/9227717baddd21473972a407f6319658c0451e1d4c990d354e1c878664915d38.jpg)


robosense 

Device 

Setting 

Diagnostic 

System 

| Top Board Firmware Version: | 010500aa |
| --- | --- |
| Bottom Board Firmware Version: | 01031301 |
| Software Version: | 22112901 |
| Motor Firmware Version: | 22101421 |
| S/N: | 2410BAC9C542 |
| Mac Address: | 00:0A:35:00:01:02 |
| Model: | Helios 32 |

图 18 Web 端首页信息


1) Top Board 为主板固件版本;

2) Bottom Board 为底板固件版本;

3) Software Version 为软件版本;

4) Motor Firmware Version 为电机版本;

5) S/N 为产品序列号;

6) Mac Address 为 MAC 地址;

7) Model 为产品名称。

### A.2 产品参数设定

网页端 “Setting” 栏为激光雷达参数设定页，在此处可更改 Device IP、端口号、回波模式、转速及角度触发等功能设定。示意及功能描述如图 19，图 20 所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/42f1089894e69e35bc54bdf5af03b699f5e98f42cacb1e83095f28c644ad80e4.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/f1991cff8ce7c8e76c41aaa20c9e6981662b6f53ca286f7975a24e619f5248f2.jpg)


图 19 Web 端激光雷达设置信息


1) 支持单播（默认）/广播模式，将 Destination IP 设置为 255.255.255.255 则为广播模式，默认出厂为 192.168.1.102；

2) 可更改 MSOP 和 DIFOP 的数据端口，值范围 1025～65535;

3) 可下拉 “Return Mode” 选最强（默认）/最后/最前/双回波四种回波模式；

4) 可设置 FOV，角度范围 $0 \sim 360^{\circ}$ ，当设定后只输出设定区域点云数据；

5) 可设置设定转速，仅支持 300 rpm，600 rpm（默认），1200 rpm；

6) 可下拉“Time Synchronization Source”选择 GPS、PTP-P2P、PTP-E2E-L4、PTP-E2E-L2 和 PTP-gPTP 确定时间同步方式；

7) 可下拉 “Operation Mode” 选择工作模式，分别为 Standby/High Performance（默认）二种工作模式，当选择 Standby 模式时，激光雷达电机和发射器停止工作。

8) 可下拉 “Reflectivity Enhance” 设置不同的反射率映射模式，“OFF” 为

原始反射率模式；“On”为车道线增强模式，提升车道线区分度。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/100b6712f50b2da5d5e84735785887e69d40b55ed8ce77ab50d211da76928d02.jpg)


图 20 Web 端角度触发设定


1) Angle Pulse Setting: 在此栏下进行角度触发功能设置，角度触发功能默认关闭；

2) Trigger Mode: 起始角模式有两种, 模式 1 为起始脉宽增加 $25\%$ (默认), 模式 2 为起始脉宽不增加;

3) Group Switch: 开启/关闭 “Pulse Trigger Switch”，当勾选 “All On” 时，全部开启所有 SYNC 触发设置，默认为 “All Off”；

4) Group: 此栏为对应 SYNC OUT 组, Helios 32 内含 SYNC OUT1 & SYNC OUT2, 但电源盒子只引出 SYNC OUT1, 具体定义请查看表 8;

5) Pulse Trigger Switch: 开启/关闭触发功能，当 Pulse Trigger Switch 勾选 “ON” 开启后选项为可编辑状态，关闭时为灰色不可编辑状态；

6) Pulse Start Angle: 可设置对应的起始角，默认值为 $0^{\circ}$ ，输入值需为整数；

7) Pulse Width: 可设置对应的脉宽，默认值为 10 ms，输入值需为 20 ns 的整数倍，占空比最高为 50%;

8) Pulse Step: 可设置对应的步距，默认值为 $360^{\circ}$ ，输入值需为浮点数，保留 1 位小数。

> **提示说明**：

1) Device IP 和 Destination IP 需在同一网段，否则可能会导致无法正常连接；

2) MSOP 和 DIFOP 值的范围为 1025～65535，且 MSOP 端口和 DIFOP 端口不可设置为同一端口；

3) 更改完成后需点击“Save”进行保存，提示成功则表示设定生效。

### A.3 产品诊断/运行状态

此页可实时查看激光雷达运行状态，包括电压、电流、实时转速、运行时长及温度等信息，如图 21 所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/043351276634afa77e916c091f77953aafd843ecc87bc1896f2b70505ff0c852.jpg)


图 21 Web 端运行状态/故障诊断


1) Voltage Monitor 为产品电压监控，当产品选择 Standby 模式时，此处会变为红框；

2) 用户可查看当前产品运行温度;

3) 用户可查看 RPM 获取产品当前实时转速信息;

4) Laser Status 有“On”（默认）和“Off”两种状态，用户设置 Standby 模式时为“Off”;

5) 用户可查看 Star-up Times 获取当前产品总启动次数, 每断电重启后会累加一次;

6) 用户可查看 Elapsed time Total T0 获取产品总运行时间和产品在各温度下累计工作时间。

> **提示说明**：

1) 本页刷新频率为 1 秒;

2) 若产品电压/电流框变红时，请检查产品当前是否为 Standby 模式，若不是则检查产品是否正常工作。

### A.4 产品固件升级

点击网页 “System”, 此页可对产品的主板、底板、软件、Web 及电机固件进行升级，操作如下：

1) 请联系 RoboSense 获得升级固件。准备好待升级的固件后，点击“选择文件”，如图 22 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/706ceea9085c29eb3b1ce5fc5ef3588d74d4fa835a9136530e253d29ba7e272f.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/9c95bd5158fb786051aba91d3d9dd17ec0d2e268034f96ae109f95c45a560e1c.jpg)


图 22 Step1 点击选择文件


2) 选择对应待升级固件的文件夹，选中待升级固件后点击“打开”（路径请勿出现中文字符），如图 23 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/40218a0e029f97e3e25c192a6df3adbc10b64cca8797013349e5fe5309eca52b.jpg)


图 23 Step2 选择待升级固件


3) 待升级固件文件名变为选中的固件名称后表示加载成功，如图 24 所示。此时点击“Update”进行升级。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/cb20ed107a65b20fe1cb32d0dedab8574349196453fac6b779afb67cba0629d0.jpg)


robosense


Device | Setting | Diagnostic | System 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/78f156e3d29f41ce9a120f3f5f2bbbe3a7548eddccd57884352fa6138062c25a.jpg)


图 24 Step3 点击升级


4) 网页端提示成功、产品进行自动重启，重启完成后重新登录网页首页查看固件版本是否升级成功，如图 25 所示。

```txt
Init for upgrade, please wait...
Init ...
Init ***
Bottom Board Firmware is Upgrading...
Erasing 0%
Erasing 19%
Erasing 39%
Erasing 59%
Erasing 79%
Erasing 99%
Bot bin Erase Complete! Begin to Write...
Writing 0%
Writing 19%
Writing 39%
Writing 50%
Writing 69%
Writing 89%
Successful! Update the new firmware of bottom board! Lidar is rebooting! 
```


图 25 Step4 升级成功


> **提示说明**：

1) 升级包名称需符合如下要求方可正常升级，否则会报错：

2) 主板升级文件：顺序逻辑必要前缀 "Helios_top_"，顺序逻辑必要后缀 ".bin";

3) 底板升级文件：顺序逻辑必要前缀 "Helios_bot_"，顺序逻辑必要后缀 ".bin";

4) 软件升级文件：顺序逻辑必要前缀 "Helios_app_"，顺序逻辑必要后缀 ".elf";

5) Web App 升级文件: 顺序逻辑必要前缀 "Helios_cgi_", 顺序逻辑必要后缀 ".tar.gz";

6) 电机马达升级文件: 顺序逻辑必要前缀 "Helios_mot_", 顺序逻辑必要后缀 ".hex”。

## 附录 B ROS & ROS2 Package

rslidar_sdk 是 ROS 平台下的驱动 SDK，请通过 github 上的 RoboSense 主页下载，或联系 RoboSense 获取。

1) rslidar_sdk 依赖 rs_driver，后者是 RoboSense 的基本驱动。rs_driver 请从 github 平台下载；

2) 如使用环境为 ROS2，rslidar_sdk 还依赖 rslidar_msg，这是 msg 定义文件。msg 文件请从 github 平台下载；

3) 驱动 SDK 下载包内含丰富的使用指引，请在使用驱动 SDK 前，详细阅读文件内的 README 文件及 doc 文件夹下的文档。

> **提示说明**：

1) SDK 获取地址：https://github.com/RoboSense-LiDAR/rsLiDAR_sdk

2) rs_driver 获取地址：https://github.com/RoboSense-LiDAR/rs_driver

3) msg 获取地址：https://github.com/RoboSense-LiDAR/rslidar_msg

## 附录 C 寄存器定义

本附录内容补充章节 4.4 中协议里定义各个信息的定义，便于用户对产品的使用和开发，涉及到计算部分，均采用大端模式，Value 代表对应 offset 字节换算后得出的十进制数值。

### C.1 电机转速（MOT_SPD）


表 16 电机转速寄存器


| 电机转速寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | MOT_SPD |  |

**寄存器说明：**

1) 该寄存器用于读取电机转速设置值;

2) 若设置值为 600RPM，读取 byte 1=0x02&&byte 2=0x58，Value=600rpm。

### C.2 以太网（ETH）


表 17 以太网寄存器


| 以太网寄存器(共22 bytes) |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 |
| 功能 | LIDAR_IP |  |  |  | DEST_PC_IP |  |  |  |
| 序号 | byte 9 | byte 10 | byte 11 | byte 12 | byte 13 | byte 14 | byte 15 | byte 16 |
| 功能 | MAC_ADDR |  |  |  |  |  | MSOP |  |
| 序号 | byte 17 | byte 18 | byte 19 | byte 20 | byte 21 | byte 22 | / | / |
| 功能 | 预留 |  | DIFOP |  | 预留 |  | / |  |

**寄存器说明：**

1) LIDAR_IP 为激光雷达的源 IP 地址，占据 4 bytes;

2) DEST_PC_IP 为目的 PC 的 IP 地址，占据 4 bytes;

3) MAC_ADDR 为激光雷达的 MAC 地址;

4) MSOP 与 DIFOP 分别占 2 bytes。

### C.3 FOV 设置 (FOV_SET)


表 18 FOV 设置


| FOV 设置(共 4 bytes) |  |  |  |  |
| --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 |
| 功能 | FOV_START |  | FOV_END |  |

**寄存器说明：**

1) 该寄存器用于读取 FOV 设置值;

2) FOV_START 和 FOV_END 范围为 0 ~ 36000，对应角度 0 ~ 360°。详情如下：

a) FOV_START: byte 1=0x5d, byte 2=0xc0, Value=24000; 

b) FOV_END: byte 3=0x1f, byte 4=0x40, Value=8000; 

c) 取两位小数，表明设置的 FOV 区间值为 $240^{\circ} \sim 80^{\circ}$ 。

### C.4 电机锁相相位(MOT_PHASE)


表 19 电机锁相寄存器


| 电机锁相寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | MOT_PHASE |  |

**寄存器说明：**

1) 该寄存器用于读取电机锁相设置值;

2) MOT_PHASE 范围 0 ~ 360 对应角度 0 ~ 360°。详情如下:

a) MOT_PHASE: byte 1=0x00, byte 2=0x64, Value=100; 

b) 表明设置的电机锁相相位为 $100^{\circ}$ 。

### C.5 主板固件版本(TOP_FRM)


表 20 主板固件版本


| 主板固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | TOP_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x01，byte 3=0x05，byte 4=0x05，byte 4=0x00，则固件版本号为 00 01 05 05 00。

### C.6 底板固件版本(BOT_FRM)


表 21 底板固件版本


| 底板固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | BOT_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x01，byte 3=0x03，byte 4=0x10，byte 4=0x00，则固件版本号为：00 01 03 10 00。

### C.7 软件版本(SOF_FRM)


表 22 软件版本


| 软件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | SOF_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x01，byte 3=0x03，byte 4=0x10，byte 4=0x00，则固件版本号为：00 01 03 10 00。

### C.8 电机固件版本(MOT_FRM)


表 23 电机固件版本


| 电机固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | MOT_FRM |  |  |  |  |

**寄存器说明：**

如 byte1=0x00，byte 2=0x22，byte 3=0x10，byte 4=0x14，byte 4=0x21，则固件版本号为：00 22 10 14 21。

### C.9 序列号（SN）


表 24 序列号寄存器


| 序列号寄存器(共6 bytes) |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 |
| 功能 | SN |  |  |  |  |  |

**寄存器说明：**

类似 mac 地址，以 16 进制共 6 bytes 数值指示产品序列号。

### C.10 时间同步信息（TIME_SYNC_INF）


表 25 时间同步信息寄存器


| 时间同步信息寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | Time_Sync_Mode | Time_Sync_State |

**寄存器说明：**

1) byte 1 为时间同步模式状态位，定义如下:

0x00: GPS 同步；0x01: E2E-L4 同步；0x02: P2P 同步；0x03: gPTP 同步；0x04: E2E-L2 同步。

2) byte 2 为时间同步成功状态位，定义如下：

0x00：未同步；0x01：GPS 同步成功；0x02：PTP 同步成功。

### C.11 时间（UTC_TIME）


表 26 时间寄存器


| 时间寄存器(共10 bytes) |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 | byte 9 | byte10 |
| 功能 | sec |  |  |  |  |  | us |  |  |  |

**寄存器说明：**

us 值范围：0 ~ 999999。

### C.12 运行状态（STATUS）


表 27 运行状态寄存器


| 运行状态寄存器(共18 bytes) |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 |
| 功能 | 整机电流 |  | 预留 |  | 整机电压 |  | 底板5V |  |
| 序号 | byte 9 | byte 10 | byte 11 | byte 12 | ... | ... | byte 28 | byte 29 |
| 功能 | 主板5V |  | 内部调试使用 |  |  |  |  |  |

**寄存器说明：**

1) 整机电流值大小由 2 bytes 组成。电流计算公式:

整机电流 = Value / 4096 × 5A

2) Helios 32 含 3 路可监控电压值，每路电压值大小由 2 bytes 组成，各路电压计算公式如下：

整机电压 = Value / 4096 × 24.5

底板 $5 \, V = Value / 4096 \times 11$ 

主板 5 V = Value / 4096 × 10

3) 以上电压计算公式的单位均为伏特（V）。

### C.13 故障诊断（FALT_DIGS）


表 28 故障诊断寄存器


| 故障诊断寄存器(共40 bytes) |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 |
| 功能 | 底板 FPGA 温度 |  | 内部调试使用 |  |  |  | 主板底面温度 |  |
| 序号 | byte 9 | byte 10 | byte 11 | byte 12 | byte 13 | ... | ... | byte 17 |
| 功能 | 主板 FPGA 温度 |  | 实时转速 |  | 内部调试使用 |  |  |  |
| 序号 | byte 18 | byte 18 | byte 19 | ... | ... | byte 38 | byte 39 | byte 40 |
| 功能 | GPS状态 | 内部调试使用 |  |  |  |  |  |  |

表 29 GPS 信号输入状态寄存器


| GPS 信号输入状态寄存器 GPS_ST |  |  |  |
| --- | --- | --- | --- |
| 序号 | 功能 | 状态值 | 状态说明 |
| bit 0 | PPS 标志:PPS_LOCK | 0 | PPS 信号无效 |
| bit 0 | PPS 标志:PPS_LOCK | 1 | PPS 信号有效 |
| bit 1 | GPRMC 标志:GPRMC_LOCK | 0 | GPRMC 信号无效 |
| bit 1 | GPRMC 标志:GPRMC_LOCK | 1 | GPRMC 信号有效 |
| bit 2 | UTC 锁定标志:UTC_LOCK | 0 | UTC 时间未同步 |
| bit 2 | UTC 锁定标志:UTC_LOCK | 1 | UTC 时间已同步 |
| bit 3 | GPRMC 输入状态 | 0 | 无输入 |
| bit 3 | GPRMC 输入状态 | 1 | 有输入 |
| bit 4 | PPS 输入状态 | 0 | 无输入 |
| bit 4 | PPS 输入状态 | 1 | 有输入 |
| bit 5 ~ bit7 | 预留 | x | N/A |

**寄存器说明：**

1) Helios 32 含 3 路可监控温度，每路由 2 bytes 组成，温度计算公式：

底板 FPGA 温度 = 503.975 × Value / 4096-273.15

主板底面温度 = 200 × Value / 4096 -50

主板 FPGA 温度 = 503.975 × Value / 4096-273.15

2) byte 18 是 GPS 信号输入状态寄存器，该寄存器使用 3 bits，用于指示当前接入的 PPS 信号和 GPRMC 信号是否有效，同时指示当前系统运行的时间是产品本地计数时间还是同步到 UTC。bit 位定义如表 29 所示。

实时转速=Value，由 2 bytes 组成。

### C.14 GPRMC 数据包-ASCII 码数据类型

GPRMC 数据包位预留了 86 个字节，根据外接的 GPS 模块输出的 GPRMC 消息长度自适应完整的存储所接收到的 GPRMC 消息，可以 ASCII 码进行解析查看。

### C.15 垂直角校准（COR_VERT_ANG）


表 30 垂直角校准寄存器


| 垂直角校准寄存器(共96 bytes) |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 | byte 9 |
| 功能 | 1通道垂直角度 |  |  | 2通道垂直角度 |  |  | 3通道垂直角度 |  |  |
| 序号 | byte 10 | byte 11 | byte 12 | byte 13 | byte 14 | byte 15 | byte 16 | byte 17 | byte 18 |
| 功能 | 4通道垂直角度 |  |  | 5通道垂直角度 |  |  | 6通道垂直角度 |  |  |
| 序号 | byte 19 | byte 20 | byte 21 | byte 22 | byte 23 | byte 24 | byte 25 | byte 26 | byte 27 |
| 功能 | 7通道垂直角度 |  |  | 8通道垂直角度 |  |  | 9通道垂直角度 |  |  |
| 序号 | byte 28 | byte 29 | byte 30 | byte 31 | byte 32 | byte 33 | byte 34 | byte 35 | byte 36 |
| 功能 | 10通道垂直角度 |  |  | 11通道垂直角度 |  |  | 12通道垂直角度 |  |  |
| 序号 | byte 37 | byte 38 | byte 39 | byte 40 | byte 41 | byte 42 | byte 43 | byte 44 | byte 45 |
| 功能 | 13通道垂直角度 |  |  | 14通道垂直角度 |  |  | 15通道垂直角度 |  |  |
| 序号 | byte 46 | byte 47 | byte 48 | byte 49 | byte 50 | byte 51 | byte 52 | byte 53 | byte 54 |
| 功能 | 16通道垂直角度 |  |  | 17通道垂直角度 |  |  | 18通道垂直角度 |  |  |
| 序号 | byte 55 | byte 56 | byte 57 | byte 58 | byte 59 | byte 60 | byte 61 | byte 62 | byte 63 |
| 功能 | 19通道垂直角度 |  |  | 20通道垂直角度 |  |  | 21通道垂直角度 |  |  |
| 序号 | byte 64 | byte 65 | byte 66 | byte 67 | byte 68 | byte 69 | byte 70 | byte 71 | byte 72 |
| 功能 | 22通道垂直角度 |  |  | 23通道垂直角度 |  |  | 24通道垂直角度 |  |  |
| 序号 | byte 73 | byte 74 | byte 75 | byte 76 | byte 77 | byte 78 | byte 79 | byte 80 | byte 81 |
| 功能 | 25通道垂直角度 |  |  | 26通道垂直角度 |  |  | 27通道垂直角度 |  |  |
| 序号 | byte 82 | byte 83 | byte 84 | byte 85 | byte 86 | byte 87 | byte 88 | byte 89 | byte 90 |
| 功能 | 28通道垂直角度 |  |  | 29通道垂直角度 |  |  | 30通道垂直角度 |  |  |
| 序号 | byte 91 | byte 92 | byte 93 | byte 94 | byte 95 | byte 96 | / | / | / |
| 功能 | 31通道垂直角度 |  |  | 32通道垂直角度 |  |  | / |  |  |

**寄存器说明：**

1) 角度值为区分为正负, 每个通道的垂直角度由 3 bytes 组成, 其中第 1 byte 表示正负, 第 2 和第 3 个 byte 共同组成角度的值;

2）表示正负的第 1 个 byte 属性为 0x00 则通道垂直角度为正，属性为 0x01 则通道垂直角度为负；

3) 角度分辨率为 $0.01^{\circ}$ ;

4) 例如通道 1 寄存器的值为 byte 1=0x00，为正数；byte 2=0x00，byte 3=0xe7 转换成十进制 231。则通道 1 的垂直角度值为 $2.31^{\circ}$ 。

### C.16 水平偏移角校准（COR_HOR_ANG）


表 31 水平偏移角校准寄存器


| 水平偏移角校准寄存器(共96 bytes) |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 | byte 9 |
| 功能 | 1通道水平偏移角度 |  |  | 2通道水平偏移角度 |  |  | 3通道水平偏移角度 |  |  |
| 序号 | byte 10 | byte 11 | byte 12 | byte 13 | byte 14 | byte 15 | byte 16 | byte 17 | byte 18 |
| 功能 | 4通道水平偏移角度 |  |  | 5通道水平偏移角度 |  |  | 6通道水平偏移角度 |  |  |
| 序号 | byte 19 | byte 20 | byte 21 | byte 22 | byte 23 | byte 24 | byte 25 | byte 26 | byte 27 |
| 功能 | 7通道水平偏移角度 |  |  | 8通道水平偏移角度 |  |  | 9通道水平偏移角度 |  |  |
| 序号 | byte 28 | byte 29 | byte 30 | byte 31 | byte 32 | byte 33 | byte 34 | byte 35 | byte 36 |
| 功能 | 10通道水平偏移角度 |  |  | 11通道水平偏移角度 |  |  | 12通道水平偏移角度 |  |  |
| 序号 | byte 37 | byte 38 | byte 39 | byte 40 | byte 41 | byte 42 | byte 43 | byte 44 | byte 45 |
| 功能 | 13通道水平偏移角度 |  |  | 14通道水平偏移角度 |  |  | 15通道水平偏移角度 |  |  |
| 序号 | byte 46 | byte 47 | byte 48 | byte 49 | byte 50 | byte 51 | byte 52 | byte 53 | byte 54 |
| 功能 | 16通道水平偏移角度 |  |  | 17通道水平偏移角度 |  |  | 18通道水平偏移角度 |  |  |
| 序号 | byte 55 | byte 56 | byte 57 | byte 58 | byte 59 | byte 60 | byte 61 | byte 62 | byte 63 |
| 功能 | 19通道水平偏移角度 |  |  | 20通道水平偏移角度 |  |  | 21通道水平偏移角度 |  |  |
| 序号 | byte 64 | byte 65 | byte 66 | byte 67 | byte 68 | byte 69 | byte 70 | byte 71 | byte 72 |
| 功能 | 22通道水平偏移角度 |  |  | 23通道水平偏移角度 |  |  | 24通道水平偏移角度 |  |  |
| 序号 | byte 73 | byte 74 | byte 75 | byte 76 | byte 77 | byte 78 | byte 79 | byte 80 | byte 81 |
| 功能 | 25通道水平偏移角度 |  |  | 26通道水平偏移角度 |  |  | 27通道水平偏移角度 |  |  |
| 序号 | byte 82 | byte 83 | byte 84 | byte 85 | byte 86 | byte 87 | byte 88 | byte 89 | byte 90 |
| 功能 | 28通道水平偏移角度 |  |  | 29通道水平偏移角度 |  |  | 30通道水平偏移角度 |  |  |
| 序号 | byte 91 | byte 92 | byte 93 | byte 94 | byte 95 | byte 96 | / | / | / |
| 功能 | 31通道水平偏移角度 |  |  | 32通道水平偏移角度 |  |  | / |  |  |

**寄存器说明：**

1）角度值为区分为正负，每个通道的水平角度由 3 bytes 组成，其中第 1 个 byte 表示正负，第 2 和第 3 个 byte 共同组成角度的值；

2）表示正负的第 1 个 byte 属性为 0x00 则通道水平偏移角度为正，属性为 0x01 则通道水平偏移角度为负值；

3) 角度分辨率为 $0.01^{\circ}$ ;

4) 例如通道 1 寄存器的值为 byte 1=0x01，为负数；byte 2=0x00，byte 3=0x04 转换成十进制 4。则通道 1 的水平偏移角度为 $-0.04^{\circ}$ 。

## 附录 D 精确的点时间计算

32 通道顺序完成一轮发射所需的时间为 55.56 us。在每个 MSOP Packet 中，有 12 个 Block，每个 Block 有 1 组完整的 32 线激光数据，因此一个 Packet 中有 12 组完整的激光数据。Helios 32 加入抗干扰，因此发射时序并无规律，单回波及双回波点的时间计算请查看表 32、表 33。


表 32 MSOP Packet 中单回波每个激光点的时间偏移量（us）


| Data Block |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| 0 | 55.56 | 111.12 | 166.68 | 222.24 | 277.8 | 333.36 | 388.92 | 444.48 | 500.04 | 555.6 | 611.16 |
| 1.73 | 57.29 | 112.85 | 168.41 | 223.97 | 279.53 | 335.09 | 390.65 | 446.21 | 501.77 | 557.33 | 612.89 |
| 3.46 | 59.02 | 114.58 | 170.14 | 225.7 | 281.26 | 336.82 | 392.38 | 447.94 | 503.5 | 559.06 | 614.62 |
| 5.19 | 60.75 | 116.31 | 171.87 | 227.43 | 282.99 | 338.55 | 394.11 | 449.67 | 505.23 | 560.79 | 616.35 |
| 6.92 | 62.48 | 118.04 | 173.6 | 229.16 | 284.72 | 340.28 | 395.84 | 451.4 | 506.96 | 562.52 | 618.08 |
| 8.65 | 64.21 | 119.77 | 175.33 | 230.89 | 286.45 | 342.01 | 397.57 | 453.13 | 508.69 | 564.25 | 619.81 |
| 10.38 | 65.94 | 121.5 | 177.06 | 232.62 | 288.18 | 343.74 | 399.3 | 454.86 | 510.42 | 565.98 | 621.54 |
| 12.11 | 67.67 | 123.23 | 178.79 | 234.35 | 289.91 | 345.47 | 401.03 | 456.59 | 512.15 | 567.71 | 623.27 |
| 13.84 | 69.4 | 124.96 | 180.52 | 236.08 | 291.64 | 347.2 | 402.76 | 458.32 | 513.88 | 569.44 | 625 |
| 15.57 | 71.13 | 126.69 | 182.25 | 237.81 | 293.37 | 348.93 | 404.49 | 460.05 | 515.61 | 571.17 | 626.73 |
| 17.3 | 72.86 | 128.42 | 183.98 | 239.54 | 295.1 | 350.66 | 406.22 | 461.78 | 517.34 | 572.9 | 628.46 |
| 19.03 | 74.59 | 130.15 | 185.71 | 241.27 | 296.83 | 352.39 | 407.95 | 463.51 | 519.07 | 574.63 | 630.19 |
| 20.76 | 76.32 | 131.88 | 187.44 | 243 | 298.56 | 354.12 | 409.68 | 465.24 | 520.8 | 576.36 | 631.92 |
| 22.49 | 78.05 | 133.61 | 189.17 | 244.73 | 300.29 | 355.85 | 411.41 | 466.97 | 522.53 | 578.09 | 633.65 |
| 24.22 | 79.78 | 135.34 | 190.9 | 246.46 | 302.02 | 357.58 | 413.14 | 468.7 | 524.26 | 579.82 | 635.38 |
| 25.95 | 81.51 | 137.07 | 192.63 | 248.19 | 303.75 | 359.31 | 414.87 | 470.43 | 525.99 | 581.55 | 637.11 |
| 27.68 | 83.24 | 138.8 | 194.36 | 249.92 | 305.48 | 361.04 | 416.6 | 472.16 | 527.72 | 583.28 | 638.84 |
| 29.41 | 84.97 | 140.53 | 196.09 | 251.65 | 307.21 | 362.77 | 418.33 | 473.89 | 529.45 | 585.01 | 640.57 |
| 31.14 | 86.7 | 142.26 | 197.82 | 253.38 | 308.94 | 364.5 | 420.06 | 475.62 | 531.18 | 586.74 | 642.3 |
| 32.87 | 88.43 | 143.99 | 199.55 | 255.11 | 310.67 | 366.23 | 421.79 | 477.35 | 532.91 | 588.47 | 644.03 |
| 34.6 | 90.16 | 145.72 | 201.28 | 256.84 | 312.4 | 367.96 | 423.52 | 479.08 | 534.64 | 590.2 | 645.76 |
| 36.33 | 91.89 | 147.45 | 203.01 | 258.57 | 314.13 | 369.69 | 425.25 | 480.81 | 536.37 | 591.93 | 647.49 |
| 38.06 | 93.62 | 149.18 | 204.74 | 260.3 | 315.86 | 371.42 | 426.98 | 482.54 | 538.1 | 593.66 | 649.22 |
| 39.79 | 95.35 | 150.91 | 206.47 | 262.03 | 317.59 | 373.15 | 428.71 | 484.27 | 539.83 | 595.39 | 650.95 |
| 41.52 | 97.08 | 152.64 | 208.2 | 263.76 | 319.32 | 374.88 | 430.44 | 486 | 541.56 | 597.12 | 652.68 |
| 43.25 | 98.81 | 154.37 | 209.93 | 265.49 | 321.05 | 376.61 | 432.17 | 487.73 | 543.29 | 598.85 | 654.41 |
| 44.98 | 100.54 | 156.1 | 211.66 | 267.22 | 322.78 | 378.34 | 433.9 | 489.46 | 545.02 | 600.58 | 656.14 |
| 46.71 | 102.27 | 157.83 | 213.39 | 268.95 | 324.51 | 380.07 | 435.63 | 491.19 | 546.75 | 602.31 | 657.87 |
| 48.44 | 104 | 159.56 | 215.12 | 270.68 | 326.24 | 381.8 | 437.36 | 492.92 | 548.48 | 604.04 | 659.6 |
| 50.17 | 105.73 | 161.29 | 216.85 | 272.41 | 327.97 | 383.53 | 439.09 | 494.65 | 550.21 | 605.77 | 661.33 |
| 51.9 | 107.46 | 163.02 | 218.58 | 274.14 | 329.7 | 385.26 | 440.82 | 496.38 | 551.94 | 607.5 | 663.06 |
| 53.63 | 109.19 | 164.75 | 220.31 | 275.87 | 331.43 | 386.99 | 442.55 | 498.11 | 553.67 | 609.23 | 664.79 |

表 33 MSOP Packet 中双回波每个激光点的时间偏移量(us)


| Data Block |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| 0.00 | 0.00 | 55.56 | 55.56 | 111.12 | 111.12 | 166.68 | 166.68 | 222.24 | 222.24 | 277.80 | 277.80 |
| 1.74 | 1.74 | 57.30 | 57.30 | 112.86 | 112.86 | 168.42 | 168.42 | 223.98 | 223.98 | 279.54 | 279.54 |
| 3.47 | 3.47 | 59.03 | 59.03 | 114.59 | 114.59 | 170.15 | 170.15 | 225.71 | 225.71 | 281.27 | 281.27 |
| 5.21 | 5.21 | 60.77 | 60.77 | 116.33 | 116.33 | 171.89 | 171.89 | 227.45 | 227.45 | 283.01 | 283.01 |
| 6.94 | 6.94 | 62.50 | 62.50 | 118.06 | 118.06 | 173.62 | 173.62 | 229.18 | 229.18 | 284.74 | 284.74 |
| 8.68 | 8.68 | 64.24 | 64.24 | 119.80 | 119.80 | 175.36 | 175.36 | 230.92 | 230.92 | 286.48 | 286.48 |
| 10.42 | 10.42 | 65.98 | 65.98 | 121.54 | 121.54 | 177.10 | 177.10 | 232.66 | 232.66 | 288.22 | 288.22 |
| 12.15 | 12.15 | 67.71 | 67.71 | 123.27 | 123.27 | 178.83 | 178.83 | 234.39 | 234.39 | 289.95 | 289.95 |
| 13.89 | 13.89 | 69.45 | 69.45 | 125.01 | 125.01 | 180.57 | 180.57 | 236.13 | 236.13 | 291.69 | 291.69 |
| 15.62 | 15.62 | 71.18 | 71.18 | 126.74 | 126.74 | 182.30 | 182.30 | 237.86 | 237.86 | 293.42 | 293.42 |
| 17.36 | 17.36 | 72.92 | 72.92 | 128.48 | 128.48 | 184.04 | 184.04 | 239.60 | 239.60 | 295.16 | 295.16 |
| 19.10 | 19.10 | 74.66 | 74.66 | 130.22 | 130.22 | 185.78 | 185.78 | 241.34 | 241.34 | 296.90 | 296.90 |
| 20.83 | 20.83 | 76.39 | 76.39 | 131.95 | 131.95 | 187.51 | 187.51 | 243.07 | 243.07 | 298.63 | 298.63 |
| 22.57 | 22.57 | 78.13 | 78.13 | 133.69 | 133.69 | 189.25 | 189.25 | 244.81 | 244.81 | 300.37 | 300.37 |
| 24.30 | 24.30 | 79.86 | 79.86 | 135.42 | 135.42 | 190.98 | 190.98 | 246.54 | 246.54 | 302.10 | 302.10 |
| 26.04 | 26.04 | 81.60 | 81.60 | 137.16 | 137.16 | 192.72 | 192.72 | 248.28 | 248.28 | 303.84 | 303.84 |
| 27.78 | 27.78 | 83.34 | 83.34 | 138.90 | 138.90 | 194.46 | 194.46 | 250.02 | 250.02 | 305.58 | 305.58 |
| 29.51 | 29.51 | 85.07 | 85.07 | 140.63 | 140.63 | 196.19 | 196.19 | 251.75 | 251.75 | 307.31 | 307.31 |
| 31.25 | 31.25 | 86.81 | 86.81 | 142.37 | 142.37 | 197.93 | 197.93 | 253.49 | 253.49 | 309.05 | 309.05 |
| 32.98 | 32.98 | 88.54 | 88.54 | 144.10 | 144.10 | 199.66 | 199.66 | 255.22 | 255.22 | 310.78 | 310.78 |
| 34.72 | 34.72 | 90.28 | 90.28 | 145.84 | 145.84 | 201.40 | 201.40 | 256.96 | 256.96 | 312.52 | 312.52 |
| 36.46 | 36.46 | 92.02 | 92.02 | 147.58 | 147.58 | 203.14 | 203.14 | 258.70 | 258.70 | 314.26 | 314.26 |
| 38.19 | 38.19 | 93.75 | 93.75 | 149.31 | 149.31 | 204.87 | 204.87 | 260.43 | 260.43 | 315.99 | 315.99 |
| 39.93 | 39.93 | 95.49 | 95.49 | 151.05 | 151.05 | 206.61 | 206.61 | 262.17 | 262.17 | 317.73 | 317.73 |
| 41.66 | 41.66 | 97.22 | 97.22 | 152.78 | 152.78 | 208.34 | 208.34 | 263.90 | 263.90 | 319.46 | 319.46 |
| 43.40 | 43.40 | 98.96 | 98.96 | 154.52 | 154.52 | 210.08 | 210.08 | 265.64 | 265.64 | 321.20 | 321.20 |
| 45.14 | 45.14 | 100.70 | 100.70 | 156.26 | 156.26 | 211.82 | 211.82 | 267.38 | 267.38 | 322.94 | 322.94 |
| 46.87 | 46.87 | 102.43 | 102.43 | 157.99 | 157.99 | 213.55 | 213.55 | 269.11 | 269.11 | 324.67 | 324.67 |
| 48.61 | 48.61 | 104.17 | 104.17 | 159.73 | 159.73 | 215.29 | 215.29 | 270.85 | 270.85 | 326.41 | 326.41 |
| 50.34 | 50.34 | 105.90 | 105.90 | 161.46 | 161.46 | 217.02 | 217.02 | 272.58 | 272.58 | 328.14 | 328.14 |
| 52.08 | 52.08 | 107.64 | 107.64 | 163.20 | 163.20 | 218.76 | 218.76 | 274.32 | 274.32 | 329.88 | 329.88 |
| 53.82 | 53.82 | 109.38 | 109.38 | 164.94 | 164.94 | 220.50 | 220.50 | 276.06 | 276.06 | 331.62 | 331.62 |

## 附录 E 各型号通道能力测距对应表


表 34 70° FOV 各通道测距能力对应表


| 通道序号 | 垂直角度(°) | 测距@10%目标反射物(米) | 最远测距(米) |
| --- | --- | --- | --- |
| 1 | 15 | 90 | 100 |
| 2 | 13 | 90 | 100 |
| 3 | 11 | 90 | 100 |
| 4 | 9 | 90 | 100 |
| 5 | 7 | 90 | 100 |
| 6 | 5.5 | 90 | 100 |
| 7 | 4 | 110 | 150 |
| 8 | 2.67 | 110 | 150 |
| 9 | 1.33 | 110 | 150 |
| 10 | 0 | 110 | 150 |
| 11 | -1.33 | 110 | 150 |
| 12 | -2.67 | 110 | 150 |
| 13 | -4 | 110 | 150 |
| 14 | -5.33 | 90 | 100 |
| 15 | -6.67 | 90 | 100 |
| 16 | -8 | 90 | 100 |
| 17 | -10 | 40 | 50 |
| 18 | -16 | 40 | 50 |
| 19 | -13 | 40 | 50 |
| 20 | -19 | 40 | 50 |
| 21 | -22 | 40 | 50 |
| 22 | -28 | 40 | 50 |
| 23 | -25 | 40 | 50 |
| 24 | -31 | 40 | 50 |
| 25 | -34 | 40 | 50 |
| 26 | -37 | 40 | 50 |
| 27 | -40 | 40 | 50 |
| 28 | -43 | 40 | 50 |
| 29 | -46 | 20 | 30 |
| 30 | -49 | 20 | 30 |
| 31 | -52 | 20 | 30 |
| 32 | -55 | 10 | 20 |

表 35 31° FOV 各通道测距能力对应表


| 通道序号 | 垂直角度(°) | 测距@10%目标反射物(米) | 最远测距(米) |
| --- | --- | --- | --- |
| 18 | 15 | 90 | 120 |
| 2 | 14 | 90 | 120 |
| 17 | 13 | 90 | 120 |
| 1 | 12 | 90 | 120 |
| 20 | 11 | 90 | 120 |
| 4 | 10 | 110 | 150 |
| 19 | 9 | 110 | 150 |
| 3 | 8 | 110 | 150 |
| 22 | 7 | 110 | 150 |
| 6 | 6 | 110 | 150 |
| 21 | 5 | 110 | 150 |
| 5 | 4 | 110 | 150 |
| 24 | 3 | 110 | 150 |
| 8 | 2 | 110 | 150 |
| 23 | 1 | 110 | 150 |
| 7 | 0 | 110 | 150 |
| 26 | -1 | 110 | 150 |
| 10 | -2 | 110 | 150 |
| 25 | -3 | 110 | 150 |
| 9 | -4 | 110 | 150 |
| 28 | -5 | 110 | 150 |
| 12 | -6 | 110 | 150 |
| 27 | -7 | 110 | 150 |
| 11 | -8 | 110 | 150 |
| 30 | -9 | 110 | 150 |
| 14 | -10 | 110 | 150 |
| 29 | -11 | 90 | 120 |
| 13 | -12 | 90 | 120 |
| 32 | -13 | 90 | 120 |
| 16 | -14 | 90 | 120 |
| 31 | -15 | 90 | 120 |
| 15 | -16 | 90 | 120 |

表 36 26° FOV 各通道测距能力对应表


| 通道序号 | 垂直角度(°) | 测距@10%目标反射物(米) | 最远测距(米) |
| --- | --- | --- | --- |
| 16 | 10 | 90 | 120 |
| 32 | 7 | 90 | 120 |
| 14 | 5 | 110 | 150 |
| 30 | 3.5 | 110 | 150 |
| 31 | 3 | 110 | 150 |
| 7 | 2.5 | 110 | 150 |
| 12 | 2 | 110 | 150 |
| 23 | 1.5 | 110 | 150 |
| 15 | 1 | 110 | 150 |
| 28 | 0.5 | 110 | 150 |
| 29 | 0 | 110 | 150 |
| 5 | -0.5 | 110 | 150 |
| 10 | -1 | 110 | 150 |
| 21 | -1.5 | 110 | 150 |
| 13 | -2 | 110 | 150 |
| 26 | -2.5 | 110 | 150 |
| 27 | -3 | 110 | 150 |
| 3 | -3.5 | 110 | 150 |
| 8 | -4 | 110 | 150 |
| 19 | -4.5 | 110 | 150 |
| 11 | -5 | 110 | 150 |
| 24 | -5.5 | 110 | 150 |
| 25 | -6 | 110 | 150 |
| 1 | -6.5 | 110 | 150 |
| 6 | -7 | 110 | 150 |
| 9 | -8 | 110 | 150 |
| 22 | -9 | 90 | 120 |
| 4 | -10 | 90 | 120 |
| 17 | -11 | 90 | 120 |
| 20 | -12 | 90 | 120 |
| 2 | -13.5 | 90 | 120 |
| 18 | -16 | 90 | 120 |

## 附录 F 反射强度非线性映射


表 37 反射强度非线性映射表


| 真实反射强度 | ReflectivityEnhance | 真实反射强度 | ReflectivityEnhance | 真实反射强度 | ReflectivityEnhance | 真实反射强度 | ReflectivityEnhance | 真实反射强度 | ReflectivityEnhance | 真实反射强度 | ReflectivityEnhance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 44 | 68 | 87 | 106 | 130 | 144 | 173 | 183 | 216 | 221 |
| 2 | 1 | 45 | 69 | 88 | 107 | 131 | 145 | 174 | 183 | 217 | 222 |
| 3 | 1 | 46 | 70 | 89 | 108 | 132 | 146 | 175 | 184 | 218 | 222 |
| 4 | 2 | 47 | 71 | 90 | 109 | 133 | 147 | 176 | 185 | 219 | 223 |
| 5 | 3 | 48 | 71 | 91 | 110 | 134 | 148 | 177 | 186 | 220 | 224 |
| 6 | 4 | 49 | 72 | 92 | 111 | 135 | 149 | 178 | 187 | 221 | 225 |
| 7 | 7 | 50 | 73 | 93 | 112 | 136 | 150 | 179 | 188 | 222 | 226 |
| 8 | 8 | 51 | 73 | 94 | 112 | 137 | 151 | 180 | 189 | 223 | 227 |
| 9 | 9 | 52 | 74 | 95 | 113 | 138 | 151 | 181 | 190 | 224 | 228 |
| 10 | 10 | 53 | 76 | 96 | 114 | 139 | 152 | 182 | 190 | 225 | 229 |
| 11 | 15 | 54 | 77 | 97 | 115 | 140 | 153 | 183 | 191 | 226 | 229 |
| 12 | 17 | 55 | 78 | 98 | 116 | 141 | 154 | 184 | 192 | 227 | 230 |
| 13 | 20 | 56 | 79 | 99 | 117 | 142 | 155 | 185 | 193 | 228 | 231 |
| 14 | 24 | 57 | 80 | 100 | 118 | 143 | 156 | 186 | 194 | 229 | 232 |
| 15 | 27 | 58 | 81 | 101 | 119 | 144 | 157 | 187 | 195 | 230 | 233 |
| 16 | 31 | 59 | 81 | 102 | 119 | 145 | 158 | 188 | 196 | 231 | 234 |
| 17 | 34 | 60 | 82 | 103 | 120 | 146 | 159 | 189 | 197 | 232 | 235 |
| 18 | 37 | 61 | 83 | 104 | 121 | 147 | 159 | 190 | 198 | 233 | 236 |
| 19 | 40 | 62 | 84 | 105 | 122 | 148 | 160 | 191 | 198 | 234 | 237 |
| 20 | 42 | 63 | 85 | 106 | 123 | 149 | 161 | 192 | 199 | 235 | 237 |
| 21 | 44 | 64 | 86 | 107 | 124 | 150 | 162 | 193 | 200 | 236 | 238 |
| 22 | 48 | 65 | 87 | 108 | 125 | 151 | 163 | 194 | 201 | 237 | 239 |
| 23 | 49 | 66 | 88 | 109 | 126 | 152 | 164 | 195 | 202 | 238 | 240 |
| 24 | 50 | 67 | 89 | 110 | 127 | 153 | 165 | 196 | 203 | 239 | 241 |
| 25 | 51 | 68 | 90 | 111 | 127 | 154 | 166 | 197 | 204 | 240 | 242 |
| 26 | 52 | 69 | 91 | 112 | 128 | 155 | 167 | 198 | 205 | 241 | 243 |
| 27 | 53 | 70 | 92 | 113 | 129 | 156 | 168 | 199 | 206 | 242 | 244 |
| 28 | 54 | 71 | 92 | 114 | 130 | 157 | 168 | 200 | 206 | 243 | 245 |
| 29 | 55 | 72 | 93 | 115 | 131 | 158 | 169 | 201 | 207 | 244 | 245 |
| 30 | 56 | 73 | 94 | 116 | 132 | 159 | 170 | 202 | 208 | 245 | 246 |
| 31 | 57 | 74 | 95 | 117 | 133 | 160 | 171 | 203 | 209 | 246 | 247 |
| 32 | 58 | 75 | 95 | 118 | 134 | 161 | 172 | 204 | 210 | 247 | 248 |
| 33 | 59 | 76 | 96 | 119 | 135 | 162 | 173 | 205 | 211 | 248 | 249 |
| 34 | 60 | 77 | 97 | 120 | 136 | 163 | 174 | 206 | 212 | 249 | 250 |
| 35 | 60 | 78 | 98 | 121 | 136 | 164 | 175 | 207 | 213 | 250 | 251 |
| 36 | 61 | 79 | 99 | 122 | 137 | 165 | 175 | 208 | 214 | 251 | 252 |
| 37 | 62 | 80 | 100 | 123 | 138 | 166 | 176 | 209 | 214 | 252 | 253 |
| 38 | 63 | 81 | 101 | 124 | 139 | 167 | 177 | 210 | 215 | 253 | 253 |
| 39 | 64 | 82 | 102 | 125 | 140 | 168 | 178 | 211 | 216 | 254 | 255 |
| 40 | 65 | 83 | 103 | 126 | 141 | 169 | 179 | 212 | 217 | 255 | 255 |
| 41 | 66 | 84 | 104 | 127 | 142 | 170 | 180 | 213 | 218 | / | / |
| 42 | 67 | 85 | 105 | 128 | 143 | 171 | 181 | 214 | 219 | / | / |
| 43 | 68 | 86 | 106 | 129 | 143 | 172 | 182 | 215 | 220 | / | / |

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/cebe29a7661184791f6700a8f1d2debf8953657e5a0f0745a41b4784774324e4.jpg)


图 26 反射强度映射图


## 附录 G 结构图纸


$70^{\circ}$ FOV:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/b05583d9de660c86fadb4bc7b17fc07c251d63ffb1dd7baadcc6c3108cfe37aa.jpg)


$31^{\circ}$ FOV:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/9ac8a97ebb3498fdcea45b7ef8b22779d90007ccee58c82d9af20d02d03a18fb.jpg)


$26^{\circ}$ FOV:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/dba2200c811fe44a7595ec1d3d6664037fc2af90cda26780cbdfaa50e55bb118.jpg)


Common:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/304c3a4f46463509d10459f8eead39b50930c85d9fa18dd20ef9ec25741b924c.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/8a803e9a302498bb75ea833adbc0fb2a1dca32c2eae525a3d6b1b500e5a728a7.jpg)


robosense 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/b5c5534e-18c7-41fb-b1cf-427d8c00b5fa/a29013c73f0ad94554985a8ed195ddb21186f81b1935dd7d772789eb117dae19.jpg)


深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区2区9栋
www.robosense.ai
