# EMX 用户手册

**手册版本 V1.0.9**

---

**192 线车载高性能数字化激光雷达**

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/08facb92976d8eedadfdcb812269bd1a604e5e2a67950e660055ae9ec7195406.jpg)


## 变更说明

| 版本 | 修订日期 | 变更内容 | 编辑 |
| --- | --- | --- | --- |
| 1.0.0 | 2025/5/18 | B0 样机版本发布 | jiaxin |
| 1.0.8 | 2025/8/7 | 修改部分尺寸、设计参数,和 DIFOP1 协议信息 | Gavin |
| 1.0.9 | 2025/8/14 | 新增 DIFOP2 协议信息 | Gavin |
---

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

1）请勿私自拆解、改装本产品（包含配套配件）；

2) 禁止使用非规定供电电源及配套配件;

3) 请避免跌落、碰撞、焚烧等非正常操作；

4) 如发现产品外观受损，请立即停止使用，并及时联系 RoboSense;

5) 如发现产品工作异常等情况,请立即停止使用,并及时联系 RoboSense。

### 1.4 操作人员的要求

本产品的使用，对操作人员的基础专业知识及其他相关资质有一定要求。对无基础知识及未经培训上岗人员的不当操作行为，给产品及人员财产造成损害、伤害、损失等后果，RoboSense 不承担相关责任。

1) 使用产品前，详细阅读本产品手册；

2) 禁止违规操作;

3) 上岗前需经过培训，且有相关工种施工资格；

4) 有一定的计算机数据连接、电气等基础知识。

### 1.5 工作安全和特殊危险

使用本产品前，为避免对用户或他人产生意外，同时损坏产品及违反保修条款，请务必仔细阅读并遵循本说明书中的操作及规范。

1) 激光安全：本产品激光安全等级符合 IEC 60825-1:2014 标准：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/6e86bf217005889371e66af2a9bddd1c0b9b32b5f44bce18794f1bde3c9f13a0.jpg)


2) 高温注意：注意表面过热标识，谨防发生意外。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/0f8691e65275155fcb40ad7a9c0cdf3fb9d366da1af7e0c9f92ee263db944605.jpg)


3) 保留说明：请保留所有安全和操作说明，以备将来参考。

4) 注意警告：请遵守产品和操作说明中的所有警告，以免发生意外。

5) 产品维修：请勿在缺少官方指导的情况下尝试打开产品进行维修。如需维修，请及时联系 RoboSense。

## 2 产品描述

以下内容描述 EMX B0 样机的状态和功能，后续新版本样机推出后将同步更新产品手册至最新状态。

### 2.1 产品概要

EMX 是 RoboSense 新一代 192 线车载高性能数字化激光雷达，提供 192 线/每秒 288 万点的高清点云，全局角度分辨率 0.1*0.1°，最远测距可达 200m@10%。

### 2.2 产品结构

EMX 结构示意如图 1 所示，坐标原点位置如图 2 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/79e158ee1d500d7df5837393655667401705edefc5f51abbd20bd86065cdb527.jpg)


图1 产品结构说明图（单位：mm）


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/78b0ec95e6bee4854a090cb81643474aa77d9d109e2daaaa24931fe1406d7741.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/4564cf435acc055c810d2c76014b89f76164f05b1281ea28bd7fbd56705a7665.jpg)


图2 坐标原点位置(单位: mm)


### 2.3 规格参数


表1 相关参数规格


| 传感器 |  |  |  |
| --- | --- | --- | --- |
| 测距能力1 | 1.5m至200m(200m@10%NIST) | 精度2(典型值) | ±5cm@1σ |
| 水平视场角 | 120°(-60°~+60°) | 水平角分辨率 | 0.08° |
| 垂直视场角 | 20°(-12°~+8°) | 垂直角分辨率 | 0.1° |
| 帧率 | 10 Hz | 盲区 | ≤1.5m |
| 输出 |  |  |  |
| 以太网输出 | 1000Base-T1 |  |  |
| 输出数据协议 | UDP packets over Ethernet |  |  |
| 激光雷达数据包内容 | 三维空间坐标、反射强度、时间戳等 |  |  |
| 出点数 | 约288万/s(单回波模式) |  |  |
| 出点数传输带宽 | 约97.4Mbps(单回波模式) |  |  |
| 机械/电子操作 |  |  |  |
| 工作电压 | 9V~16VDC | 尺寸 | 深102.5mm*宽110mm*高30.4mm(冻结) |
| 产品功率3 | 10W(典型值) | 工作温度4 | -40°C~+85°C |
| 重量 | 500g±20g(不含数据线) | 存储温度 | -40°C~+105°C |
| 时间同步 | gPTP(默认)PTP | 防护等级 | IP67/IP6K9K |
| 唤醒方式 | 1pin硬线唤醒(提供0-2V低电平雷达休眠,7-12V高电平雷达唤醒) |  |  |
## 3 产品安装

