# M1 用户手册

**手册版本 V1.7**

---

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/8a976069f11a946dd640af56e090fefd2ef88509c4b24c13b5e4ca2d9fdb4a3a.jpg)


## 修订历史

| Revision | Content | Date | Edited by |
| --- | --- | --- | --- |
| 1.0 | 初版发行 | 2020-11-26 | PD |
| 1.1 | 2.1.2.1节增加XYZ坐标运算公式增加附录ARSView增加附录B Driver&SDK增加附录CMEMS Tool的使用修订部分表述错误 | 2020-12-02 | PD |
| 1.2 | 更新产品参数规格表 | 2021-02-23 | PD |
| 1.3 | 更新MSOP和DIFOP内容更新图2增加附录D结构图纸 | 2021-03-11 | PD |
| 1.4 | 通信协议增加数据传输速率要求说明更新垂直FOV脚注及MSOP数据说明增加3.1 Interface Box种类说明增加3.2节 LiDAR状态机说明增加章节4时间同步更新附录D结构图纸修订部分表述问题 | 2021-06-07 | PD |
| 1.5 | 修订工作电压范围 | 2021-07-16 | PD |
| 1.6 | 修订章节1产品参数中测距精度修订章节2出厂默认端口配置要求修订章节2.2 DIFOP表格中offset值及内容更新章节2.2 DIFOP中时间同步状态说明更新章节4时间同步内容,默认为gPTP模式更新附录ARSview中端口设置说明更新附录CAutosar Tool及操作指南 | 2021-11-26 | PD |
| 1.7 | 首页增加MEMS雷达执行标准 | 2021-12-03 | PD |

## 1 产品规格

RS-LiDAR-M1 采用 MEMS 固态激光雷达方式, 测量距离高达 200 米 (150m @ 10%), 出点数高达 750,000 点/秒（单回波模式）及 1,500,000 点/秒（双回波模式），水平测角 $120^{\circ}$ （ $-60.0^{\circ} \sim +60.0^{\circ}$ ），垂直测角 $25^{\circ}$ （ $-12.5^{\circ} \sim +12.5^{\circ}$ ）。


表 1: 产品规格表


| 传感器 | TOF法测距,包含反射强度信息测距:0.5m~200m(150m@10% NIST)$^{1}$精度:\pm 5cm@1 sigma^{2}视角(垂直):25°(-12.5°~+12.5°)$^{3}$角分辨率(垂直):平均0.2°4视角(水平):120°(-60.0°~+60.0°)角分辨率(水平):平均0.2°4帧率:10Hz |
| --- | --- |
| 激光 | Class 1 eye safe波长:905nm |
| 输出 | ~750,000点/秒(单回波模式)~1,500,000点/秒(双回波模式)1000Base-T1千兆以太网UDP包中包含三维空间坐标、反射强度信息、时间戳等 |
| 机械/电子操作 | 功耗:15w^{5}工作电压:9~32VDC重量:约0.73kg(不包含数据线)尺寸:长110mm*宽108mm*高45mm |
|  | ● 防护安全级别:IP67, IP6K9K● 工作温度范围:-40°C~85°C(要求长时间工作需强制对流)6● 存储温度范围:-40°C~105°C |

## 2 通信协议

RS-LiDAR-M1 与电脑之间的通信采用以太网介质，使用 UDP 协议，输出包有两种类型：MSOP 包和 DIFOP 包。文中所有涉及 MSOP 协议包均为 1210 Bytes 定长；DIFOP 协议包均为 256 Bytes 定长。单回波模式下，每秒发射 6300 个 MSOP 包和 1 个 DIFOP 包，数据传输速率要求不低于 58.2 Mbps。双回波模式下，要求不低于 116.4 Mbps。RS-LiDAR-M1 网络参数可配置，出厂默认采用固定 IP 和固定目的端口号模式，按照如下表格。


表 2：出厂默认网络配置表


|  | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| RS-LiDAR-M1 | 192.168.1.200 | / | / |
| --- | --- | --- | --- |
| 电脑 | 192.168.1.102 | 6699 | 7788 |

设备默认 MAC 地址是在工厂初始设置的，每台设备 MAC 地址唯一。

使用设备的时候，需要把电脑的 IP 设置为与设备同一网段上，例如 192.168.1.x(x 的取值范围为 1~254)，子网掩码为 255.255.255.0。若不知设备网络配置信息，请将主机子网掩码设置为 0.0.0.0 后连接设备并使用 Wireshark 抓取设备输出包进行分析。

RS-LiDAR-M1 和电脑之间的通信协议主要分两类，一览表见下表格。

主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射率等信息封装成包输出给电脑；

设备信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出给电脑。


表 3：设备协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 |
| --- | --- | --- | --- | --- |
| Main Data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 1210 Bytes |
| Device Information Output Protocol | DIFOP | 设备信息输出 | UDP | 256 Bytes |

注：下面章节皆为对协议中的有效载荷（MSOP 包 1210 Bytes 和 DIFOP 包 256Bytes）部分进行描述和定义。


### 2.1 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：设备输出，电脑解析。

默认端口号为 6699。

MSOP 包完成三维测量相关数据输出，包括激光测距值、回波的反射强度值、垂直角度、水平角度和时间戳。MSOP 包的有效载荷长度为 1210 字节，其中 32 Bytes 的同步帧头 Header，1175 Bytes 的数据块区间（共 25 个 47 Bytes 的 data block），3 Bytes 为帧

尾。

基本结构如下图所示:


MSOP Packet (1210 Bytes)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/76d839b8f0c8eee11ede4df80a4df52602d47abba04d8702c4a58a0eb7e3f180.jpg)


图 1: MSOP Packet 数据包定义示意图


#### 2.1.1 帧头

帧头 Header 共 32 Bytes，用于识别出数据的开始位置，包计数，UDP 通信预留以及存储时间戳。详细定义如下：


表 4: MSOP 包头定义


| Header (32 Bytes) |  |  |  |  |
| --- | --- | --- | --- | --- |
| pkt_header | pkt_psn | protocol version | wave_mode | time_sync_mode |
| 4 Bytes | 2 Bytes | 2 Bytes | 1 Byte | 1 Byte |
| timestamp | reserved | lidar_type | mems_tmp |  |
| 10 Bytes | 10 Bytes | 1 Byte | 1 Byte |  |

pkt_header: 可作为包的检查序列，识别头为 0x55, 0xaa, 0x5a, 0xa5。

pkt_psn: 包序列号，表示包计数，循环计数，从每帧数据的起点的包计数为 1，每帧数据的最后一个点的包计数为最大值。

protocol version: 表示 UDP 通信协议的版本号。

wave_mode: 回波模式标志位，0-双回波，1-N/A，2-N/A，3-N/A，4-最强回波，5-最后回波，6-第一回波。

time_sync_mode：时间同步模式：

0x00 表示当前使用雷达内部自己计时

0x01 表示当前使用 1PPS 进行亚秒在整秒复位模式

0x02 表示当前使用 PTP 时间同步模式

timestamp: 用于存储时间戳，定义的时间戳用来记录系统的时间，高 6 Bytes 为秒位，低 4 Bytes 为微秒位。

reserved: 预留位

lidar_type: 雷达类型标志位，默认值 0x10。

mems_tmp: mems 温度，Temp=mems_tmp-80;即原始值 0 代表-80 度；255 代表 175 度。

#### 2.1.2 数据块区域

数据块区间是 MSOP 包中传感器的测量值部分, 共 1175 Bytes。它由 25 个 data block 组成, 每个 data block 长度为 47 Bytes。

对于单回波模式，代表一组 5 个通道一次测量完整的测距数据。每一个 Data Block 就储存单次发射回波的数据。

对于双回波模式，单数个 MSOP Packet 为第一回波的数据，包含 25 个 Data Block。偶数个 MSOP Packet 为第二回波的数据，包含 25 个 Data Block。依次交替出现，可以根据 return_seq 标志位来判定该 Packet 属于第几个回波，具体参看表 5 中说明。两个 MSOP Packet 组成一次完整的测量。双回波一次测量总点数为单回波一次测量的两倍。

详细定义如下:


表 5: MSOP 包中 data block 定义


