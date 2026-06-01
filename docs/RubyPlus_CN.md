# Ruby Plus 产品手册

**手册版本 V1.2**

---

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/a39f7f27c8f667c83a58e7acf2166ceda20dd348ebd0bd8fcbc6b671c2910fab.jpg)


## 变更说明

| 版本 | 修订日期 | 说明 |
| --- | --- | --- |
| 1.0 | 2023/8/19 | 初版发布 |
| 1.1 | 2023/10/31 | 1. 更新图 13 坐标系2. 更新 MSOP 包描述,修正距离分辨率值;3. 雷达重量补充公差范围 |
| 1.2 | 2024/7/16 | 1. 雷达重量勘误2. 时间同步寄存器状态位勘误 |

## 阅读提示

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

请按以下要求，规范使用本产品：

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

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/d54f7f4708e90ee2868d19051820012cb3dc0dbac9d6e31a0e91a6477ebb01c5.jpg)


2) 高温注意：注意表面过热标识，谨防发生意外。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/19f8269b2a4f50cba23310b95553cd47be7c63bafeefc7dddb3df8c84d0b636e.jpg)


3) 保留说明：请保留所有安全和操作说明，以备将来参考。

4) 注意警告：请遵守产品和操作说明中的所有警告，以免发生意外。

5) 产品维修：请勿在缺少官方指导的情况下尝试打开产品进行维修。如需维修，请及时联系 RoboSense。

## 2 产品描述

### 2.1 产品概要

Ruby Plus 为 RoboSense 全新旗舰级 128 线激光雷达，采用模块化的全新结构设计，面向 L4+自动驾驶打造。

Ruby Plus 测距能力突破到 240 米@10%反射强度, 结合最高 0.1°垂直角分辨, 0.1°水平角分辨率（高性能模式），在垂直方向和水平方向提供更密集的点云信息，实现超远距离的行人、车辆检测，大幅增加高速驾驶的响应时间。与此同时，Ruby Plus 也具有更强的地面与车道线检测能力。

与上一代产品相比, Ruby Plus 体积降低 52%, 重量降低 50%, 功耗下降 33%。

### 2.2 产品结构

Ruby Plus 结构图如图 1 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/abc05d0ba9dac14e5a486205eb6f8edf72648da097a9fa0cf36afc22905df932.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/c383278347b094bcac9e6da599c1537dd831c4e1d1cca294a448aa31c72763df.jpg)


图 1 产品结构说明图


主要包括以下结构:

1. **防护罩**：

激光雷达发射激光束和接收到的激光回波都需透过弧形特制防护罩, 因此在激光发散的 FOV 范围内, 严禁遮挡。

2. **航空插头**：

激光雷达本体通过航插头与接口盒连接，实现供电和数据传输的功能。Ruby

Plus 底座有两个航插头，分别为 4 芯通信航插头、16 芯电源与 I/O 信号连接航插头。

3. **定位孔**：

用于支撑、固定激光雷达与支架之间的位置和方向，可提高安装效率与精度。

4. **M4 螺钉安装孔**：

用于激光雷达与安装支架间的固定，通过 M4 螺丝进行锁紧。

### 2.3 FOV分布

Ruby Plus 的 FOV 在水平方向的角度范围是 $0 \sim 360^{\circ}$ ，在垂直方向的角度范围是 $-25^{\circ} \sim +15^{\circ}$ ，角度间隔最小 $0.1^{\circ}$ 非均匀分布。将 128 个激光器定义为 128 路通道，与真实的垂直角度对应关系如图 2(b) 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/5b9b229c45bb5b056efde5ce259c4035062fa45e5135f2452cd5b0f97ed80c9e.jpg)


(a)FOV 区域分布


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/3859c809da22acb7d33003ee4e4e728353b5ab616ee63d959a2994fb947d602c.jpg)


(b)垂直方向角度分布


图 2 FOV 示意图


### 2.4 规格参数


表 1 Ruby Plus 规格参数


| 规格参数 |  |  |  |
| --- | --- | --- | --- |
| 线数 | 128 | 水平视场角 | 360° |
| 激光波长 | 905 nm | 垂直视场角 | -25°~+15°(共40°) |
| 激光发射角(全角) | 水平1.0 mrad垂直1.7 mrad | 水平角分辨率 | 0.2°/0.4°(均衡模式)0.1°/0.2°(高性能模式) |
| 激光安全等级 | Class 1 人眼安全 | 垂直角分辨率 | -6.5°~+3.81°:0.1°(104个通道) |
| 测距能力1 | 0.4 m至250 m(240 m @ 10%) NIST | 精度2(典型值) | 2 cm (1σ) / 3 cm (3σ) |
| 盲区 | 0.4 m | 帧率 | 10 Hz / 20 Hz |
| 转速 | 600 / 1200 rpm(10 / 20 Hz) |  |  |
| 出点数 | 2,304,000 pts/s (单回波模式), 4,608,000 pts/s (双回波模式)4,608,000 pts/s (高性能模式), 9,216,000 pts/s (高性能模式) |  |  |
| 以太网输出 | 1000 Mbps (1000Base-T1 协议) |  |  |
| 输出数据协议 | UDP packets over Ethernet |  |  |
| 激光雷达数据包内容 | 三维空间坐标、反射强度、时间戳等 |  |  |
| 工作电压 | 9 V – 32 V | 尺寸 | 直径125 mm × 高128 mm |
| 产品功率3 | 27 W (典型值) | 工作温度4 | -40°C ~ +60°C |
| 重量 | 1920g ± 50g(激光雷达本体) | 存储温度 | -40°C ~ +85°C |
| 时间同步 | GPS, PTP & gPTP | 防护等级 | IP67 / IP6K9K |
| 产品型号 | RP128 |  |  |

> **提示说明**：

不推荐高性能模式与双回波模式同时使用。因数据量过大，可能会存在丢包风险。

### 2.5 产品原理

#### 2.5.1 坐标映射

由于激光雷达封装的数据包仅为水平旋转角度和距离参量, 为了呈现三维点云图的效果, 将极坐标下的角度和距离信息转化为了笛卡尔坐标系下的 x, y, z 坐标, 它们的转换关系如下式所示:

$$
\left\{ \begin{array}{l} x = r   c o s (\omega)   s i n (\alpha) + R   c o s (\alpha); \\ y = r   c o s (\omega)   c o s (\alpha) + R   s i n (\alpha); \\ z = r   s i n (\omega); \end{array} \right.
$$

其中 r 为实测距离， $\omega$ 为激光的垂直角度， $\alpha$ 为激光的水平旋转角度，R 为光

心到原点的平面半径，x, y, z 为极坐标投影到笛卡尔 X, Y, Z 轴上的坐标。

#### 2.5.2 反射强度解读

Ruby Plus 激光雷达提供了反射强度信息来表征被测物体的反射率。在 Ruby Plus 数据中，标定后的反射强度范围区间为 1～255。

#### 2.5.3 回波模式

##### 2.5.3.1 回波模式原理

Ruby Plus 支持多种回波模式，包括最强回波(Strongest Return)、最后回波(Last Return)、最近回波(First Return)及双回波(Dual Return)模式。在双回波模式下，目标物的详细信息得以展现，且数据量是单回波的两倍。

Ruby Plus 能够分析接收到的多个返回值，并根据用户选择分别输出最强、最后、最近一个回波值，或者输出双回波值。若设置为最强回波模式，则仅输出最强的反射回波值；若设置为最后回波模式，则仅输出时域上检测到的最后回波。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/70d91c93e3add573304b356fa63e7945fdee1c6327b7c8cede9b79ed6c6c4013.jpg)


图 3 双回波检测


> **提示说明**：

1) 双回波模式含第一和最强回波（First&Strong）、第一和最后回波（First&Last）、最强和最后回波（Strong&Last）。

2) 在双回波模式下，当激光打到多个目标物，且目标物之间距离大于 1 米时，激光雷达可检测到两个回波，如图 3 所示。

##### 2.5.3.2 回波模式标志

Ruby Plus 出厂默认为最强回波（Strongest Return）模式，如若用户需更改设置，请参照章节 A.2 中产品参数设定进行配置。在 DIFOP 中第 300 个 byte 是回波模式的标志位，详情参见表 2。


表 2 回波模式和标志位对照表


| DIFOP Offset | 标志位 | 回波模式 |
| --- | --- | --- |
| 300 | 00 | 最强回波 |
| 300 | 01 | 最后回波 |
| 300 | 02 | 第一回波 |
| 300 | 03 | 最强+最后回波 |
| 300 | 04 | 最强+第一回波 |
| 300 | 05 | 最后+第一回波 |

#### 2.5.4 相位锁定

Ruby Plus 相位锁定功能可用于设定 Ruby Plus 在整秒时刻, 传感器旋转到特定的角度发射激光。

图 4 为 Ruby Plus 设置不同相位的示意图，红色箭头表明，在整秒时刻，传感器分别旋转到 $0^{\circ}$ 、 $135^{\circ}$ 、 $270^{\circ}$ 发射激光，坐标系详情参见图 13。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/dbc5e0d62d3dc2479cb38f0a50a920b34222c1d295ce5e9465dad37f7cb5a1a7.jpg)


图 4 Ruby Plus 不同相位设定示意图


Web 端 Setting > Phase Lock Setting 中提供了一个“Phase Lock”的参数设定，可用于设定锁定的相位角度，输入范围为 0 ~ 359 的整数，详情参见产品手册章节 4.2。

#### 2.5.5 时间同步方式

Ruby Plus 支持 GPS+PPS、PTP（IEEE 1588V2 协议）、gPTP（IEEE802.1AS 协议）三种同步方式，用户可在 Web 端进行设置，详情参见产品手册章节 4.2。

##### 2.5.5.1 GPS 时间同步原理

GPS 模块连续向产品发送 GPRMC 数据和 PPS 同步脉冲信号，PPS 同步脉冲长度为 20～200 ms，GPRMC 数据必须在同步脉冲 500 ms 内完成，时序图如图 5 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/c83531deed1e53883de2ed5ea757989a83199610e5c0e18c7b3b8edce2c472b6.jpg)


图 5 GPS 时间同步时序图


> **提示说明**：

为确保时间同步的准确性，建议将 PPS 的脉宽设置在 20～200 ms 之间。GPRMC 的完成时间建议为 PPS 上升沿后 500 ms 内。