### 3.1 机械安装

激光雷达的结构安装示意图如图 3 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/a1b0c251c7c31adf0d126fae57ecff03fa622c9b0068189b726571b0d4099c96.jpg)


图3 激光雷达结构安装示意图


### 3.2 LiDAR 接线及接口说明

#### 3.2.1 车载以太网线束接口及定义

EMX 使用 1 个车载以太网、电源二合一接头，配套线束如图 4 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/b8b5db457f77602e61726df3e08148b03d205c9f95e8b8cb4cf7f7a0526ea707.jpg)


图4 车载以太网电源线束


EMX 车载以太网电源线束接头及引脚定义见表 42


表2 车载以太网电源线束接口定义


| A 端线序 | Pin | 定义 | B 端线序 | Pin |
| --- | --- | --- | --- | --- |
| J1(TE2387380-1) | 1 | GND | J3(Molex43025-0600) | 1 |
| J1(TE2387380-1) | 2 | Wakeup | J3(Molex43025-0600) | 6 |
| J1(TE2387380-1) | 3 | / | J3(Molex43025-0600) | 3 |
| J1(TE2387380-1) | 4 | Baterry+ | J3(Molex43025-0600) | 2 |
| J1(TE2387380-1) | 5 | / | J3(Molex43025-0600) | 4 |
| J1(TE2387380-1) | 6 | / | J3(Molex43025-0600) | 5 |
| J1(TE2387380-1) | 7 | 1000BASE-T1 N | J2(AmphenolNTHCF011A10S) | 1 |
| J1(TE2387380-1) | 8 | 1000BASE-T1 P | J2(AmphenolNTHCF011A10S) | 2 |

#### 3.2.2 接口盒接口

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/42092d29406b335fff940b7128287aa9558337d6425a659d202f3a7a2aceafa8.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/6bba865eb63eef60f54dc9494f139f0d40652de04301c42a75c613ccb8530c19.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/de9dd7abc1fc8bdb027181d92c07e66d63a2eb3afa7c3d276aadb35cb12445e9.jpg)


图5 接口盒示意图


EMX 附件接口盒具有电源指示灯及各类的接口，如图 5 所示，可接驳电源输入、RJ45 网口。


表3 接口盒接口定义


| 连接器 | 规格/型号 | 说明 |
| --- | --- | --- |
| J1 | MOLEX 43045-0600 | 给雷达供电及输出唤醒信号 |
| J2 | Amphenol NTBM11R1U01110T | 1000BASE-T1 车载以太网接口 |
| J3 | DC Power 连接器 | 电源输入 |
| J4 | 按键开关 | 唤醒信号控制开关,开关按下时唤醒信号接通 |
| J5 | RJ45 | 1000BASE-TX 工业以太网 |

#### 3.2.3 电源接口

EMX 接口盒电源使用标准 DC 5.5-2.1 接口。

电源正常输入时，电源盒绿色指示灯常亮。当绿色指示灯熄灭，请检查电源输入是否正常，若电源输入正常，即接口盒可能已损坏，请联系 RoboSense。

#### 3.2.4 RJ45 网口

EMX 本体只支持 1000BASE-T1 车载以太网。接口盒只支持千兆以太网，使用接口盒时网络接口使用标准 RJ45 接口。。

### 3.3 快速连接

EMX 网络参数可配置, 出厂默认采用固定 IP 和端口号模式, 详情参见表 4。


表4 出厂默认网络配置表


