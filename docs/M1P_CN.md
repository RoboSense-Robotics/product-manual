# M1P 用户手册

**手册版本 V1.3.0**

---

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/26bd8ae965b22ae2c961fea58646c8e529606a00fadd1ffd89618ae7c3b4539c.jpg)


## 修订历史

*【执行标准】 Q/RS 001-2021*

| Revision | Content | Date | Edited by |
| --- | --- | --- | --- |
| 1.0.0 | 初版发行 | 2022-04-18 | PD |
| 1.1.0 | 更新附录C结构图纸更新附录A录包工具推荐优先级 | 2022-07-01 | PD |
| 1.2.0 | 更新章节1中部分描述错误 | 2022-09-05 | PD |
| 1.3.0 | 更新章节2通信协议,IP及端口号等更新章节3状态机定义,补充线束说明更新附录ARSView软件版本及界面手册更新附录B Driver & SDK最新地址 | 2022-12-16 | PD |

## 1 产品规格

RS-LiDAR-M1P采用MEMS固态激光雷达方式,测量距离高达200米(180m@10%),出点数高达750,000点/秒(单回波模式)及1,500,000点/秒(双回波模式),水平测角 $120^{\circ}$ ( $-60.0^{\circ} \sim +60.0^{\circ}$ ),垂直测角 $25^{\circ}$ ( $-12.5^{\circ} \sim +12.5^{\circ}$ )。


表 1: 产品规格表


| 传感器 | TOF法测距,包含反射强度信息测距:0.5m~200m(180m@10% NIST)$^{1}$精度:\pm 5cm@1 sigma^{2}视角(垂直):25°(-12.5°~+12.5°)$^{3}$角分辨率(垂直):平均0.2°4视角(水平):120°(-60.0°~+60.0°)角分辨率(水平):平均0.2°4帧率:10Hz |
| --- | --- |
| 激光 | Class 1 eye safe波长:905nm |
| 输出 | ~750,000点/秒(单回波模式)~1,500,000点/秒(双回波模式)1000Base-T1千兆以太网UDP包中包含三维空间坐标、反射强度信息、时间戳等 |
| 机械/电子操作 | 功耗:15w^{5}工作电压:9~16VDC重量:约0.75kg(不包含数据线)尺寸:长110mm*宽111mm*高45mm |
|  | ● 防护安全级别:IP67, IP6K9K● 工作温度范围:-40°C~85°C(要求长时间工作需强制对流)6● 存储温度范围:-40°C~105°C |

## 2 通信协议

RS-LiDAR-M1P 与电脑之间的通信采用以太网介质，使用 UDP 协议，输出包有两种类型：MSOP 包和 DIFOP 包。文中所有涉及 MSOP 协议包均为 1210Bytes 定长；DIFOP 协议包均为 256Bytes 定长。单回波模式下，每秒发射 6300 个 MSOP 包和 10 个 DIFOP 包，数据传输速率要求不低于 58.2 Mbps。双回波模式下，要求不低于 116.4 Mbps。RS-LiDAR-M1P 网络参数可配置，出厂默认采用固定 IP 和固定目的端口号模式，按照如下表格。


表 2：出厂默认网络配置表


|  | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| --- | --- | --- | --- |
| RS-LiDAR-M1P | 192.168.1.200 | / | / |
| 电脑 | 192.168.1.102 | 6699 | 7788 |

设备默认 MAC 地址是在工厂初始设置的，每台设备 MAC 地址唯一。

当单播使用设备的时候，需要把电脑的 IP 设置为与设备同一网段上，例如 192.168.1.x(x 的取值范围为 1~254)，子网掩码为 255.255.255.0。若不知设备网络配置信息，请将主机子网掩码设置为 0.0.0.0 后连接设备并使用 Wireshark 抓取设备输出包进行分析。

RS-LiDAR-M1P 和电脑之间的通信协议主要分两类，一览表见下表格。

主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射率等信息封装成包输出给电脑；

设备信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出给电脑。


表 3：设备协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 |
| --- | --- | --- | --- | --- |
| Main Data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 1210 Bytes |
| Device Information Output Protocol | DIFOP | 设备信息输出 | UDP | 256 Bytes |

注：下面章节皆为对协议中的有效载荷（MSOP 包 1210Bytes 和 DIFOP 包 256Bytes）部分进行描述和定义。


### 2.1 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：设备输出，电脑解析。

默认端口号为 6699。

MSOP 包完成三维测量相关数据输出，包括激光测距值、回波的反射强度值、垂直角度、水平角度和时间戳。MSOP 包的有效载荷长度为 1210 字节，其中 32 Bytes 的同步帧头 Header，1175 Bytes 的数据块区间（共 25 个 47 Bytes 的 data block），3 Bytes 为帧尾。