| data block N (47 Bytes) |  |  |  |
| --- | --- | --- | --- |
| content | offset(byte) | byte | instruction |
| time_offset | 0 | 1 | 该组 Block 里面所有的点相对于包的 timestamp 的时间偏移量,该组点的时间等于timestamp+time_offset |
| return_seq | 1 | 1 | 回波序列。单回波模式下,此标志位恒定为0;双回波模式下,第一回波(距离更近的)用0x1表示,第二回波(距离更远的)用0x2表示 |
| ch1_radius | 2 | 2 | 极坐标系下,通道1的径向点距离值,距离解析分辨率5mm |
| ch1_elevation | 4 | 2 | 极坐标系下,通道1的点垂直夹角,分辨率0.01° |
| ch1_azimuth | 6 | 2 | 极坐标系下,通道1的点水平夹角,分辨率0.01° |
| ch1_intensity | 8 | 1 | 通道1的点反射强度值,取值范围0~255 |
| resev. | 9 | 2 | 预留 |
| ch2_radius | 11 | 2 | 极坐标系下,通道2的径向点距离值,距离解析分辨率5mm |
| ch2_elevation | 13 | 2 | 极坐标系下,通道2的点垂直夹角,分辨率0.01° |
| ch2_azimuth | 15 | 2 | 极坐标系下,通道2的点水平夹角,分辨率0.01° |
| ch2_intensity | 17 | 1 | 通道2的点反射强度值,取值范围0~255 |
| resev. | 18 | 2 | 预留 |
| ch3_radius | 20 | 2 | 极坐标系下,通道3的径向点距离值,距离解析分辨率5mm |
| ch3_elevation | 22 | 2 | 极坐标系下,通道3的点垂直夹角,分辨率0.01° |
| ch3_azimuth | 24 | 2 | 极坐标系下,通道3的点水平夹角,分辨率0.01° |
| ch3_intensity | 26 | 1 | 通道3的点反射强度值,取值范围0~255 |
| resev. | 27 | 2 | 预留 |
| ch4_radius | 29 | 2 | 极坐标系下,通道4的径向点距离值,距离解析分辨率5mm |
| ch4_elevation | 31 | 2 | 极坐标系下,通道4的点垂直夹角,分辨率0.01° |
| ch4_azimuth | 33 | 2 | 极坐标系下,通道4的点水平夹角,分辨率0.01° |
| ch4_intensity | 35 | 1 | 通道4的点反射强度值,取值范围0~255 |
| resev. | 36 | 2 | 预留 |
| ch5_radius | 38 | 2 | 极坐标系下,通道5的径向点距离值,距离解析分辨率5mm |
| ch5_elevation | 40 | 2 | 极坐标系下,通道5的点垂直夹角,分辨率0.01° |
| ch5_azimuth | 42 | 2 | 极坐标系下,通道5的点水平夹角,分辨率0.01° |
| ch5_intensity | 44 | 1 | 通道5的点反射强度值,取值范围0~255 |
| resev. | 45 | 2 | 预留 |

N 为任一个 MSOP 包中第 N 个 data block。

time_offset: 第 N 组 Block 里面所有的点相对于包的 timestamp 的时间偏移量，该组点的时间等于 timestamp+time_offset。

return_seq: 回波序列。单回波模式下，此标志位恒定为 0；双回波模式下，第一回波（距离更近的）用 0x1 表示，第二回波（距离更远的）用 0x2 表示。

n 为第 N 组 data block 中第 n 个通道，n=1, 2, 3, 4, 5，其包含数据如下：

chn_radius: 极坐标系下，通道 n 的径向点距离值，距离解析分辨率 5mm。

chn_elevation: 极坐标系下，通道 n 的点俯仰角，分辨率 $0.01^{\circ}$ 。

chn_azimuth: 极坐标系下，通道 n 的点方位角，分辨率 $0.01^{\circ}$ 。

chn_intensity: 通道 n 的点反射强度值，取值范围 0~255。

##### 2.1.2.1 channel data 定义

Channel data 是 9 Bytes，此通道径向距离 2 Bytes、俯仰角 2 Bytes、方位角 2 Bytes、反射强度值 1 Byte、预留 2 Bytes。

详细定义如下:


表 6: data block 中通道数据定义


| channel data (9 Bytes) |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| chn_radius(2 Bytes) |  | chn_elevation(2 Bytes) |  | chn_azimuth(2 bytes) |  | chn_intensity(1 Byte) |
| R1 [15:8] | R2[7:0] | E1[15:8] | E2[7:0] | A1[15:8] | A2[7:0] | Intensity[7:0] |
| resv.(2 Bytes) |  |  |  |  |  |  |
| r1 [15:8] | r2 [7:0] |  |  |  |  |  |

以径向距离 radius 计算为例:

chn_radius 是 2 Bytes，单位是厘米（cm），分辨率为 0.5 cm。

获取数据包里的某通道 radius 值的十六进制数为：R1 为 0x03，R2 为 0xfc。

0x03 为距离的高位，转换为十进制为 3，0xfc 为距离的低位，转化为十进制为 252。

因此：此通道的径向距离 $= \mathsf{R}1^{*}256 + \mathsf{R}2 = 3^{*}256 + 252 = 1020$ 。

根据坐标的分辨率，转化为米：1020 * 0.005 = 5.10m。

因此，此通道的测距在对应 elevation 和 azimuth 方向上的径向距离是 5.1 米。

XYZ 坐标运算:

通过 Wireshark 抓取 RS-LiDAR-M1 的数据包，如下图所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/02d102ae1c7edcc61de34a34c1c7b47b7a67d23faf33a0e5283bd6834e5c2438.jpg)


相关参数计算样例

1. time_offset: 数据块时间偏移量 HEX: 0x00 -> DEC: 00 -> 0 $\mu$ s

2. return_seq: HEX: 0x00 -> 单回波

3. radius: 径向距离 HEX: 0x0a,0x77 -> DEC: 10, 119

$$
- > \text { radius } = (1 0 \times 2 5 6 + 1 1 9) \times 0. 0 0 5 [ \mathrm{m} ] = 1 3. 3 9 5 \mathrm{m}
$$

4. elevation: 俯仰角 HEX: 0x83,0xa2 -> DEC: 131,162

$$
- > \text { elevation } = ((1 3 1 \times 2 5 6 + 1 6 2) - 3 2 7 6 8) \times 0. 0 1 [ \text { degree } ] = 9. 3 ^ {\circ}
$$

5. azimuth: 方位角 HEX: 0x94,0xdf -> DEC: 148,223

$$
- > \text {   azimuth   } = ((1 4 8 \times 2 5 6 + 2 2 3) - 3 2 7 6 8) \times 0. 0 1 [ \text { degree } ] = 5 3. 4 3 ^ {\circ}
$$

由下面的解析公式可以解析点云的 XYZ 坐标:

$\left\{ \begin{array}{l} X = \text{radius} \bullet \cos (\text{evelation}) \bullet \cos (\text{azimuth}) \\ Y = \text{radius} \bullet \cos (\text{evelation}) \bullet \sin (\text{azimuth}) \\ Z = \text{radius} \bullet \sin (\text{evelation}) \end{array} \right.$ $\left\{ \begin{array}{l} X = 13.395m \bullet \cos (9.3^\circ) \bullet \cos (53.43^\circ) \\ Y = 13.395m \bullet \cos (9.3^\circ) \bullet \sin (53.43^\circ) \\ Z = 13.395m \bullet \sin (9.3^\circ) \end{array} \right.$ 

由此得到该通道单回波的一次发射测量得到的点云坐标值 (7.88m, 10.62m, 2.17m)。

#### 2.1.3 帧尾

帧尾（Tail）长度为 3 Bytes，为预留位。

### 2.2 设备信息输出协议（DIFOP）

设备信息输出协议，Device Info Output Protocol，简称：DIFOP

I/O 类型：设备输出，电脑读取。

默认端口号为 7788。

DIFOP 是为了将设备序列号（S/N）、固件版本信息、上位机驱动兼容性信息、网络配置信息、校准信息、运行状态、故障诊断信息定期发送给用户的“仅输出”协议，用户可以通过读取 DIFOP 解读当前使用设备的各种参数的具体信息。

一个完整的 DIFOP Packet 的数据格式结构为同步帧头，数据区，预留。每个数据包共 256 Bytes：包括 8 Bytes 同步帧头 Header，1Byte 预留位，247Bytes 的数据区。

数据包的基本结构如下表所示。


表 7: DIFOP 包定义


| 段落划分 | 序号 | 属性 | 信息 | Offset | 长度 (byte) |
| --- | --- | --- | --- | --- | --- |
| Header | 1 | 帧头 | DIFOP 识别头 | 0 | 8 |
|  | 2 | 工作状态 1 | 雷达工作状态 | 8 | 1 |
| Data | 3 | 帧率设置 | 帧率设置值,暂不生效 | 9 | 1 |
| Data | 4 | 以太网 | 以太网 IP 源地址 | 10 | 4 |
| Data | 4 | 以太网 | 以太网 IP 目标地址 | 14 | 4 |
| Data | 4 | 以太网 | 以太网 IP 本机 MAC 地址 | 18 | 6 |
| Data | 4 | 以太网 | MSOP 端口号 | 24 | 2 |
| Data | 4 | 以太网 | DIFOP 端口号 | 26 | 2 |
| Data | 5 | FOV 设置 (暂未启用) | 水平 FOV 起始角度 | 28 | 2 |
| Data | 5 | FOV 设置 (暂未启用) | 水平 FOV 结束角度 | 30 | 2 |
| Data | 5 | FOV 设置 (暂未启用) | 垂直 FOV 起始角度 | 32 | 2 |
| Data | 5 | FOV 设置 (暂未启用) | 垂直 FOV 结束角度 | 34 | 2 |
| Data | 6 | 版本信息 | 主板 PL 侧固件版本号 | 36 | 5 |
| Data | 6 | 版本信息 | 主板 PS 侧固件版本号 | 41 | 5 |
| Data | 7 | 产品 SN 信息 | 产品序列号 | 46 | 6 |
| Data | 8 | 回波模式 | 回波模式设置 | 52 | 1 |
| Data | 9 | 时间信息 | 时间同步方式设置 | 53 | 1 |
| Data | 9 | 时间信息 | 时间同步状态 | 54 | 1 |
| Data | 9 | 时间信息 | 时间 | 55 | 10 |
| Data | 10 | 运行状态 | 电压、电流、输入输出信号等状态 | 65 | 31 |
|  | 11 | 故障诊断 | 故障诊断预留 | 96 | 29 |
|  | 12 | 预留 | 预留 | 125 | 60 |
|  | 13 | 预留 | 预留 | 185 | 71 |

注：


1. 表格中 Header (DIFOP 识别头) 为 0xa5,0xff,0x00,0x5a,0x11,0x11,0x55,0x55，可作为包的检查序列。

2. 水平 FOV 的 LSB 为 0.01 度，最小值 0，最大值 $120^{\circ}$ 。

3. 垂直 FOV 的 LSB 为 0.01 度，最小值 0，最大值 $25^{\circ}$ 。

4. 回波模式设置：回波模式标志位，0-双回波，1-N/A，2-N/A，3-N/A，4-最强回波，5-最后回波，6-第一回波。

5. 时间同步方式设置：默认值是 0x02。0x00 表示当前使用雷达内部自己计时，0x01 表示当前使用 1PPS 进行亚秒在整秒复位模式，0x02 表示当前使用 PTP 时间同步模式。

6. 时间同步状态：标识时间同步是否成功的状态：0-不成功，1-成功，2-时钟源掉线。

## 3 LiDAR 接线及工作说明

### 3.1 Interface box 接线方式

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/c49cdb680e744da8ca336fff6e5ff787bc7ede342cd703004e18e6f6aa3731e0.jpg)


图 2：雷达设备与上位机直连拓扑图


注：

图 2 中展示的是 Interface Box (AN1) 结构图的接线方式。目前 RS-LiDAR-M1 支持 AN1 和 AN2 两种接口，分别对应以下两种 Interface Box(电源转接盒):

| 接线说明 | AN1 Interface Box 结构图 | AN2 Interface Box 结构图 |
| --- | --- | --- |
| 连接LiDAR侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/66ebf12da9c40966bdec399399b6c13790394d9800dafc78ecf167729f26c680.jpg) | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/8b0084520ca241e7359629f5cc2089f7e4effc69997fd52b605f7a996579073f.jpg) |
| 连接电源及上位机侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/707371ad823f52609b0721d8c0981b6e80e4f63bf3c23f420853a71a306f9eaa.jpg) | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/a2147041163e0aa0e8546572ad323b8fe85f987585c5cce5427815df2d8c3048.jpg) |