| 设备 | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| --- | --- | --- | --- |
| EMX | 192.168.1.200 | 6699 | 7788 |
| 电脑 | 192.168.1.102 | 6699 | 7788 |

用户使用产品时，需要把电脑的 IP 设置为与产品同一网段上，例如 192.168.1.x(x 的取值范围为 1~254)，子网掩码为 255.255.255.0。未知产品网络配置信息，请连接产品并使用 Wireshark 抓取产品输出包进行分析。配置 IP 与连接方式如下。

1. **连接激光雷达**：

连接方式如图 6 所示。

a) 激光雷达与接口盒间通过车载以太网电源线束进行连接;

b) PC 与接口盒间使用千兆工业以太网通过 RJ45 网口接头进行连接;

c) 通电后, 正常工作情况下, 激光雷达的接口盒的绿色指示灯会常亮, 指示灯位置详情参见图 6。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/c2c8b27a63665ed1b69a1e92b7a9e3d7be1c5b0d74a5e7b361307cf50194c6ec.jpg)


图6 接口盒连接示意图


2) 通过 Wireshark 抓包，解析 ARP 报文进行本地 IP 配置

a) 如上步骤，激光雷达与 PC 完成连接后，启动 Wireshark（第三方网络解析工具），选择正确的网口，开始抓包；

b) 通过 Wireshark 的搜索框，输入 “ARP” 进行搜索激光雷达与 PC 间的互相寻址报文，如图 7 所示；

| No. | Time | Source | Destination | Protocol | Length Info |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | 12 0.530047 | SutengIn 1c:ae | Broadcast | ARP | 60 Who has 192.168.1.102? Tell 192.168.1.200 |  |  |
|  | 13 0.607377 | HP_7a:ae:1d | Broadcast | ARP | 42 who has 192.168.1.101? (ARP Probe) |  |  |
|  | 68 1.570011 | SutengIn_1c:ae | Broadcast | ARP | 60 who has 192.168.1.102? Tell 192.168.1.200 |  |  |
|  | 69 1.607549 | HP_7a:ae:1d | Broadcast | ARP | 42 who has 192.168.1.101? (ARP Probe) |  |  |
|  | 98 2.606604 | HP_7a:ae:1d | Broadcast | ARP | 42 ARP Announcement for 192.168.1.101 |  |  |
|  | 99 2.610787 | SutengIn_1c:ae | Broadcast | ARP | 60 who has 192.168.1.102? Tell 192.168.1.200 |  |  |
|  | 130 3.650056 | SutengIn_1c:ae | Broadcast | ARP | 60 who has 192.168.1.102? Tell 192.168.1.200 |  |  |
|  | 162 4.690102 | SutengIn_1c:ae | Broadcast | ARP | 60 who has 192.168.1.102? Tell 192.168.1.200 |  |  |
|  | 251 5.730812 | SutengIn_1c:ae | Broadcast | ARP | 60 who has 192.168.1.102? Tell 192.168.1.200 |  |  |

图7 解析 ARP 报文


c) 如图 7 所示，Source 列中的 SutengIn 字样为激光雷达的信息源，提示 192.168.1.200 为 Source IP，即为激光雷达 IP，再请求访问 192.168.1.102，即为 PC IP。如若本地 IP 非请求访问的 IP，则需配置 PC 的本地 IP 为 192.168.1.102，详情操作见步骤 3)；如若可以正常访问，则跳转至步骤 4)。

3) 配置 PC 的本地 IP

a) 在控制面板中，通过 “网络与 Internet” 进入 “网络与共享中心”，在 “查看活动网络” 内容中，点击对应的以太网连接，进入对应的 “以太网状态”，点击其中的 “属性” 设置；

b) 双击 Internet 协议版本 4（TCP/IPv4），进入 IP 信息设置，使用静态 IP 进行配置；

c) 将本地 IP 地址设置为 192.168.1.102，子网掩码 255.255.255.0，点击 “确认”，完成 PC 的静态 IP 设置。

4) 连接完成

提示说明：

1) 时间同步模块（PTP&gPTP）非出厂标配产品，如需使用相关功能，请自行购买，按照图6方式连接即可。