基本结构如下图所示:


MSOP Packet (1210 Bytes)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/48e38b921e064333bf2e8291bbb4ce12ef0e96035d1d94f3bdedb6884c003971.jpg)


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

pkt_header: 可作为包的检查序列，识别头为 0x55，0xaa，0x5a，0xa5。

pkt_psn: 包序列号，表示包计数，循环计数，从每帧数据的起点的包计数为 1，每帧数据的最后一个点的包计数为最大值。

protocol version: 表示 UDP 通信协议的版本号。

wave_mode: 回波模式标志位，0-双回波，1-N/A，2-N/A，3-N/A，4-最强回波，5-最后回波，6-第一回波。

time_sync_mode：时间同步模式：

0x00 表示当前使用雷达内部自己计时

0x01 表示当前使用 1PPS 进行亚秒在整秒复位模式

0x02 表示当前使用 PTP 时间同步模式

0x03 表示当前使用 gPTP 时间同步模式

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
| return_seq | 1 | 1 | 回波序列。单回波模式下,此标志位恒定为 0;双回波模式下,第一回波(距离更近的)用 0x1 表示,第二回波(距离更远的)用 0x2 表示 |
| ch1_radius | 2 | 2 | 极坐标系下,通道 1 的径向点距离值,距离解析分辨率 5mm |
| ch1_elevation | 4 | 2 | 极坐标系下,通道 1 的点垂直夹角,分辨率 0.01° |
| ch1_azimuth | 6 | 2 | 极坐标系下,通道 1 的点水平夹角,分辨率 0.01° |
| ch1_intensity | 8 | 1 | 通道 1 的点反射强度值,取值范围 0~255 |
| resev. | 9 | 2 | 预留 |
| ch2_radius | 11 | 2 | 极坐标系下,通道 2 的径向点距离值,距离解析分辨率 5mm |
| ch2_elevation | 13 | 2 | 极坐标系下,通道 2 的点垂直夹角,分辨率 0.01° |
| ch2_azimuth | 15 | 2 | 极坐标系下,通道 2 的点水平夹角,分辨率 0.01° |
| ch2_intensity | 17 | 1 | 通道 2 的点反射强度值,取值范围 0~255 |
| resev. | 18 | 2 | 预留 |
| ch3_radius | 20 | 2 | 极坐标系下,通道 3 的径向点距离值,距离解析分辨率 5mm |
| ch3_elevation | 22 | 2 | 极坐标系下,通道 3 的点垂直夹角,分辨率 0.01° |
| ch3_azimuth | 24 | 2 | 极坐标系下,通道 3 的点水平夹角,分辨率 0.01° |
| ch3_intensity | 26 | 1 | 通道 3 的点反射强度值,取值范围 0~255 |
| resev. | 27 | 2 | 预留 |
| ch4_radius | 29 | 2 | 极坐标系下,通道 4 的径向点距离值,距离解析分辨率 5mm |
| ch4_elevation | 31 | 2 | 极坐标系下,通道 4 的点垂直夹角,分辨率 0.01° |
| ch4_azimuth | 33 | 2 | 极坐标系下,通道 4 的点水平夹角,分辨率 0.01° |
| ch4_intensity | 35 | 1 | 通道 4 的点反射强度值,取值范围 0~255 |
| resev. | 36 | 2 | 预留 |
| ch5_radius | 38 | 2 | 极坐标系下,通道 5 的径向点距离值,距离解析分辨率 5mm |
| ch5_elevation | 40 | 2 | 极坐标系下,通道5的点垂直夹角,分辨率0.01° |
| ch5_azimuth | 42 | 2 | 极坐标系下,通道5的点水平夹角,分辨率0.01° |
| ch5_intensity | 44 | 1 | 通道5的点反射强度值,取值范围0~255 |
| resev. | 45 | 2 | 预留 |

N 为任一个 MSOP 包中第 N 个 data block。

time_offset: 第 N 组 Block 里面所有的点相对于包的 timestamp 的时间偏移量，该组点的时间等于 timestamp+time_offset。

return_seq: 回波序列。单回波模式下，此标志位恒定为 0；双回波模式下，第一回波（距离更近的）用 0x1 表示，第二回波（距离更远的）用 0x2 表示。

n 为第 N 组 data block 中第 n 个通道，n=1,2,3,4,5，其包含数据如下：

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

chn_radius 是 2 Bytes，分辨率为 0.5 cm。