### 3.2 LiDAR 状态机说明

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/33ea4a953bd6648161d1db3a72240a8042a2f46f4cefe3fb815610ef686ccba6.jpg)


整机状态机描述:

S1: 整机未供电

S2: 整机正常运行

## 4 时间同步

RS-LiDAR-M1 默认固件使用 gPTP (IEEE 802.1AS) 的时间同步方式。默认只支持 gPTP，如需要使用 PTP (IEEE 1588v2) 时间同步，请联系 RoboSense 技术支持。

### 4.1 精准时间同步协议

#### 4.1.1 时间同步介绍

PTP（Precision Time Protocol，精确时间协议）是一种时间同步的协议，其本身主要用于通过网络通讯的形式实现设备之间的高精度时间同步，也可被借用于设备之间的频率同步。相比现有的各种时间同步机制，PTP 具备以下优势：

1）相比 NTP（Network Time Protocol，网络时间协议），PTP 能够满足更高精度的时间同步要求，NTP 一般只能达到亚秒级的时间同步精度，而 PTP 则可达到亚微秒级。

2）相比 GPS（Global Positioning System，全球定位系统），PTP 具备更低的建设和维护成本，并且由于可以摆脱对 GPS 的依赖，在国家安全方面也具备特殊的意义。

PTP 同步可以通过不同的通信协议承载（CAN，以太网等）。同步模式上，PTP 同步可以使用两种机制：端到端 E2E 或对等网络 P2P:

E2E（End to End）模式：采用请求应答机制（Request Response Mechanism）

P2P（Peer to Peer）模式：采用对等延迟机制（Peer Delay Mechanism）。

说明：目前我司提供的 PTP 协议仅支持以太网协议 L2 层，E2E 模式。

gPTP(general precise time protocol)是PTP在时效性网络(Time-Sensitive Networking)的派生协议。同步机制采用和PTP协议一致的P2P端延迟机制(Peer Delay Mechanism)，同时采用以太网L2层通信。与PTP不同，gPTP要求使用硬件方式打时间戳，也就是常说的硬件时间戳，所以对于交换机和Master时钟会有较严苛的要求。

#### 4.1.2 gPTP 接线方式

使用 gPTP 同步方式，需要做以下准备，然后按照下图的连接方式进行连接：

1）一台 gPTP Master 授时主机（即插即用，无需额外配置）；

2）以太网交换机；

3）支持 gPTP 协议的设备 (RS-LiDAR-M1 及其他待授时设备);

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/507be6b1a14a23924dd211e357b7753c40a3bb007b77224bb42a65a63f14a00a.jpg)


图 3: gPTP 时间同步拓扑


注：

1.gPTP Master 授时设备属于第三方设备，我司出货时不包含此配件，需要用户自行采购；

2. 我司设备作为 gPTP Slave 设备只获取 gPTP Master 发出的时间，不做准确度判断。若解析雷达点云时间与真实时间出现偏差，请检查 gPTP Master 提供的时间是否准确；

3. 雷达同步之后, 若 gPTP Master 断开连接, 点云数据包中的时间会继续按照雷达内部时钟进行叠加。雷达断电重启后时间才会被重置。

### 4.2 使用 Linuxptp 工具简单验证时间同步

将 RS-LiDAR-M1 电源线和网线与 Interface Box 相连，网线对端再与上位机相连。上位机操作系统（OS）必须为 Linux 系统，以下以 Ubuntu 为例。

1. 使用命令$ifconfig 查看网卡名。如下图所示网卡名为 enp2s0。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/58fa2a05293bdb3bb0ce9d90996d628bba588813799fb513f9f78869cbad0668.jpg)


图 4：查找网卡名示意图


2. 使用命令$ethtool -Tenp2s0（上一步查询到的网卡名），可以查看此网卡是否支持 PTP

硬件。对于 gPTP 同步，需要硬件支持，PTP Hardware Clock 选项要求为 1。

```txt
sti@sti:~$ ethtool -T enp2s0
Time stamping parameters for enp2s0:
Capabilities:
software-transmit (SOF_TIMESTAMPING_TX_SOFTWARE)
software-receive (SOF_TIMESTAMPING_RX_SOFTWARE)
software-system-clock (SOF_TIMESTAMPING_SOFTWARE)
PTP Hardware Clock: none
Hardware Transmit Timestamp Modes: none
Hardware Receive Filter Modes: none 
```


图 5：检查 PTP 硬件支持情况示意图


3. 下载并安装 linuxptp 工具。

```txt
$sudo git clone git://git.code.sf.net/p/linuxptp/code linuxptp
$cd linuxptp
$sudo make
$sudo make install
$reboot 
```

4. ptp4l 命令的使用。

Ptp4I 命令选项介绍如下:

延迟机制选项


-A 自动模式，自动选择 E2E 延迟机制，当收到对等延迟请求时切换到 P2P。

-E E2E 模式，请求应答延迟机制（默认）

-P P2P 模式，端延迟机制

网络传输选项


-2 IEEE 802.3 

-4 UDP IPV4（默认）

-6 UDP IPV6 

时间戳选项


-H 硬件时间戳（默认）

-S 软件模拟时间戳

-L 老的硬件时间戳，LEGACY HW 需要配合 PHC 设备使用。

其他选项


-f [file] 从指定文件 file 中读取配置。默认情况下不读取任何配置文件。

-i [dev] 选择 PTP 接口设备，例如 eth0（可多次指定）必须至少使用此选项或配置文件指定一个端口。

-p [dev] 此选项用于在旧 Linux 内核上指定要使用的 PHC 设备（例如 /dev/ptp0 时钟设备），默认为 auto，忽略软件/LEGACY HW 时间戳(不推荐使用此选项)

-s slaveOnly mode，从时钟模式（覆盖配置文件）

-t 透明时钟模式

-1 [num] 将日志记录级别设置为'num'，默认是6

-m 将消息打印到 stdout

-q 不打印消息到 syslog

-V 打印软件版本并退出

-h 帮助命令

简单同步 RS-LiDAR-M1 使用命令:

(1) PTP E2E（L2 层）命令:


$sudo ptp4l -E -S -2 -m -i enp2s0 (网卡名)

如设备硬件支持 PTP Hardware Clock 为 1，可以使用-H 替代-S

(2) gPTP 命令:


$sudo ptp4l -i enp4s0 -m -H -2 -f gptp-master.cfg 