2) 以上配置本地静态 IP 仅以 Windows 系统操作为例，其它操作系统请以实际为准。

3) EMX 采用静态 ARP 列表, 只在雷达上电之后、还没与上位机连接上之前发送 ARP 报文。雷达与上位机正常通讯之后如果更换上位机, 雷达需要重新上电才能与新的上位机通讯。

## 4 产品使用

### 4.1 产品坐标系

产品的坐标系如图 8 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/d78b80bfa5ba65cab309bb1e7e70a9f4eed562273275584fffde401b25591e26.jpg)


图8 激光雷达坐标示意图


> **提示说明**：

激光雷达的坐标原点定义在激光雷达光心。

### 4.2 RSView 使用

在 EMX 的数据的检测上，可使用 Wireshark 和 tcp-dump 等免费工具获取原始数据，而 RSView 可帮助用户更为便捷的实现对原始数据的可视化。

#### 4.2.1 软件功能

RSView 提供将 EMX 数据进行实时可视化的功能。RSView 也能回放保存为.pcap 文件格式的数据，但是目前还不支持.pcapng 格式的文件。

RSView 将 EMX 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如反射强度、时间、距离、水平角度和激光线束序号。所显示的数据能够导出保存为.csv 格式，RSView3.1.3 以后的版本支持导出.las 格式的数据。

RSView 包含以下功能:

1) 通过以太网实时显示数据;

2) 将实时数据记录保存为 PCAP 文件;

3) 从记录的 PCAP 文件中回放;

4) 不同类型可视化模式，例如距离、时间、水平角度等等；

5) 用表格显示点的数据;

6) 将点云数据导出为 CSV 格式文件;

7) 测量距离工具;

8) 将回放数据的连续多帧同时显示;

9) 显示或者隐藏 EMX 中个别线束（通道）；

10) 裁剪显示。

#### 4.2.2 安装 RSView

RSView 支持在 Windows 64 位、Ubuntu 18.04 以上操作系统上运行。因 EMX 当前处于 B0 样机阶段，需要特殊版本 RSView 才能显示点云，如有需要请联系 RoboSense 获取。

软件的解压路径请勿出现中文字符，软件无需安装，解压后运行可执行文件即可正常使用。

#### 4.2.3 使用 RSView

打开 RSview 后，在软件界面，可通过 F1 按钮打开软件使用指南，或通过点击软件菜单栏 Help 选项中的 RS-LiDAR User Guide 进行查阅。

### 4.3 通信协议

EMX 与电脑之间的通信采用以太网介质，使用 UDP 协议，和电脑之间的通信协议主要分为两类，详情参见表 5。


表5 产品协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 |
| --- | --- | --- | --- | --- |
| Main data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 812 bytes |
| Device Information Output Protocol | DIFOP | 产品信息输出 | UDP | 256 bytes |

> **提示说明**：

1) 产品手册 4.3.2 节皆为对协议中的有效载荷（812 bytes）部分进行描述和定义；

2) 主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射强度等信息封装成包输出；

3) 产品信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出。

#### 4.3.1 MSOP 与 DIFOP 数据协议

EMX 发出的 UDP 协议为 812 bytes 有效载荷，主数据流（MSOP）及产品信息（DIFOP）的数据结构如图 9 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/8cb85d7fd171662bb8280334dcbdf251c7c18a3939dc1a902c2330553b097a05.jpg)


图9 激光雷达数据结构示意图


#### 4.3.2 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：产品输出，电脑解析。

出厂默认端口号为 6699。

##### 4.3.2.1 帧头

帧头 Header 共 32 bytes，用于识别出数据的开始位置，数据结构详情参见表 6。


表6 MSOP Header 数据表