获取数据包里的某通道 radius 值的十六进制数为：R1 为 0x03，R2 为 0xfc。

0x03 为距离的高位，转换为十进制为 3，0xfc 为距离的低位，转化为十进制为 252。

因此：此通道的径向距离= $R1*256+R2=3*256+252=1020$ 。

根据坐标的分辨率，转化为米：1020 * 0.005 = 5.10m。

因此，此通道的测距在对应 elevation 和 azimuth 方向上的径向距离是 5.1 米。

XYZ 坐标运算:

通过 Wireshark 抓取 RS-LiDAR-M1P 的数据包，如下图所示：

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/10e67723cb976a22890546e21cbbbb26c0243d36d23399607942e21b4d6bde6f.jpg)


相关参数计算样例


1. time_offset: 数据块时间偏移量 HEX: 0x00 -> DEC: 00 -> 0 μs

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

$\left\{ \begin{array}{l} X = \text{radius } \bullet \cos (\text{evelation}) \bullet \cos (\text{azimuth}) \\ Y = \text{radius } \bullet \cos (\text{evelation}) \bullet \sin (\text{azimuth}) \\ Z = \text{radius } \bullet \sin (\text{evelation}) \end{array} \right.$ $\left\{ \begin{array}{l} X = 13.395m \bullet \cos (9.3^\circ) \bullet \cos (53.43^\circ) \\ Y = 13.395m \bullet \cos (9.3^\circ) \bullet \sin (53.43^\circ) \\ Z = 13.395m \bullet \sin (9.3^\circ) \end{array} \right.$ 

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


| DIFOP 256Byte |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 段落划分 | 序号 | 属性 | 信息 | Offset | 长度 (byte) |
| Header | 1 | 帧头8 | DIFOP识别头 | 0 | 8 |
| Data | 2 | Reserve |  | 8 | 1 |
| Data | 3 | 帧率 | MEMS扫描帧率 | 9 | 1 |
| Data | 4 | 以太网 | 以太网IP源地址 | 10 | 4 |
| Data | 4 | 以太网 | 以太网IP目标地址 | 14 | 4 |
| Data | 4 | 以太网 | 以太网MAC地址 | 18 | 6 |
| Data | 4 | 以太网 | MSOP端口号 | 24 | 2 |
| Data | 4 | 以太网 | DIFOP端口号 | 26 | 2 |
| Data | 5 | 版本信息 | 主板PL侧固件版本号 | 28 | 5 |
| Data | 5 | 版本信息 | 主板PS侧固件版本号 | 33 | 5 |
| Data | 6 | Reserve |  | 38 | 16 |
| Data | 7 | 回波模式 | 回波模式设置 | 54 | 1 |
| Data | 8 | 时间信息 | 时间同步方式设置 | 55 | 1 |
| Data | 8 | 时间信息 | 时间同步状态 | 56 | 1 |
| Data | 8 | 时间信息 | 时间 | 57 | 10 |
| Data | 9 | 电压 | 整机输入电源电压 | 67 | 2 |
| Data | 10 | Reserve |  | 69 | 67 |
| Data | 11 | 故障诊断 | Lidar故障状态 | 136 | 1 |
| Data | 12 | Reserve |  | 137 | 118 |

注：


1. 表格中 Header (DIFOP 识别头) 为 0xa5,0xff,0x00,0x5a,0x11,0x11,0x55,0x55，可作为包的检查序列。


2. 水平 FOV 的 LSB 为 0.01 度，最小值 0，最大值 $120^{\circ}$ 。


3. 垂直 FOV 的 LSB 为 0.01 度，最小值 0，最大值 $25^{\circ}$ 。


4. 回波模式设置：回波模式标志位，0-双回波，1-N/A，2-N/A，3-N/A，4-最强回波，5-最后回波，6-第一回波。


5. 时间同步方式设置：默认值是 0x03。0x00 表示当前使用雷达内部自己计时，0x01 表示当前使用 1PPS 进行亚秒在整秒复位模式，0x02 表示当前使用 PTP 时间同步模式，0x03 表示当前使用 gPTP 时间同步模式。


6. 时间同步状态：标识时间同步是否成功的状态：0-不成功，1-成功，2-时钟源掉线。


## 3 LiDAR 接线及工作说明


3.1 线束说明


| 线束名称 | 实物图 | 线束端子 | 信号类型 |  |
| --- | --- | --- | --- | --- |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | D2 | 1000Base T1 P |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | D1 | 1000Base T1 N |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 1 | GND |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 2 | Wakeup |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 3 | / |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 4 | Battery+ |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 5 | / |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 二合一端子:a ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d6c732f17505471b372cc9a83479b1a3235c0f2e71160d3f5da649caa7c1885c.jpg) | 6 | / |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 端子:b ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/9d4219e2ce087fe4b469f61c0598a87d00ffd72e63e68f207773451993347b37.jpg) | 1 | GND |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 端子:b ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/9d4219e2ce087fe4b469f61c0598a87d00ffd72e63e68f207773451993347b37.jpg) | 2 | Wakeup |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 端子:b ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/9d4219e2ce087fe4b469f61c0598a87d00ffd72e63e68f207773451993347b37.jpg) | 4 | Battery+ |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 端子:c ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/ddf077019f5f03def0b6f41e77ae63ca54d04a98e9980a2448c176b8021d8a2d.jpg) | D2 | 1000Base T1 P |
| 车载以太网电源线束 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c8dbcd7e65b9a413797e4f792c29559e0f5371a3036181452981c6ccda413580.jpg) | 端子:c ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/ddf077019f5f03def0b6f41e77ae63ca54d04a98e9980a2448c176b8021d8a2d.jpg) | D1 | 1000Base T1 N |
| AC电源线 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/5093a83ca25e7892d5ff4b86ad56c62b05b084dcc675eecdbaf8f9e69a77c21e.jpg) | Interface Box ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2a3eeb24b5f0b554e984c751e3e63c220dbf5f70ece2dd8329e772c9bc32e7c3.jpg) | d | AC 电源 |
| AC电源适配器 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/4b61213f153ab6fcc9a514830a915bd06e513c46a004c4457762266c3ff87204.jpg) | Interface Box ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2a3eeb24b5f0b554e984c751e3e63c220dbf5f70ece2dd8329e772c9bc32e7c3.jpg) | e | AC 电源 |
| AC电源适配器 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/4b61213f153ab6fcc9a514830a915bd06e513c46a004c4457762266c3ff87204.jpg) | Interface Box ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2a3eeb24b5f0b554e984c751e3e63c220dbf5f70ece2dd8329e772c9bc32e7c3.jpg) | f | 12V 直流电源 |
| 千兆以太网线 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/ea2c81ea388a57da55a666adf73e3c8e3823dbe2b71b6cd4596f7ad94ad73127.jpg) | Interface Box ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2a3eeb24b5f0b554e984c751e3e63c220dbf5f70ece2dd8329e772c9bc32e7c3.jpg) | g/h | 千兆以太网 |