##### 2.5.5.2 GPS 时间同步使用

Ruby Plus 激光雷达 GPS_REC 接口电平协议为 RS232 电平标准，详情参见表 3。


表 3 产品授时引脚定义


| 通讯方式 | 接收引脚定义 |  |
| 通讯方式 | GPS GPRMC | GPS PULSE |
| --- | --- | --- |
| RS232 | 接 GPS 模块输出的 RS232 电平标准的串口数据 | 接 GPS 模块输出的正同步脉冲信号,电平要求 3.0~15.0 V |

外接的 GPS 模块需要设置输出串口的波特率为 9600 bps，数据位 8 bits，无校验位，停止位 1 bit。Ruby Plus 只读取 GPS 模块发出的 GPRMC 格式的数据，其标准格式如下：

```txt
$GPRMC,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>,<10>,<11>,<12>*hh 
```

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

<12> 模式指示(A = 自主定位，D = 差分，E = 估算，N = 数据无效)

*后 hh 为$到*所有字符的异或和。

> **提示说明**：

1) Ruby Plus 电源盒上面的电源盒上面的 GPS_GPRMC 接口规格为 JST S12B-J11DK-TXR，引脚定义如表 8 所示；

2) 1 PPS 脉冲的发送时间间隔需控制在 $1 \, s \pm 200 \, us$ 内；

3) GPRMC 消息中状态位必须在 A 有效的情况才允许进行时间同步授时；

4) 目前市场的 GPS 模块发出的 GPRMC 消息长度存在不一致情况，本产品可兼容市场上大部分 GPS 模块发出来的 GPRMC 消息格式，如果在使用过程中发现不兼容的情况，请联系 RoboSense。

##### 2.5.5.3 PTP 同步原理

PTP（Precision Time Protocol，IEEE 1588V2 协议）是一种时间同步的协议，其本身只是用于设备之间的高精度时间同步，但也可被借用于设备之间的频率同步。相比现有的各种时间同步机制，PTP 具备以下优势：

1) 相比 NTP（Network Time Protocol，网络时间协议），PTP 能够满足更高精度的时间同步要求，NTP 一般只能达到亚秒级的时间同步精度，而 PTP 则可达到亚微秒级。

2) 相比 GPS（Global Positioning System，全球定位系统），PTP 具备更低的建设和维护成本。

##### 2.5.5.4 gPTP 同步原理

gPTP(general Precise Time Protocol, IEEE802.1AS 协议)是 PTP 在时效性网络（Time-Sensitive Networking）的派生协议。同步机制采用和 PTP 协议一致的 P2P 端延迟机制（Peer Delay Mechanism），同时采用以太网 L2 层通信。与 PTP 不同，gPTP 要求使用硬件方式打时间戳，即硬件时间戳，所以对于交换机和 Master 时钟要求较为严苛，需满足 IEEE802.1AS 协议。

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

Ruby Plus 出货配件清单如表 4 所示，清单仅供参考。


表 4 出厂标准配件清单


| 序号 | 配件名称 | 规格 | 数量 |
| --- | --- | --- | --- |
| 1 | 激光雷达LiDAR | Ruby Plus | 1 |
| 2 | 接口盒Interface Box | / | 1 |
| 3 | 电源适配器Power Adapter | DC12 V × 3.34 A /40 W | 1 |
| 4 | 电源线Power Cable | 1.2 m | 1 |
| 5 | 网线Ethernet Cable | 1.5 m | 1 |
| 6 | 螺丝包Screw Pack | M4 × 10 | 3 |
| 7 | 4芯航插线4 pin Airline | 默认3 m4 m/6 m/12 m 可选 | 1 |
| 8 | 16芯航插线16 pin Airline | 默认3 m4 m/6 m/12 m 可选 | 1 |
| 9 | 产品包装清单和出货检验报告Product Packing List and Shipment Inspection Report | / | 1 |

如特殊要求请以商务协议为准。


### 3.2 机械安装

激光雷达的结构安装图如图 6 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/29451084ac8a8bcf6afc524b3cecfc4ab34161ff3cf5cab209193c4450e013ba.jpg)


图 6 激光雷达结构安装示意图


1. **螺丝规格**：

GB / T70.1，M4 × 10，内六角杯头，A2 - 70 不锈钢。

2. **安装要求**：

a) 安装面平面度应优于 0.2 mm;

b) 底面用 4 个 M4 螺钉安装，出安装面 6～8 mm，推荐锁紧扭矩 $18 \pm 1$ kgf.cm;

c) 底面用 2 个 $\varphi3$ 定位销进行安装定位，不能高于 4 mm;

d) 激光雷达安装倾斜角度不超过 $15^{\circ}$ ;

e) 激光雷达安装的时候，如果激光雷达上下面都有接触式的安装面，请确保安装面之间的间距大于激光雷达高度，避免挤压激光雷达；

f) 激光雷达安装走线时,请勿使激光雷达接线线缆太过紧绷(预留2 cm以上安装裕量),确保线缆具有一定的松弛度;

3. **支架刚度和强度要求**：

a) 固定支架需有较好的刚性用于安装固定激光雷达，并在各种工况下保持激光雷达处于一个稳定的状态，因此要求激光雷达及其固定支架整体的一阶模态频率至少大于 50 Hz;

b) 激光雷达在使用过程中会经受各种随机振动、机械冲击等工况。在这些工况下，支架需承受较大的负载，因此支架还需有足够的强度。支架材质建议使用铝合金(厚度 5 mm 以上)或镀锌钢板(厚度 3 mm 以上)，同时在各个方向尽可能增加加强筋以提高其刚度和强度，

尽量避免设计出现尖角或小于 0.3 mm 的圆角、缺口等易产生应力集中的结构，支架强度需要经过仿真校核。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/9a209382ecf375805478077e43cb2ccf0fc86b976ec115b39462ca931b1f6c27.jpg)


图 7 激光雷达底部定位销及螺丝示意图


4. **散热要求**：

a) 支架材料建议采用导热系数大于 $50 \, W/m \cdot K$ 的铝合金或者镀锌钢板等材料，尽量在支架上做一些散热鳍片，并合理的控制鳍片间距、高度和方向，尽量增大散热面积，方向上与空气对流方向一致，可以更有效散热；

b) 激光雷达底座或顶盖部位，确保不被非金属材质包覆，以免影响整机散热，造成激光雷达温升过高。

### 3.3 接口说明

#### 3.3.1 航插接口及定义

Ruby Plus 使用 2 个航插接口，如图 8、图 9 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/e9d2e4d5a22517b88e68667a86558afe664cd347c889d64a50183150ec682e02.jpg)


图 8 4 芯航插线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/e48c31c32f85d04a8db0c029dc30b20e4bf8add1b5a47e312feaaff036846c59.jpg)


图 9 16 芯航插线


Ruby Plus 航插线接口引脚定义见表 5，表 6。


表 5 4 芯航插线接口定义


| A端序号 | 颜色 | 定义 | B端序号 |
| --- | --- | --- | --- |
| 1 | 红色 | TRD_P | a1 |
| 2 | 黑色 | TRD_N | b1 |
| 3 | 白色 | PGND | a2 |
| 4 | 绿色 | PGND | b2 |
| 外壳 | 屏蔽层 | PGND | a3 |
| 外壳 | 屏蔽层 | PGND | b3 |

表 6 16 芯航插线接口定义


| A 端线序 | 颜色 | 定义 | B 端线序 |
| --- | --- | --- | --- |
| 1 | 蓝色 | Power | a1 |
| 2 | 蓝白 | Power | b1 |
| 3 | 粉色 | Power | a2 |
| 4 | 灰色 | Power | b2 |
| 5 | 红色 | GND | a3 |
| 6 | 红白 | GND | b3 |
| 7 | 黑色 | GND | a4 |
| 8 | 黑白 | GND | b4 |
| 9 | 绿色 | / | a5 |
| 10 | 绿白 | / | b5 |
| 11 | 紫色 | PPS | a6 |
| 12 | 紫白 | GPRMC | b6 |
| 13 | 橙色 | SYNC_OUT 1 | a7 |
| 14 | 橙白 | SYNC_OUT 2 | b7 |
| 15 | 棕色 | SYNC_OUT 3 | a8 |
| 16 | 棕白 | PGND | b8 |
| 外壳 | 屏蔽层 | / | / |
| 外壳 | 屏蔽层 | / | / |
| / | / | / | a10 |
| / | / | / | b10 |

#### 3.3.2 接口盒接口

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/f6b2ecc61d1daa74f2abe6b6b69801bfde7978d0034fde0eb0dd285322773fcf.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/d58e92ce1e8e59ffd6968a298f597807dd132edf6d8809a130881c0d4dc7cb5a.jpg)


图 10 接口盒示意图


Ruby Plus 附件接口盒具有电源指示灯及各类的接口，如图 10 所示，可接驳电源输入、RJ45 网口及 GPS 输入线（航插版接口盒线长 3 m，有其它线长需求请联系 Robosense）。电源盒各接口规格详情参见表 7 - 表 9。


表 7 电源接口定义


| 序号 | 颜色 | 定义 |
| --- | --- | --- |
| PIN 1 | 黑色 | GND |
| PIN 2 | 黑色 | GND |
| PIN 3 | 蓝色 | Power |

表 8 I/O 口定义


| 序号 | 颜色 | 定义 |
| --- | --- | --- |
| PIN 1 | 蓝色 | +5 V(输出) |
| PIN 1 | 橙色 | SYNC_OUT_1 |
| PIN 2 | 紫色 | GPS_PPS |
| PIN 4 | 橙白色 | SYNC_OUT_2 |
| PIN 5 | 紫白色 | GPRMC |
| PIN 6 | 棕色 | SYNC_OUT_3 |
| PIN 7 | 红色 | GND |
| PIN 8 | / | / |
| PIN 9 | 红白色 | GND |
| PIN 10 | / | / |
| PIN 11 | 黑白色 | GND |
| PIN 12 | / | / |

表 9 电源盒规格