| 帧头(32 bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | Offset | 长度 (byte) | 定义说明 |
| Header ID | 0 | 4 | 4位用于数据包头的检测,4 bytes 定义为 0x55, 0xAA, 0x5A, 0xA5。 |
| Pkt_cnt | 4 | 2 | 表示包计数,循环计数,从每帧数据的起点的包计数为1,每帧数据的最后一个点的包计数为最大值。每帧共有1520个包。 |
| Protocol version | 6 | 2 | 表示 UDP 通信协议的版本号 |
| Return_mode | 8 | 1 | 表示当前设备的点云回波模式0B0000-双回波(近的放前,远的放后)0B0100-最强回波0B0101-最后回波0B0110-最近回波 |
| Time_mode | 9 | 1 | 表示当前设备时间同步设置的模式0B00-表示当前使用雷达内部自己计时0B10-表示当前使用 PTP 时间同步模式0B11-表示当前使用 GPTP 时间同步模式 |
| Timestamp | 10 | 10 | 时间戳,前6 byte 表示秒,后4byte 表示微秒 |
| Reserved | 20 | 10 | 预留 |
| LiDAR Type | 30 | 1 | 默认值 0x42。 |
| Main Temp | 31 | 1 | 整机温度。Temp=Device_Temp - 80,即原始值0代表-80度;255代表175度。 |

##### 4.3.2.2 数据块区间

如表 7 所示，数据块区间 Data block 是 MSOP 包中传感器的测量值部分，共 768 bytes。它由 192 个 Point Data 组成，每个 Point Data 长度为 4 bytes，代表一组完整的测距数据。

Point Data 详细定义如下:


表7 Data Block 数据包定义


| Data Block N (4 Bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | Offset | 长度 (byte) | 定义说明 |
| radius | 0 | 2 | 极坐标系下,径向点距离值解析分辨为 5mm |
| intensity | 2 | 1 | 回波反射强度值,取值范围 0~255 |
| point_attribute | 3 | 1 | 点属性:0x01:normal point0x02:noise point |

##### 4.3.2.3 帧尾

帧尾长度 12 bytes，预留用于 E2E 校验及计数。

#### 4.3.3 产品信息输出协议（DIFOP）

设备信息输出协议，Device Info Output Protocol，简称：DIFOP。

I/O 类型：产品输出，电脑解析。

出厂默认端口号为 6699。

DIFOP 是为了将设备序列号(S/N)、固件版本信息、上位机驱动兼容性信息、网络配置信息、校准信息、电机运行配置、运行状态、故障诊新信息定期发送给用户的"仅输出"协议，用户可以通过读取 DIFOP 解读当前使用设备的各种参数的具体信息。

一个完整的 DIFOP Packet 的数据格式结构为帧头、数据区。每个数据包共 256bytes。 数据包的基本结构如下表所示。


表8 DIFOP 包数据包定义


| DIFOP1 256Byte |  |  |  |
| --- | --- | --- | --- |
| 字段 | Offset | 长度(byte) | 定义说明 |
| StatusHdr | 0 | 4 | A5 FF 00 5A |
| Reserved | 4 | 20 |  |
| SWVersion | 24 | 3 |  |
| HWVersion | 27 | 2 | Default:B0 |
| Reserved | 29 | 6 |  |
| CustomerSN | 35 | 16 | 0xF18C |
| WorkMode | 51 | 1 | 0x01: Init0x02: Wait_Normal0x03: Pre_Reset0x04: Post_Reset0x05: Standby0x06: Pre_Sleep0x07: Post_Sleep0x08: Fault0x0A: Normalothers: Reserved |
| FrameRate | 52 | 1 | 0x0A:10Hz0x14: 20Hz |
| WaveMode | 53 | 1 | 0x00:NearestFarthestWave0x04:StrongestWave0x05:FarthestWave0x06:NearestWave0x0A:Hist0x0B:Gray |
| ROIMode | 54 | 1 |  |
| CalibrationMode | 55 | 1 | 0x00: Normal mode0x01: Factory mode |
| WindowBlockageStatus | 56 | 1 |  |
| WindowBlockageLevel | 57 | 18 |  |
| Reserved | 75 | 14 |  |
| TimesyncMode | 89 | 1 | 0x00: internal Src timer0x01: PPS timer0x02: E2E L2 timer0x03: gPTP timer0x04: p2p L4 timer |
| TimesyncStatus | 90 | 1 | 0x00: failed0x01: Success0x02: Timeout |
| TimeStamp | 91 | 10 | 0-5 bytes: Second6-9 bytes: MicroSecond |
| PhyMasterSlaveMode | 101 | 1 | 0x00: auto-negotiation0x01: master0x02: slaveother: same as 0x00 |
| SrcIP | 102 | 4 | Default:C0 A8 01 C8 |
| NetMask | 106 | 4 | Default:FF FF FF 00 |
| MacAddress | 110 | 6 | Default:08-48-57-00-FB-93 |
| MsopDstIp | 116 | 4 | Default:C0 A8 01 66 |
| MsopSrcPort | 120 | 2 | Default:1A 2B |
| MsopDstPort | 122 | 2 | Default:1A 2B |
| Difop1DstIp | 124 | 4 | Default:C0 A8 01 66 |
| Difop1SrcPort | 128 | 2 | Default:1E 6C |
| Difop1DstPort | 130 | 2 | Default:1E 6C |
| Reserved | 132 | 24 |  |
| TMON6_WIN | 156 | 1 | (hex to dec) -100 °C |
| TMON8_FPGA | 157 | 1 | (hex to dec) -100 °C |
| Reserved | 158 | 71 |  |
| LidarFunctionFault | 229 | 1 |  |
| ExtPowerSupplyFault | 230 | 1 |  |
| CommFault | 231 | 2 |  |
| FaultLevel | 233 | 1 | 0x00: No fault0x01: FL10x02: FL20x03: FL3 |
| FaultID | 234 | 2 |  |
| FaultValue | 236 | 4 |  |
| DTCList | 240 | 4 |  |
| E2E | 244 | 12 |  |
| DIFOP2 500Byte |  |  |  |
| 字段 | Offset | 长度(byte) | 定义说明 |
| InfoHdr | 0 | 4 | A5 FF 00 AE |
| Res0 | 4 | 63 |  |
| SurfaceCnt | 67 | 1 | there are 2 scan direction: clockwise and anti-clockwise |
| VcselPixelCnt | 68 | 1 | 1 vcsel:8 pixel |
| VcselCnt | 69 | 1 | 1 column:24 vcsel |
| VcselYawOffset | 70 | 24 | factor:1/5121 vcsel:8 pixel1 column:192 pixel: 24 vcsel |
| PixelPitch[1~192] | 94 | 384 | channel 1 pitch: factor:0.005; range:-2416~1595 ->-12.08~8.08; Unit: deg |
| SurfacePitchOffset | 478 | 4 | There are 2 surfacebyte[0:1] clockwisebyte[2:3] anti-clockwise |
| RollOffset | 482 | 2 | factor:0.01 |
| Res1 | 484 | 4 |  |
| E2E | 488 | 12 |  |

### 4.4 运输与物流

> **重要**：

运输不当会导致产品损坏！

1) 应采用防震防潮包装材料包装产品，以避免运输途中损毁。建议使用原始包装；

2) 运输过程务必小心轻放，避免磕碰、摔落等危险行为；

