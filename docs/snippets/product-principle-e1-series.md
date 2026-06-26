#### 2.4.1 时间同步方式

本产品默认固件使用 gPTP (IEEE 802.1AS) 的时间同步方式。

##### 2.4.1.1 gPTP 同步原理

gPTP（general Precise Time Protocol，IEEE802.1AS 协议）是 PTP 在时效性网络（Time-Sensitive Networking）的派生协议。同步机制采用和 PTP 协议一致的 P2P 端延迟机制（Peer Delay Mechanism），同时采用以太网 L2 层通信。与 PTP 不同，gPTP 要求使用硬件方式打时间戳，即硬件时间戳，所以对于交换机和 Master 时钟要求较为严苛，需满足 IEEE802.1AS 协议。

##### 2.4.1.2 gPTP 接线方式

使用 gPTP 同步方式，需要做以下准备，连接方式详情参见图 4。

![](../assets/e1r/2.4.1.jpg){: .manual-img--xl }
<p align="center" style="font-size: 0.9em; color: gray;">图 4 gPTP 时间同步拓扑</p>

1. gPTP Master 授时主机（即插即用，无需额外配置）；
2. 以太网交换机;
3. 支持 gPTP 协议的待授时设备。

!!! tip "提示"
    1. Master 授时设备属于第三方设备，RoboSense 出货时不包含此配件，需用户自行采购；
    2. RoboSense 产品作为 Slave 设备只获取 Master 发出的时间，不对 Master 时钟源的准确度判断，若解析激光雷达点云时间出现突变，请检查 Master 提供的时间是否准确；
    3. 激光雷达同步之后，Master 断开连接，点云数据包中的时间则会按照激光雷达内部时钟进行叠加，激光雷达断电重启后才会被重置。

#### 2.4.2 使用 Linuxptp 工具简单验证时间同步

将本产品电源线和网线与接口盒相连，网线对端再与上位机相连。上位机操作系统（OS）必须为 Linux 系统，以下以 Ubuntu 为例。

1. 使用命令 `ifconfig` 查看网卡名。如图 5 所示，网卡名为 `enp2s0`。

    ![](../assets/e1r/2.4.2-1.jpg){: .manual-img--xl }
    <p align="center" style="font-size: 0.9em; color: gray;">图 5 查找网卡名示意图</p>

2. 使用命令 `ethtool -T enp2s0`（上一步查询到的网卡名），可以查看此网卡是否支持 PTP 硬件。对于 gPTP 同步，需要硬件支持，`PTP Hardware Clock` 选项要求不是 `none` 值。

    ![](../assets/e1r/2.4.2-2.jpg){: .manual-img--xl }
    <p align="center" style="font-size: 0.9em; color: gray;">图 6 检查 PTP 硬件支持情况示意图</p>

3. 下载并安装 linuxptp 工具。

    ```bash
    sudo git clone git://git.code.sf.net/p/linuxptp/code linuxptp
    cd linuxptp
    sudo make
    sudo make install
    reboot
    ```

4. Ptp4l 命令的使用。

    Ptp4l 命令选项介绍如下：

    a. 延迟机制选项

    - `-A` 自动模式，自动选择 E2E 延迟机制，当收到对等延迟请求时切换到 P2P。
    - `-E` E2E 模式，请求应答延迟机制（默认）
    - `-P` P2P 模式，端延迟机制

    b. 网络传输选项

    - `-2` IEEE 802.3
    - `-4` UDP IPV4（默认）
    - `-6` UDP IPV6

    c. 时间戳选项

    - `-H` 硬件时间戳（默认）
    - `-S` 软件模拟时间戳
    - `-L` 老的硬件时间戳，LEGACY HW 需要配合 PHC 设备使用。

    d. 其他选项

    - `-f [file]` 从指定文件 file 中读取配置。默认情况下不读取任何配置文件。
    - `-i [dev]` 选择 PTP 接口设备，例如 eth0（可多次指定）必须至少使用此选项或配置文件指定一个端口。
    - `-p [dev]` 此选项用于在旧 Linux 内核上指定要使用的 PHC 设备（例如 `/dev/ptp0` 时钟设备），默认为 auto，忽略软件 / LEGACY HW 时间戳（不推荐使用此选项）
    - `-s` slaveOnly mode，从时钟模式（覆盖配置文件）
    - `-t` 透明时钟模式
    - `-l [num]` 将日志记录级别设置为 `num`，默认是 6
    - `-m` 将消息打印到 stdout
    - `-q` 不打印消息到 syslog
    - `-v` 打印软件版本并退出
    - `-h` 帮助命令

此外，简单同步使用命令如下:

1. PTP E2E（L2 层）命令:

    ```bash
    sudo ptp4l -E -S -2 -m -i enp2s0
    ```

    如设备硬件支持 `PTP Hardware Clock` 不是 `none` 值，可以使用 `-H` 替代 `-S`

2. gPTP 命令：

    ```bash
    sudo ptp4l -i enp4s0 -m -H -2 -f gptp-master.cfg
    ```

    设备要求硬件支持 `PTP Hardware Clock` 不是 `none` 值。其中，`gptp-master.cfg` 为 gPTP 主时钟配置文件。

    在主机上新建 `gptp-master.cfg` 文件，在此文件中复制以下内容后，保存文件：

    ```
    # 802.1AS example configuration containing those attributes which
    # differ from the defaults. See the file, default.cfg, for the
    # complete list of available options.
    [global]
    domainNumber             0
    logSyncInterval          -3
    syncReceiptTimeout       3
    neighborPropDelayThresh  800
    path_trace_enabled       1
    follow_up_info           1
    transportSpecific        0x1
    ptp_dst_mac              01:80:C2:00:00:0E
    #p2p_dst_mac             01:1B:19:00:00:00
    network_transport        L2
    delay_mechanism          P2P
    masterOnly               1
    BMCA                     noop
    asCapable                true
    inhibit_announce         1
    inhibit_delay_req        1
    ```

!!! warning "注意"
    无硬件支持设备可用 `-S` 替代 `-H` 进行 gPTP 同步模拟，但同步精度无法保证。

#### 2.4.3 GPS 时间同步

如需要将本产品与 GPS 模块同步。首先需要使 GPS 模块给 gPTP Master 授时，具体接口与授时方式需要与 gPTP Master 提供方明确。除特殊需求外，RoboSense 将不提供相关技术支持。

![](../assets/e1r/2.4.3.jpg){: .manual-img--xl }
<p align="center" style="font-size: 0.9em; color: gray;">图 7 GPS 同步拓扑简图</p>