| 序号 | 接口名称 | 规格/型号(出线端) | 规格/型号(连接激光雷达端) |
| --- | --- | --- | --- |
| 1 | 电源输入 | JST S03B-J11SK-TXR | JST S20B-J11DK-TXR |
| 2 | I/O 接口 | JST S12B-J11DK-TXR | JST S20B-J11DK-TXR |
| 3 | 网络接口 | 标准 RJ45 接口 | JST S06B-J11Dk-TXR |

#### 3.3.3 电源接口

Ruby Plus 电源接口使用 JST S03B-J11SK-TXR 型号接插件，附赠一条包含标准 DC 5.5-2.1 转接线。

电源正常输入时，绿色指示灯常亮，当绿色指示灯熄灭，请检查电源输入是否正常，若电源输入正常，即接口盒可能已损坏，请联系 RoboSense。

#### 3.3.4 I/O 接口

Ruby Plus 接口盒定义及各接口相对应的位置如表 7 和表 8 所示：SYNC_OUT_1、SYNC_OUT_2、SYNC_OUT_3 为角度触发功能，可触发摄像头拍照；PPS+GPRMC 为 GPS 时间同步功能；+5 V 可为 GPS 供电使用。

重要说明：

Ruby Plus 的“地”与外部系统连接时，外部系统供电电源负极（“地”）与 GPS 系统的“地”必须为非隔离共地系统。

#### 3.3.5 RJ45 网口

Ruby Plus 本体只支持 T1 车载以太网, 使用电源盒时网络接口使用标准 RJ45 接口。

### 3.4 快速连接

Ruby Plus 网络参数可配置，出厂默认采用固定 IP 和端口号模式，详情参见表 10。


表 10 出厂默认网络配置表


| 设备 | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| --- | --- | --- | --- |
| Ruby Plus | 192.168.1.200 | 6699 | 7788 |
| 电脑 | 192.168.1.102 | 6699 | 7788 |

用户使用产品时，需要把电脑的 IP 设置为与产品同一网段上，例如

192.168.1.x(x 的取值范围为 1～254)，子网掩码为 255.255.255.0。未知产品网络配置信息，请连接产品并使用 Wireshark 抓取产品输出包进行分析。配置 IP 与连接方式如下。

1. **连接激光雷达**：

连接方式如图 11 所示。

a) 激光雷达与接口盒间通过航插头进行连接;

b) PC 与接口盒间通过 RJ45 网口接头进行连接;

c) 通电后，正常工作情况下，激光雷达的接口盒的绿色指示灯会常亮，指示灯位置详情参见图 10。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/897a53a4e66f4241133e31efe4b10adac40ec573e6bee7b7f1868ce1ba53b64b.jpg)


图 11 接口盒连接示意图


2. **通过 Wireshark 抓包，解析 ARP 报文进行本地 IP 配置**：

a) 如上步骤，激光雷达与 PC 完成连接后，启动 Wireshark（第三方网络解析工具），选择正确的网口，开始抓包；

b) 通过 Wireshark 的搜索框，输入 “arp” 进行搜索激光雷达与 PC 间的互相寻址报文，如图 12 所示；

| No. | Time | Source | Destination | Protocol | Length Info |
| --- | --- | --- | --- | --- | --- |
| 12 | 0.530047 | SutengIn 1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |
| 13 | 0.607377 | HP_7a:ae:1d | Broadcast | ARP | 42 Who has 192.168.1.101? (ARP Probe) |
| 68 | 1.570011 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |
| 69 | 1.607549 | HP_7a:ae:1d | Broadcast | ARP | 42 Who has 192.168.1.101? (ARP Probe) |
| 98 | 2.606604 | HP_7a:ae:1d | Broadcast | ARP | 42 ARP Announcement for 192.168.1.101 |
| 99 | 2.610787 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |
| 130 | 3.650056 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |
| 162 | 4.690102 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |
| 251 | 5.730812 | SutengIn_1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |

图 12 解析 ARP 报文


c) 如图 12 所示，Source 列中的 SutengIn 字样为激光雷达的信息源，提示 192.168.1.200 为 Source IP，即为激光雷达 IP，再请求访问

192.168.1.102，即为 PC IP。如若本地 IP 非请求访问的 IP，则需配置 PC 的本地 IP 为 192.168.1.102，详情操作见步骤 3)；如若可以正常访问，则跳转至步骤 4)。

3. **配置 PC 的本地 IP**：

a) 在控制面板中，通过 “网络与 Internet” 进入 “网络与共享中心”，在 “查看活动网络” 内容中，点击对应的以太网连接，进入对应的 “以太网状态”，点击其中的 “属性” 设置；

b) 双击 Internet 协议版本 4（TCP / IPv4），进入 IP 信息设置，使用静态 IP 进行配置；

c) 将本地 IP 地址设置为 192.168.1.102，子网掩码 255.255.255.0，点击 “确认”，完成 PC 的静态 IP 设置。

4. **连接完成**：

> **提示说明**：

1) 时间同步模块（PTP & gPTP、GPS 时间同步模块）非出厂标配产品，如需使用相关功能，请自行购买，按照图 11 方式连接即可。

2) 以上配置本地静态 IP 仅以 Windows 系统操作为例，其它操作系统请以实际为准。

## 4 产品使用

### 4.1 产品坐标系

产品的坐标及旋转方向如图 13 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/8ac9101194cf710e07e22668c327e8fb69f3f2137ab258f27ae74da7ada16635.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/eec1a9949c7a458a60d2bd62c992a49e05f9aa81198f8f45461efe1c0b7290a7.jpg)


图 13 激光雷达坐标及旋转方向示意图


提示说明

激光雷达的坐标原点定义在激光雷达结构中心，高度距离底座 73.5 mm。

### 4.2 Web 端使用

#### 4.2.1 Web 端功能

Ruby Plus 仅支持通过网页端对产品进行参数设定、运行信息/状态查看及固件升级等操作。

Ruby Plus Web 地址跟随 Device IP 变化而变化，出厂默认 Device IP 为 192.168.1.200，若用户更改过 Device IP，则 Web 地址变更为新设定的 IP 地址。

#### 4.2.2 访问Web端

产品按照要求连接及正确配置完成后, 使用连接激光雷达的电脑浏览器访问产品 IP 地址（默认 Device IP:192.168.1.200）进入激光雷达 Web 首页，首页默认为“Device”栏。

#### 4.2.3 使用 Web 端

关于使用 Web 进行操作详情参见产品手册附录 A。

### 4.3 RSView 使用

在 Ruby Plus 的数据的检测上, 可使用 Wireshark 和 tcp - dump 等免费工具获取原始数据, 而 RSView 可帮助用户更为便捷的实现对原始数据的可视化。

#### 4.3.1 软件功能

RSView 提供将 Ruby Plus 数据进行实时可视化的功能。RSView 也能回放保存为 “.pcap” 文件格式的数据，但是目前还不支持 “.pcapng” 格式的文件。

RSView 将 Ruby Plus 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如反射强度、时间、距离、水平角度和激光线束序号。所显示的数据能够导出保存为“.csv”格式，RSView 3.1.3 以后的版本支持导出“.las”格式的数据。

RSView 包含以下功能:

1) 通过以太网实时显示数据;

2) 将实时数据记录保存为 PCAP 文件;

3) 从记录的 PCAP 文件中回放;

4) 不同类型可视化模式，例如距离、时间、水平角度等等；

5) 用表格显示点的数据;

6) 将点云数据导出为 CSV 格式文件;

7) 测量距离工具;

8) 将回放数据的连续多帧同时显示;

9) 显示或者隐藏 Ruby Plus 中个别线束;

10) 裁剪显示。

#### 4.3.2 安装 RSView

RSView 支持在 Windows 64 位、Ubuntu 18.04 以上操作系统上运行。可从 Robosense 的官网（http://www.robosense.cn/resources）下载最新版本 RSView 软件压缩包。下载后，软件的解压路径请勿出现中文字符，软件无需安装，解压后运行可执行文件即可正常使用。

#### 4.3.3 使用RSView

打开 RSview 后，在软件界面，可通过 F1 按钮打开软件使用指南，或通过点击软件菜单栏 Help 选项中的 RS - LiDAR User Guide 进行查阅。

### 4.4 通信协议

Ruby Plus 与电脑之间的通信采用以太网介质，使用 UDP 协议，和电脑之间的通信协议主要分为两类，详情参见表 11。


表 11 产品协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 | 发送间隔 |
| --- | --- | --- | --- | --- | --- |
| Main data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 1248 bytes | 约 167 us |
| Device Information Output Protocol | DIFOP | 产品信息输出 | UDP | 1248 bytes | 约 1 s |

> **提示说明**：

1) 产品手册 4.4 节皆为对协议中的有效载荷（1248 bytes）部分进行描述和定义；

2) 主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射强度等信息封装成包输出；

3) 产品信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出。

#### 4.4.1 MSOP 与 DIFOP 数据协议

Ruby Plus 发出的 UDP 协议为 1248 bytes 有效载荷，主数据流（MSOP）及产品信息（DIFOP）的数据结构如图 14 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/9986cb92dad5e0acc8170eb86c35c40fa971ebd6f569f58e9aa082453a90ad51.jpg)


图 14 激光雷达数据结构示意图


#### 4.4.2 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：产品输出，电脑解析。

出厂默认端口号为 6699。

##### 4.4.2.1 帧头

帧头 Header 共 42 bytes，用于识别出数据的开始位置，数据结构详情参见表 12。


表 12 MSOP Header 数据表