3) 每次运输收到货物时，必须详细检查交付货物清单与是否有损坏（含产品与包装）；

4) 如若有运输损坏，请拒绝收货，并及时联系 RoboSense。

### 4.5 存储

> **重要**：

存储不当可能会导致产品损坏！

1) 请将产品存储于室内常温、干燥的环境中；

2) 请轻拿轻放，避免产品遭受磕碰、摔落等；

3) 产品应存放于安全环境中，避免腐蚀、机械冲击及暴露于超过防护等级的环境中；

4) 请定期检查所有组件和包装的状态，建议检查周期为 3 个月。

### 4.6 产品清洁

为了能够准确地感知周围环境，RS-LiDAR 需保持窗口片洁净。

#### 4.6.1 注意事项

请在清理 RS-LiDAR 前仔细并完整的阅读本节的内容，否则不当的操作可能会损坏产品。

激光雷达在环境比较恶劣的情况下使用时，需及时清理窗口片的脏污保持激光雷达清洁，否则会影响激光雷达的正常使用。

#### 4.6.2 需要的材料

1) 洁净的无尘布;

2) 温度适中的中性溶液（如肥皂水、蒸馏水、99%浓度乙醇等）。

#### 4.6.3 清洁方法

1) 如果激光雷达的窗口片只是粘附了一些灰尘/粉尘:

a) 首先用洁净的无尘布，蘸取少量的中性溶液；

b) 其次轻轻地对激光雷达窗口片拭擦清洁；