设备要求硬件支持 PTP Hardware Clock 为 1。特别说明：无硬件支持设备可用-S 替代-H 进行 gPTP 同步模拟，但同步精度无法保证。其中，gptp-master.cfg 为 gPTP 主时钟配置文件。

在主机上新建 gptp-master.cfg 文件，在此文件中复制以下内容后，保存文件：

802.1AS example configuration containing those attributes which


differ from the defaults. See the file, default.cfg, for the


complete list of available options.


[global] 

domainNumber 0 

logSyncInterval -3 

syncReceiptTimeout 3 

neighborPropDelayThresh 800 

path_trace_enabled 1 

follow_up_info 1 

```txt
transportSpecific 0x1
ptp_dst_mac 01:80:C2:00:00:0E
#p2p_dst_mac 01:1B:19:00:00:00
network_transport L2
delay_mechanism P2P
masterOnly 1
BMCA noop
asCapable true
inhibit_announce 1
inhibit_delay_req 1 
```

### 4.3 GPS 时间同步

如需要将 RS-LiDAR-M1 与 GPS 模块同步。首先需要使 GPS 模块给 gPTP Master 授时，具体接口与授时方式需要与 gPTP Master 提供方明确。除特殊需求外，RoboSense 将不提供相关技术支持。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/6099db4aac00f5635ce765a8acbaf74c06d62a3043d560a76c050c5b580ef0a6.jpg)


图 6: GPS 同步拓扑简图


## 附录 A RSView

在本附录中将展示如何使用 RSView 获取、可视化、保存和回放 RS-LiDAR-M1 数据。

对于从 RS-LiDAR-M1 得到的原始数据, 可以使用一些免费工具去检测, 例如 Wireshark 和 tcp-dump。但对于可视化这些数据, 使用 RSView 是更为便捷和容易实现的方式, 具体的 RSView 版本可以联系 RoboSense 技术人员。

### A.1 软件功能

RSView 提供将 RS-LiDAR-M1 数据进行实时可视化的功能。RSView 也能回放保存为 pcap 文件格式的数据，但是还不能支持.pcapng 格式的文件。

RSView 将 RS-LiDAR-M1 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如 XYZ 坐标、径向距离、pitch（Elevation）和 yaw（azimuth）角度等。

RSView 所包含的功能:

● 通过以太网实时显示数据

● 将实时数据记录保存为 PCAP 文件

● 从记录的 PCAP 文件中回放

- 不同类型可视化模式，例如距离、pitch（elevation）和 yaw(azimuth)等等

● 用表格显示点的数据

● 测量距离工具

### A.2 安装 RSView

RSView 的安装文件支持 Windows 的 64 位操作系统，安装前不需要安装其他依赖软件。解压 RSView 的压缩包，在 /bin 文件夹下得到 RSView.exe 可执行文件。

### A.3 设置网路

雷达在出厂时设定的发送电脑的 IP 地址，因此默认情况下需要设定计算机的静态 IP 的地址为 192.168.1.102，子网掩码为 255.255.255.0。此外还需要确保 RSView 没有被防火墙或第三方安全软件给禁止。

### A.4 可视化数据

1. RS-LiDAR-M1 接通电源，并用网线和电脑连接。

2. 右键使用管理员权限运行打开 RSView 软件。

3. 点击 File > Open 并且选择 Sensor Stream (图 A-1)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/3e24e5ec05d0abdcf7678632069b63571557ff85be00fd2b684d7a45cf2bcdf5.jpg)


图 A-1：打开 RView 实时数据显示


4. 在弹出的 Sensor Configuration 窗口中，Sensor Calibration 默认包含一个命名为 MEMSCorrectionFile_3V 的雷达参数，选择此参数后点击 OK。RS-LiDAR-M1（B3 样机）原始点云输出的已经是校准过的点云，所以此参数文件里的值为空。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/8b561e3f29d7832aac67773b940f86d1d674a897e6626d5bcf6b8f91e073625c.jpg)


图 A-2：选择 RS-LiDAR-M1 参数配置文件


5. 确认 MSOP 和 DIFOP 端口号是否正确：Tools > Sensor Network Configuration，选择 use udp，并且输入正确的 MSOP 端口号和 DIFOP 端口号

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/10c1f29c4be1131a4cc847e349a8993499d37f615a3b289396e78280d5e63ba0.jpg)


图 A-3: RSView 雷达端口设置示意图


6. RSView 开始显示实时采集到数据(图 A-4)。可以通过点击 Play 按钮暂停，再点击一次可以继续显示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/b325e2dc5b0fe447273615133af7aba15483ee11d46548eb2893524d401dc434.jpg)


图 B-4: RS-LiDAR-M1 点云图像


7. 如没有图像显示请在工具栏 Tool 工具下 Data Port Setting 中查看 MSOP 和 DIFOP 端口是否配置正确。

### A.5 保存 RS-LiDAR-M1 数据为 PCAP 格式

采用 RSView 作为录包工具:


1. 在实时显示数据时点击 Record 按钮(图 A-5)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/71e024f79f3b377cc5b3e584d99764cd062e73e9363cb265a1ad770f6d77f760.jpg)


图 A-5: RSView 保存按钮


2. 在弹出的 Choose Output File 对话框中，选择需要保存的路径和保存的文件名后，点击“保存（S）”按钮(图 B-6)。RSView 将开始将数据包文件写入目标 pcap 文件中。(注意：RS-LiDAR-M1 将会产生大量的数据，随着记录时间变长，目标 pcap 文件将会变大。因此最好将记录文件保存到 HDD 或者 SSD 中，而不是保存到较慢的 USB 设备或者用网络保存)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/e04843bf9311ea0cd29347c694c940b491b55d26c91b1a3ec0e50e5b6556dc21.jpg)


图 A-6: RSView 保存对话框


3. 再次点击 Record 按钮停止保存 pcap 数据。

采用 Wireshark 作为录包工具:

1. 下载安装 wireshark 软件。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/349130dc7c3f455e2c3cd878a2d6e16aa5ceec4de2f07883576d465dffcc3224.jpg)


图 A-7: Wireshark 图标


2. 双击启动 wireshark 软件，启动后选择当前连接雷达的网卡名称双击进去。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/eabaa8956c59492e9c8c04fd86fc55228f940f42d1b5ef649ac0d2f3c5fcf6b6.jpg)


图 A-8: Wireshark 启动


3. 看到下图数据则说明和雷达连接正常,红色框内数据分别代表“雷达 IP”,“PC IP”,“MSOP 端口号”,“DIFOP 包端口号”。

| No | Time | Source | Destination | Protocol | Length Info |
| --- | --- | --- | --- | --- | --- |
| 1 | 0:000000 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 2 | 0:000707 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 3 | 0:001372 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 4 | 0:002040 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 5 | 0:002704 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 6 | 0:003366 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 7 | 0:004032 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 8 | 0:004702 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 9 | 0:005385 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 10 | 0:005984 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 11 | 0:006650 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 12 | 0:007314 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 13 | 0:007979 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 14 | 0:008664 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 15 | 0:009325 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 16 | 0:009984 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 2369-2369 Len=1248 |
| 17 | 0:010691 | 192.168.10.14 | 192.168.10.6 | UDP | {I}_{\mathrm{N}} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) \mathrm{N} : 35(5) |
| {I}_{\mathrm{N}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O} } : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} : {I}_{\mathrm{O}} |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

图 A-9: Wireshark 工作


4. 软件左上角找到“文件-保存”。


| 文件(F) 编辑(E) 视图(V) 跳转(G) 捕获(C) 分析(A) 统计(S) 电话(Y) 无线(W) 工具(T) 帮助(H) |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| 打开 Ctrl+0 |  |  |  |  |  |  |
| 打开最近 合并(M)... |  |  |  |  |  |  |
| 从 Hex 转储导入(I)... |  |  | Destination | Protocol | Length | Info |
| 关闭 Ctrl+W |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 保存(S) Ctrl+S |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 另存为(A)... Ctrl+Shift+S |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 文件集合 |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出特定分组... |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出分组解析结果 |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出分组字节流(B)... Ctrl+H |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出 PDU 到文件... |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出 SSL 会话密钥... |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 导出对象 |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 打印(P)... Ctrl+P |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
| 退出 Ctrl+Q |  |  | 192.168.1.102 | UDP | 1290 | 6699→6699 Le |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

图 A-10: Wireshark 数据保存


5. 在弹出的对话框中输入文件名称，数据格式选择.pcap 保存即可。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/b96c243e468010c18f9e51cb9ae23e13dad0b55cd32f7b842204c306f5867079.jpg)


图 A-11: Wireshark 数据保存


6. 此时可以在指定的文件夹目录下找到对应的文件，此时可以使用我们的 RSView 软件或者驱动去查看点云（RSView 操作请参照产品用户手册）。


图 A-12 Wireshark 数据保存


### A.6 回放 pcap 数据

可以使用 RSView 对 RS-LiDAR-M1 保存的数据 pcap 文件进行回放或者测试。您可以使用 Play 按钮去播放或者选择数据中个别帧。也可以用鼠标选择 3D 点云数据中的一部分，然后打开表格进行分析。pcap 文件的保存路径不可以有中文。