### 3.2 Interface box 接线方式

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/4b75d7c8de1a85252c8068d43b17399ef5460f820d3bf81a4a733f5314654c82.jpg)


图 2：雷达设备与上位机直连拓扑图


注：

图 2 中展示的是 Interface Box (TE) 的结构图的接线方式。

| 接线说明 | TE Interface Box 结构图 |
| --- | --- |
| 连接LiDAR 侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/c6c0930f342d4378635cc3c19ac532ea5e70e6ea83a5a19bb8483c8fb34d96d9.jpg) |
| 连接电源及上位机侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/d05424f92eab590d2785595a3f6ebcf67ad3fd2f11f8fa70b07766b6da652c8f.jpg) |

### 3.3 LiDAR 状态机说明

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2d1bf8fa68f64de4c56bed43ba20507114aa60b8a3f9e743d8fe926b190d8bb0.jpg)


唤醒电压说明:


| 信号类型 | Wakeup I/O 电压 | 说明 |
| --- | --- | --- |
| Wakeup 高电平 | 7V~16V | 直流高电平信号 |
| Wakeup 低电平 | 0V~2V | 直流低电平信号 |

## 4 时间同步

RS-LiDAR-M1P 默认固件使用 gPTP (IEEE 802.1AS) 的时间同步方式。默认只支持 gPTP，如需要使用 PTP (IEEE 1588v2) 时间同步，请联系 RoboSense 技术支持。

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

3）支持 gPTP 协议的设备 (RS-LiDAR-M1P 及其他待授时设备);

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/a2ea24966bdafa3c2968f110ff7b8948385e1b94119e114329c198098dd9b7e1.jpg)


图 3: gPTP 时间同步拓扑


注：

1.gPTP Master 授时设备属于第三方设备，我司出货时不包含此配件，需要用户自行采购；

2. 我司设备作为 gPTP Slave 设备只获取 gPTP Master 发出的时间，不做准确度判断。若解析雷达点云时间与真实时间出现偏差，请检查 gPTP Master 提供的时间是否准确；

3. 雷达同步之后, 若 gPTP Master 断开连接, 点云数据包中的时间会继续按照雷达内部时钟进行叠加。雷达断电重启后时间才会被重置。