| 帧头(80 bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | Offset | 长度 (byte) | 定义说明 |
| Header ID | 0 | 4 | 4 位用于数据包头的检测,4 bytes 定义为 0x55,0xAA,0x05,0x5A, |
| 预留 | 4 | 3 | / |
| 回波模式 | 7 | 1 | 0x01: 单回波,0x03 双回波 |
| 预留 | 8 | 2 | / |
| 时间戳 | 10 | 10 | 存储时间戳 |
| 预留 | 20 | 11 | / |
| LiDAR Type | 31 | 1 | 用于表示激光雷达的系列0x05: Ruby Plus |
| 预留 | 32 | 48 | / |

> **提示说明**：

定义的时间戳用来记录系统的时间，分辨率为 1 us，详情参见产品手册附录 C.12 中的时间定义。


表 13 回波模式与回波序号对应表


| 模式\定义 | 回波模式 | 回波序号 |
| --- | --- | --- |
| 单回波 | 1 | d1 |
| 双回波 | 3 | d1, d2; d1, d2··· |

##### 4.4.2.2 数据块区间

如表 14 所示，数据块区间 Data block 是 MSOP 包中传感器的测量值部分，共 1164 bytes。它由 3 个 Data block 组成，每个 block 长度为 388 bytes，代表一组完整的测距数据。

每个 Data block 包含：1 bytes 的标志位，使用 0xfe 表示；1 byte 的 Ret_id，用于表示回波序号；2 bytes 的 Azimuth，表示水平旋转角度信息；每个角度信息对应着 128 个的 channel data，包含 1 组完整的 128 通道信息。


表 14 Data Block 数据包定义


| 说明 | 数据块(1200 bytes) |  |  |
| --- | --- | --- | --- |
| 数据块序号 | Data Block 1 | Data Block 2 | Data Block 3 |
| 标志位 | 0xfe | 0xfe | 0xfe |
| 回波序号 | Ret_id | Ret_id | Ret_id |
| 水平旋转角 | Azimuth 1 | Azimuth 2 | Azimuth 12 |
| 通道 1 | Channel data 1 | Channel data 1 | Channel data 1 |
| 通道 2 | Channel data 2 | Channel data 2 | Channel data 2 |
| ... | ... | ... | ... |
| 通道 127 | Channel data 127 | Channel data 127 | Channel data 127 |
| 通道 128 | Channel data 128 | Channel data 128 | Channel data 128 |

> **提示说明**：

双回波模式时，Data Block 的第一列 128 个通道数据存储最后回波，第二列 128 个通道数据存储最强回波。

1. **通道数据定义**：

通道数据 Channel data 是 3 bytes，高两字节用于表示距离信息，低一字节用于表示反射强度信息，如表 15 所示。


表 15 Channel Data 示意表


| 通道数据(3 bytes) |  |  |
| --- | --- | --- |
| 2 bytes Distance |  | 1 byte Reflectivity |
| Distance1 [15:8] | Distance2 [7:0] | Reflectivity(反射强度信息) |

> **提示说明**：

Distance 是 2 bytes，分辨率为 0.5 cm。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/e7d5a7d2617adc34d91bf417c0a5a1bf766a9471cca61d5af89be149720db533.jpg)


图 15 MSOP 包示意图


红色框：Header ID;

黄色框：Data Block 标志位；

蓝色框：Channel data 1 的 Azimuth 值；

绿色框：Channel data 1 的 Distance 值。

数据包的距离值计算，参考图 15，计算方式如下：

a) 数据包里的距离值的十六进制数：0x03，0x86;

b) 距离值转换为十进制数字：902;

c) 根据 0.5 cm 的距离分辨率进行计算;

d) 结果 $902 \times 0.5 / 100 = 4.51 \, m$ 。

数据包的角度值计算，参考图 15，计算方式如下：

a) 数据包里的角度值得十六进制数：0x47、0xe3;

b) 转换为十进制数字：18403;

c) 将转化成十进制后的数据除以 100;

d) 结果 $18403 / 100 = 1184.03^{\circ}$ 。

2. **角度值定义**：

在每个 Block 中，Ruby Plus 输出的角度值是该 Block 中第一个通道激光测距时的角度值。角度值来源于角度编码器，角度编码器的零位即角度的零点，水平旋转角度值的分辨率为 $0.01^{\circ}$ 。

##### 4.4.2.3 帧尾

帧尾（Tail）长度 4 bytes，为包计数的值。

#### 4.4.3 产品信息输出协议（DIFOP）

产品信息输出协议，Device Info Output Protocol，简称：DIFOP。

I/O 类型：产品输出，电脑读取。

默认端口号为 7788。

DIFOP 是为了将产品序列号（S/N）、固件版本信息、配置信息、角度信息、运行状态、故障诊断等信息，定期发送给用户的“仅输出”协议，用户可以通过读取 DIFOP 解读当前使用产品的各种参数的具体信息。

一个完整的 DIFOP Packet 的数据格式结构为同步帧头，数据区，帧尾。每个数据包共 1248 bytes: 包括 8 bytes 同步帧头 Header, 1238 bytes 的数据区 Data, 以及 2 bytes 帧尾 Tail。数据包的基本结构如表 16 所示。


表 16 DIFOP Packet 的数据格式结构


| 段落划分 | 序号 | 信息 | Offset | 长度 (byte) | 备注 |
| --- | --- | --- | --- | --- | --- |
| Header | 0 | DIFOP 识别头 | 0 | 8 | a5_ff_00_5a_11_11_55_55 |
| Data | 1 | 电机转速设置 | 8 | 2 | 附录 C.1 |
| Data | 2 | 以太网 | 10 | 22 | 附录 C.2 |
| Data | 3 | FOV 设置值 | 32 | 4 | 附录 C.3 |
| Data | 4 | 预留 | 36 | 2 | / |
| Data | 5 | 电机锁相相位 | 38 | 2 | 附录 C.4 |
| Data | 5 | 主板固件版本号 | 40 | 5 | 附录 C.5 |
| Data | 5 | 底板固件版本号 | 45 | 5 | 附录 C.6 |
| Data | 5 | APP 软件版本号 | 50 | 5 | 附录 C.7 |
| Data | 5 | 电机固件版本号 | 55 | 5 | 附录 C.8 |
| Data | 5 | 预留 | 60 | 3 | / |
| Data | 5 | 网页 cgi 版本号 | 63 | 4 | 附录 C.9 |
| Data | 6 | 预留 | 67 | 16 | / |
| Data | 7 | 以太网网关 | 83 | 4 | IPv4 格式 |
| Data | 7 | 子网掩码 | 87 | 4 | IPv4 格式 |
| Data | 8 | 预留 | 91 | 201 | / |
| Data | 9 | 产品序列号 | 292 | 6 | 附录 C.10 |
| Data | 10 | 预留 | 298 | 2 | / |
| Data | 11 | 回波模式 | 300 | 1 | 章节 2.5.3 |
| Data | 12 | 时间同步信息 | 301 | 2 | 附录 C.11 |
| Data | 13 | 时间 | 303 | 10 | 附录 C.12 |
| Data | 14 | 运行状态 | 313 | 24 | 附录 C.13 |
| Data | 15 | 正反转标志位 | 337 | 1 | 正转: 0x00反转: 0x01 |
| Data | 16 | 预留 | 338 | 13 | / |
| Data | 17 | 故障诊断 | 351 | 24 | 附录 C.14 |
| Data | 18 | 预留 | 375 | 7 | / |
| Data | 19 | GPRMC | 382 | 86 | 附录 C.15 |
| Data | 20 | 垂直角校准 | 468 | 384 | 附录 C.16 |
| Data | 21 | 水平角校准 | 852 | 384 | 附录 C.17 |
| Data | 22 | 预留 | 1236 | 10 | / |
| Tail | 23 | 帧尾 | 1246 | 2 | 0f_f0 |

> **提示说明**：

1) Header（DIFOP识别头）内容为0xA5，0xFF，0x00，0x5A，0x11，0x11，0x55，0x55，可作为包的检查序列。Tail（帧尾）内容为0x0F,0xF0;

2) 每一项信息的寄存器的定义以及使用参见产品手册附录 C 中的详细描述，对应关系见表 16 备注栏内容。

## 5 产品维护

### 5.1 运输与物流

重要

运输不当会导致产品损坏！

1) 应采用防震防潮包装材料包装产品，以避免运输途中损毁。建议使用原始包装；

2）运输过程务必小心轻放，避免磕碰、摔落等危险行为；

3) 每次运输收到货物时，必须详细检查交付货物清单与是否有损坏（含产品与包装）；

4) 如若有运输损坏，请拒绝收货，并及时联系 RoboSense。

### 5.2 存储

重要

存储不当可能会导致产品损坏！

1) 请将产品存储于室内常温、干燥的环境中；

2) 请轻拿轻放，避免产品遭受磕碰、摔落等；

3) 产品应存放于安全环境中，避免腐蚀、机械冲击及暴露于超过防护等级的环境中；

4) 请定期检查所有组件和包装的状态，建议检查周期为 3 个月。

### 5.3 产品清洁

为了能够准确地感知周围环境，RS - LiDAR 需保持环形防护罩洁净。

#### 5.3.1 注意事项

请在清理 RS - LiDAR 前仔细并完整的阅读本节的内容，否则不当的操作可能会损坏产品。

! 激光雷达在环境比较恶劣的情况下使用时，需及时清理表面的脏污保持激光

雷达清洁，否则会影响激光雷达的正常使用。

#### 5.3.2 需要的材料

1) 洁净的无尘布;

2) 温度适中的中性溶液（如肥皂水、蒸馏水、99%浓度乙醇等）。

#### 5.3.3 清洁方法

1) 如果激光雷达的表面只是粘附了一些灰尘/粉尘:

a) 首先用洁净的无尘布，蘸取少量的中性溶液；

b) 其次轻轻地对激光雷达表面拭擦清洁;

c) 最后用一块干燥洁净的无尘布将其擦干。

2) 如果激光雷达表面沾上了泥浆等块状异物:

a) 首先应使用洁净水喷洒在激光雷达脏污部位表面让泥浆等异物脱离（注意：不能直接用无尘布将泥浆擦掉，这样做可能会划伤表面，特别是防护罩表面）；

b) 其次用温的肥皂水喷洒在脏污部位，因肥皂水的润滑作用可加速异物的脱离。再次用纤维布轻轻试擦激光雷达表面，但注意不要擦伤表面；

c) 最后用洁净的水清洗激光雷达表面肥皂的残留（如果表面仍有残留，可用 $99 \%$ 乙醇对其再次清洁），同时用一块干燥的无尘布擦干即可。

## 6 故障诊断

本章列举了部分在使用产品的过程中常见的问题以及对应的问题排查方法，详情参见表 17。


表 17 常见故障排查方法表