1. 点击 File > Open 并且选择 Capture File。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/e6b470f134b436aa43035364f62e5d03db7bf47b9cdddda4c9cb7a74579a8928.jpg)


图 A-13 打开 pcap 记录文件


2. 弹出 Open File 对话框，选择一个记录的 pcap 文件并且点击“打开（O）”按钮。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/2d6da5b760a30f017693b893419823e19afa1afd8fcab0987766dc57f71ac8f7.jpg)


图 A-14 打开 pcap 记录文件


3. 弹出 Sensor Configuration 对话框，添加并选择正确的 RS-LiDAR-M1 的配置文件并点击 OK 按钮。

4. 点击 Play 按钮可以播放或者暂停数据。使用 Scrub 滑动工具前后滑动可以选择数据中不同位置的帧，此工具和 Record 按钮在同一个工具栏内(图 A-15)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/151e7b37a3623626637d242d1dcc339506c1623b89a9839ea943bc08d119f608.jpg)


图 A-15 RSView Play 按钮和 Scrub 滑动工具


5. 为了得到更为具体的分析，选择一帧您感兴趣的数据并且点击 Spreadsheet 按钮(图 A-16)。一个侧边栏数据表将会显示在软件中右边，在表中包含了这一帧所有的数据。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/27417b7ed16e787a585e780cb6b4b36240966c606c34b7cea2e05fa3786e4b90.jpg)


图 A-16 RSView 表格工具


6. 可以调整表格每列的宽度，或者排序得到更直观的显示。

| Shoing Data Attribute: Point Data Precision: 3 F [ ] |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Point ID | Point_X | Point_Y | Point_Z | distance_m | intensity | laser_id | pitch | yaw |
| 0 | 0 | 7.947 | 10.617 | 1.888 | 13.395 | 45 | 0 | 9.300 | 53.430 |
| 1 | 1 | 10.905 | 5.676 | 2.231 | 12.495 | 40 | 1 | 12.060 | 27.680 |
| 2 | 2 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 2 | -327.680 | -327.680 |
| 3 | 3 | 8.250 | -3.523 | 1.498 | 9.095 | 75 | 3 | 11.320 | -23.270 |
| 4 | 4 | 10.390 | -11.478 | 1.696 | 15.575 | 142 | 4 | 7.590 | -48.030 |
| 5 | 5 | 7.956 | 10.549 | 1.873 | 13.345 | 51 | 0 | 9.270 | 53.220 |
| 6 | 6 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 1 | -327.680 | -327.680 |
| 7 | 7 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 2 | -327.680 | -327.680 |
| 8 | 8 | 8.233 | -3.550 | 1.499 | 9.090 | 72 | 3 | 11.330 | -23.470 |
| 9 | 9 | 10.397 | -11.571 | 1.713 | 15.650 | 176 | 4 | 7.620 | -48.240 |
| 10 | 10 | 7.965 | 10.481 | 1.858 | 13.295 | 50 | 0 | 9.240 | 53.010 |
| 11 | 11 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 1 | -327.680 | -327.680 |
| 12 | 12 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 2 | -327.680 | -327.680 |
| 13 | 13 | 8.237 | -3.587 | 1.506 | 9.110 | 68 | 3 | 11.350 | -23.680 |
| 14 | 14 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 4 | -327.680 | -327.680 |
| 15 | 15 | 7.958 | 10.401 | 1.840 | 13.225 | 43 | 0 | 9.210 | 52.820 |
| 16 | 16 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 1 | -327.680 | -327.680 |
| 17 | 17 | 0.000 | 0.000 | 0.000 | 0.000 | 1 | 2 | -327.680 | -327.680 |
| 18 | 18 | 8.243 | -3.622 | 1.512 | 9.130 | 72 | 3 | 11.360 | -23.870 |

图 A-17 RSView 表格显示


7. 点击 Spreadsheet 中的 Show only selected elements，可以得到所选择点对应的数据，当然如果没有选择，表格将为空(图 A-18)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/eb01693287c37215f80ab511d15f9d85fe09934aa1ce0bbe0e45b114d43e094a.jpg)


图 A-18 RSView show only elements 工具


8. 点击 Select All Points 工具，这使得您的鼠标变成一个数据点选择工具（图 A-19）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/85dda723b1f8bd33f9e436a1cea89425e274b7cf2782d1d0e7314c9064d542b3.jpg)


图 A-19 RSView Select All Points 工具


9. 在 3D 数据显示空间中，使用鼠标画一个长方形框住一些数据点，这些点的数据将会在 Spreadsheet 被选择，并且在图中会变成粉红色(图 A-20)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/29b7f7fbbb096958a279ce96cea00d2bb71ddb7e0bd44e6f3829c41f2a73ba02.jpg)


图 A-20 RSView List Selected Points


10. 任何被选中的点都可以通过 Spreadsheet 工具栏 output csv data 保存（见图 A-21）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/7afbe607cd70ebf083171f3883f7be5911810ee7dd79838607f438066ad45002.jpg)


图 A-21 RSView 输出选中点到 csv 文件


## 附录 B Driver & SDK

### B.1 rs_driver 的编译与安装

RS Driver 为速腾聚创激光雷达提供跨平台的雷达驱动内核，方便用户二次开发使用。v1.3.0 的驱动内核及之后的版本已支持 RS-LiDAR-M1(B3 样件)的点云解析及变换。

可以在官方 GitHub 账号上下载 rs_driver 包:

```txt
https://github.com/RoboSense-LiDAR/rs_driver 
```

rs_driver 目前支持下列系统和编译器:

Windows 

● MSVC (VS2017 & VS2019 已测试)

● Mingw-w64 (x86_64-8.1.0-posix-seh-rt_v6-rev0 已测试)

Ubuntu (16.04, 18.04, 20.04) 

gcc (4.8+) 

##### B.1.1 依赖库的安装

rs_driver 依赖下列的第三方库，在编译之前需要先安装：

Boost 

Pcap 

➢ PCL (非必须，如果不需要可视化工具可忽略)

Eigen3 (非必须，如果不需要内置坐标变换可忽略)

在 Ubuntu 中安装以上依赖库:

$sudo apt-get install libboost-dev libpcap-dev libpcl-dev libeigen3-dev 

在 Windows 中安装以上依赖库:

Boost 

Windows 下需要从源码编译 Boost 库，请参考官方指南（https://www.boost.org/doc/libs/1_67_0/more/getting_started/windows.html）。编译安装完成之后，将 Boost 的路径添加到系统环境变量 BOOST_ROOT，见下图 B-1。如果使用 MSVC，也可以选择直接下载相应版本的预编译的安装包。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/9fef7256478b5e5cd8653ee25816ccf302293a0d84c92500d3d6fcb00395d0da.jpg)


图 B - 1：环境变量添加示意图


Pcap


首先，安装 Pcap 运行库（https://www.winpcap.org/install/bin/WinPcap_4_1_3.exe）。然后，下载开发者包（https://www.winpcap.org/install/bin/WpdPack_4_1_2.zip）到任意位置，然后将 WpdPack_4_1_2/WpdPack 的路径添加到环境变量 PATH，见图 B-1。

➢ PCL (非必须，如果不需要可视化工具可忽略)


(1) MSVC


如果使用 MSVC 编译器，可使用 PCL 官方提供的安装包安装。

安装过程中选择 “Add PCL to the system PATH for xxx”:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/92a7bb1493806008fc034d0e6e9872c0f827e74f7012d23bce4fe56d24cf1ecd.jpg)


图 B-2: PCL 设置界面


(2) Mingw-w64


PCL 官方并没有提供 mingw 编译的库, 所以需要按照官方教程, 从源码编译 PCL 并安装。

##### B.1.2 使用方式

##### B.1.2.1 rs_Driver 安装使用

驱动编译以 Linux 环境为例（在 windows 中，rs_driver 暂不支持安装使用），按顺序执行以下代码，安装驱动：

```powershell
$cd rs_driver
$mkdir build && cd build
$cmake .. && make -j4
$sudo make install 
```

##### B.1.2.2 作为子模块使用

在作为子模块使用时，需要添加如下命令到 CMakeLists.txt 文件中（将 rs_driver 作为子模块添加到工程内，使用 find_package() 指令找到 rs_driver，然后链接相关库）。

add_subdirectory( $PROJECT_SOURCE_DIR$ /rs_driver)
find_package(rs_driver REQUIRED)
include_directories( $rs_driver_INCLUDE_DIRS$ )
target_link_libraries(project $rs_driver_LIBRARIES$ ) 

##### B.1.3 示例程序 & 可视化工具

##### B.1.3.1 示例程序

rs_driver 提供了两个示例程序，用户可参考示例程序编写代码调用接口，存放于 rs_driver/demo 中:

```txt
demo_online.cpp 
```

```batch
demo_pcap.cpp 
```

若希望编译这两个示例程序，执行 CMake 配置时加上参数：

```txt
$cmake -DCOMPILE_DEMOS=ON .. 
```