### 4.2 使用 Linuxptp 工具简单验证时间同步

将 RS-LiDAR-M1P 电源线和网线与 Interface Box 相连，网线对端再与上位机相连。上位机操作系统（OS）必须为 Linux 系统，以下以 Ubuntu 为例。

1. 使用命令$ifconfig 查看网卡名。如下图所示网卡名为 enp2s0。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/65e2b6a72a35d36f90ae8dbdba36ab54894174c158d504f2aa1fcdd714143089.jpg)


图 4：查找网卡名示意图


2. 使用命令$ethtool -Tenp2s0（上一步查询到的网卡名），可以查看此网卡是否支持 PTP

硬件。对于 gPTP 同步，需要硬件支持，PTP Hardware Clock 选项要求不是 none 值。

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

简单同步 RS-LiDAR-M1P 使用命令:

(1) PTP E2E（L2 层）命令:


$sudo ptp4l -E -S -2 -m -i enp2s0 (网卡名)

如设备硬件支持 PTP Hardware Clock 不是 none 值，可以使用-H 替代-S

(2) gPTP 命令:


$sudo ptp4l -i enp4s0 -m -H -2 -f gptp-master.cfg 

设备要求硬件支持 PTP Hardware Clock 不是 none 值。特别说明：无硬件支持设备可用-S 替代-H 进行 gPTP 同步模拟，但同步精度无法保证。其中，gptp-master.cfg 为 gPTP 主时钟配置文件。

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

如需要将 RS-LiDAR-M1P 与 GPS 模块同步。首先需要使 GPS 模块给 gPTP Master 授时，具体接口与授时方式需要与 gPTP Master 提供方明确。除特殊需求外，RoboSense 将不提供相关技术支持。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/2b9e38efef58b1232b13076860fc780b0a9b157f7e2f5f87605057d9719eed64.jpg)


图 6: GPS 同步拓扑简图


## 附录 A RSView

在本附录中将展示如何使用 RSView 获取、可视化、保存和回放 RS-LiDAR-M1P 数据。

对于从 RS-LiDAR-M1P 得到的原始数据，可以使用一些免费工具去检测，例如 Wireshark 和 tcp-dump。但对于可视化这些数据，使用 RSView 是更为便捷和容易实现的方式，具体的 RSView 版本可以联系 RoboSense 技术人员。

### A.1 软件功能

RSView 提供将 RS-LiDAR-M1P 数据进行实时可视化的功能。RSView 也能回放保存为 pcap 文件格式的数据，但是还不能支持.pcapng 格式的文件。

RSView 将 RS-LiDAR-M1P 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如 XYZ 坐标、径向距离、pitch（Elevation）和 yaw（azimuth）角度等。

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

默认采用单播模式，需要设定计算机的静态 IP 的地址为 192.168.1.XXX，子网掩码为 255.255.255.0。此外还需要确保 RSView 没有被防火墙或第三方安全软件给禁止。

### A.4 可视化数据

1. RS-LiDAR-M1P 接通电源，并用网线和电脑连接。

2. 右键使用管理员权限运行打开 RSView 软件。

3. 点击 File > Open Sensor(图 A-1)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/3e3f145eeb43674145488015678755ed41b938467aa13702577df71a44d86a39.jpg)


图 A-1：打开 RView 实时数据显示


4. 在弹出的 Sensor Type and Configuration 窗口中, Sensor Type 下拉选项中选择 RSM1 适配 RS-LiDAR-M1P 机型, Sensor Calibration 默认包含一个命名为 MEMSCorrectionFile_3V 的雷达参数, 可以直接点击 OK。RS-LiDAR-M1P 原始点云输出的已经是校准过的点云, 所以此参数文件里的值为空。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/a406d15cc634d3300533bffb077f97fff7f13cb753ba9c33453bd2bc3d57a1ac.jpg)


图 A-2：选择 RS-LiDAR-M1P 参数配置文件


5. 确认 MSOP 和 DIFOP 端口号是否正确：Sensor Network Configuration，输入正确的 MSOP 端口号和 DIFOP 端口号。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/3c73b8cce822d8d7b0afab6995a790bdd35b2e957e79c25015d86d8ea9e209e6.jpg)


图 A-3: RSView 雷达端口设置示意图


6. RSView 开始显示实时采集到数据(图 A-4)。可以通过点击 Play 按钮暂停，再点击一次可以继续显示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/70624448eef6ad712925d31e129dce4a283fbb438a011aedbce6d77302d3e158.jpg)


图 A-4: RS-LiDAR-M1P 点云图像


