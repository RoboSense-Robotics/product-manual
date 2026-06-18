# E1 产品手册

**手册版本 V3.1**

---

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/11ea32989b050e62089dcce932f219108b9761ce3723620e6b9cf0c5c41d1330.jpg)


## 变更说明

| 版本 | 修订日期 | 说明 |
| --- | --- | --- |
| 1.0 | 2023/07/24 | 初版发布 |
| 2.0 | 2024/05/29 | 基于 E1 B0 Sample 做修订 |
| 3.0 | 2025/02/05 | 基于 E1 C Sample 做修订 |
| 3.1 | 2025/05/21 | 基于 E1 C1 Sample 做修订：1. 修正了激光雷达光学包络示意图以及激光雷达结构图；2. 修正了激光雷达安装支架要求。 |
---

## 阅读提示

## 符号说明

- **警告**：使用过程应严格遵守，否则可能会导致轻微伤害或者财产损失等潜在危险状况。

- **重要**：使用过程应遵守，否则可能会导致产品受损等潜在有害状况
- **提示**：使用过程应足够重视，实现高效、顺利发挥产品的最大价值。

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

1）请勿私自拆解、改装本产品（包含相关配件）；

2) 禁止使用超规格供电电源及配件;

3) 请避免跌落、碰撞、焚烧等非正常操作；

4) 如发现产品外观受损（窗口片），请立即停止使用；

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

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/164e4f31ffb2328f12fa679e47c08254d13fd1acda7a34d3cef414a60de058b5.jpg)


2) 高温注意：注意表面过热标识，谨防发生意外。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/bdee05d336ff734dc3c036100b6e5b516c0e5112e7ddc076b6ab84c582650f83.jpg)


3) 保留说明：请保留所有安全和操作说明，以备将来参考。

4) 注意警告：请遵守产品和操作说明中的所有警告，以免发生意外。

5) 产品维修：请勿在缺少官方指导的情况下尝试打开产品进行维修。如需维修，请及时联系 RoboSense。

## 2 产品描述

### 2.1 产品结构

E1 的平台外形尺寸图如图 1 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/0562a51f41dbe54dae095e53b685849ba7594e7f5945fb1af08106d7b56a9a39.jpg)


图1 E1 平台外形尺寸规格


### 2.2 FOV 分布

E1 的光学包络如下图所示，所有极限公差累计后，激光雷达的光学包络面不能被车身外饰件遮挡，如激光雷达外罩、车顶饰板、引擎盖以及前保险杆等有可能遮挡 FOV 的零件，如图 2 所示。RoboSense 标定下线后，FOV 角度存在一定公差，具体以厂家最终结果为准。图 3 为 E1 的 FOV 示意图。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/086ef9bd8d4d58ab4959c423b1f3b3da5c76ff58d468ccb187755fb9de3cbdd0.jpg)


图2 E1 光学包络示意图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/7552f482f8a042d80b217c05a6844afd208640b790c23588fc40af169307ac21.jpg)


图3 E1 FOV 分布图


### 2.3 规格参数

E1 固态激光雷达采用 Flash 扫描方式，10%NIST 测距 30 米，单帧出点数 26,000 点，水平测角 $120^{\circ}$ （ $-60.0^{\circ} \sim +60.0^{\circ}$ ），垂直测角 $90^{\circ}$ （ $-45^{\circ} \sim +45^{\circ}$ ），详情参见表 1。


表1 E1 规格参数


| 规格参数 |  |  |  |  |
| --- | --- | --- | --- | --- |
| 测距原理 | TOF法测距 | 水平视场角 | 120°(-60.0°~+60.0°) |  |
| 激光波长 | 940 nm | 垂直视场角 | 90°(-45°~+45°) |  |
| 激光安全等级 | Class1人眼安全 | 水平角分辨率 | 平均0.625°1 |  |
| 测距能力2 | 30m@10% NIST, 100klux日照 | 垂直角分辨率 | 平均0.625°1 |  |
| 盲区 | 0.1m | 精度(典型值)3 | ±5cm@1 sigma |  |
| 出点数 | ~260,000点/秒 | 以太网传输速率 | 1000Base-T1千兆以太网 |  |
| 时间同步 | gPTP(IEEE-802.1AS) PTP E2E L2(IEEE-1588) | 工作电压 | 9 V - 16 V |  |
| 帧率 | 10 Hz | 重量 | 330 g±20g(激光雷达本体) |  |
| 产品功率4 | <10 W | 存储温度 | -40°C ~ + 105°C |  |
| 工作温度5 | -40°C ~ + 85°C | 防护等级 | IP67 / IP6K9K |  |
| 外形尺寸 | 名称 | 长(mm) | 宽(mm) | 高(mm) |
| 外形尺寸 | 主体轮廓 | 95 | 42.6 | 69.5 |
| 外形尺寸 | 带连接器、安装位轮廓 | 95 | 51.1 | 87 |
### 2.4 产品原理