##### B.1.3.2 可视化工具

rs_driver 提供了一个基于 PCL 的点云可视化工具，存放于 rs_driver/tool 中：rs_driver_viewer.cpp

若希望编译可视化工具，执行 CMake 配置时加上参数：

```powershell
$cmake -DCOMPILE_TOOLS=ON .. 
```

##### B.1.4 坐标变换

rs_driver 提供了内置的坐标变换功能，可以直接输出经过坐标变换后的点云，节省了用户对点云进行坐标变换的额外操作耗时。若希望启用此功能，执行 CMake 配置时加上参数：

```batch
$cmake -DENABLE_TRANSFORM=ON .. 
```

### B.2 rlidar_sdk 的编译与安装

rslidar_sdk 为速腾聚创在 Ubuntu 环境下的雷达驱动软件包，包括了雷达驱动内核，ROS 拓展功能，ROS2 拓展功能，Protobuf-UDP 通信拓展功能。对于没有二次开发需求的用户，或是想直接使用 ROS 或 ROS2 进行二次开发的用户，可直接使用本软件包，配合 ROS 或 ROS2 自带的 RVIZ 可视化工具即可查看点云。对于有更深一步二次开发需求，想将雷达驱动集成到自己工程内的客户，请参考雷达驱动内核的相关文档，直接使用内核 rs_driver 进行二次开发。

可以在官方 GitHub 账号上下载 rsliar_sdk.tar.gz 包，可以在官方 GitHub 账号上下载: https://github.com/RoboSense-LiDAR/rslidar_sdk/releases

Assets 3 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/07374a658f56f33a242962649b452605e4ec8a6396fe78d12c77e59dd117036f.jpg)


rslidar_sdk.tar.gz 

注意：下载 source code 将不包含 rs_driver 解析内核，需要手动下载添加。

##### B.2.1 依赖库的安装

##### B.2.1.1 ROS 环境

若需在 ROS 环境下使用雷达驱动，则需安装 ROS 相关依赖库：

Ubuntu 16.04 - ROS kinetic desktop-full 

Ubuntu 18.04 - ROS melodic desktop-full 

安装方式： 参考 http://wiki.ros.org

如果安装了 ROS kinetic desktop-full 版或 ROS melodic desktop-full 版，那么兼容版本其他依赖库也应该同时被安装了，所以不需要重新安装它们以避免多个版本冲突引起的问题，因此，强烈建议安装 desktop-full 版，这将节省大量的时间来逐个安装和配置库。

##### B.2.1.2 ROS2 环境

若需在 ROS2 环境下使用雷达驱动，则需安装 ROS2 相关依赖库

Ubuntu 16.04 - 不支持

Ubuntu 18.04 - ROS2 Eloquent desktop 

安装方式：参考 https://index.ros.org/doc/ros2/Installation/Eloquent/Linux-Install-Debians/注意：请避免在同一台电脑上同时安装 ROS 和 ROS2，这可能会产生冲突！同时还需要手动安装 Yaml 库。

##### B.2.2 编译与运行

rslidar_sdk 可以使用三种不同的编译和运行方式。

##### B.2.1.1 直接编译

按照如下指令即可编译运行程序。直接编译也可以使用 ROS 相关功能(不包括 ROS2)，但需要在程序启动前手动启动 roscore，启动后手动打开 rviz 才能看到可视化点云结果。

编译命令如下:

$cd rslidar_sdk 

$mkdir build && cd build 

$cmake .. && make -j4 

\$./rslidar_sdk_node 

##### B.2.1.2 依赖于 ROS-catkin 编译

1. 打开工程内的 CMakeLists.txt 文件, 将文件顶部的 set(COMPILE_METHOD ORIGINAL) 改为 set(COMPILE_METHOD CATKIN)。

```txt
#====================
# Compile setup (ORIGINAL,CATKIN,COLCON)
#
set(COMPILE_METHOD CATKIN)
```

2. 将 rslidar_sdk 工程目录下的 package_ros1.xml 文件重命名为 package.xml。

3. 新建一个文件夹作为工作空间，然后再新建一个名为 src 的文件夹，将 rslidar_sdk 工程放入 src 文件夹内。

4. 返回工作空间目录，执行以下命令即可编译&运行(若使用.zsh,将第二句指令替换为source devel/setup.zsh)。

$catkin_make 

$source devel/setup.bash 

$roslaunch rslidar_sdk start.launch 

##### B.2.1.3 依赖于 ROS2-colcon 编译

1. 打开工程内的 CMakeLists.txt 文件, 将文件顶部的 set(COMPILE_METHOD ORIGINAL) 改为 set(COMPILE_METHOD COLCON)。

```txt
#----#
# Compile setup (ORIGINAL,CATKIN,COLCON)
#---- 
```


set(COMPILE_METHOD COLCON)


2. 将 rslidar_sdk 工程目录下的 package_ros2.xml 文件重命名为 package.xml。

3. 新建一个文件夹作为工作空间，然后再新建一个名为 src 的文件夹，将 rslidar_sdk 工程放入 src 文件夹内。

4. 通过链接下载 ROS2 环境下的雷达 packet 消息定义，将 rslidar_msg 工程也放在刚刚新建的 src 文件夹内，与 rslidar_sdk 并列。

5. 返回工作空间目录，执行以下命令即可编译&运行(若使用.zsh,将第二句指令替换为source install/setup.zsh)。

$colcon build 

$source install/setup.bash 

$ros2 launch rslidar_sdk start.py 

##### B.2.3 参数介绍

本工程只有一份参数文件 config.yaml，储存于 rslidar_sdk/config 文件夹内。整个参数文件可以被分为两部分，common 部分以及 lidar 部分。在多雷达情况下，common 部分的参数设置将会被所有雷达共享，而 lidar 部分需要根据每台雷达实际情况分别进行设置。注意：参数文件 config.yaml 对缩进有严格的要求！请确保修改参数之后每行开头的缩进仍保持一致！

##### B.2.3.1 Common 部分参数

此部分用于设置雷达的消息来源，以及是否将结果发布。

```yaml
common:
msg_source: 1    #雷达数据消息来源类型
send_packet_ros: false
send_point_cloud_ros: false
send_packet_proto: false
send_point_cloud_proto: false
pcap_path: /home/robosense/lidar.pca    #播放离线 PCAP 包时的绝对地址
```

msg_source:


1 -- 连接在线雷达. 更多使用细节请参考在线读取雷达数据发送到 ROS。

2 -- 离线解析 ROS 或 ROS2 的 packet 包。更多使用细节请参考 录制 ROS 数据包&离线解析 ROS 数据包。

3 -- 离线解析 pcap 包。更多使用细节请参考离线解析 Pcap 包发送到 ROS。

4 -- 雷达消息来源为 Protobuf-UDP 的 packet 消息

5 -- 雷达消息来源为 Protobuf-UDP 的点云消息。

send_packet_ros:


true -- 雷达 packet 消息将通过 ROS 或 ROS2 发出，false -- 禁止。

由于雷达 ROS packet 消息为速腾聚创自定义 ROS 消息，因此用户无法直接 echo 话题查看消息具体内容。实际上 packet 主要用于录制离线 ROS 包，因为 packet 的体积小于点云。

send_point_cloud_ros:


true -- 雷达点云消息将通过 ROS 或 ROS2 发出，false -- 禁止。

点云消息类型为 ROS 官方定义的点云类型 sensor_msgs/PointCloud2，因此用户可以直接使用 Rviz 查看点云。同时，用户也可以选择录包时直接录制点云，但这样做包的体积会非常大，因此我们建议离线录制 ROS 包时录制 packet 消息。

send_packet_proto:


true -- 雷达 packet 消息将通过 Protobuf-UDP 发出，false -- 禁止。

send_point_cloud_proto:


true -- 雷达点云消息将通过 Protobuf-UDP 发出，false -- 禁止。

我们建议发送 packet 消息而不是点云, 因为点云消息体积过大, 对带宽有较高的要求。

pcap_path:


如果 msg_dource = 3，请确保此参数设置为正确的 pcap 包的绝对路径。

##### B.2.3.2 lidar 部分参数

本部分需要根据不同的雷达进行设置。

```yaml
lidar:
- driver:
    lidar_type: RSM1
    frame_id: /rslidar
    msop_port: 6699
    difop_port: 7788
    start_angle: 0
    end_angle: 360
    min_distance: 0.2
    max_distance: 200
    use_lidar_clock: false
    ros:
    ros_recv_packet_topic: /rslidar_packets
    ros_send_packet_topic: /rslidar_packets
    ros_send_point_cloud_topic: /rslidar_points
    proto:
    point_cloud_recv_port: 60021
    point_cloud_send_port: 60021
    msop_recv_port: 60022
    msop_send_port: 60022
    difop_recv_port: 60023
    difop_send_port: 60023
    point_cloud_send_ip: 127.0.0.1
    packet_send_ip: 127.0.0.1 
```

lidar_type: 目前支持的雷达型号已在 sdk 文件夹 README 中列出。RS-LiDAR-M1 选择类型 RSM1。

frame_id: 点云消息的 frame_id。