7. 如没有图像显示请在工具栏 Tool 工具下 Data Port Setting 中查看 MSOP 和 DIFOP 端口是否配置正确。

### A.5 保存 RS-LiDAR-M1P 数据为 PCAP 格式

采用 Wireshark 作为录包工具:

1. 下载安装 wireshark 软件。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/b624cb80a3e1141c80f933e576ba325d432cbc173133d62e653137a8a49a4160.jpg)


图 A-5: Wireshark 图标


2. 双击启动 wireshark 软件，启动后选择当前连接雷达的网卡名称双击进去。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/7a9618377384810ba24d734647ae4084dbbd39b75ce45651e4495b27fb814c87.jpg)


图 A-6: Wireshark 启动


3. 看到下图数据则说明和雷达连接正常,红色框内数据分别代表“雷达 IP”,“PC IP”,“MSOP 端口号”,“DIFOP 包端口号”。

| # | Time | Source | Destination | Protocol | Length | Info |
| --- | --- | --- | --- | --- | --- | --- |
|  | 0 0.000000 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 2 0.000707 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 3 0.001372 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 4 0.002040 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 5 0.002704 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 6 0.003366 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 7 0.004032 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 8 0.004702 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 9 0.005385 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 10 0.005984 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 11 0.006650 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 12 0.007314 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 13 0.007979 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 14 0.008664 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 15 0.009325 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 16 0.009984 | 192.168.10.14 | 192.168.10.6 | UDP | 1290 | 2369-2369 Len=1248 |
|  | 17 0.010691 | 192.168.10.14 | 192.168.10.6 | UDP | { {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} |  |
|  | {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} |  |  |  |  |  |
|  | {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} \times {58} |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

图 A-7: Wireshark 工作


4. 软件左上角找到“文件-保存”。

| 文件(F) | 编辑(E) | 视图(V) | 跳转(G) | 捕获(C) | 分析(A) | 统计(S) | 电话(Y) | 无线(W) | 工具(T) | 帮助(H) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 打开 |  | Ctrl+0 |  |  |  |  |  |  |  |
|  | 打开最近 |  |  | ✓ |  |  |  |  |  |  |
|  | 合并(M)... |  |  |  |  |  |  |  |  |  |
|  | 从Hex 转储导入(I)... |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 关闭 |  | Ctrl+W |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 保存(S) |  | Ctrl+S |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 另存为(A)... |  | Ctrl+Shift+S |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 文件集合 |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出特定分组... |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出分组解析结果 |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出分组字节流(B)... |  | Ctrl+H |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出 PDU 到文件... |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出 SSL 会话密钥... |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 导出对象 |  |  |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 打印(E)... |  | Ctrl+P |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 退出 |  | Ctrl+Q |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 17 0.00347 |  | 192.168.1.200 |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 18 0.010247 |  | 192.168.1.200 |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 19 0.010848 |  | 192.168.1.200 |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 20 0.011449 |  | 192.168.1.200 |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |
|  | 21 0.012035 |  | 192.168.1.200 |  | 200 | 192.168.1.102 |  | UDP | 1290 | 6699→6699 Le |

图 A-8: Wireshark 数据保存


5. 在弹出的对话框中输入文件名称，数据格式选择.pcap 保存即可。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/0875a7cfd051812de36f4d2b72ceaef84809120e9d754b73f1676541b6f0509e.jpg)


图 A-9: Wireshark 数据保存


6. 此时可以在指定的文件夹目录下找到对应的文件，此时可以使用我们的 RSView 软件或者驱动去查看点云（RSView 操作请参照产品用户手册）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/80ca721f5498c208a2423dad8b07f7aafb69fe005b8f476c540e5e59bac00a49.jpg)


图 A-10 Wireshark 数据保存


### A.6 回放 pcap 数据

可以使用 RSView 对 RS-LiDAR-M1P 保存的数据 pcap 文件进行回放或者测试。您可以使用 Play 按钮去播放或者选择数据中个别帧。也可以用鼠标选择 3D 点云数据中的一部分，然后打开表格进行分析。pcap 文件的保存路径不可以有中文。

1. 点击 File > Open PCAP File。


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/36b7f2b695b3e2b964f05ae18bef1cf5a3eb9573a7dc3c55d3221f443c930455.jpg)


图 A-11 打开 pcap 记录文件


2. 弹出 Open File 对话框，选择一个记录的 pcap 文件并且点击“打开（O）”按钮。


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/305cb4aadc699c1cd61d7448ad221a05c883b09df1814faf546e1cd3c6d79bce.jpg)