#### 2.4.1 时间同步方式

E1 默认固件使用 gPTP (IEEE 802.1AS) 的时间同步方式。

##### 2.4.1.1 gPTP 同步原理

gPTP（general Precise Time Protocol，IEEE802.1AS 协议）是 PTP 在时效性网络（Time-Sensitive Networking）的派生协议。同步机制采用和 PTP 协议一致的 P2P 端延迟机制（Peer Delay Mechanism），同时采用以太网 L2 层通信。与 PTP 不同，gPTP 要求使用硬件方式打时间戳，即硬件时间戳，所以对于交换机和 Master 时钟要求较为严苛，需满足 IEEE802.1AS 协议。

##### 2.4.1.2 gPTP 接线方式

使用 gPTP 同步方式，需要做以下准备，连接方式详情参见图 4。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/5475e3e09eb8a4ea5ad7bd78d0db5d47f7e1640e763b2e0ece6825704294dbf9.jpg)


图4 gPTP 时间同步拓扑


1) gPTP Master 授时主机（即插即用，无需额外配置）；

2) 以太网交换机;

3) 支持 gPTP 协议的待授时设备。

提示说明

1) Master 授时设备属于第三方设备，RoboSense 出货时不包含此配件，需用户自行采购；

2) RoboSense 产品作为 Slave 设备只获取 Master 发出的时间，不对 Master 时钟源的

准确度判断，若解析激光雷达点云时间出现突变，请检查 Master 提供的时间是否准确；

3) 激光雷达同步之后, Master 断开连接, 点云数据包中的时间则会按照激光雷达内部时钟进行叠加, 激光雷达断电重启后才会被重置。

#### 2.4.2 使用 Linuxptp 工具简单验证时间同步

将 E1 电源线和网线与接口盒相连，网线对端再与上位机相连。上位机操作系统（OS）必须为 Linux 系统，以下以 Ubuntu 为例。

1) 使用命令$ifconfig 查看网卡名。如图 5 所示，网卡名为 enp2s0。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/977257b9d20f3d17cdc49672b553eba71489d69e6debb0f985fd0a2e582a8bcf.jpg)


图5 查找网卡名示意图


2) 使用命令$ethtool -Tenp2s0（上一步查询到的网卡名），可以查看此网卡是否支持 PTP 硬件。对于 gPTP 同步，需要硬件支持，PTP Hardware Clock 选项要求不是 none 值。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/ab4ae2500eb7dff733c9f4eef98efaec1c1e0115fbdfadcff3861a8288793b28.jpg)


图6 检查 PTP 硬件支持情况示意图


3) 下载并安装 linuxptp 工具。

```powershell
$sudo git clone git://git.code.sf.net/p/linuxptp/code linuxptp
$cd linuxptp
$sudo make
$sudo make install 
```

`$reboot`


4) Ptp41 命令的使用。

Ptp41 命令选项介绍如下:

a) 延迟机制选项

-A 自动模式，自动选择 E2E 延迟机制，当收到对等延迟请求时切换到 P2P。

-E E2E 模式，请求应答延迟机制（默认）

-P P2P 模式，端延迟机制

b) 网络传输选项

-2 IEEE 802.3 

-4 UDP IPV4（默认）

-6 UDP IPV6 

c) 时间戳选项

-H 硬件时间戳（默认）

-S 软件模拟时间戳

-L 老的硬件时间戳，LEGACY HW 需要配合 PHC 设备使用。

d) 其他选项

-f [file] 从指定文件 file 中读取配置。默认情况下不读取任何配置文件。

-i [dev] 选择 PTP 接口设备，例如 eth0（可多次指定）必须至少使用此选项或配置文件指定一个端口。

-p [dev]此选项用于在旧 Linux 内核上指定要使用的 PHC 设备（例如/dev/ptp0 时钟设备），默认为 auto，忽略软件/ LEGACY HW 时间戳(不推荐使用此选项)

-s slaveOnly mode，从时钟模式（覆盖配置文件）

-t 透明时钟模式

-1 [num] 将日志记录级别设置为'num'，默认是6

-m 将消息打印到 stdout

-q 不打印消息到 syslog

-v 打印软件版本并退出

-h 帮助命令

此外，简单同步 E1 使用命令如下:

1) PTP E2E（L2 层）命令:

$sudo ptp4l -E -S -2 -m -i enp2s0（网卡名）

如设备硬件支持 PTP Hardware Clock 不是 none 值，可以使用-H 替代-S 2) gPTP 命令：

$sudo ptp4l -i enp4s0 -m -H -2 -f gptp-master.cfg 

设备要求硬件支持 PTP Hardware Clock 不是 none 值。其中，gptp-master.cfg 为 gPTP 主时钟配置文件。

在主机上新建 gptp-master.cfg 文件，在此文件中复制以下内容后，保存文件：