msop_port, difop_port: 点云的 msop 端口号和 difop 端口号。若收不到消息，请优先确认这两个参数是否配置正确。

start_angle, end_angle: 此参数对 RS-LiDAR-M1 暂未启用，点云消息的起始角度和结束角度，此处设置为软件屏蔽，无法减小每帧点云的体积，只会将区域外的点设置为 NAN 点。起始角和结束角的范围应在 0~360°之间。(起始角可以大于结束角).

min_distance, max_distance: 点云显示的最小距离和最大距离，此处设置为软件屏蔽，无法减小每帧点云的体积，只会将区域外的点设置为 NAN 点。

use_lidar_clock: true -- 使用雷达时间作为消息时间戳；false -- 使用系统时间作为消息时间戳。

##### B.2.3.3 多雷达示例

在线连接 2 台 RS-LiDAR-M1 雷达，并发送点云到 ROS。


注意：lidar 部分参数的缩进


```yaml
common:
msg_source: 1    #使用在线数据消息
send_packet_ros: false
send_point_cloud_ros: true    #发出点云 rslidar_points 数据
send_packet_proto: false
send_point_cloud_proto: false
pcap_path: /home/robosense/lidar.pcap
lidar:
- driver:
    lidar_type: RSM1
    frame_id: /rslidar
    msop_port: 6699
    difop_port: 7788
    start_angle: 0
    end_angle: 360
    min_distance: 0.2
    max_distance: 200
    use_lidar_clock: false
ros:
    ros_recv_packet_topic: /middle/rslidar_packets
    ros_send_packet_topic: /middle/rslidar_packets
    ros_send_point_cloud_topic: /middle/rslidar_points
proto:
    point_cloud_recv_port: 60021
    point_cloud_send_port: 60021
    msop_recv_port: 60022
    msop_send_port: 60022
    difop_recv_port: 60023
    difop_send_port: 60023
    point_cloud_send_ip: 127.0.0.1
    packet_send_ip: 127.0.0.1
- driver:
    lidar_type: RSBP
```

```yaml
frame_id: /rslidar
msop_port: 1990
difop_port: 1991
start_angle: 0
end_angle: 360
min_distance: 0.2
max_distance: 200
use_lidar_clock: false
ros:
ros_recv_packet_topic: /left/rslidar_packets
ros_send_packet_topic: /left/rslidar_packets
ros_send_point_cloud_topic: /left/rslidar_points
proto:
point_cloud_recv_port: 60024
point_cloud_send_port: 60024
msop_recv_port: 60025
msop_send_port: 60025
difop_recv_port: 60026
difop_send_port: 60026
point_cloud_send_ip: 127.0.0.1
packet_send_ip: 127.0.0.1 
```

##### B.2.4 坐标转换功能

rslidar_sdk 提供了内置的坐标变换功能，可以直接输出经过坐标变换后的点云，显著节省了用户对点云进行坐标变换的操作耗时。本节将指导用户如何使用 rslidar_sdk 的内置坐标变换功能，输出经过坐标变换后的点云。

##### B.2.4.1 依赖介绍

若希望启用坐标变换功能，需要安装以下依赖：

Eigen3 

命令安装方式:

$sudo apt-get install libeigen3-dev 

##### B.2.4.2 编译

若希望启用坐标变换的功能，在编译程序时需要将 ENABLE_TRANSFORM 选项设置为 ON.

1. 直接编译

$cmake -DENABLE_TRANSFORM=ON .. 

$make -j4 

2. ROS 编译

$catkin_make -DENABLE_TRANSFORM=ON 

2. ROS2 编译


$colcon build --cmake-args '-DENABLE_TRANSFORM=ON' 

##### B.2.4.3 坐标转换参数设置

坐标变换参数为 lidar 部分的隐藏参数 x, y, z, roll, pitch, yaw，此处为参数文件的一个示例，用户可根据实际情况配置。

```yaml
common:
msg_source: 1
send_packet_ros: false
send_point_cloud_ros: true
send_packet_proto: false
send_point_cloud_proto: false
pcap_path: /home/robosense/lidar.pcap
lidar:
- driver:
lidar_type: RS128
frame_id: /rslidar
msop_port: 6699
difop_port: 7788
start_angle: 0
end_angle: 360
min_distance: 0.2
max_distance: 200
use_lidar_clock: false
x: 1
y: 0
z: 2.5
roll: 0.1
pitch: 0.2
yaw: 1.57 
```

## 附录 C Autosar Tool

### C.1 工具简介

little-robo 工具是 RoboSense 为 RS-LiDAR-M1（以下简称 M1）产品开发的 autosar 专用小工具，该工具仅适用于基于 AutoSar 架构下的 M1 0210 平台产品。该工具基于 UDS 诊断 DoIP 协议进行开发，实现了对 LiDAR 的源 IP、目的 IP、MSOP Port、DIFOP Port、主板 PS 固件版本、主板 PL 固件版本、产品序列号等雷达基本信息的获取，也支持 ROI（凝视功能）开启与关闭切换、DID 信息查询、固件升级等功能。

### C.2 工具使用环境

little-robo 工具支持 windows/ubuntu16.04/ubuntu18.04/ubuntu20.04 使用环境。对应版本可以联系 RS 技术支持同事获取。

### C.3 工具操作说明

##### C.3.1 功能说明

little-robo tool支持两种模式:

① 处于未连接状态的：unlink模式

② 处于连接状态的：link模式（也可以称为linked模式）

模式切换通过【Link】按钮和【Unlink】按钮完成。

不同模式会点亮不同的按钮，通常可点击且是彩色的按钮有设置作用，绿色和绿色不可点击按钮没有设置功能。

Link模式支持以下功能:

1. 修改已连接的ECU（特指雷达）内部网络配置参数

① 支持修改ECU内部的IP地址和端口;

② 支持修改ECU内部的子网掩码和路由.

2. 支持可选DID查询，点击【QUERY】按钮对已经选择的DID查询项进行查询，结果显示在DID-RESP中。

| DID | PL Function Enable Control | QUERY | DID Name | Remark |
| --- | --- | --- | --- | --- |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | ECU Supply Voltage | 系统供电电压 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Global Timestamp | 全局时间戳 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Boot Software Version | 底层软件版本 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Hardware Version | 硬件版本 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Write Tester Fingerprint | 写入测试者指纹 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Active Diagnostic Session | 主动诊断会话 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Customer VIN Code | 车架号 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Lidar Status Sum | 雷达状态描述 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Mirror Temperature | 振镜温度 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | Sync Delay | 同步延迟 |
| DID-RESP | ECU Supply Voltage Global Timestamp Boot Software Version Hardware Version Write Tester Fingerprint Active Diagnostic Session Customer VIN Code Lidar Status Sum Mirror Temperature Sync Delay PL Function Enable Control |  | PL Function Enable Control | ROI使能控制 |

图 C - 1 DID 查询描述


3. 支持读取一些默认的ECU参数信息，如SN，PS和PL固件版本

4. 支持bin和hex固件格式烧录

5. 支持Reset(雷达软重启功能)

##### C.3.2 界面说明

首次打开软件需要 License 验证，界面参见图 2. 使用的 License Serial Number 为:

robosense.autosar.mems.team 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/99e234f8881f06bab900780132d32b1cefdac04b16f010400fa5dba7a1f67d6c.jpg)


图 C - 2 License 界面


输入 License Serial Number 后，勾选【I Agree】，并点击【Auth】进入工具操作界面，如图 3.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/ce69ce43395ff2a598d75c31bce1d6696022fe61e77b0fa5944df643d0c69bd4.jpg)


图 C - 3 操作初始界面（Unlink 模式）


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/93bf8bd5d633cf8b09e1b109968e4d3ac8ec3b98eef8806b9fb65efc7176ce17.jpg)


图 C - 4 操作初始界面（link 模式）


①LiDAR 目的 IP，出厂默认为 192.168.1.102. 支持修改，在框中输入将要修改的 IP 地址后，点击[TST]完成确认，然后重新对 LiDAR 进行上电，以完成修改；

②LiDAR 源 IP，出厂默认为 192.168.1.200. 支持修改，在框中输入将要修改的 IP 地址后，点击[ECU]完成确认，然后重新对 LiDAR 进行上电，以完成修改；

③Project 选择，下拉菜单选择 M0210;

④点击可进入 Link 模式;

⑤点击可进入 Unlink 模式;

⑥雷达子网掩码，默认为 255.255.255.0，支持修改，在框中输入将要修改的 IP 地址后，点击[E-NMASK]完成确认，然后重新对 LiDAR 进行上电，以完成修改；

⑦雷达路由地址，默认为 192.168.1.1，支持修改，在框中输入将要修改的 IP 地址后，点击 [E-ROUTE] 完成确认，然后重新对 LiDAR 进行上电，以完成修改；

⑧获取当前雷达主板 PL 固件版本;

⑨获取当前雷达产品序列号；

⑩雷达 MSOP 端口号，默认为 6699. 支持修改，在框中输入将要修改的 Port 号后，点击 [MSOP] 完成确认，然后重新对 LiDAR 进行上电，以完成修改；