图 A-12 打开 pcap 记录文件


3. 弹出 Sensor Type and Configuration 对话框，添加并选择正确的 RS-LiDAR-M1P 的配置文件并点击 OK 按钮。弹出 PCAP Network Configuration 对话框，输入正确的端口号并点击 OK 按钮。

4. 点击 Play 按钮可以播放或者暂停数据。使用 Scrub 滑动工具前后滑动可以选择数据中不同位置的帧 (图 A-15)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/b489d4b652e1211a9d12b98276b1f019b4c9787d202722d4bf98f3d0c49005ea.jpg)


图 A-13 RSView Play 按钮和 Scrub 滑动工具


5. 为了得到更为具体的分析，选择一帧您感兴趣的数据并且点击 Spreadsheet 按钮(图 A-16)。一个侧边栏数据表将会显示在软件中右边，在表中包含了这一帧所有的数据。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/edb9f2a3b3ac42c98a3e33fabca7d6b6b7645b985e45c41656be1aeb42f4c62f.jpg)


图 A-14 RSView 表格工具


6. 可以调整表格每列的宽度，或者排序得到更直观的显示。

| Showing Data Attribute: Point Data Precision: 3 F |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Point ID | Point_X | Point_Y | Point_Z | distance | intensity | pitch | ring | timestamp | yaw |
| 0 | 0 | 1.556 | 2.870 | 0.578 | 3.315 | 33 | 1005 | 0 | 15062685... | 6154 |
| 1 | 1 | 3.192 | 2.367 | 0.858 | 4.065 | 39 | 1219 | 1 | 15062685... | 3656 |
| 2 | 2 | 3.184 | 0.679 | 0.698 | 3.330 | 39 | 1210 | 2 | 15062685... | 1204 |
| 3 | 3 | 2.415 | -0.539 | 0.448 | 2.515 | 34 | 1025 | 3 | 15062685... | -1259 |
| 4 | 4 | 3.143 | -2.300 | 0.400 | 3.915 | 76 | 586 | 4 | 15062685... | -3619 |
| 5 | 5 | 1.565 | 2.859 | 0.577 | 3.310 | 33 | 1004 | 0 | 15062685... | 6131 |
| 6 | 6 | 3.193 | 2.349 | 0.857 | 4.055 | 39 | 1220 | 1 | 15062685... | 3634 |
| 7 | 7 | 3.187 | 0.666 | 0.700 | 3.330 | 38 | 1213 | 2 | 15062685... | 1181 |
| 8 | 8 | 2.403 | -0.547 | 0.448 | 2.505 | 35 | 1030 | 3 | 15062685... | -1282 |
| 9 | 9 | 3.130 | -2.309 | 0.403 | 3.910 | 81 | 592 | 4 | 15062685... | -3642 |
| 10 | 10 | 1.587 | 2.875 | 0.581 | 3.335 | 34 | 1003 | 0 | 15062685... | 6110 |
| 11 | 11 | 3.189 | 2.328 | 0.854 | 4.040 | 40 | 1221 | 1 | 15062685... | 3613 |
| 12 | 12 | 3.179 | 0.653 | 0.699 | 3.320 | 39 | 1216 | 2 | 15062685... | 1161 |
| 13 | 13 | 2.401 | -0.556 | 0.450 | 2.505 | 34 | 1035 | 3 | 15062685... | -1303 |
| 14 | 14 | 3.128 | -2.327 | 0.408 | 3.920 | 78 | 597 | 4 | 15062685... | -3664 |
| 15 | 15 | 1.603 | 2.878 | 0.581 | 3.345 | 33 | 1000 | 0 | 15062685... | 6089 |
| 16 | 16 | 3.193 | 2.314 | 0.853 | 4.035 | 39 | 1221 | 1 | 15062685... | 3593 |
| 17 | 17 | 3.181 | 0.641 | 0.700 | 3.320 | 38 | 1217 | 2 | 15062685... | 1140 |
| 18 | 18 | 2.408 | -0.567 | 0.453 | 2.515 | 34 | 1038 | 3 | 15062685... - 1324 |  |

图 A-15 RSView 表格显示


7. 点击 Spreadsheet 中的 Show only selected elements，可以得到所选择点对应的数

据，当然如果没有选择，表格将为空(图 A-18)。