| 故障现象 | 解决方法 |
| --- | --- |
| 接口盒上面红/绿色指示灯不亮/闪烁 | 检查接口盒与电源端的连接线是否松动;检查线束是否破损。 |
| 产品电机不旋转 | 检查接口盒上面指示灯是否正常;检查接口盒与电源/产品端的连接线是否松动及线束破损。 |
| 产品在启动时不断重启 | 检查输入电源连接和极性是否正常;检查输入电源的电压和电流是否满足要求(12V电压输入条件下,输入电流≥2A);检查产品安装平面是否水平或激光雷达底部固定螺丝是否拧的太紧。 |
| 产品内部旋转,但是没有数据 | 检查激光是否正常发射;检查网络连接是否正常;确认电脑端网络配置是否正确;使用另外的软件(例如Wireshark)检查数据是否有被接收;关闭防火墙和其它可能阻止网络的安全软件;检查电源供电正常;尝试重启产品。 |
| Wireshark可以收到数据但是RSView不显示点云 | 关闭电脑防火墙,并且运行RSView通过防火墙;确认电脑的IP配置和产品设置的目的地址一致;确认RSView中Sensor Network Configuration设置正确;确认RSView安装目录或配置文件存放目录不包含任何中文字符;确认Wireshark中收到的数据包是MSOP类型的包。 |
| 产品存在频发的数据丢失 | 确认网络中是否有大量的其它网络数据包或网路冲突;确认网络中是否存在其它网络产品以广播模式发送大量数据造成传感器数据阻塞;确认电脑的性能和接口性能是否满足要求;移除其它所有网络产品,直连电脑确认是否存在丢包现象。 |
| 无法同步 GPS/PTP / gPTP 时间 | 确认已在网页端将同步模式切换到正确模式下;在 GPS+PPS 时间同步方式下:确认 GPS 模块波特率为 9600 bps,8 bits 数据位,无校验位,停止位 1;确认 GPS 模块输出为 3.3 V TTL 还是 RS232 电平;确认 1 PPS 脉冲连续且接线正确;确认 GPRMC 的 NMEA 消息格式正确;确认 GPS 模块和接口盒共地;确认 GPS 模块收到了有效的解;确认 GPS 模块是否为有效定位(室外);在 PTP / gPTP 时间同步方式下:确认 PTP / gPTP Master 同步协议是否符合当前 PTP / gPTP 协议;确认 PTP / gPTP Master 是否正常工作。 |
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

提示说明

1) 请在收到 RoboSense 售后服务回信确认后，再寄回产品；

2) 产品只能使用原包装或等效的软垫防潮包装寄回。

## 附录 A Web 端操作

### A.1 产品信息

激光雷达 Web 端默认为产品信息页，如图 16 所示:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/9df6aad99d143264cc58baad78a6a0778fe53a8b2a260ff3e37d239bb75f1437.jpg)


robosense


Device 

Setting 

Diagnostic 

System 

| Top Board Firmware Version: | 05010400 |
| --- | --- |
| Bottom Board Firmware Version: | 05010700 |
| Software Version: | 23071401 |
| Motor Version: | 22081702 |
| Web Service Version: | 23071406 |
| S/N: | 1281BBDE413D |
| Mac Address: | 40:2c:76:83:59:4a |
| Model: | Ruby Plus |

图 16 Web 端首页信息


1) Top Board 为主板固件版本;

2) Bottom Board 为底板固件版本;

3) Software Version 为软件版本;

4) Motor Firmware Version 为电机版本;

5) S/N 为产品序列号;

6) Mac Address 为 MAC 地址;

7) Model 为产品名称。

### A.2 产品参数设定

网页端 “Setting” 栏为激光雷达参数设定页，在此处可更改 Device IP、端口号、回波模式、转速及角度触发等功能设定。示意及功能描述如图 17，图 18 所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/e3de039e1d04a92fe9f0528726d352370ae871a2be636c7d2d985eb9db744197.jpg)


robosense 

Device Setting Diagnostic System 

General Setting 

Angle Pulse Setting 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/19f200efdf04cdc6f18dcca32e6933e3e4ac335e4560ff29b8679ccc20f9e657.jpg)


图 17 Web 端激光雷达设置信息


1) 支持单播（默认）/广播模式，将 Destination IP 设置为 255.255.255.255 则为广播模式，默认出厂为 192.168.1.102，IP 设置仅支持 IPv4 格式；

2) 可更改 MSOP 和 DIFOP 的数据端口，值范围 1025～65535;

3) 可下拉 “Return Mode” 选最强（默认）/最后/最前/双回波四种回波模式；

4) 可设置 FOV，角度范围 $0 \sim 360^{\circ}$ ，当设定后只输出设定区域点云数据；

5) 可下拉 “Time Synchronization Source” 选择 GPS、PTP-P2P、PTP-E2E 和 PTP-gPTP 确定时间同步方式；

6) 可下拉 “Operation Mode” 选择工作模式，分别为 Standby/Balance（默认）/High Performance（0.1°）三种工作模式，当选择 Standby 模式时，雷达电机和发射器停止工作；

7) 可设置 “Phase Lock Setting” 进行锁相设置，设置范围 $0^{\circ} \sim 360^{\circ}$ ;

8) 可下拉 “Rotation Speed” 选择转速，仅支持 600 rpm(默认), 1200 rpm;

9) “Motor Reversal” 为电机正反转，勾选 “ON” 并保存，电机则逆时针旋转；

10) “Restore Default” 为重置配置，勾选 “ON” 并保存，当前配置会恢复为默认设置。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/b07f85c997c7c6de117ff674d0d444640f9dab2a6c08b5d8afabc971aff65b6b.jpg)


General Setting 

Angle Pulse Setting 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/6f6adcfa95ddbff4945e38297afeb87ef6c6d9ab3ac0ceb3158cd719dadee0ed.jpg)


图 18 Web 端角度触发设定


1) Angle Pulse Setting: 在此栏下进行角度触发功能设置，角度触发功能默认关闭；

2) Trigger Mode: 起始角模式有两种, 模式 1 为起始脉宽增加 $25\%$ (默认), 模式 2 为起始脉宽不增加;

3) Group Switch: 开启/关闭 “Pulse Trigger Switch”，当勾选 “All On” 时，全部开启所有 SYNC 触发设置，默认为 “All Off”；

4) Group: 此栏为对应 SYNC OUT 组，Ruby Plus 内含三组 SYNC OUT 引脚，通过电源盒子的 I/O 口引出通过，具体定义请查看表 8;

5) Pulse Trigger Switch: 开启/关闭触发功能，当 Pulse Trigger Switch 勾选 “ON” 开启后选项为可编辑状态，关闭时为灰色不可编辑状态；

6) Pulse Start Angle: 可设置对应的起始角，默认值为 $0^{\circ}$ ，输入值需为整数；

7) Pulse Width: 可设置对应的脉宽，默认值为 10 ms，输入值需为 20 ns 的整数倍，占空比最高为 50%;

8) Pulse Step: 可设置对应的步距，默认值为 $360^{\circ}$ ，输入值需为浮点数，保留 1 位小数。

提示说明

1) Device IP 和 Destination IP 需在同一网段，否则可能会导致无法正常连接；

2) MSOP 和 DIFOP 值的范围为 1025～65535，且 MSOP 端口和 DIFOP 端口不可设置为同一端口：

3) 更改完成后需点击“Save”进行保存，提示成功则表示设定生效。

### A.3 产品诊断/运行状态

此页可实时查看激光雷达运行状态，包括电压、电流、实时转速、运行时长及温度等信息，如图 19 所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/dd144cf2e08386f290883ec76b9c438d8f9d4f113ec485e3d078609119c4ce15.jpg)


图 19 Web 端运行状态/故障诊断


1) Voltage Monitor 为产品电压监控，当产品选择 Standby 模式时，此处会变为红框；

2) Current Monitor 为产品电流，当产品选择 Standby 模式时，此处电流会降低至 0.2 A 左右；

3) Power Monitor 为产品功耗；当产品选择 Standby 模式时，此处功耗会降低至 5 W 左右：

4) Temperature Monitor 为当前产品运行温度;

5) RPM 为获取产品当前实时转速信息;

6) Phase 为获取产品当前的实时锁相角度;

7) Laser Status 有“On”（默认）和“Off”两种状态，用户设置 Standby 模式时为“Off”;

8) 用户可查看 Star-up Times 获取当前产品总启动次数, 每断电重启后会累加一次;

9) 用户可查看 Elapsed time Total T0 获取产品总运行时间和产品在各温度下累计工作时间。

提示说明

1) 本页刷新频率为 1 秒;

2) 若产品电压/电流框变红时，请检查产品当前是否为 Standby 模式，若不是则检查产品是否正常工作；

### A.4 产品固件升级

点击网页 “System”, 可对固件进行一键升级，升级操作示例如下:

1) 请联系 RoboSense 获得升级固件。准备好待升级的固件，点击“选择文件”，如图 20 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/eee17d8747acec5ed12f79c33b2ce0b800a3fcc468857bfd18c8a178a4b7204a.jpg)


图 20 Step1 点击选择文件


2) 准备好待升级的固件后，打开固件所在目录（路径请勿出现中文字符），选择要升级的固件，打开固件，如图 21 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/ec0ef2bc09d97e2fb9cb5c7ea9723b779ff58ca1d054b6f9469548f109842f83.jpg)


图 21 Step2 选择待升级固件


3) 待升级固件文件名变为选中的固件名称后表示加载成功，如图 22 所示，此时点击 “Update” 进行升级。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/c057a618a906f22baf0f7972830a0fa3240af4e8644043223c745b44bff82063.jpg)


robosense


Device 

Setting 

Diagnostic 

System 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/546a7ce495f5fd7a4819533b8eba1599ca1720ae0e8df6d1ada620400971000f.jpg)


图 22 Step3 点击升级


4) 网页端提示成功、产品进行自动重启，重启完成后重新登录网页首页查的 Device 界面产看版本号，确认是否升级成功，如图 23 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/b35fa74611fcd159e9d311a24802d4b77d2e10ae0f21e2dd15191a9ee7941f08.jpg)


robosense


Device Setting Diagnostic System 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/cdc0add142f7741272f0dad38f69ca0f9008155f5fad3863cad299d0418afc37.jpg)


图 23 Step4 升级成功


## 附录 B ROS & ROS2 Package

rslidar_sdk 是 ROS 平台下的驱动 SDK，请通过 github 上的 RoboSense 主页下载，或联系 RoboSense 获取。

1) rslidar_sdk 依赖 rs_driver，后者是 RoboSense 的基本驱动。rs_driver 请从 github 平台下载；