⑪雷达 DIFOP 端口号，默认为 7788. 支持修改，在框中输入将要修改的 Port 号后，点击 [DIFOP] 完成确认，然后重新对 LiDAR 进行上电，以完成修改；

⑫获取当前雷达主板 PS 固件版本;

⑬点击【GET】，可获取当前雷达的子网掩码，路由地址，MSOP Port，DIFOP Port，PS 固件版本, PL 固件版本以及产品序列号信息；

⑭DID 查询，下拉可选择可查询列表，详细说明见 3.1 章节功能介绍；

⑮DID-RESP，返回 DID 值；

⑯QUERY，确认查询；

⑰ROI ON，点击可开启 ROI 功能；

⑱ROI OFF，点击可关闭 ROI 功能；

⑲RESET，点击可对雷达进行软重启；

⑳OpenFile，打开固件存在路径；

②1 Download，启动下载程序；

② Detail 为操作信息结果输出终端.

##### C.3.3 工具实操

##### C.3.3.1 获取雷达信息

Step1. 打开软件。双击程序进入基础界面，选择右上方按钮 Project 下拉选项，选择 M0210, 界面如下：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/cb4d0b4b4ea0c8c54d0a1d99029a850578a4329a87ff913cf3c8b3e55f93d7ee.jpg)


Step2. 进入 Link 模式。点击【Link】之前需要确认雷达源 IP 和目的 IP，如果雷达为默认的出厂状态，可直接点击【Link】进入 Link 模式，若 Link 右边出现 Unlink，则说明已进入 Link 模式，界面如下：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/6467a206d6f0e55a0ab65cda318b6596dd8ea97b3f4a624181d9af695ed48aa6.jpg)


若当前雷达的源 IP 和目的 IP 非出厂默认状态，需要进行修改之后方能进入 Link 模式，否则会报错，报错界面参考如下：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/de17e6dd9cb742a26a6b699cc7978e73df3c9df690fed5e147d9ac7d7ed45520.jpg)


若需要修改 IP, 在编辑框内输入要改的 IP, 点击左侧相应的选项框确认修改;

示例: 如雷达 IP 为 192.168.1.205, 则需先修改 ECU 的 IP 地址为 192.168.1.205, 并点击【ECU】进行确认, 再点击【Link】, 若显示 Unlink, 则表示已进入 Link 模式。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/322f5b2a90d9e6c4a8eed23deecce77767c93989dfa688a276b1586e0609c886.jpg)


Step3. 获取雷达信息。进入 Link 模式后，点击【GET】即可获取雷达基本信息。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/b1ef563c1cbf3280650fbd7396d181579912ea277ca007d8a48c4ef5d5ac00ed.jpg)


##### C.3.3.2 设置雷达 IP 及 Port

该操作需要在 Link 模式下进行，操作步骤可参考[3.3.1 获取雷达信息]。

操作示例：需要将出厂默认的雷达信息修改为如下状态：

| 雷达信息 | 描述 |
| --- | --- |
| LiDAR IP (ECU) | 10.10.1.200 |
| PC IP(TST) | 10.10.1.102 |
| MSOP Port | 2010 |
| DIFOP Port | 2011 |

Step1. 进入 Link 模式后，将要设置的 IP 和 Port 分别在【ECU】【TST】【MSOP】

【DIFOP】对应的框中进行编辑，编辑好之后分别点击【ECU】【TST】【MSOP】

【DIFOP】按钮进行修改确认；

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/1f5c90d354add5b16a0f9312ce3be3a0f5bde96e1d202051bc9659ef2974aa8f.jpg)


Step2. 点击【RESET】对雷达进行软重启；（修改雷达信息必须对雷达进行重启操作，可以点击 RESET 进行软重启或者对雷达进行重新上电操作！）

Step3. 重启完成后，重新进入 link 模式进行确认，或者通过 wireshark 抓包工具进行确认。

| No. | Time | Source | Destination | Protocol | Length | Info |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 58 | 0.110185 | 10.10.1.200 | 10.10.1.102 |  | 298 | 49153 → 2011 | Len=256 |
| 59 | 0.113216 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 60 | 0.113217 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 61 | 0.113217 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 62 | 0.113217 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 63 | 0.114214 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 64 | 0.114214 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 65 | 0.114245 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 66 | 0.114245 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 67 | 0.114245 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 68 | 0.114245 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 69 | 0.114245 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 70 | 0.114438 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 71 | 0.114438 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |
| 72 | 0.114634 | 10.10.1.200 | 10.10.1.102 |  | 1252 | 49152 → 2010 | Len=1210 |

##### C.3.3.3 ROI 功能切换

1. ROI 开启/关闭功能:

点击【ROI ON】按钮开启 ROI；点击【ROI OFF】按钮即关闭 ROI。

2. ROI 功能状态确认


ROI 开启关闭状态可通过 DID 查询;

选择【PL Function Enable Control】,点击【QUERY】按钮;

DID-RSEP 值为 00 即表示关闭状态，DID-RSEP 值为 01 即表示开启状态。

| DID | PL Function Enable Control | QUERY | ROI ON | ROI OFF | RESET |
| --- | --- | --- | --- | --- | --- |
| DID-RESP | 01 |  |  |  |  |

##### C.3.3.4 固件烧录

Step1. 点击【OpenFile】选择要烧录的固件（支持 bin 或者 hex 文件）

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/8b060ccd02849c014127ede6d6132bc44675cf3253b25e6936729cc455b6c74f.jpg)


Step2. 点击【Download】，弹出 Programming Notice 窗口，点击【OK】开始进行升级，等待升级过程中，可以查看进度条和 Details 信息。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/0c6e8ab153f1088f220fdfbf758283509da7c5a3e866fcf94e345c7ba8e2058b.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/517e97bca2c8c4e1f31b6ab80a12e0b42eba1ce857203bc7af1726a0a4fc2665.jpg)


Step3. 升级完成之后，会弹出升级完成窗口，点击 OK，完成升级操作；

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/53bb8c1cdaa946bceca94003fafc326ec0df7726099cd88d2285f0b31db20f67.jpg)


Step4. 升级完成后，雷达会进行自启动，启动完成后，重新进入 Link 模式，获取版本信息进行确认.

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/5c700cd55be6c74681c320213b38b5cc89ea1908a9ab89d65608ce396d486e92.jpg)


## 附录 D 结构图纸


AN1 接口雷达结构图纸:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/c86dfbeaf9dd98b959fe5341a9efc552fe77dd759518ef4d49c0d869da927ece.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/fc64b21e7e4a5c0f53a01fe50ed7c997011cef3c75bd448c585a7fe0d8c74042.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/4e5c6afc532aa4862b8eeb841867869dedb0467d8756f7163829767044d3f246.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/0ddc42d53450b6cd3b09b47525aed865d7573d93b40b32fb1290fb9054e49e00.jpg)


AN1-Pin 脚定义说明：


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/900b2a4d17c2f41dee599f554fd5b278f5a4b1ff7344a62dd1d09b7ae6fad004.jpg)


| Definition of connector pin |  |  |
| --- | --- | --- |
| Pin Number | Signal Name | Connector Name |
| B1 | VBAT | MOLEX-334824001 |
| B2 | GND | MOLEX-334824001 |
| B3 | WakeuP | MOLEX-334824001 |
| B4 | — | MOLEX-334824001 |
| A1 | 1000Base T1 P | AmphenolNTBM11V1U01110T |
| A2 | 1000Base T1 N | AmphenolNTBM11V1U01110T |
| A3 | GND | AmphenolNTBM11V1U01110T |

AN2 接口雷达结构图纸:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/3067ecf4f75da05778273a693318a2c1b879a32cf1db71306aa19ecee6c21c32.jpg)


AN2-Pin 脚定义说明：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/d44111cd-7481-4fb2-960a-a0056a3a38be/aa6e82fe26813502ce74cf45ffb71c1bcd6c3dbfa97d02368482e459d2c62b14.jpg)


| Definition of connector pin |  |  |
| --- | --- | --- |
| Pin Number | Signal Name | Connector Name |
| B1 | GND | LJV C—HSPPSNXS24T—A |
| B2 | VBAT | LJV C—HSPPSNXS24T—A |
| B3 | WakeP | LJV C—HSPPSNXS24T—A |
| B4 | — | LJV C—HSPPSNXS24T—A |
| A1 | 1000Base T1 P | AmphenolNTHBV11A1001ST |
| A2 | 1000Base T1 N | AmphenolNTHBV11A1001ST |
| A3 | GND | AmphenolNTHBV11A1001ST |

0755-86325830 

Smart Sensor, Safer World


深圳市速腾聚创科技有限公司 Shenzhen Suteng Innovation Technology Co., LTD.


Address: 深圳市南山区留仙大道 3370 号南山智园崇文园区 3 栋 10-11 层 10-11/F, Block 3, Chongwen Garden, Nanshan IPark, 3370 Liuxian Avenue, Nanshan District, Shenzhen, China

Web: www.robosense.ai 

Tel: 0755-8632-5830 

Email: service@robosense.cn 