```ini
# 802.1AS example configuration containing those attributes which
# differ from the defaults. See the file, default.cfg, for the
# complete list of available options.
[global]
domainNumber 0
logSyncInterval -3
syncReceiptTimeout 3
neighborPropDelayThresh 800
path_trace_enabled 1
follow_up_info 1
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

提示说明

无硬件支持设备可用-S替代-H进行gPTP同步模拟，但同步精度无法保证。

#### 2.4.3 GPS 时间同步

如需要将 E1 与 GPS 模块同步。首先需要使 GPS 模块给 gPTP Master 授时，具体接口与授时方式需要与 gPTP Master 提供方明确。除特殊需求外，RoboSense 将不提供相关技术支持。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/c49ec9cdbf79fa97c5d777b1642c14689703eaadb7cfccc9aad43b2311102486.jpg)


图7 GPS 同步拓扑简图


## 3 产品安装布置推荐

### 3.1 接口说明

#### 3.1.1 E1 平台连接器

E1 平台推荐 TE 2397179-1 连接器方案，不接受客户自定义连接器型号，线束折弯半径大于 30 mm，具体接插件方案见表 2。


表2 接插件方案


| 接插件方案 | 连接器类型 | 型号 | 图片 | 功能 |
| --- | --- | --- | --- | --- |
| TE弯插型(二合一直插,6+2 pin) | 激光雷达端连接器 | TE 2397179-1 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/4dcf019bfef5b4345627c55c22a51e73b1b31c908ae1b91b991ec49cd8f72233.jpg) | 电源+千兆以太网 |
| TE弯插型(二合一直插,6+2 pin) | 线束连接器 | TE 2397144-1 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/b16f6f03b00971c2494b4afa4d33df79564e2b168b35695ced37514086dc54ac.jpg) | 电源+千兆以太网 |
#### 3.1.2 连接器安装要求

1) 线束端连接器及线材，与 LiDAR 端连接器装配后，须满足 IP67 及 IP6K9K 防水等级，具体选型由客户负责；

2) 线束端连接器末端出线位置与周边环境建议至少 70 mm 的手部预留拔插空间。

#### 3.1.3 整车线束端安装要求

1) 以太网线束材质需采用满足 1000BASE-T1 的 STP 线材；

2) 建议采用 Dacra 686-3（折弯半径 25 mm）或 GG X9305（折弯半径 12 mm），具体以线束供应商推荐为准；

3) 以太网线束总长度建议小于 $15 \mathrm{~m}$ , 但是考虑到板端损失, 建议实际应用中线束不超过 $12 \mathrm{~m}$ , 考虑到连接器对接数建议不超过 3 对 (包含线对板);

4) 建议以太网信号线在整机上走线时避开运动段与高温区域；

5) 整车线束需考虑线长、线径阻抗，电源线上激光雷达工作电压保持在 9 V——16V;

6) 暴露在外部的雷达线束建议采用防水胶套设计。

### 3.2 LIDAR 接线及接口说明

#### 3.2.1 车载以太网线束接口及定义

E1 使用 1 个车载以太网、电源二合一接头，线束如图 8 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/0a43157e992fb31b777a313594c145fefdbe64f8c1c2ce483fb7c9b6a234b189.jpg)


图8 车载以太网电源线束


#### 3.2.2 接口盒接口

E1 的接口盒接线说明如表 3 所示:


表3 接线说明


| 接线说明 | TE 接口盒结构图 |
| --- | --- |
| 连接激光雷达侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/e63ded9fa0376d180ea67e4ca3a2168a641487753e118a752b6229e5006fbebd.jpg) |
| 连接电源及上位机侧 | ![](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/3b0037d8640c6e0daab20948a2036a2f58ca21c572bd537d7a4695bdea16d6b4.jpg) |
#### 3.2.3 电源接口

E1 接口盒使用标准 DC 5.5-2.1 接口。

电源正常输入时，电源盒绿色指示灯常亮。当绿色指示灯熄灭，请检查电源输入是否正常，若电源输入正常，即接口盒可能已损坏，请联系 RoboSense。

#### 3.2.4 RJ45 网口

E1 本体只支持 1000BASE-T1 车载以太网，使用接口盒时网络接口使用标准 RJ45 接口。接口盒只支持千兆以太网。

### 3.3 状态机说明

E1 状态机说明参见图 9。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/b41e5ef990d0bd6b55db2204f44d8cdd0419057437fcba2f2ed736a017efd6f7.jpg)


整机状态机说明：

S1: 整机未供电

S2: 整机休眠

S3: 整机运行

图9 激光雷达状态机描述

### 3.4 安装及定位方式推荐

#### 3.4.1 安装公差要求

考虑整机误差累计，建议激光雷达安装公差要求为：

1) XYZ 三个方向安装位置精度为±3mm;

2) Roll、Yaw、Pitch 三个方向安装角精度为±1.5°。

最终以实际安装需要为准。

#### 3.4.2 雷达安装方向

如图 10 所示，建议 LiDAR 正置，不建议将 LiDAR 倒置、测置。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/39b70f9525b618ec1bb598c0d9f573e12d8292aa6938a7edfeaf5ad05737aeda.jpg)


图10 雷达安装方向示意（正置）


#### 3.4.3 安装支架位置

激光雷达后壳设置有 4 个 M4 螺孔或者过孔，以及 2 个定位柱，如图 10 所示。后壳定位柱和支架定位孔配合，支架设置 4 个固定孔，与后壳 4 个螺纹孔采用螺纹连接，完成激光雷达安装。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/a1d94d3145fabbb8ebe9c4c46faeb3d8c7e291edc44052c9fd63bc069045fa21.jpg)


图11 支架安装固定位置


#### 3.4.4 安装支架定位与紧固要求

1) 推荐激光雷达后壳定位孔/定位柱的定位方式;

2) 激光雷达支架建议在 4 个安装孔附近使用小凸台与激光雷达配合，凸台整体平面度要求 0.5 mm 以内；

3) M4 螺钉孔螺距为 0.7 mm;

4) 底部 M4 螺钉强度等级推荐 8.8 级及以上;

5) 推荐扭矩 $2.7 \pm 10\%$ N·m，具体以螺钉校准结果为准；

6) 建议螺钉长度为支架厚度 T + 3 mm，有效旋合牙数 4 牙及以上。

### 3.5 安装支架设计参考

固定支架需要有较好的强度和刚度, 并在各种工况下保持激光雷达处于一个稳定的状态, 设计要求如下:

1) 雷达安装场景存在不同的振动、冲击等载荷环境，雷达支架应具备一定的刚性来保障雷达在各载荷环境下可稳定工作。推荐雷达支架保持一定的刚性，具体边界要求由客户感知算法评估决定。（该推荐源自感知算法通常希望在外界振动激励下，雷达与固定部分及其他传感器的相对位置关系尽可能固定，并非出于雷达使用可靠性考虑。不同的感知算法对传感器间相对位置关系要求各异，应由客户评估确认）；

2) 雷达支架在经历随机振动、机械冲击等工况后会承受较大的负载，应结合实际工况校核支架强度。机械冲击工况，固定件最大应力应小于拉伸强度 2/3。随机振动工况，固定件 1sigma RMS 应力应小于拉伸强度 1/5。

### 3.6 激光雷达散热要求

1) 散热要求: E1 在使用过程中会发热, 且雷达的安装周边件会受到太阳辐射的影响, 可能会加剧 E1 的温升, 散热要求如下:

a) E1 前后面为主要散热面;

b) E1 固定件应为优良的传热体, 支架建议采用导热系数大于 $50 \, W/m \cdot K$ 的铝合金或者镀锌钢板和镀锌钢板等材料, 且 E1 应避免被固定结构封闭包裹;

c) E1 与周边的间隙大于 5mm, 如果可以开孔保证空气流经雷达更好;

d) 建议在固定件上做一些散热鳍片，增大散热面积与空气流向一致；

e) 建议提供安装数模（包括激光雷达与周边结构件）以及安装环境信息给 RoboSense 进行热仿真确认。

2) 工作温度要求。

a) E1 与周边件的间隙（大于 5 mm），安装件最好不要完全包裹激光雷达，开一些孔保证空气流动更好；

b) 原则上只需要满足任何条件下 E1 周边环境温度不高于 $85^{\circ}$ C 即可。

### 3.7 E1 激光雷达罩推荐方案

激光雷达罩开口尺寸由激光雷达标定后 FOV 偏差以及安装误差等因素决定，具体结构视客户要求决定。

a) 激光雷达的 FOV 包络区域禁止任何遮挡（包括玻璃透明材质），遮挡会影响 LiDAR 的测距能力；

b) 激光雷达窗口片边缘特征，受到外部尖锐物体（如碎石）冲击，容易破损或碎裂。如果窗口片边缘凸出雷达罩，可能存在窗口片碎石冲击试验无法通过的风险。任何窗口片边缘凸出的设计方案，需提前评估碎石冲击试验风险；

## 4 产品使用

### 4.1 产品坐标系

E1 坐标系定义如图 11 所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/e9f6e7d4b770eac83a84d4f761a03f83a81735838d1ea7c409edca6aee02a36e.jpg)


图12 E1 激光雷达坐标系定义


### 4.2 RView 使用

在 E1 的数据的检测上，可使用 Wireshark 和 tcp-dump 等免费工具获取原始数据，而 RSView 可帮助用户更为便捷的实现对原始数据的可视化。

#### 4.2.1 软件功能

RSView 提供将 E1 数据进行实时可视化的功能。RSView 也能回放保存为 “.pcap” 文件格式的数据，但是目前还不支持 “.pcapng” 格式的文件。

RSView 将 E1 得到距离测量值显示为一个点。它能够支持多种自定义颜色来显示数据，例如反射强度、时间、距离、水平角度和激光线束序号。所显示的数据能够导出保存为“.csv”格式，RSView 4.3.11 以后的版本支持导出“.las”格式的数据。

RSView 包含以下功能:

1) 通过以太网实时显示数据;

2) 将实时数据记录保存为 PCAP 文件;

3) 从记录的 PCAP 文件中回放;

4) 不同类型可视化模式，例如距离、时间、水平角度等等；

5) 用表格显示点的数据;

6) 将点云数据导出为 CSV 格式文件;

7) 测量距离工具;

8) 将回放数据的连续多帧同时显示;

9) 裁剪显示。

#### 4.2.2 安装 RSView

RSView 支持在 Windows 64 位、Ubuntu 18.04 以上操作系统上运行。可从 RoboSense 的官网（http://www.robosense.cn/resources）下载最新版本 RSView 软件压缩包。下载后，软件的解压路径请勿出现中文字符，软件无需安装，解压后运行可执行文件即可正常使用。

#### 4.2.3 使用 RSView

打开 RSview 后，在软件界面，可通过 F1 按钮打开软件使用指南，或通过点击软件菜单栏 Help 选项中的 RS-LiDAR User Guide 进行查阅。

### 4.3 通信协议

E1 与电脑之间的通信采用以太网介质, 使用 UDP 协议, 输出包有两种类型: MSOP 包和 DIFOP 包。

文中所有涉及 MSOP 协议包均为 1200 Bytes 定长；DIFOP 协议包均为 256 Bytes 定长。E1 网络参数可配置，出厂默认为单播模式，采用固定 IP 和固定目的端口号，按照如下表格。


表4 出厂默认网络配置表


|  | IP 地址 | MSOP 包端口号 | DIFOP 包端口号 |
| E1 | 192.168.1.200 | 6699 | 7788 |
| --- | --- | --- | --- |
| 电脑 | 192.168.1.102 | 6699 | 7788 |
产品默认 MAC 地址是在工厂初始设置的，每台产品 MAC 地址唯一。

当使用产品的时候，需要把电脑的 IP 设置为与产品同一网段上，例如

192.168.1.x(x 的取值范围为 1 ~ 254)，子网掩码为 255.255.0.0。若不知产品网络配置信息，请将主机子网掩码设置为 255.255.0.0 后连接产品并使用 Wireshark 抓取产品输出包进行分析。

E1 和电脑之间的通信协议主要分两类，一览表见 5。

主数据流输出协议 MSOP，将激光雷达扫描出来的距离，角度，反射率等信息封装成包输出给电脑；

产品信息输出协议 DIFOP，将激光雷达当前状态的各种配置信息输出给电脑。


表5 产品协议一览表


| (协议/包)名称 | 简写 | 功能 | 类型 | 包大小 |
| --- | --- | --- | --- | --- |
| Main Data Stream Output Protocol | MSOP | 扫描数据输出 | UDP | 1200 Bytes |
| Device Information Output Protocol | DIFOP | 产品信息输出 | UDP | 256 Bytes |
#### 4.3.1 主数据流输出协议（MSOP）

主数据流输出协议：Main data Stream Output Protocol，简称：MSOP。

I/O 类型：产品输出，电脑解析。

默认端口号为 6699。

MSOP 包完成三维测量相关数据输出, 包括激光测距值、回波的反射强度值、垂直角度、水平角度和时间戳。MSOP 包的有效荷载长度为 1200Bytes，其中 32Bytes 为同步帧头 Header，1152Bytes 为数据块区间（共 96 个 12Bytes 的 data block），16Bytes 为帧尾。

基本数据结构如下图所示:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/589a8de4272dbfc48790bb6fc13a50e7362ed14d4d39c61fb42047142f6d18c5.jpg)


图13 MSOP Packet 数据包定义示意图


##### 4.3.1.1 帧头

帧头 Header 共 32Bytes，用于识别数据的开始位置，包计数，UDP 通信预留以及存储时间戳。详细定义如下：


表6 MSOP 包头定义


| Header(32Bytes) |  |  |  |  |
| --- | --- | --- | --- | --- |
| Sync | PktCnt | Ver | ReturnMode | TimeMode |
| 4 Bytes | 2 Bytes | 2 Bytes | 1 Byte | 1 Byte |
| Timestamp | FrameSync | Res0 | LidarType | LidarTmp |
| 10 Bytes | 1 Byte | 9 Bytes | 1 Byte | 1 Byte |
Sync: 可作为包的检查序列，识别头为 0x55AA5AA5。

PktCnt：包序列号，表示包计数，循环计数，从每帧数据的起点的包计数为0，每帧数据的最后一个点的包计数为最大值。

Ver: 表示 UDP 通信协议的版本号。

ReturnMode: 回波模式标志位，出厂时固定 04（最强回波模式）。

TimeMode: 时间同步模式:

0x00 表示使用雷达内部计时

0x02 表示使用 PTP E2E 时间同步模式

0x03 表示使用 gPTP 时间同步模式

Timestamp: 用于存储时间戳，定义的时间戳用来记录系统的时间

其中 0-5 bytes: Second ; 6-9 bytes: MicroSecond

FrameSync: 帧同步状态（0x00:no 0x01:yes）

Res0: 预留位

LidarType: 雷达类型标志位，默认值为 0x62。

LidarTmp: 芯片温度，Temp = LidarTmp - 80; 即原始值 0 代表 - 80 度。

##### 4.3.1.2 数据块区域

数据块区间是 MSOP 包中传感器的测量值部分，共 1152Bytes。它由 96 个 data block 组成，每个 data block 长度为 12Bytes。

详细定义如下:


表7 MSOP 包中的 data block 定义


| Data block (12Bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | offset | 长度 (byte) | 定义说明 |
| TimeOffset | 0 | 2 | 该组 Block 里面所有的点相对于包的timestamp 的时间偏移量(单位:ns),该组点的时间等于 timestamp+time_offset |
| Radius | 2 | 2 | 极坐标系下,通道 1 的径向点距离值,距离解析分辨率 5mm |
| DirVectorX | 4 | 2 | 通道 1 单位方向向量 X 轴分量,范围-32768~32767,转浮点除以 2^15 |
| DirVectorY | 6 | 2 | 通道 1 单位方向向量 Y 轴分量,范围-32768~32767,转浮点除以 2^15 |
| DirVectorZ | 8 | 2 | 通道 1 单位方向向量 Z 轴分量,范围-32768~32767,转浮点除以 2^15 |
| Intensity | 10 | 1 | 通道 1 的点反射强度值,取值范围 0~255 |
| PointAttribute | 11 | 1 | 通道 1 的点的属性,1 表示正常点,2 表示噪点,后续该定义会进一步扩展属性,原回波饱和程度特征合入点属性 |
> **相关计算说明**：

径向距离 radius 计算：（Radius 是 2Bytes, 分辨率为 5mm）

获取某数据包中 Radius 值的十六进制数为：R1 为 0x03，R2 为 0xfc。0x03 为距离的高位，转换为十进制为 3，0xfc 为距离的低位，转换为十进制为 252。因此：此通道的径向距离 = R1*256 + R2 = 3*256 + 252 = 1020。根据坐标分辨率，转换为米：1020 * 0.005 = 5.10m。故径向距离为 5.10m。

点云 X、Y、Z 坐标计算：

由以下公式可以解析得到点云的 XYZ 坐标:

$$
\left\{ \begin{array}{l} X = \text { radius } * (\text { DirVectorX } / (2 ^ {1 5})) \\ Y = \text { radius } * (\text { DirVectorY } / (2 ^ {1 5})) \\ Z = \text { radius } * (\text { DirVectorZ } / (2 ^ {1 5})) \end{array} \right.
$$

##### 4.3.1.3 帧尾

帧尾部分包含参数是雷达 E2E Profile4 所用参数，详细定义如下表


表8 MSOP 帧尾参数定义


| 字段 | offset | 长度 (byte) | 定义说明 |
| --- | --- | --- | --- |
| Res1 | 1184 | 4 | 预留位 |
| DataLength | 1188 | 2 | 04 B0 |
| Counter | 1190 | 2 | 00 00~FF FF |
| DataId | 1192 | 4 | 00 00 0E 5C |
| Crc32 | 1196 | 4 |  |
#### 4.3.2 产品信息输出协议（DIFOP）

产品信息输出协议，Device Info Output Protocol，简称：DIFOP

I/O 类型：产品输出，电脑读取。

默认端口号为 7788。

DIFOP 是为了将产品序列号（S/N）、固件版本信息、网络配置信息、运行状态定期发送给用户的“仅输出”协议，用户可以通过读取 DIFOP 解读当前使用

产品的各种参数的具体信息。

一个完整的 DIFOP Packet 的详细信息如下:


表9 DIFOP Packet 详细结构信息


| DIFOP Packet(256Bytes) |  |  |  |
| --- | --- | --- | --- |
| 字段 | offset | 长度 (byte) | 定义说明 |
| DifopHeader | 0 | 8 | DIFOP 识别头 |
| Res0 | 8 | 8 | 预留位 |
| SW Version | 16 | 3 | 雷达版本号 |
| Res1 | 19 | 1 | 预留位 |
| SN | 20 | 6 | 设备序列号 |
| Res2 | 26 | 18 | 预留位 |
| LocalIp | 44 | 4 | 雷达 IP 源地址 |
| NetMask | 48 | 4 | 子网掩码 |
| MacAddress | 52 | 6 | 雷达 IP 本机 MAC 地址 |
| MsopRemoteIp | 58 | 4 | Msop 远程 IP |
| MsopLocalPort | 62 | 2 | Msop 本地端口号 |
| MsopRemotePort | 64 | 2 | Msop 远程端口号 |
| DifopRemoteIp | 66 | 4 | Difop 远程 IP |
| DifopLocalPort | 70 | 2 | Difop 本地端口号 |
| DifopRemotePort | 72 | 2 | Difop 远程端口号 |
| Res3 | 74 | 25 | 预留位 |
| FrequecySetting | 99 | 1 | 雷达帧率设置 |
| ReturnMode | 100 | 1 | 雷达回波信息: 0x00: FarthestWave 0x04: StrongestWave (Default) 0x07: NearestWave 0x08: 2ndStrongestWave 0x09: StrongestFarthestWave0x0A: NearestFarthestWave0x0B: Strongest2ndStrongestWave |
| TimesyncMode | 101 | 1 | 时间同步模式:0x0: Internal0x2: E2E L20x3: GPTP |
| TimesyncStatus | 102 | 1 | 时间同步状态:0x00: failed0x01: success0x02: timeout |
| TimeStatus | 103 | 10 | 时间:0-5bytes: Second6-9bytes: MicroSecond |
| PHYMode | 113 | 1 | 物理层工作模式:0x00: auto-negotiation0x01: master0x02: slaveother: same as 0x00 |
| Res4 | 114 | 142 | 预留位 |
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

为了能够准确地感知周围环境，E1 需保持窗口片洁净。

#### 5.3.1 注意事项

请在清理 E1 前仔细并完整的阅读本节的内容，否则不当的操作可能会损坏产品。

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

a) 首先应使用洁净水喷洒在激光雷达脏污部位表面让泥浆等异物脱离（注意：不能直接用无尘布将泥浆擦掉，这样做可能会划伤表面特别是窗口片表面）；

b) 其次用温的肥皂水喷洒在脏污部位，因肥皂水的润滑作用可加速异物的脱离。再次用纤维布轻轻试擦激光雷达表面，但注意不要擦伤表面；

c) 最后用洁净的水清洗激光雷达表面肥皂的残留（如果表面仍有残留，可用 $99 \%$ 乙醇对其再次清洁），同时用一块干燥的无尘布擦干即可。

## 6 售后

如若使用过程中遇到无法解决的问题，请及时联系 RoboSense。

官网：https://www.robosense.cn/contact

邮箱：support@robosense.cn

电话：0755-86325830 / 15338772453

> **提示说明**：

1) 请在收到 RoboSense 售后服务回信确认后，再寄回产品；

2) 产品只能使用原包装或等效的软垫防潮包装寄回。

## 附录 A Driver & SDK

### A.1 rs_driver 的编译与安装

RS Driver 为 RoboSense 激光雷达提供跨平台的雷达驱动内核，方便用户二次开发使用。v 1.5.10 的驱动内核及之后的版本已支持 E1 的点云解析及变换。可以在官方 GitHub 账号上下载 rs_driver 包：

```txt
https://github.com/RoboSense-LiDAR/rs_driver 
```

rs_driver 目前支持下列系统和编译器:

1) Windows: 

MSVC (VS2017 & VS2019 已测试)

Mingw-w64 (x86_64-8.1.0-posix-seh-rt_v6-rev0 已测试)

2) Ubuntu (16.04, 18.04, 20.04): 

gcc (4.8 + ) 

#### A.1.1 依赖库的安装

rs_driver 依赖下列的第三方库，在编译之前需要先安装：

1) Boost 

2) Pcap 

3) PCL (非必须, 如果不需要可视化工具可忽略)

4) Eigen3 (非必须，如果不需要内置坐标变换可忽略)

在 Ubuntu 中安装以下依赖库:

$sudo apt-get install libboost-dev libpcap-dev libpcl-dev libeigen3-dev 

在 Windows 中安装一下依赖库:

1) Boost 

Windows 下需要从源码编译 Boost 库，请参考官方指南（https://www.boost.org/doc/libs/1_67_0/more/getting_started/Windows.html）。编译安装完成之后，将 Boost 的路径添加到系统环境变量 BOOST_ROOT，如图 13 所示。如果使用 MSVC，也可以选择直接下载相应版本的预编译的

安装包。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/6c1b4b6cead2dd726f6d2101d27e6379f843ecd45fce31631ca6ca2e8327baa6.jpg)


图14 环境变量添加示意图


2. **pcap**：

首先，安装 pcap 运行库；

```txt
(https://www.winpcap.org/install/bin/WinPcap_4_1_3.exe)。 
```

然后, 下载开发者包(https://www.winpcap.org/install/bin/WpdPack_4_1_2.zip)到任意位置, 然后将 WpdPack_4_1_2/WpdPack 的路径添加到环境变量 PATH, 如图 13 所示。

3. **PCL (非必须，如果不需要可视化工具可忽略)**：

a) MSVC 

如果使用 MSVC 编译器，可使用 PCL 官方提供的安装包安装。

安装过程中选择 “Add PCL to the system PATH for xxx”;

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/c78eb1a4bc044a2d2d7d512e6e062f7e875bbd7b1f4294fe71ffff82ec17f19e.jpg)


图15 PCL 设置界面


PCL 官方并没有提供 mingw 编译的库，所以需要按照官方教程，从源码编译 PCL 并安装。

#### A.1.2 使用方式

##### A.1.2.1 rs_Driver 安装使用

驱动编译以 Linux 环境为例(在 Windows 中, rs_driver 暂不支持安装使用), 按顺序执行以下代码, 安装驱动;

```shell
cd rs_driver
$mkdir build && cd build
$cmake .. && make -j4
$sudo make install 
```

##### A.1.2.2 作为子模块使用

在作为子模块使用时，需要添加如下命令到 CMakeLists.txt 文件中（将 rs_driver 作为子模块添加到工程内，使用 find_package() 指令找到 rs_driver，然后链接相关库）。

add_subdirectory( $PROJECT_SOURCE_DIR$ /rs_driver)
find_package(rs_driver REQUIRED)
include_directories( $rs_driver_INCLUDE_DIRS$ )
target_link_libraries(project $rs_driver_LIBRARIES$ ) 

#### A.1.3 示例程序 & 可视化工具

##### A.1.3.1 示例程序

rs_driver 提供了两个示例程序，用户可参考示例程序编写代码调用接口，存放于 rs_driver / demo 中：

1) demo_online.cpp 

2) demo_pcap.cpp 

若希望编译这两个示例程序，执行 CMake 配置时加上参数：

```txt
$cmake -DCOMPILE_DEMOS=ON .. 
```

##### A.1.3.2 可视化工具

rs_driver 提供了一个基于 PCL 的点云可视化工具, 存放于 rs_driver/tool 中:

1) rs_driver_viewer.cpp 

若希望编译可视化工具，执行 CMake 配置时加上参数：

```powershell
$cmake -DCOMPILE_TOOLS=ON .. 
```

#### A.1.4 坐标变换

rs_driver 提供了内置的坐标变换功能，可以直接输出经过坐标变换后的点云，节省了用户对点云进行坐标变换的额外操作耗时。若希望启用此功能，执行 CMake 配置时加上参数：

$cmake -DENABLE_TRANSFORM=ON .. 

### A.2 rlidar_sdk 的编译与安装

rslidar_sdk 是 ROS 平台下的驱动 SDK，请通过 github 上的 RoboSense 主页下载，或联系 RoboSense 获取。

1) rslidar_sdk 依赖 rs_driver，后者是 RoboSense 的基本驱动。rs_driver 请从 github 平台下载；

2) 如使用环境为 ROS2，rslidar_sdk 还依赖 rslidar_msg，这是 msg 定义文件。msg 文件请从 github 平台下载；

3) 驱动 SDK 下载包含丰富的使用指引，请在使用驱动 SDK 前，详细阅读文件内的 README 文件及 doc 文件夹下的文档。

提示说明

1) SDK 获取地址：https://github.com/RoboSense-LiDAR/rslidar_sdk

2) rs_driver 获取地址：https://github.com/RoboSense-LiDAR/rs_driver

3) msg 获取地址：https://github.com/RoboSense-LiDAR/rslidar_msg

## 附录 B 结构图纸


TE 接口雷达结构图纸:


![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/b492e0986161cf8c0cae24cffb4f1b3b33178a40db26626aaa4eeec00791ee70.jpg)


针脚定义:

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/35684641b173f0f6486ca84e0299df43b34f9f8421592244a8d35f4a60786391.jpg)


接插件引脚定义


| pin 脚编号 | 序号 | 引脚定义 | 连接器型号 |
| --- | --- | --- | --- |
| A1 | 1 | Battery+ | TE-2397179-1 |
| A2 | 2 | Wakeup(KL15) | TE-2397179-1 |
| A3 | 3 | NC | TE-2397179-1 |
| A4 | 4 | GND | TE-2397179-1 |
| A5 | 5 | NC | TE-2397179-1 |
| A6 | 6 | NC | TE-2397179-1 |
| B1 | D1 | TRX_P(1000Base-T1) | TE-2397179-1 |
| B2 | D2 | TRX_N(1000Base-T1) | TE-2397179-1 |
| B3 | / | SHIELD | TE-2397179-1 |
![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/fa6eb207482478d37eef057c2be22eae8ea61c3a95c3e8c60a7a44ca9eeecd68.jpg)


robosense 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-05-29/4b384a8d-2e6f-47ca-9206-75adabc349aa/c21f369071cc8d8983d9fa45ffa92aaf4b779cda08ef03bb3ef4712a1c735ada.jpg)


深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区2区9栋

www.robosese.ai 