2) 如使用环境为 ROS2，rslidar_sdk 还依赖 rslidar_msg，这是 msg 定义文件。msg 文件请从 github 平台下载；

3) 驱动 SDK 下载包内含丰富的使用指引，请在使用驱动 SDK 前，详细阅读文件内的 README 文件及 doc 文件夹下的文档。

提示说明

1) SDK 获取地址：https://github.com/RoboSense-LiDAR/rsLiDAR_sdk

2) rs_driver 获取地址：https://github.com/RoboSense-LiDAR/rs_driver

3) msg 获取地址：https://github.com/RoboSense-LiDAR/rslidar_msg

## 附录 C 寄存器定义

本附录内容补充章节 4.4 中协议里定义各个信息的定义，便于用户对产品的使用和开发，涉及到计算部分，均采用大端模式，Value 代表对应 offset 字节换算后得出的十进制数值。

### C.1 电机转速（MOT_SPD）


表 18 电机转速寄存器


| 电机转速寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | MOT_SPD |  |

**寄存器说明：**


1) 该寄存器用于读取电机转速设置值;

2) 如设置值为 600 RPM。读取 byte 1=0x02&&byte 2=0x58, Value=600 rpm。

### C.2 以太网（ETH）


表 19 以太网寄存器


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


表 20 FOV 设置


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

### C.4 锁相相位(MOT_PHASE)


表 21 电机锁相寄存器


| 电机锁相寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | MOT_PHASE |  |

**寄存器说明：**


1) 该寄存器用于读取电机锁相设置值;

2) MOT_PHASE 范围 0～360 对应角度 0～360°。详情如下：

a) MOT_PHASE: byte 1=0x00, byte 2=0x64, Value=100; 

b) 表明设置的电机锁相相位为 $100^{\circ}$ 。

### C.5 主板固件版本(TOP_FRM)


表 22 主板固件版本


| 主板固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | TOP_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x01，byte 3=0x05，byte 4=0x05，byte 4=0x00，则固件版本号为 00 01 05 05 00。

### C.6 底板固件版本(BOT_FRM)


表 23 底板固件版本


| 底板固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | BOT_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x02，byte 3=0x01，byte 4=0x03，byte 4=0x00，则固件版本号为：00 05 01 03 00。

### C.7 APP 软件版本(SOF_FRM)


表 24 软件版本


| APP 软件版本(共 5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | SOF_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x23，byte 3=0x03，byte 4=0x16，byte 4=0x01，则固件版本号为：00 23 03 16 01。

### C.8 电机固件版本(MOT_FRM)


表 25 电机固件版本


| 电机固件版本(共5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | MOT_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x22，byte 3=0x10，byte 4=0x14，byte 4=0x21，则固件版本号为：00 22 10 14 21。

### C.9 网页 CGI 版本号（CGI_FRM）


表 26 网页 CGI 固件版本


| 网页 CGI 固件版本(共 5 bytes) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 |
| 功能 | CGI_FRM |  |  |  |  |

**寄存器说明：**

如 byte 1=0x00，byte 2=0x23，byte 3=0x03，byte 4=0x16，byte 4=0x06，则固件版本号为：00 22 10 14 21。

### C.10 序列号（SN）


表 27 序列号寄存器


| 序列号寄存器(共6 bytes) |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 |
| 功能 | SN |  |  |  |  |  |

**寄存器说明：**

类似 mac 地址，以 16 进制共 6bytes 数值指示产品序列号。

### C.11 时间同步信息（TIME_SYNC_INF）


表 28 时间同步信息寄存器


| 时间同步信息寄存器(共2 bytes) |  |  |
| --- | --- | --- |
| 序号 | byte 1 | byte 2 |
| 功能 | Time_Sync_Mode | Time_Sync_State |

**寄存器说明：**

1) byte 1 为时间同步模式状态位，定义如下：

0x00:GPS 同步；0x01:E2E 同步；0x02:P2P 同步；0x03:gptp 同步。

2) byte 2 为时间同步成功状态位，定义如下：

0x00:未同步；0x01:同步成功。

### C.12 时间（UTC_TIME）


表 29 时间寄存器


| 时间寄存器(共10 bytes) |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 | byte 9 | byte 10 |
| 功能 | sec |  |  |  |  |  | us |  |  |  |

**寄存器说明：**

us 值范围：0～999999。运行状态（STATUS）。

### C.13 运行状态（STATUS）


表 30 运行状态寄存器


| 运行状态寄存器(共8 bytes) |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 |
| 功能 | 预留 | Machine Current |  | 预留 |  |  | Machine Voltage |  |

**寄存器说明：**

1) 整机电流（Machine Current），单位 A。电流值由 2 bytes 组成，计算公式：Machine Current = Value / 100

2) 整机电压（Machine Voltage），单位 V。电压值由 2 bytes 组成，计算公式：Machine Voltage = Value / 100

### C.14 故障诊断（FALT_DIGS）


表 31 故障诊断寄存器


| 故障诊断寄存器(共24 bytes) |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 序号 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | byte 8 |
| 功能 | Start-Up Times |  | 预留 |  |  |  | GPS Status | Machine |
| 序号 | Byte 9 | byte 10 | ... | byte 20 | byte 21 | byte 22 | byte 23 | byte 24 |
| 功能 | Temperature | 预留 |  |  | Phase |  | Rotation Speed |  |

表 32 GPS 信号输入状态寄存器


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
| bit 5 ~ bit 7 | 预留 | x | N/A |

**寄存器说明：**


1) 启动次数（Start-Up Times），单位次。由 2 bytes 组成，开机后 1 分钟开始刷新。计算公式：Start-Up Times = Value
如两字节溢出，即启动次数超 65535 次，则从 0 重新计数。

2) 产品温度（Machine Temperature），单位 $℃$ 。由两字节组成。计算公式：Machine Temperature = Value

3) 实时相位值（Phase），单位°。由两字节组成，计算公式：Phase = Value
实时转速（Rotation Speed），单位 RPM。计算公式：Rotation Speed = Value

### C.15 GPRMC 数据包-ASCII 码数据类型

GPRMC 数据包位预留了 86 个字节，根据外接的 GPS 模块输出的 GPRMC 消息长度自适应完整的存储所接收到的 GPRMC 消息，可以对 ASCII 码进行解析查看。

### C.16 垂直角校准（COR_VERT_ANG）


表 33 垂直角校准寄存器


| 垂直角校准寄存器(共384bytes) |  |  |  |  |  |  |  |  |  |
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
| 序号 | ... |  |  | ... |  |  | ... |  |  |
| 功能 | ... |  |  |  |  |  |  |  |  |
| 序号 | byte 358 | byte 359 | byte 360 | byte 361 | byte 362 | byte 363 | byte 364 | byte 365 | byte 366 |
| 功能 | 120通道垂直角度 |  |  | 121通道垂直角度 |  |  | 122通道垂直角度 |  |  |
| 序号 | byte 367 | byte 368 | byte 369 | byte 370 | byte 371 | byte 372 | byte 373 | byte 374 | byte 375 |
| 功能 | 123通道垂直角度 |  |  | 124通道垂直角度 |  |  | 125通道垂直角度 |  |  |
| 序号 | byte 376 | byte 377 | byte 378 | byte 379 | byte 380 | byte 381 | byte 382 | byte 383 | byte 384 |
| 功能 | 126通道垂直角度 |  |  | 127通道垂直角度 |  |  | 128通道垂直角度 |  |  |

**寄存器说明：**

1) 角度值为区分为正负，每个通道的垂直角度由 3 bytes 组成，其中第 1 个 byte 表示正负，第 2 和第 3 个 byte 共同组成角度的值。

2) 表示正负的第 1 个 byte 属性为 0x00 则通道垂直角度为正值, 属性为 0x01 则通道垂直角度为负值;

3) 角度分辨率为 $0.01^{\circ}$ ;

4) 例如通道 1 寄存器的值为 byte 1=0x00, 为正数; byte 2=0x00, byte 3=0xe7 转换成十进制 231。则通道 1 的垂直角度值为 $2.31^{\circ}$ 。

### C.17 水平偏移角校准（COR_HOR_ANG）


表 34 水平偏移角校准寄存器


| 水平偏移角校准寄存器(共384bytes) |  |  |  |  |  |  |  |  |  |
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
| 序号 | ... |  |  | ... |  |  | ... |  |  |
| 功能 | ... |  |  |  |  |  |  |  |  |
| 序号 | byte 358 | byte 359 | byte 360 | byte 361 | byte 362 | byte 363 | byte 364 | byte 365 | byte 366 |
| 功能 | 120通道水平偏移角度 |  |  | 121通道水平偏移角度 |  |  | 122通道水平偏移角度 |  |  |
| 序号 | byte 367 | byte 368 | byte 369 | byte 370 | byte 371 | byte 372 | byte 373 | byte 374 | byte 375 |
| 功能 | 123通道水平偏移角度 |  |  | 124通道水平偏移角度 |  |  | 125通道水平偏移角度 |  |  |
| 序号 | byte 376 | byte 377 | byte 378 | byte 379 | byte 380 | byte 381 | byte 382 | byte 383 | byte 384 |
| 功能 | 126通道水平偏移角度 |  |  | 127通道水平偏移角度 |  |  | 128通道水平偏移角度 |  |  |

**寄存器说明：**

1) 角度值为区分为正负，每个通道的水平角度由 3 bytes 组成，其中第 1 个 byte 表示正负，第 2 和第 3 个 byte 共同组成角度的值。

2) 表示正负的第 1 个 byte 属性为 0x00 则通道水平偏移角度为正值，属性为 0x01 则通道水平偏移角度为负值；

3) 角度分辨率为 $0.01^{\circ}$ ;

4) 例如通道 1 寄存器的值为 byte 1=0x01, 为负数; byte 2=0x00, byte 3=0x04 转换成十进制 4。则通道 1 的水平偏移角度为 -0.04°。

## 附录 D 精确的点时间计算

128 通道顺序完成一轮发射所需的时间为 55.56 us。在每个 MSOP Packet 中，有 3 个 Block，每个 Block 有 1 组完整的 128 线激光数据。128 通道激光完成一轮发射和充能需要 55.56 us。激光通道序号 Channel_ID 为 1～128。每个 MSOP Packet 的时间戳是第 1 个通道的激光点的时间，为了计算每个激光点的时间，需要将每个激光点的时间偏移量加到时间戳上。单回波的时间计算请查看表 35。