c) 最后用一块干燥洁净的无尘布将其擦干。

2) 如果激光雷达窗口片沾上了泥浆等块状异物:

a) 首先应使用洁净水喷洒在激光雷达脏污部位表面让泥浆等异物脱离（注意：不能直接用无尘布将泥浆擦掉，这样做可能会划伤窗口片）；

b) 其次用温的肥皂水喷洒在脏污部位，因肥皂水的润滑作用可加速异物的脱离。再次用纤维布轻轻试擦激光雷达窗口片，但注意不要擦伤窗口片；

c) 最后用洁净的水清洗激光雷达窗口片肥皂的残留（如果窗口片仍有残留，可用 99%乙醇对其再次清洁），同时用一块干燥的无尘布擦干即可。

## 5 故障诊断

本章列举了部分在使用产品的过程中常见的问题以及对应的问题排查方法，详情参见表 9。


表9 常见故障排查方法表


| 故障现象 | 解决方法 |
| --- | --- |
| 接口盒上面红/绿色指示灯不亮/闪烁 | 检查接口盒与电源端的连接线是否松动;检查线束是否破损。 |
| 产品在启动时不断重启 | 检查输入电源连接和极性是否正常;检查输入电源的电压和电流是否满足要求(12 V 电压输入条件下,输入电流 $\geqslant 2$ A); |
| Wireshark 可以收到数据但是RSView 不显示点云 | 关闭电脑防火墙,并且运行 RSView 通过防火墙;确认电脑的 IP 配置和产品设置的目的地址一致;确认 RSView 中 Sensor Network Configuration 设置正确;确认 RSView 安装目录或配置文件存放目录不包含任何中文字符;确认 Wireshark 中收到的数据包是 MSOP 类型的包。 |
| 产品存在频发的数据丢失 | 确认网络中是否有大量的其它网络数据包或网路冲突;确认网络中是否存在其它网络产品以广播模式发送大量数据造成传感器数据阻塞;确认电脑的性能和接口性能是否满足要求;移除其它所有网络产品,直连电脑确认是否存在丢包现象。 |
| 无法同步 PTP/gPTP 时间 | 确认雷达固件是否与需要的同步模式匹配;在 PTP/gPTP 时间同步方式下:确认 PTP/gPTP Master 同步协议是否符合当前 PTP/gPTP 协议;确认 PTP/gPTP Master 是否正常工作。 |
| 产品通过路由器后无数据输出 | 关闭路由器的 DHCP 功能或在路由器内部设置传感器的 IP 为正确的 IP。 |

> **提示说明**：

如若以上排查均未能解决问题，请联系 RoboSense。

## 6 售后

如故障诊断章节 5 内容未能解决问题，请及时联系 RoboSense。

官网：https://www.robosense.cn/contact

邮箱：support@robosense.cn

电话：0755-86325830/15338772453

> **提示说明**：

1) 请在收到 RoboSense 售后服务回信确认后，再寄回产品；

2) 产品只能使用原包装或等效的软垫防潮包装寄回。


附录A TE 接头 Pin 脚定义


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/56d65ddec2c2a4560f4b0a036dff32645a921701312712f105478aea4910a0c4.jpg)


| 接插件引脚定义 |  |  |
| --- | --- | --- |
| pin号 | 引脚定义 | 连接器型号 |
| 1 | GND | TE 2387351-1 |
| 2 | Wakeup(KL15) | TE 2387351-1 |
| 3 | / | TE 2387351-1 |
| 4 | Battery+ | TE 2387351-1 |
| 5 | / | TE 2387351-1 |
| 6 | / | TE 2387351-1 |
| D1 | TRX_N(1000Base-T1) | TE 2387351-1 |
| D2 | TRX_P(1000Base-T1) | TE 2387351-1 |

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/30fe70cf98d00afdaa406c6b1eabeec0593abe65e5fbbca62f26e1f4fe934260.jpg)


robosense 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/10d0484a-47a3-4c2b-a24d-2b3a0ab38443/2d3473e3e9d79b6c1c4d559f5a4a9adf1794bca92f803fca5083748b3a016cd3.jpg)


深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区2区9栋

www.robosense.ai 