| Shoing Data Attribute: Point Data Precision: 3 F |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Point ID | Point_X | Point_Y | Point_Z | distance | intensity | Show only selected elements. mestamp |  |  |
| 0 | 508 | 3.140 | -2.089 | 0.824 | 3.860 | 37 | 1232 | 3 | 15062685... |
| 1 | 513 | 3.132 | -2.100 | 0.825 | 3.860 | 37 | 1234 | 3 | 15062685... |
| 2 | 518 | 3.132 | -2.117 | 0.829 | 3.870 | 37 | 1237 | 3 | 15062685... |
| 3 | 523 | 3.132 | -2.134 | 0.833 | 3.880 | 37 | 1239 | 3 | 15062685... |
| 4 | 528 | 3.132 | -2.151 | 0.836 | 3.890 | 36 | 1241 | 3 | 15062685... |
| 5 | 533 | 3.136 | -2.170 | 0.839 | 3.905 | 37 | 1241 | 3 | 15062685... |
| 6 | 538 | 3.132 | -2.184 | 0.842 | 3.910 | 37 | 1244 | 3 | 15062685... |
| 7 | 543 | 3.144 | -2.209 | 0.849 | 3.935 | 37 | 1246 | 3 | 15062685... |
| 8 | 548 | 3.135 | -2.221 | 0.850 | 3.935 | 37 | 1248 | 3 | 15062685... |
| 9 | 553 | 3.127 | -2.231 | 0.852 | 3.935 | 38 | 1250 | 3 | 15062685... |
| 10 | 558 | 3.131 | -2.251 | 0.857 | 3.950 | 37 | 1253 | 3 | 15062685... |
| 11 | 693 | 3.130 | -2.247 | 0.822 | 3.940 | 37 | 1204 | 3 | 15062685... |
| 12 | 698 | 3.134 | -2.233 | 0.819 | 3.935 | 37 | 1202 | 3 | 15062685... |
| 13 | 703 | 3.136 | -2.215 | 0.815 | 3.925 | 37 | 1198 | 3 | 15062685... |
| 14 | 708 | 3.136 | -2.200 | 0.810 | 3.915 | 37 | 1194 | 3 | 15062685... |
| 15 713 |  |  |  |  |  |  |  |  |  |

图 A-16 RSView show only elements 工具


8. 点击 Select All Points 工具，这使得您的鼠标变成一个数据点选择工具（图 A-19）。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/e81ac057a57212f15879d14f994a078fc3c217ab74d39c75d26b22674fbd9159.jpg)


图 A-17 RSView Select All Points 工具


9. 在 3D 数据显示空间中，使用鼠标画一个长方形框住一些数据点，这些点的数据将会在 Spreadsheet 被选择，并且在图中会变成粉红色(图 A-20)。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/67362e87d0196b1452df5d75bfcec96b8c4f4f3550fe5b688b75c358a043e15d.jpg)


图 A-18 RView List Selected Points 列表


10. 任何被选中的点都可以通过 Spreadsheet 工具栏 output csv data 保存（见图 A-21）。

| tribute: Point Data ▼ Precision: 3 F |  |  |  |  |
| --- | --- | --- | --- | --- |
| ance | intensity | pitch | ring | timestamp |
|  | 39 | 600 | 2 | 15062685... |

图 A-19 RSView 输出选中点到 csv 文件


## 附录 B Driver & SDK

关于 RS-LiDAR-M1P Driver & SDK 文件及使用说明, 请访问以下链接获取最新版本: https://github.com/RoboSense-LiDAR/rslidar_sdk

## 附录 C 结构图纸

TE 接口雷达结构图纸:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/64e4cbd21953f6d98feeaaa5d2139a8cb510534adbe61af331b3104773076bee.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/e35b792b6a5853391f32d796329b802df875d3b9113b8eda9798cd3a882df061.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/455d99a1c5fa974f666f19828aa0283a794ed738d1cc3a074d2381b0e72be841.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/148f5a7d6290c95a54ce05376543b46effdba1b2f40939d0c1bc649f4c71f310.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/eacea162001f4d7d0b8429cf6253a0c6554619f1a64f6041f68a0ccdc70fdd16.jpg)


TE-Pin 脚定义说明:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4096e07f-c99c-4a7a-9140-692eb1ad3076/0b74c8ef8f544b2f4683a4221640865b4778c0d504d90a0ac2eef22f57ba2998.jpg)


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

0755-86325830 

Smart Sensor, Safer World


深圳市速腾聚创科技有限公司


Shenzhen Suteng Innovation Technology Co., LTD.


Address: 深圳市南山区留仙大道 3370 号南山智园崇文园区 3 栋 10-11 层 10-11/F, Block 3,

Chongwen Garden, Nanshan IPark, 3370 Liuxian Avenue, Nanshan District, Shenzhen, China 

Web: www.robosense.ai 

Tel: 0755-8632-5830 

Email: service@robosense.cn 