表 35 MSOP Packet 中单回波每个激光点的时间偏移量


| 时间偏移量(us) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 通道序号 | 垂直角度 | 水平角度 | MSOP Packet |  |  |
| 通道序号 | 垂直角度 | 水平角度 | BLOCK1 | BLOCK2 | BLOCK3 |
| 1 | -11.78 | 5.94 | 0 | 55.56 | 111.12 |
| 2 | -10.37 | 2.39 | 0 | 55.56 | 111.12 |
| 3 | -9.27 | -1.15 | 0 | 55.56 | 111.12 |
| 4 | -8.38 | -4.69 | 0 | 55.56 | 111.12 |
| 5 | -16.07 | 4.70 | 1.13 | 56.69 | 112.25 |
| 6 | -25.10 | 1.17 | 1.13 | 56.69 | 112.25 |
| 7 | -19.64 | -2.38 | 1.13 | 56.69 | 112.25 |
| 8 | -13.61 | -5.92 | 1.13 | 56.69 | 112.25 |
| 9 | -6.52 | 5.94 | 2.13 | 57.69 | 113.25 |
| 10 | -6.40 | 2.39 | 2.13 | 57.69 | 113.25 |
| 11 | -6.31 | -1.15 | 2.13 | 57.69 | 113.25 |
| 12 | -6.21 | -4.69 | 2.13 | 57.69 | 113.25 |
| 13 | -7.67 | 4.72 | 3.26 | 58.82 | 114.38 |
| 14 | -7.17 | 1.18 | 3.26 | 58.82 | 114.38 |
| 15 | -6.87 | -2.36 | 3.26 | 58.82 | 114.38 |
| 16 | -6.67 | -5.91 | 3.26 | 58.82 | 114.38 |
| 17 | -5.71 | 5.94 | 4.26 | 59.82 | 115.38 |
| 18 | -5.60 | 2.39 | 4.26 | 59.82 | 115.38 |
| 19 | -5.51 | -1.15 | 4.26 | 59.82 | 115.38 |
| 20 | -5.41 | -4.69 | 4.26 | 59.82 | 115.38 |
| 21 | -6.10 | 4.72 | 5.38 | 60.94 | 116.5 |
| 22 | -6.01 | 1.18 | 5.38 | 60.94 | 116.5 |
| 23 | -5.91 | -2.36 | 5.38 | 60.94 | 116.5 |
| 24 | -5.81 | -5.91 | 5.38 | 60.94 | 116.5 |
| 25 | -4.90 | 5.94 | 6.38 | 61.94 | 117.5 |
| 26 | -4.80 | 2.39 | 6.38 | 61.94 | 117.5 |
| 27 | -4.70 | -1.15 | 6.38 | 61.94 | 117.5 |
| 28 | -4.60 | -4.69 | 6.38 | 61.94 | 117.5 |
| 29 | -5.30 | 4.72 | 7.51 | 63.07 | 118.63 |
| 30 | -5.20 | 1.18 | 7.51 | 63.07 | 118.63 |
| 31 | -5.10 | -2.36 | 7.51 | 63.07 | 118.63 |
| 32 | -5.00 | -5.91 | 7.51 | 63.07 | 118.63 |
| 33 | -4.10 | 5.94 | 8.51 | 64.07 | 119.63 |
| 34 | -4.00 | 2.39 | 8.51 | 64.07 | 119.63 |
| 35 | -3.90 | -1.15 | 8.51 | 64.07 | 119.63 |
| 36 | -3.80 | -4.69 | 8.51 | 64.07 | 119.63 |
| 37 | -4.50 | 4.72 | 10.01 | 65.57 | 121.13 |
| 38 | -4.40 | 1.18 | 10.01 | 65.57 | 121.13 |
| 39 | -4.30 | -2.36 | 10.01 | 65.57 | 121.13 |
| 40 | -4.20 | -5.91 | 10.01 | 65.57 | 121.13 |
| 41 | -3.30 | 5.94 | 11.38 | 66.94 | 122.5 |
| 42 | -3.20 | 2.39 | 11.38 | 66.94 | 122.5 |
| 43 | -3.10 | -1.15 | 11.38 | 66.94 | 122.5 |
| 44 | -3.00 | -4.69 | 11.38 | 66.94 | 122.5 |
| 45 | -3.70 | 4.72 | 13.31 | 68.87 | 124.43 |
| 46 | -3.60 | 1.18 | 13.31 | 68.87 | 124.43 |
| 47 | -3.50 | -2.36 | 13.31 | 68.87 | 124.43 |
| 48 | -3.40 | -5.90 | 13.31 | 68.87 | 124.43 |
| 49 | -2.50 | 5.94 | 15.11 | 70.67 | 126.23 |
| 50 | -2.39 | 2.39 | 15.11 | 70.67 | 126.23 |
| 51 | -2.30 | -1.15 | 15.11 | 70.67 | 126.23 |
| 52 | -2.20 | -4.69 | 15.11 | 70.67 | 126.23 |
| 53 | -2.90 | 4.72 | 17.04 | 72.6 | 128.16 |
| 54 | -2.80 | 1.18 | 17.04 | 72.6 | 128.16 |
| 55 | -2.70 | -2.36 | 17.04 | 72.6 | 128.16 |
| 56 | -2.60 | -5.90 | 17.04 | 72.6 | 128.16 |
| 57 | -1.69 | 5.94 | 18.85 | 74.41 | 129.97 |
| 58 | -1.59 | 2.39 | 18.85 | 74.41 | 129.97 |
| 59 | -1.49 | -1.15 | 18.85 | 74.41 | 129.97 |
| 60 | -1.39 | -4.69 | 18.85 | 74.41 | 129.97 |
| 61 | -2.09 | 4.72 | 21.14 | 76.7 | 132.26 |
| 62 | -2.00 | 1.18 | 21.14 | 76.7 | 132.26 |
| 63 | -1.90 | -2.36 | 21.14 | 76.7 | 132.26 |
| 64 | -1.80 | -5.90 | 21.14 | 76.7 | 132.26 |
| 65 | -0.89 | 5.94 | 21.14 | 76.7 | 132.26 |
| 66 | -0.79 | 2.39 | 23.31 | 78.87 | 134.43 |
| 67 | -0.69 | -1.15 | 23.31 | 78.87 | 134.43 |
| 68 | -0.59 | -4.69 | 23.31 | 78.87 | 134.43 |
| 69 | -1.29 | 4.72 | 23.31 | 78.87 | 134.43 |
| 70 | -1.19 | 1.18 | 25.61 | 81.17 | 136.73 |
| 71 | -1.09 | -2.36 | 25.61 | 81.17 | 136.73 |
| 72 | -0.99 | -5.90 | 25.61 | 81.17 | 136.73 |
| 73 | -0.09 | 5.94 | 25.61 | 81.17 | 136.73 |
| 74 | 0.01 | 2.39 | 27.78 | 83.34 | 138.9 |
| 75 | 0.11 | -1.15 | 27.78 | 83.34 | 138.9 |
| 76 | 0.21 | -4.69 | 27.78 | 83.34 | 138.9 |
| 77 | -0.49 | 4.72 | 27.78 | 83.34 | 138.9 |
| 78 | -0.39 | 1.18 | 30.07 | 85.63 | 141.19 |
| 79 | -0.29 | -2.36 | 30.07 | 85.63 | 141.19 |
| 80 | -0.19 | -5.90 | 30.07 | 85.63 | 141.19 |
| 81 | 0.71 | 5.94 | 30.07 | 85.63 | 141.19 |
| 82 | 0.81 | 2.39 | 32.24 | 87.8 | 143.36 |
| 83 | 0.91 | -1.15 | 32.24 | 87.8 | 143.36 |
| 84 | 1.01 | -4.69 | 32.24 | 87.8 | 143.36 |
| 85 | 0.31 | 4.72 | 32.24 | 87.8 | 143.36 |
| 86 | 0.41 | 1.18 | 34.54 | 90.1 | 145.66 |
| 87 | 0.51 | -2.36 | 34.54 | 90.1 | 145.66 |
| 88 | 0.61 | -5.90 | 34.54 | 90.1 | 145.66 |
| 89 | 1.51 | 5.94 | 34.54 | 90.1 | 145.66 |
| 90 | 1.61 | 2.39 | 36.7 | 92.26 | 147.82 |
| 91 | 1.71 | -1.15 | 36.7 | 92.26 | 147.82 |
| 92 | 1.82 | -4.69 | 36.7 | 92.26 | 147.82 |
| 93 | 1.11 | 4.72 | 36.7 | 92.26 | 147.82 |
| 94 | 1.21 | 1.18 | 38.64 | 94.2 | 149.76 |
| 95 | 1.31 | -2.36 | 38.64 | 94.2 | 149.76 |
| 96 | 1.41 | -5.90 | 38.64 | 94.2 | 149.76 |
| 97 | 2.32 | 5.94 | 38.64 | 94.2 | 149.76 |
| 98 | 2.41 | 2.39 | 40.44 | 96 | 151.56 |
| 99 | 2.52 | -1.15 | 40.44 | 96 | 151.56 |
| 100 | 2.62 | -4.69 | 40.44 | 96 | 151.56 |
| 101 | 1.91 | 4.72 | 40.44 | 96 | 151.56 |
| 102 | 2.02 | 1.18 | 41.94 | 97.5 | 153.06 |
| 103 | 2.12 | -2.36 | 41.94 | 97.5 | 153.06 |
| 104 | 2.22 | -5.90 | 41.94 | 97.5 | 153.06 |
| 105 | 3.12 | 5.94 | 41.94 | 97.5 | 153.06 |
| 106 | 3.22 | 2.39 | 43.3 | 98.86 | 154.42 |
| 107 | 3.32 | -1.15 | 43.3 | 98.86 | 154.42 |
| 108 | 3.42 | -4.69 | 43.3 | 98.86 | 154.42 |
| 109 | 2.72 | 4.72 | 43.3 | 98.86 | 154.42 |
| 110 | 2.82 | 1.18 | 44.8 | 100.36 | 155.92 |
| 111 | 2.92 | -2.36 | 44.8 | 100.36 | 155.92 |
| 112 | 3.02 | -5.90 | 44.8 | 100.36 | 155.92 |
| 113 | 3.97 | 5.94 | 44.8 | 100.36 | 155.92 |
| 114 | 4.17 | 2.39 | 46.17 | 101.73 | 157.29 |
| 115 | 4.42 | -1.15 | 46.17 | 101.73 | 157.29 |
| 116 | 4.72 | -4.69 | 46.17 | 101.73 | 157.29 |
| 117 | 3.52 | 4.72 | 46.17 | 101.73 | 157.29 |
| 118 | 3.62 | 1.18 | 47.66 | 103.22 | 158.78 |
| 119 | 3.72 | -2.36 | 47.66 | 103.22 | 158.78 |
| 120 | 3.82 | -5.91 | 47.66 | 103.22 | 158.78 |
| 121 | 7.43 | 5.94 | 47.66 | 103.22 | 158.78 |
| 122 | 9.02 | 2.39 | 49.03 | 104.59 | 160.15 |
| 123 | 11.53 | -1.15 | 49.03 | 104.59 | 160.15 |
| 124 | 15.04 | -4.70 | 49.03 | 104.59 | 160.15 |
| 125 | 5.07 | 4.72 | 49.03 | 104.59 | 160.15 |
| 126 | 5.48 | 1.18 | 50.53 | 106.09 | 161.65 |
| 127 | 5.98 | -2.36 | 50.53 | 106.09 | 161.65 |
| 128 | 6.58 | -5.91 | 53.771 | 109.331 | 164.891 |

> **提示说明**：

双回波模式时，Data Block 的奇数列 128 个通道数据存储第一个回波，偶数列 128 个通道数据存储第二个回波。

## 附录 E 通道测距能力对应表


表 36 通道测距能力对应表


| 通道序号 | 垂直角度(°) | 盲区(米) | 测距@10%目标反射物(米) | 最远测距(米) | 通道序号 | 垂直角度(°) | 盲区(米) | 测距@10%目标反射物(米) | 最远测距(米) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | -11.78 | 0.4 | 70 | 70 | 65 | -0.89 | 1 | 240 | 250 |
| 2 | -10.37 | 3 | 70 | 70 | 66 | -0.79 | 3 | 240 | 250 |
| 3 | -9.27 | 1 | 70 | 70 | 67 | -0.69 | 1 | 240 | 250 |
| 4 | -8.38 | 1 | 70 | 70 | 68 | -0.59 | 3 | 240 | 250 |
| 5 | -16.07 | 0.4 | 70 | 70 | 69 | -1.29 | 1 | 240 | 250 |
| 6 | -25.1 | 0.4 | 70 | 70 | 70 | -1.19 | 3 | 240 | 250 |
| 7 | -19.64 | 0.4 | 70 | 70 | 71 | -1.09 | 1 | 240 | 250 |
| 8 | -13.61 | 0.4 | 70 | 70 | 72 | -0.99 | 3 | 240 | 250 |
| 9 | -6.52 | 0.4 | 70 | 70 | 73 | -0.09 | 1 | 240 | 250 |
| 10 | -6.4 | 3 | 70 | 70 | 74 | 0.01 | 3 | 240 | 250 |
| 11 | -6.31 | 0.4 | 70 | 70 | 75 | 0.11 | 1 | 240 | 250 |
| 12 | -6.21 | 3 | 70 | 70 | 76 | 0.21 | 3 | 240 | 250 |
| 13 | -7.67 | 0.4 | 70 | 70 | 77 | -0.49 | 1 | 240 | 250 |
| 14 | -7.17 | 3 | 70 | 70 | 78 | -0.39 | 3 | 240 | 250 |
| 15 | -6.87 | 0.4 | 70 | 70 | 79 | -0.29 | 1 | 240 | 250 |
| 16 | -6.67 | 1 | 70 | 70 | 80 | -0.19 | 3 | 240 | 250 |
| 17 | -5.71 | 1 | 70 | 70 | 81 | 0.71 | 1 | 240 | 250 |
| 18 | -5.6 | 3 | 70 | 70 | 82 | 0.81 | 3 | 240 | 250 |
| 19 | -5.51 | 0.4 | 70 | 70 | 83 | 0.91 | 0.4 | 240 | 250 |
| 20 | -5.41 | 3 | 70 | 70 | 84 | 1.01 | 3 | 240 | 250 |
| 21 | -6.1 | 1 | 70 | 70 | 85 | 0.31 | 1 | 240 | 250 |
| 22 | -6.01 | 3 | 70 | 70 | 86 | 0.41 | 3 | 240 | 250 |
| 23 | -5.91 | 0.4 | 70 | 70 | 87 | 0.51 | 1 | 240 | 250 |
| 24 | -5.81 | 3 | 70 | 70 | 88 | 0.61 | 3 | 240 | 250 |
| 25 | -4.9 | 1 | 70 | 70 | 89 | 1.51 | 1 | 135 | 180 |
| 26 | -4.8 | 3 | 70 | 70 | 90 | 1.61 | 3 | 135 | 180 |
| 27 | -4.7 | 0.4 | 70 | 70 | 91 | 1.71 | 1 | 135 | 180 |
| 28 | -4.6 | 3 | 70 | 70 | 92 | 1.82 | 3 | 135 | 180 |
| 29 | -5.3 | 1 | 70 | 70 | 93 | 1.11 | 1 | 135 | 180 |
| 30 | -5.2 | 3 | 70 | 70 | 94 | 1.21 | 3 | 135 | 180 |
| 31 | -5.1 | 1 | 70 | 70 | 95 | 1.31 | 0.4 | 135 | 180 |
| 32 | -5 | 3 | 70 | 70 | 96 | 1.41 | 3 | 135 | 180 |
| 33 | -4.1 | 1 | 120 | 120 | 97 | 2.32 | 1 | 120 | 120 |
| 34 | -4 | 3 | 120 | 120 | 98 | 2.41 | 3 | 120 | 120 |
| 35 | -3.9 | 0.4 | 120 | 120 | 99 | 2.52 | 1 | 120 | 120 |
| 36 | -3.8 | 3 | 120 | 120 | 100 | 2.62 | 3 | 120 | 120 |
| 37 | -4.5 | 1 | 120 | 120 | 101 | 1.91 | 1 | 120 | 120 |
| 38 | -4.4 | 3 | 120 | 120 | 102 | 2.02 | 3 | 120 | 120 |
| 39 | -4.3 | 0.4 | 120 | 120 | 103 | 2.12 | 1 | 120 | 120 |
| 40 | -4.2 | 3 | 120 | 120 | 104 | 2.22 | 3 | 120 | 120 |
| 41 | -3.3 | 1 | 135 | 180 | 105 | 3.12 | 1 | 120 | 120 |
| 42 | -3.2 | 3 | 135 | 180 | 106 | 3.22 | 3 | 120 | 120 |
| 43 | -3.1 | 0.4 | 135 | 180 | 107 | 3.32 | 1 | 120 | 120 |
| 44 | -3 | 3 | 135 | 180 | 108 | 3.42 | 3 | 120 | 120 |
| 45 | -3.7 | 1 | 135 | 180 | 109 | 2.72 | 1 | 120 | 120 |
| 46 | -3.6 | 3 | 135 | 180 | 110 | 2.82 | 3 | 120 | 120 |
| 47 | -3.5 | 0.4 | 135 | 180 | 111 | 2.92 | 0.4 | 120 | 120 |
| 48 | -3.4 | 3 | 135 | 180 | 112 | 3.02 | 3 | 120 | 120 |
| 49 | -2.5 | 1 | 180 | 180 | 113 | 3.97 | 0.4 | 120 | 120 |
| 50 | -2.39 | 3 | 180 | 180 | 114 | 4.17 | 3 | 120 | 120 |
| 51 | -2.3 | 0.4 | 180 | 180 | 115 | 4.42 | 1 | 120 | 120 |
| 52 | -2.2 | 3 | 180 | 180 | 116 | 4.72 | 3 | 120 | 120 |
| 53 | -2.9 | 1 | 180 | 180 | 117 | 3.52 | 1 | 120 | 120 |
| 54 | -2.8 | 3 | 180 | 180 | 118 | 3.62 | 3 | 120 | 120 |
| 55 | -2.7 | 1 | 180 | 180 | 119 | 3.72 | 0.4 | 120 | 120 |
| 56 | -2.6 | 3 | 180 | 180 | 120 | 3.82 | 3 | 120 | 120 |
| 57 | -1.69 | 1 | 240 | 250 | 121 | 7.43 | 1 | 120 | 120 |
| 58 | -1.59 | 3 | 240 | 250 | 122 | 9.02 | 3 | 120 | 120 |
| 59 | -1.49 | 0.4 | 240 | 250 | 123 | 11.53 | 0.4 | 120 | 120 |
| 60 | -1.39 | 3 | 240 | 250 | 124 | 15.04 | 0.4 | 120 | 120 |
| 61 | -2.09 | 1 | 240 | 250 | 125 | 5.07 | 0.4 | 120 | 120 |
| 62 | -2 | 3 | 240 | 250 | 126 | 5.48 | 3 | 120 | 120 |
| 63 | -1.9 | 1 | 240 | 250 | 127 | 5.98 | 0.4 | 120 | 120 |
| 64 | -1.8 | 3 | 240 | 250 | 128 | 6.58 | 1 | 120 | 120 |

## 附录 F 结构图纸

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/b168c64d71d98658fa9255b485943e8360bbef37618322f0ba44dfd6ccb288f6.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/07d6cee9dc63b187e8cfbbe1193d4d1972a39644a72e3e59c757541f16cf3392.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/3804747e60996e16df215ebfc407c147202eb77395ec50b8c0cf26b805578755.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/1982a59ece2eb196f200223c3c438f94bffb1cd412da361d1db1357b95ff8fef.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/410c7f1b17a49dc63e4f502ede7931e97d35f6b98f338f24395600cc17deb562.jpg)


robosense 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/fa6ed9bb-8094-4cc8-ad8b-d085ca3559b1/f217a592a0cff911b7fa77173fbd16b2b4d414ace87b5c76d488846411fe89b4.jpg)


深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区2区9栋
www.robosense.ai
