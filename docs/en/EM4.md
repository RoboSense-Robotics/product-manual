# EM4


## User Manual


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/3670226115c633c2567ef34b1b51fb9cd9e2bbe1a018f4448218b420b7e7ee32.jpg)


Smart Sensor, Safer World 

Manual version V3.1.0 


## Revision History

<table><tr><td>Version</td><td>Date</td><td>Description</td><td>Author</td></tr><tr><td>1.0.0</td><td>2024/12/14</td><td>First version release</td><td>PD</td></tr><tr><td>1.1.0</td><td>2025/05/15</td><td>Modify the content of DIFOP data.</td><td>PD</td></tr><tr><td>2.1.0</td><td>2025/05/25</td><td>Update to B Sample</td><td>PD</td></tr><tr><td>3.1.0</td><td>2025/8/22</td><td>Update to EM4-F ROI Version</td><td>Sail Zhang</td></tr></table>

## Reading Prompt
## Symbol Illumination
Warning: The usage process should be strictly followed, otherwise it may lead to potential dangerous situations such as minor injuries or property damage. 

Important: The usage process should be observed, otherwise it may cause potential harmful situations such as product damage. 

Tips: The usage process should be valued sufficiently to achieve maximum value of the product efficiently and smoothly. 

## Resource Download
Please click the following link to download the latest product manual, RSview and other resources: 

https://www.robosense.cn/resources-143 

## More Information
Manufacturer: Suteng Innovation Technology Co., Ltd. (RoboSense). 

Website: https://www.robosense.cn/ 

Technical Support: support@robosense.cn 

Address: Building 9, Block 2, Zhongguan Honghualing Industry Southern District, 

1213 Liuxian Avenue, Taoyuan Street, Nanshan District, Shenzhen, China 

Phone: 0755-86325830 

Email: service@robosense.cn (new email address) 

Working Hours: Monday to Friday, 9:00 AM to 6:00 PM (GMT/UTC +8) 

## 1 Safety Notices
### 1.1 Legal Statement
Unless otherwise stated, all rights (including copyrights, trademarks, patents, trade secrets, and other related rights) in RoboSense's products, technologies, software, programs, data, and other information (including text, icons, photographs, audio, video, graphics, color combinations, layout design, etc.) are owned by RoboSense and its licensors. 

No one may use any content contained in this manual in any unauthorized manner without the prior written consent of RoboSense. 

The word "RoboSense" and other logos and product and service names are owned by RoboSense. If you need to use them for any advertising or displaying purposes, you must obtain prior written authorization from RoboSense. 

### 1.2 User Guidelines
⚠️ Please use this product in accordance with the following requirements: 

1) Please strictly abide by relevant national laser safety laws and regulations; 

2) Please read this product manual in detail before using the product; 

3) Please use this product only in the relevant field of application; 

4) Please avoid using this product in environments that are explosive, highly corrosive, or beyond the IP protection level of the equipment. 

### 1.3 Illegal Operation
Please use this product in accordance with the regulations, otherwise it may cause product damage, property loss, and personal injury. Users are responsible for risk arising from unauthorized operations. 

1) Do not disassemble or modify this product (including accompanying accessories); 

2) Non-specified power supply and accompanying accessories are prohibited; 

3) Please avoid abnormal operations such as dropping, colliding, burning, etc.; 

4) If you notice any damage to the appearance of the device (arc protection cover), please immediately stop using it; 

5) If you notice any abnormal operation of the product, please immediately stop using it and contact RoboSense in a timely manner. 

### 1.4 Requirements for Operating Personnel
The use of this product requires certain basic professional knowledge and other related requirements for operating personnel. Unreasonable operations performed by personnel without basic knowledge or training do not constitute a fault of RoboSense and may cause damage to equipment and personal property. 

1) Please read the product manual in detail before using the device; 

2) Prohibit illegal operations; 

3) Before working, personnel must undergo training and obtain relevant construction qualifications; 

4) Have some basic knowledge of computer data connection, electrical, and so on. 

### 1.5 Work Safety and Special Hazards
To avoid risks of accidents, damage to sensor or violating of your product warranty, please read and follow the instructions in this manual carefully before operating the product. 

1) Laser Safety: This product meets the following standards for laser products: IEC 60825-1:2014; 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/1dfd704ba85e9d55bd8e6c211f7e8ff117650e2c88e3b69e0b7f3792166253e6.jpg)


2) High Temperature Warning: Please pay attention to the overheating sign on the LiDAR surface to avoid accidents. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/bc0a660cdf2842e192d27d585d9bb26f794ae4a08cc179361c9873bcad599dc8.jpg)


3) Retain Instructions: The safety and operating instructions should be retained for future reference. 

4) Heed Warnings: All warnings on the product and in the operating instructions should be adhered to avoid accidents. 

5) Servicing: Except for what's described in this manual, the sensor has no field serviceable parts. For servicing, please contact RoboSense sales or the authorized distributors. 

## 2 Product Description
The following content describes the status and functions of the EM4-F B prototype. After the release of the new version of the prototype, the product manual will be updated to the latest status synchronously. 

### 2.1 Product Overview
The EM4-F is a high-performance automotive-grade LiDAR based on VCSEL + SPAD-SoC digital transceiver technology and a one-dimensional rotating mirror scanning system. It features 13 vertically arranged emission blocks, with each zone corresponding to 40-line reception via SPAD-SoC, totaling 520 lines, as shown in Figure 1. The EM4 has a maximum detection range of 300 meters, offering a resolution of $0.1^{\circ}$ (H) $\times$ $0.05^{\circ}$ (V) in non-ROI areas and achieving up to $0.05^{\circ}$ (H) $\times$ $0.05^{\circ}$ (V) in ROI regions. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/10b75f2363f4539634d2bc1473aacd7ae458acc98631491621dc6e682abaab36.jpg)


Figure 1 Operating Principle Diagram of EM4-F


### 2.2 Product Structure
The structure of EM4-F LiDAR is illustrated in Figure 2. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/15903b68b9511f1c3b0ed3ede346d21557c5aedbe925b038a36a369feaeb09b8.jpg)


Figure 2 Product Structure of EM4-F LiDAR (Optical center refers to polygon mirror's rotational center)


### 2.3 FOV Distribution
EM4-F LiDAR's FOV is showed in Table 1 and Figure 3. 


Table 1 EM4-F FOV


<table><tr><td>Specifications</td><td>Horizontal FOV</td><td>Vertical FOV</td></tr><tr><td><eq>120^{\circ} \times 25^{\circ}</eq> FOV</td><td><eq>-60^{\circ} \sim +60^{\circ}</eq></td><td><eq>-12.5^{\circ} \sim +12.5^{\circ}</eq></td></tr></table>

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/569c0eca11d23e9687ba0de4c4323a79299e89fc54f63a8824ad72af5448fe82.jpg)


Figure 3 EM4-F LiDAR FOV


### 2.4 Specifications

Table 2 Parameter specifications


<table><tr><td colspan="4">Sensor</td></tr><tr><td>Measurement Range1</td><td>≥250m @10% NIST, 100klux</td><td>Accuracy2 (Typical)</td><td>±5 cm@1σ</td></tr><tr><td>Horizontal FOV</td><td>120° (-60° ~ +60°)ROI:40° (-20° ~ +20°)</td><td>Horizontal Angle Resolution</td><td>0.1°ROI: 0.05°</td></tr><tr><td>Vertical FOV</td><td>25° (-12.5°~+12.5°)</td><td>Vertical Angle Resolution</td><td>0.05°</td></tr><tr><td colspan="4">Output</td></tr><tr><td>PPS</td><td colspan="3">NROI MODE:Single Return: 6,240,000 pts/sDual Return: 12,480,000 pts/sROI MODE:Single Return: 8,320,000 pts/sDual Return: 16,640,000 pts/s* Dual Return in ROI mode is supported only in compress mode.</td></tr><tr><td>Ethernet Output</td><td colspan="3">1000Base-T1</td></tr><tr><td>Communication Protocols</td><td colspan="3">UDP</td></tr><tr><td>Data Package</td><td colspan="3">3D spatial coordinates, reflection intensity, timestamps, etc.</td></tr><tr><td colspan="4">Mechanical and Electrical Specifications</td></tr><tr><td>Supply Voltage</td><td>12V (9V~16VDC)</td><td>Main Body Dimension</td><td>Depth 150mm * Width 120mm* Height 45mm*Full-scale dimensions are shown in Figure 1</td></tr><tr><td>Power Consumption3</td><td>15W (Typical)</td><td>Operating Temperature4</td><td>-40°C ~ +85°C</td></tr><tr><td>Weight</td><td>&lt;1000g</td><td>Storage Temperature</td><td>-40°C ~ +105°C</td></tr><tr><td>Time Synchronization</td><td>gPTP</td><td>Protection Level</td><td>IP67/IP6K9K</td></tr><tr><td>Frame</td><td>10 Hz</td><td>Blind Zone</td><td>1m</td></tr></table>

### 2.5 Time Synchronization Mode
EM4-F currently supports gPTP (IEEE802.1AS protocol) synchronization mode. If users have special requirements, please contact RoboSense. 

#### 2.5.1 gPTP synchronization principle
gPTP (General Precise Time Protocol, IEEE802.1AS protocol) is a derivative protocol of PTP in Time Sensitive Networking. The synchronization mechanism adopts the Peer Delay Mechanism, which is consistent with the PTP protocol, and also uses Ethernet L2 layer communication. Unlike PTP, gPTP requires the use of hardware timestamp, which means hardware timestamp, so the requirements for switches and Master clocks are more stringent and must meet the IEEE802.1AS protocol. 

#### 2.5.2 gPTP wiring method
To use gPTP synchronization method, the following preparations need to be made: 

1) GPTP Master timing host (plug and play, no additional configuration required); 

2) Ethernet switch; 

3) Devices that support gPTP protocol for waiting to be taught. 

**Note:** 

1) The Master timing device is a third-party device and is not included in RoboSense shipments. Users need to purchase it themselves; 

2) The RoboSense product, as a Slave device, only obtains the time sent by the Master and does not judge the accuracy of the Master clock source. If there is a sudden change in the time when analyzing the LiDAR point cloud, please check if the time provided by the Master is accurate; 

3) After the synchronization of the LiDAR, the Master disconnects, and the time in the point cloud data packet will be superimposed according to the internal clock of the LiDAR. The 

LiDAR will only be reset after it is powered off and restarted. 

### 2.6 Frame Synchronization Method
The EM4-F's SoC transmits synchronization pulses to the scanning mirror every 400ms. In the default configuration, at each whole 100ms time point, the mirror is positioned at the starting point of the FOV scan*. The LiDAR scans from left to right, with the mirror coordinate system's $15^{\circ}$ position (corresponding to $-60^{\circ}$ in FOV, which is the starting position of FOV scan) as shown in Figure 4. 

*Starting from software version V07.00.0A, support is added for "the mirror to be at the starting position of FOV scanning at whole hundred millisecond time points." Previous software versions allowed adjustment of frame scanning start time, but under default settings, the mirror would not be at the FOV scanning starting position at whole hundred millisecond time points. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/928b7edc99f73328840cb92c52fb5fcb47ec2d8d06b546c2ce31a7f923395376.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/f58e41fbc978d7637b1d103e62d41d914f7619893e2962bd3ad5dd1a063f8b28.jpg)


Figure 4 Mirror Coordinate System and FOV Coordinate System


*Software versions prior to V07.00.0A supported adjusting the FOV scan start time by configuring registers, with a step size of 1 μs. Refer to Table 3 for related register information. 


Table 3 Frame Synchronization Register Information


<table><tr><td>Register Address</td><td>Register Length</td><td>Operation</td><td>Value Range</td><td>Unit</td></tr><tr><td>0x83C4011C</td><td>4 Bytes</td><td>Read/Write</td><td>0~1000000</td><td>us</td></tr></table>

Register configuration can be implemented using the LiDARAssistant tool. For details, refer to the LiDARAssistant tool documentation. 

Software versions V07.00.0A and later will use DID commands to adjust the FOV scan start time. 

## 3 Product Installation
### 3.1 LiDAR Wiring and Interface Instructions
#### 3.1.1 Interface and definition of onboard Ethernet harness
EM4-F uses one automotive Ethernet and power supply two in one connector, and the matching wiring harness is shown in Figure 5. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/47dd400d4f0b0d7fde599087034bb455eddbbaf64734a00df3af7a052469f980.jpg)


Figure 5 Vehicle Ethernet power harness


The definitions of EM4-F vehicle Ethernet power harness connectors and pins are shown in Table 4 


Table 4 Definition of Ethernet power harness interface for onboard vehicles


<table><tr><td colspan="2">A side</td><td>Definition</td><td>Description</td><td>B side</td></tr><tr><td rowspan="6">J1 (TE 2397380-1)</td><td>1</td><td>POWER</td><td>Power supply</td><td rowspan="6">J3 (Molex 43025-0600)</td></tr><tr><td>2</td><td>Wakeup</td><td>Wake signal</td></tr><tr><td>3</td><td>/</td><td>/</td></tr><tr><td>4</td><td>GND</td><td>Ground</td></tr><tr><td>5</td><td>/</td><td>/</td></tr><tr><td>6</td><td>/</td><td>/</td></tr><tr><td rowspan="2"></td><td>7</td><td>1000BASE-T1 N</td><td>Automotive Ethernet differential pair</td><td rowspan="2">J2(Amphenol NTHCF011A10S)</td></tr><tr><td>8</td><td>1000BASE-T1 P</td><td>Automotive Ethernet differential pair</td></tr></table>

#### 3.1.2 Interface Box
![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/784734f7bf9d0a86643421d067386c7a119cb4df45eed87dfa4540d35126883c.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/26a6b5b4e6c07a89c22d5d34c3f98e498e4e145bbd39404e5f87cb7ff65b6658.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/a52f2528cb0f004dfbd2f8090ad295057a07a5ad6f3482903bfc9d93625ce6fd.jpg)


Figure 6 Interface Box


The EM4-F interface box has a power indicator light and various interfaces, as shown in Figure 6, which can be connected to power input and RJ45 network port. 


Table 5 Definition of Interface Box


<table><tr><td>Interface</td><td>Interface Name</td><td>Function Description</td></tr><tr><td>J1</td><td>Power Wake-up Signal</td><td>Provide power to the radar and output wake-up signals</td></tr><tr><td>J2</td><td>Network</td><td>1000BASE-T1 vehicle Ethernet interface</td></tr><tr><td>J3</td><td>DC Power connector</td><td>External power input</td></tr><tr><td>J4</td><td>Switch</td><td>Wake up signal control switch, when the switch is pressed, the wake-up signal is turned on</td></tr><tr><td>J5</td><td>RJ45</td><td>1000BASE-TX Industrial Ethernet</td></tr></table>

#### 3.1.3 Power interface
The EM4-F interface box power supply uses a standard DC 5.5-2.1 interface. 

When the power input is normal, the green indicator light on the power box remains on. When the green indicator light goes out, please check if the power input is normal. If the power input is normal, the interface box may be damaged. Please contact RoboSense. 

#### 3.1.4 RJ45 Ethernet port
The interface box only supports Gigabit Ethernet, and when using the interface box, the network interface uses a standard RJ45 interface. 

### 3.2 Quick Connection
The EM4-F network parameters can be configured, and the factory default uses a fixed IP and port number mode. Please refer to Table 6 for details. 


Table 6 Factory default network configuration table


<table><tr><td>equipment</td><td>IP address</td><td>MSOP package port number</td><td>DIFOP1 packet port number</td><td>DIFOP2 packet port number</td></tr><tr><td>EM4-F</td><td>192.168.1.200</td><td rowspan="2">6699</td><td rowspan="2">7788</td><td rowspan="2">7766</td></tr><tr><td>PC</td><td>192.168.1.102</td></tr></table>

**Note:** 

1) Main Data Stream Output Protocol (MSOP) encapsulates scanned LiDAR data including distance, yaw angle, reflectivity and other parameters into output packets; 

2) Device Information Output Protocol (DIFOP1) encapsulates LiDAR status information into output packets; 

3) Device Information Output Protocol (DIFOP2) encapsulates pitch angle data for each SPAD-SoC channel (1-520), yaw angle compensation values for different VCSEL zones, and pitch angle compensation values for each mirror facet into output packets. 

When users use the product, they need to set the computer's IP to be on the same network segment as the product, such as 192.168.1.x (x values range from 1 to 254), with a subnet mask of 255.255.255.0. Unknown product network configuration information, please connect the product and use Wireshark to capture the product output packet for analysis. Configure the IP and connection method as follows. 

#### 1) Connect the LiDAR
The connection method is shown in Figure 7. 

a) The LiDAR is connected to the interface box through a vehicle mounted 

Ethernet power harness; 

b) The PC and interface box are connected using Gigabit Industrial Ethernet through RJ45 network port connectors; 

c) After power on, under normal working conditions, the green indicator light of the interface box of the LiDAR will remain on, and the location details of the indicator light are shown in Figure 7. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/a1ecea29c82de9f55ea4d0df401188e9844fe774222dcd7df183c7a3a3ad6c25.jpg)


Figure 7 Schematic diagram of interface box connection


2) Capture packets through Wireshark, parse ARP packets for local IP configuration 

a) As mentioned above, after the laser radar is connected to the PC, start Wireshark (a third-party network analysis tool), select the correct network port, and start capturing packets; 

b) Enter "ARP" in the search box of Wireshark to search for mutual addressing messages between the LiDAR and PC, as shown in Figure 8; 

<table><tr><td>No.</td><td>Time</td><td>Source</td><td>Destination</td><td>Protocol</td><td>Length Info</td><td></td><td></td></tr><tr><td></td><td>12 0.530047</td><td>SutengIn 1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr><tr><td></td><td>13 0.607377</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td>42 Who has 192.168.1.101? (ARP Probe)</td><td></td><td></td></tr><tr><td></td><td>68 1.570011</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr><tr><td></td><td>69 1.607549</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td>42 Who has 192.168.1.101? (ARP Probe)</td><td></td><td></td></tr><tr><td></td><td>98 2.606604</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td>42 ARP Announcement for 192.168.1.101</td><td></td><td></td></tr><tr><td></td><td>99 2.610787</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr><tr><td></td><td>130 3.650056</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr><tr><td></td><td>162 4.699102</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr><tr><td></td><td>251 5.730812</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td>60 Who has 192.168.1.102? Tell 192.168.1.200</td><td></td><td></td></tr></table>


Figure 8 Analyzing ARP Messages


c) As shown in Figure 8, the word SutengIn in the Source column indicates the information source of the LiDAR, and prompts 192.168.1.200 as the Source IP, which is the LiDAR IP. Then request access to 192.168.1.102, which is the PC IP. If the local IP is not the requested IP, the local IP of the PC needs to be configured as 192.168.1.102. For details, please refer to step 3); If it can be accessed normally, proceed to step 4). 

3) Configure the local IP of the PC 

a) In the control panel, enter the "Network and Sharing Center" through "Network and Internet", click on the corresponding Ethernet connection in the "View Active Networks" content, enter the corresponding "Ethernet Status", and click on the "Properties" settings; 

b) Double click on Internet Protocol version 4 (TCP/IPv4) to enter IP information settings and configure using a static IP address; 

c) Set the local IP address to 192.168.1.102 and subnet mask to 255.255.255.0. Click "Confirm" to complete the static IP setting for the PC. 

4) Connection completed 

**Note:** 

1) The time synchronization module (gPTP) is not a factory standard product. If you need to use related functions, please purchase them yourself. 

2) The above configuration of local static IP is only for Windows system operation as an example. For other operating systems, please refer to the actual situation. 

3) EM4-F adopts a static ARP list, which only sends ARP packets after the radar is powered on and before it is connected to the upper computer. If the upper computer is replaced after normal communication between the radar and the upper computer, the radar needs to be powered on again to communicate with the new upper computer. 

## 4 Product usage
### 4.1 Product Coordinate System
The vehicle coordinate system origin is located at the center of the front axle, with the X-axis oriented forward, Y-axis to the left, and Z-axis vertically upward, as illustrated in Figure 9. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/26cfc2ff614deab24dc0320b22c5a8da80b8817297c6c9f3c6f93c61c60c9bf8.jpg)


Figure 9 Schematic diagram of vehicle coordinates


The product's coordinate system origin is set at the LiDAR optical center, with the X-axis oriented forward, Y-axis to the left, and Z-axis vertically upward, as shown in Figure 10. The transformation relationship between the LiDAR coordinate system and the vehicle coordinate system is determined by the vehicle's mechanical structure design. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/597685c8b84252821c9a16b8ce8a5bf21081a91fd9c87027cf5988a0a28419fb.jpg)


Figure 10 Schematic diagram of LiDAR coordinates


### 4.2 RView Usage
In terms of data visualization for EM4-F, free tools such as Wireshark and tcpdump can be used to capture raw data, while RSView can help users visualize raw data more conveniently. 

#### 4.2.1 Software Functions
RSView provides real-time visualization of EM4-F data. RSView can also replay data saved in. pcap file format, but currently does not support. pcapng format files. 

RSView displays the distance measurement value obtained by EM4-F as a point. It can support multiple custom colors to display data, such as reflection intensity, time, distance, horizontal angle, and laser beam number. The displayed data can be exported and saved in. csv format. 

RSView includes the following features: 

1) Real time display of data through Ethernet; 

2) Save real-time data records as PCAP files; 

3) Replay from the recorded PCAP file; 

4) Different types of visualization modes, such as distance, time, horizontal angle, etc; 

5) Display point data in a table; 

6) Export point cloud data to CSV format file; 

7) Measuring distance tools; 

8) Display multiple consecutive frames of playback data simultaneously; 

9) Show or hide individual wiring harnesses (channels) in EM4-F; 

10) Crop display. 

#### 4.2.2 Installing RSView
RSView supports running on Windows 64 bit, Ubuntu 18.04 and above operating systems. The download address for the latest version of RSView software installation package: 

http://www.robosense.cn/resources-143 

The decompression path of the software should not contain Chinese characters. The software does not need to be installed and can be used normally by running the executable file after decompression. 

#### 4.2.3 Using RSView
After connecting the LiDAR to the PC, open RSView and follow the steps below to stream point cloud data online. 

First, select File → Open Sensor from the top-left menu bar. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/e882999e4ba00663a3660b81159bcefdafc5ff6f40a29291b5b745ed8fc6e301.jpg)


In the pop-up window, choose RSEM4 as the Sensor Type, then click OK. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/1837935c5349a77f2c8232422c1a16bb52a79c7a0952c9b9c0d9a2cde5caffc6.jpg)


In the new window that appears, configure the LiDAR protocol port numbers. The MSOP Port is for MSOP packet transmission and defaults to 6699. The DIFOP Port is for DIFOP2 data and defaults to 7766. Click OK after configuration to start streaming point cloud data online. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/3d5faff10aa66c3ce883eec9255eaaba8221a2fb7036fda79d757e7143e16e03.jpg)


### 4.3 Communication Protocol
The communication between EM4-F and the computer is established via Ethernet using UDP protocol, with three types of output packets: MSOP packets (available in both fixed format at 1084 bytes and compressed format with variable length - packet splitting occurs when exceeding 1396 bytes, starting with an initial split packet of 1320 bytes), DIFOP1 packets (fixed 256-byte length), and DIFOP2 packets (fixed 1162-byte length). The network parameters can be configured through the LiDARAssistant tool (available by contacting technical support), with the system defaulting to fixed IP and fixed destination port number mode. 

The communication between the EM4-F and the computer utilizes Ethernet medium with UDP protocol, and the communication protocols are categorized into three types as detailed in Table 7. 


Table 7 List of Product Protocol


<table><tr><td>(Protocol/Package) Name</td><td>Abbreviation</td><td>Function</td><td>Type</td><td>Package size</td><td>Sending interval</td></tr><tr><td rowspan="4">Main data Stream Output Protocol</td><td rowspan="4">MSOP</td><td rowspan="4">Scan data output</td><td rowspan="4">UDP</td><td rowspan="3">Fixed Mode:1084 bytes</td><td>NROI + Single Return: 24000 times/s</td></tr><tr><td>NROI + Dual Return: 48000 times/s</td></tr><tr><td>ROI + Single Return:32000 times/s</td></tr><tr><td>Compress Mode: 1. Non-fragmented packets: variable length, maximum 1396Bytes 2. fragmented packets :first packet 1320Bytes, second packet: variable length</td><td>/</td></tr><tr><td>Device Information Output Protocol 1</td><td>DIFOP1</td><td>Product information output</td><td>UDP</td><td>256 Bytes</td><td>DIFOP1: 100 times</td></tr><tr><td>Device Information Output Protocol 2</td><td>DIFOP2</td><td>Product information output</td><td>UDP</td><td>1162 Bytes</td><td>DIFOP2: 0.5 time</td></tr></table>

#### 4.3.1 Main data Stream Output Protocol (MSOP)
I/O type: Product output, computer parsing. 

The default port number at the factory is 6699. 

The fundamental structure in Fixed Mode is illustrated in Figure 11 below: 


EM4: MSOP (1084 Bytes)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/7c83b3dd8227695de5ccdaa9a65fbad740ed76970f526a1c5f71683b217f56ec.jpg)


Figure 11 MSOP Packet Data Packet Definition Schematic Diagram


For detailed definitions, see Table 8. 


Table 8 Datasheet of MSOP


<table><tr><td>Content</td><td>Offset (Byte)</td><td>Length (Byte)</td><td>Instruction</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>header: 55aa5aa5</td></tr><tr><td>pkt_cnt</td><td>4</td><td>2</td><td>1 Non Compress MODE1.1 NROI MODE:Single Return:1~2400*Each frame point cloud contains 1200 columns, each column is divided into 2 packets, with 260 pixels packaged per packet. The first and second packets correspond to rows 1-260 and 261-520 of the column respectively, and so on.Dual Return:1~4800* Each frame point cloud contains 1200 columns, each column is divided into 4 packets, with 130 pixels packaged per packet. The first to fourth packets correspond to rows 1-130, 131-260, 261-390 and 391-520 of the column respectively, and so on.1.2 ROI MODE:Single Return:1~3200*Each frame point cloud contains 1600 columns, each column is divided into 2 packets, with 260 pixels packaged per packet. The first and second packets correspond to rows 1-260 and 261-520 of the column respectively, and so on.Dual Return: not supported</td></tr><tr><td>ROI_compression_mode</td><td>6</td><td>1</td><td>0x00: without compress + NROI0x01: without compress + ROI</td></tr><tr><td>reserved</td><td>7</td><td>1</td><td>Reserved</td></tr><tr><td>return_mode</td><td>8</td><td>1</td><td>0: Dual Return4: Strongest Return5: Last Return6: Nearest Return</td></tr><tr><td>time_mode</td><td>9</td><td>1</td><td>Time synchronization method:0x00: Internal time0x03: gPTP</td></tr><tr><td>timestamp</td><td>10</td><td>10</td><td>TimestampByte0~5: sByte6~9: us</td></tr><tr><td>frame_sync</td><td>20</td><td>1</td><td>Frame synchronization0x00:Not synchronized0x01:SynchronizedSynchronization: The FOV scan initiation timing exhibits less than 0.6ms jitter while maintaining synchronization stability for over 50ms.</td></tr><tr><td>frame rate</td><td>21</td><td>1</td><td>0x0A: 10Hz</td></tr><tr><td>column_num</td><td>22</td><td>2</td><td>NROI Column Number:0~1199ROI Column Number:0~1599</td></tr><tr><td>yaw_angle</td><td>24</td><td>2</td><td>yaw angle: factor:0.01 deg</td></tr><tr><td>pack mode</td><td>26</td><td>1</td><td>Compress/Non Compress MODE0x01: Non Compress MODE</td></tr><tr><td>surface id</td><td>27</td><td>1</td><td>Surface0x01:A0x02:B0x03:C0x04:D</td></tr><tr><td>vcsel_internal</td><td>28</td><td>1</td><td>Timing Offset Between Odd/Even VCSEL ZonesSigned number, range: -128~127us; central value: 256us</td></tr><tr><td>reserved</td><td>29</td><td>1</td><td>reserved</td></tr><tr><td>lidar_type</td><td>30</td><td>1</td><td>Default:0x70</td></tr><tr><td>main_temp</td><td>31</td><td>1</td><td>Main fpga temperature:, offset:-80, Unit:°C, * Real Temperature = (value-80)°C</td></tr><tr><td>point data 1-260</td><td>32</td><td>1040</td><td>260-pixel Point Cloud Data1)Single Return Mode: For packet 2m-1(m=1,2,...,1200/1600), point data n corresponds to the echo from the nth pixel;for packet 2m (m=1,2,...,1200/1600), point data n corresponds to the echo from the (n+260)th pixel.2)Dual Return Mode: For packet 4m-3(m=1,2,...,1200), point data 2n-1 (n=1,2,...,130) represents the first echo from the nth pixel while point data 2n (n=1,2,...,130) represents the second echo from the nth pixel;for packet 4m-2 (m=1,2,...,1200), point data 2n-1 corresponds to the first echo from the (n+130)th pixel and point data 2n corresponds to the second echo from the (n+130)th pixel;for packet 4m-1 (m=1,2,...,1200), point data 2n-1 indicates the first echo from the (n+260)th pixel and point data 2n indicates the second echo from the (n+260)th pixel;for packet 4m (m=1,2,...,1200), point data 2n-1 reflects the first echo from the (n+390)th pixel and point data 2n reflects the second echo from the (n+390)th pixel.</td></tr><tr><td>DataLength</td><td>1072</td><td>2</td><td>E2E Profile4 Data Length: 04 3C</td></tr><tr><td>Counter</td><td>1074</td><td>2</td><td>E2E Profile4 Counter: 00 00~FF FF</td></tr><tr><td>DataId</td><td>1076</td><td>4</td><td>E2E Profile4 Data Id: 00 00 0E 5D</td></tr><tr><td>Crc32</td><td>1080</td><td>4</td><td>E2E Profile4 Crc32</td></tr></table>

The detailed definition of each point data can be found in Table 9: 


Table9 Packet definition of point data n


<table><tr><td colspan="4">point data (4 Bytes)</td></tr><tr><td>content</td><td>offset(byte)</td><td>byte</td><td>instruction</td></tr><tr><td>radius</td><td>0</td><td>2</td><td>In polar coordinate system, the radial point distance value has a distance resolution of 5mm</td></tr><tr><td>intensity</td><td>2</td><td>1</td><td>reflectivity range:0~255</td></tr><tr><td>point_attribute</td><td>3</td><td>1</td><td>point attribute 0x00:normal point 0x08:noise point</td></tr></table>

In compress mode, the detailed definitions of the first and second MSOP packets are specified in Table 10 and Table 11 respectively: 


Table 10 First MSOP Packet Definition


<table><tr><td>Content</td><td>Offset (Byte)</td><td>Length (Byte)</td><td>Instruction</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>header: 55aa5aa5</td></tr><tr><td>Pkt_cnt</td><td>4</td><td>2</td><td>Packet count indication.In compressed mode, the total number of packets per frame is variable.For single return mode: The point cloud data of each column is compressed. If the compressed packet length is ≤1396 bytes, one packet corresponds to one column; if the packet length exceeds 1396 bytes, one column corresponds to two packets. The total packet count is variable.For dual return mode: The first echo of each column is compressed first. If the compressed data length of the first echo is ≤1396 bytes, it occupies one packet; if exceeding 1396 bytes, it occupies two packets. Then, the second echo is compressed: if the compressed data length is ≤1396 bytes, it occupies one packet; if exceeding 1396 bytes, it occupies two packets.</td></tr><tr><td>ROI_compression_mode</td><td>6</td><td>1</td><td>0x02: compress + NROI0x03: compress + ROI</td></tr><tr><td>reserved</td><td>7</td><td>1</td><td>Reserved</td></tr><tr><td>return_mode</td><td>8</td><td>1</td><td>0: Dual Return4: Strongest Return5: Last Return6: Nearest Return</td></tr><tr><td>time_mode</td><td>9</td><td>1</td><td>Time synchronization method:0x00: Internal time0x03: gPTP</td></tr><tr><td>timestamp</td><td>10</td><td>10</td><td>TimestampByte0~5: sByte6~9: us</td></tr><tr><td>frame_sync</td><td>20</td><td>1</td><td>Frame synchronization0x00:Not synchronized0x01:SynchronizedSynchronization: The FOV scan initiation timing exhibits less than 0.6ms jitter while maintaining synchronization stability for over 50ms.</td></tr><tr><td>frame rate</td><td>21</td><td>1</td><td>0x0A: 10Hz</td></tr><tr><td>column_num</td><td>22</td><td>2</td><td>NROI Column Number:0~1199ROI Column Number:0~1599</td></tr><tr><td>yaw_angle</td><td>24</td><td>2</td><td>yaw angle: factor:0.01 deg</td></tr><tr><td>pack mode</td><td>26</td><td>1</td><td>bit0-3: Compress mode flag3: compressed modefor compress mode, packets exceeding 1396 bytes are split with the first split packet fixed at 1320 bytes.bit7-4: Packet fragmentation flag0: unsplit packet1: first fragment2: second fragment</td></tr><tr><td>surface id</td><td>27</td><td>1</td><td>Surface0x01:A0x02:B0x03:C0x04:D</td></tr><tr><td>vcsel_internal</td><td>28</td><td>1</td><td>Timing Offset Between Odd/Even VCSEL ZonesSigned number, range: -128~127us; central value: 256us</td></tr><tr><td>reserved</td><td>29</td><td>1</td><td>reserved</td></tr><tr><td>lidar_type</td><td>30</td><td>1</td><td>Default:0x70</td></tr><tr><td>main_temp</td><td>31</td><td>1</td><td>Main fpga temperature:, offset:-80, Unit:°C, * Real Temperature = (value-80)°C</td></tr><tr><td>point data</td><td>32</td><td>x(x≤1363)</td><td>The radial distance (2 bytes) of all pixels in a full column for a single echo forms the first compression block. The reflectivity (intensity) and point attributes (2 bytes) form the second compression block.If the length of the first MSOP packet exceeds 1396 bytes, it is split into two packets. The first packet has a length of 1320 bytes.</td></tr></table>


Table 11 Second MSOP Packet Definition


<table><tr><td>content</td><td>offset(Byte)</td><td>Length(Byte)</td><td>Instruction</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>header: 55aa5a02</td></tr><tr><td>pkt_cnt</td><td>4</td><td>2</td><td>Packet count indication.In compressed mode, the total number of packets per frame is not fixed.If the length of the first MSOP packet exceeds 1396 bytes, it will be split into two packets, in which case a second MSOP packet will exist.</td></tr><tr><td>reserved</td><td>6</td><td>2</td><td>reserved</td></tr><tr><td>point data</td><td>8</td><td>y</td><td>The radial distance (2 bytes) of all pixels in an entire column for a single echo forms the first compression block. The reflectivity (intensity) and point attributes (2 bytes) form the second compression block.If the length of the first MSOP packet exceeds 1396 bytes, it is split into two packets. The first packet has a fixed length of 1320 bytes, while the length of the second packet is variable.</td></tr><tr><td>DataLength</td><td>8+y</td><td>2</td><td>E2E Profile4 Data Length: 04 3C</td></tr><tr><td>Counter</td><td>10+y</td><td>2</td><td>E2E Profile4 Counter: 00 00~FF FF</td></tr><tr><td>DataId</td><td>12+y</td><td>4</td><td>E2E Profile4 Data Id: 00 00 0E 5D</td></tr><tr><td>Crc32</td><td>16+y</td><td>4</td><td>E2E Profile4 Crc32</td></tr></table>

The structure of the compressed point data blocks is shown in Table 12. 


Table 12 Compressed Block Structure


<table><tr><td>Mode</td><td>Total Length</td><td>Initial Value</td><td colspan="4">Start Forward Difference</td><td>...</td><td colspan="4">End Forward Difference</td></tr><tr><td>2bit</td><td>14bit</td><td>16bit</td><td>4bit</td><td>4bit</td><td>4bit</td><td>4bit</td><td>...</td><td>4bit</td><td>4bit</td><td>4bit</td><td>4bit</td></tr><tr><td>0</td><td>1</td><td>Initial Value</td><td colspan="4">-</td><td>...</td><td colspan="4">-</td></tr><tr><td>1</td><td>n+1</td><td>Initial Value</td><td>diff_0</td><td>diff_1</td><td>diff_2</td><td>diff_3</td><td>...</td><td>diff_n-4</td><td>Padding 0</td><td>Padding 0</td><td>Padding 0</td></tr><tr><td>2</td><td>n+1</td><td>Initial Value</td><td colspan="2">diff_0</td><td colspan="2">diff_1</td><td>...</td><td colspan="2">diff_n-2</td><td colspan="2">Padding 0</td></tr><tr><td>3</td><td>n+1</td><td>Initial Value</td><td colspan="4">org_0</td><td>...</td><td colspan="4">org_n-1</td></tr></table>

#### 4.3.2 Device Information Output Protocol (DIFOP1&DIFOP2)
I/O type: Product output, computer parsing. 

The EM4-F outputs two types of DIFOP packets. DIFOP1 uses the factory default port number 7788 with a transmission cycle of 10ms. As a write-only protocol, DIFOP1 periodically sends device information including the serial number, firmware version, host driver compatibility details, network configuration, calibration data, motor operation settings, system status and fault diagnosis information to users. By reading DIFOP1, users can obtain specific parameters of the current device. 

DIFOP2 uses the factory default port number 7766 with a transmission cycle of 2s. It packages and outputs pitch angle information for each SPAD-SoC channel from 1 to 520, yaw angle compensation information for different VCSEL zones, and pitch angle compensation information for each mirror facet. By reading DIFOP2, users can assist in point cloud parsing. 

The basic structure of the data packet is shown in Table 13,14. 


Table 13 DIFOP1 Data Sheet


<table><tr><td>DIFOP1</td><td>Content</td><td>Offset</td><td>Length</td><td>Instruction</td></tr><tr><td>Header</td><td>StatusHdr</td><td>0</td><td>4</td><td>A5 FF 00 5A</td></tr><tr><td rowspan="3">Version</td><td>Reserved</td><td>4</td><td>20</td><td></td></tr><tr><td>SW Version</td><td>24</td><td>3</td><td></td></tr><tr><td>HW Version</td><td>27</td><td>2</td><td></td></tr><tr><td rowspan="2">SerialNumber</td><td>IntSN</td><td>29</td><td>6</td><td></td></tr><tr><td>CusSN</td><td>35</td><td>16</td><td>Customer SN</td></tr><tr><td rowspan="5">WorkInformation</td><td>Reserved</td><td>51</td><td>1</td><td></td></tr><tr><td>FrameRate</td><td>52</td><td>1</td><td>0x0A:10Hz</td></tr><tr><td>WaveMode</td><td>53</td><td>1</td><td>0x00:DualReturn0x04:StrongestReturn</td></tr><tr><td>Reserved</td><td>54</td><td>10</td><td></td></tr><tr><td>Lidar_Heater_Status</td><td>64</td><td>1</td><td>bit0: Lidar_Heater_Switch0b0: Heating off0b1: Heating on bit1-7: Reserved</td></tr><tr><td></td><td>Reserved</td><td>65</td><td>24</td><td></td></tr><tr><td rowspan="3">TimeSyncInfomation</td><td>TimesyncMode</td><td>89</td><td>1</td><td>0x00: internal local timer0x03: gPTP timer</td></tr><tr><td>TimesyncStatus</td><td>90</td><td>1</td><td>0x00: failed0x01: Success0x02: Timeout</td></tr><tr><td>TimeStamp</td><td>91</td><td>10</td><td>0-5 bytes: Second6-9 bytes: MicroSecond</td></tr><tr><td rowspan="14">NetParameter</td><td>PhyMasterSlave Mode</td><td>101</td><td>1</td><td>0x02: slave</td></tr><tr><td>SrcIP</td><td>102</td><td>4</td><td>192.168.1.200</td></tr><tr><td>NetMask</td><td>106</td><td>4</td><td>255.255.255.0</td></tr><tr><td>MacAddress</td><td>110</td><td>6</td><td></td></tr><tr><td>MsopDstIp</td><td>116</td><td>4</td><td>192.168.1.102</td></tr><tr><td>MsopSrcPort</td><td>120</td><td>2</td><td>6699</td></tr><tr><td>MsopDstPort</td><td>122</td><td>2</td><td>6699</td></tr><tr><td>Difop1DstIp</td><td>124</td><td>4</td><td>192.168.1.102</td></tr><tr><td>Difop1SrcPort</td><td>128</td><td>2</td><td>7788</td></tr><tr><td>Difop1DstPort</td><td>130</td><td>2</td><td>7788</td></tr><tr><td>Difop2DstIp</td><td>132</td><td>4</td><td>192.168.1.102</td></tr><tr><td>Difop2SrcPort</td><td>136</td><td>2</td><td>7766</td></tr><tr><td>Difop2DstPort</td><td>138</td><td>2</td><td>7766</td></tr><tr><td>DoIPDstIp</td><td>140</td><td>4</td><td>192.168.1.102</td></tr><tr><td rowspan="2"></td><td>DoIPSrcPort</td><td>144</td><td>2</td><td>13400</td></tr><tr><td>Reserved</td><td>146</td><td>10</td><td></td></tr><tr><td rowspan="21">Voltage &amp; Temp</td><td>MCU_VMON_RX_D1V1</td><td>156</td><td>2</td><td></td></tr><tr><td>MCU_VMON_F_1V0</td><td>158</td><td>2</td><td></td></tr><tr><td>MCU_VMON_F_1V8</td><td>160</td><td>2</td><td></td></tr><tr><td>MCU_VMON_F_2V5</td><td>162</td><td>2</td><td></td></tr><tr><td>MCU_VMON_M_3V3</td><td>164</td><td>2</td><td></td></tr><tr><td>MCU_VMON_A_3V3</td><td>166</td><td>2</td><td></td></tr><tr><td>MCU_VMON_WAKE_EXT</td><td>168</td><td>2</td><td></td></tr><tr><td>MCU_IMON_WINDOW</td><td>170</td><td>2</td><td></td></tr><tr><td>MCU_VMON_WINDOW</td><td>172</td><td>2</td><td></td></tr><tr><td>MCU_VMOM_SYS_5V</td><td>174</td><td>2</td><td></td></tr><tr><td>MCU_VMOM_VIN</td><td>176</td><td>2</td><td></td></tr><tr><td>PL_VMOM_M_1V2</td><td>178</td><td>2</td><td></td></tr><tr><td>PL_VMON_CHG</td><td>180</td><td>2</td><td></td></tr><tr><td>PL_VMON_VOP</td><td>182</td><td>2</td><td></td></tr><tr><td>RX_VT4_N</td><td>184</td><td>2</td><td></td></tr><tr><td>RX_3V3</td><td>186</td><td>2</td><td></td></tr><tr><td>Res3</td><td>188</td><td>4</td><td></td></tr><tr><td>TEMP_RX_Sensor</td><td>192</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_FPGA1</td><td>193</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP MCU</td><td>194</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_MOTOR</td><td>195</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td rowspan="10"></td><td>TEMP_FPGA2</td><td>196</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_TXR1</td><td>197</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_RX</td><td>198</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_WINDOW</td><td>199</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>TEMP_TXR2</td><td>200</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>Reserved</td><td>201</td><td>5</td><td></td></tr><tr><td>Humidity_Sensor_Value</td><td>206</td><td>1</td><td>Phy = INT* 1, %</td></tr><tr><td>Temperature_Sensor_Value</td><td>207</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>Dew_Point</td><td>208</td><td>1</td><td>Phy = INT-100, °C</td></tr><tr><td>Reserved</td><td>209</td><td>7</td><td></td></tr><tr><td rowspan="7">Fault</td><td>Internal_Power_Supply_Fault</td><td>216</td><td>3</td><td></td></tr><tr><td>LiDAR_Temperature_Fault</td><td>219</td><td>3</td><td></td></tr><tr><td>Internal_Software_Fault</td><td>222</td><td>3</td><td></td></tr><tr><td>Internal_Performance_Fault</td><td>225</td><td>4</td><td></td></tr><tr><td>LidarFunctionFault</td><td>229</td><td>1</td><td>bit0: Window_Blockage_Error0b0: False0b1: Truebit1: gPTP_Sync_Error0b0: False0b1: Truebit2-7: Reserved</td></tr><tr><td>ExtPowerSupplyFault</td><td>230</td><td>1</td><td>bit0: Battery_High0b0: False0b1: Truebit1: Battery_Low0b0: False0b1: Truebit2-7: Reserved</td></tr><tr><td>External_Communication_Fault</td><td>231</td><td>2</td><td></td></tr><tr><td>FaultStatus</td><td>Reserved</td><td>233</td><td>11</td><td></td></tr><tr><td rowspan="4">E2E</td><td>DataLength</td><td>244</td><td>2</td><td>0x0100</td></tr><tr><td>Counter</td><td>246</td><td>2</td><td>0x0000-0xFFFF</td></tr><tr><td>DataId</td><td>248</td><td>4</td><td>0x00000E5C</td></tr><tr><td>Crc32</td><td>252</td><td>4</td><td></td></tr></table>


Table 14 DIFOP2 Data Sheet


<table><tr><td>Difop2</td><td>Content</td><td>Data Offset</td><td>Length</td><td>Instruction</td></tr><tr><td>Header</td><td>InfoHdr</td><td>0</td><td>4</td><td>A5 FF 00 AE</td></tr><tr><td>Reserved</td><td>Res0</td><td>4</td><td>63</td><td></td></tr><tr><td rowspan="7">AngleInformation</td><td>SurfaceCnt</td><td>67</td><td>1</td><td>0x04</td></tr><tr><td>HalfVcselPixelCnt</td><td>68</td><td>1</td><td>0x14</td></tr><tr><td>HalfVcselCnt</td><td>69</td><td>1</td><td>0x1A</td></tr><tr><td>HalfVcselYawOffset</td><td>70</td><td>26</td><td>byte0-1: vcsel 1...byte24-25: vcsel 13</td></tr><tr><td>PixelPitch[1~520]</td><td>96</td><td>1040</td><td>byte0-1: pixel 1 pitch...byte1038-1039: pixel 520 pitch</td></tr><tr><td>SurfacePitchOffset</td><td>1136</td><td>8</td><td>byte0~1: Surface A Pitch Offsetbyte2~3: Surface B Pitch Offsetbyte4~5: Surface C Pitch Offsetbyte6~7: Surface D Pitch Offset</td></tr><tr><td>Reserved</td><td>1144</td><td>6</td><td></td></tr><tr><td rowspan="3">E2E</td><td>DataLength</td><td>1150</td><td>2</td><td></td></tr><tr><td>Counter</td><td>1152</td><td>2</td><td>00 00~FF FF</td></tr><tr><td>DataId</td><td>1154</td><td>4</td><td>00 00 5A A5</td></tr><tr><td></td><td>Crc32</td><td>1158</td><td>4</td><td></td></tr></table>

### 4.4 Point Cloud Data Parsing Guide
The EM4-F obtains timestamp information by parsing the timestamp field in MSOP packets. The total length of this field is 10 bytes, with the first 6 bytes representing seconds since 1970-01-01 00:00:00 UTC, and the remaining 4 bytes storing microseconds in the range of 0-999999. After reading the timestamp data, the system first converts the hexadecimal values to decimal seconds, calculates the UTC time using 1970-01-01 00:00:00 as the base reference, then adjusts for the local time zone offset to determine the actual local time. 

For VCSEL odd-even zone timing differences, the timestamp represents the completion time for an entire column's detection, specifically corresponding to the even-numbered zone pixels. The EM4-F extracts the VCSEL zone timing offset by parsing the vcsel_interval field in MSOP packets. This 1-byte signed two's complement value ranges from -128 to 127 microseconds, with a center value of 256 microseconds. The odd-numbered zone time is derived by subtracting both the base 256 microsecond offset and the vcsel_interval value from the even-numbered zone timestamp. 

$$
\text { Even   zone   time } = \text { timestamp }
$$

$$
\text { Odd   zone   time } = \text { timestamp } - (2 5 6 \text { us } + \text { vcsel\_interval })
$$

An example is shown as below: 

For a specific MSOP packet, the timestamp field contains the hexadecimal value 00 00 00 68 7E 7F 12 00 00 00 64, while the vcsel_interval field contains 01 00 00 11. 

Converting the first 6 hexadecimal digits of the timestamp to decimal yields 1754393106 seconds, and the remaining 4 digits convert to 100 microseconds. 

Calculating from the base time 1970-01-01 00:00:00 UTC, 1754393106 seconds corresponds to 2025-08-04 11:25:06 UTC. Assuming the local time zone is UTC+8 (Beijing Time), the actual readable time becomes 2025-08-04 19:25:06 and 100 microseconds. This represents the timing for even-numbered VCSEL zone pixels in this MSOP packet. 

The vcsel_interval field converts to a signed decimal value of -67 us. 100us+256us-67us=289us. Therefore, the timing for odd-numbered VCSEL zone pixels in this MSOP packet is 2025-08-04 19:25:05 and 811 microseconds. 

The EM4-F obtains reflectivity information by parsing the intensity field of individual pixels in MSOP packets. The output is formatted as reflectivity partitions ranging from 0 to 255, where lower partition numbers indicate lower reflectivity and vice versa. 

For example, when reading the intensity field value 6E for the second pixel in an MSOP packet; 

the hexadecimal 6E converts to decimal 110, indicating the second pixel's reflectivity falls within partition 110. 

For angular measurements, the EM4-F processes multiple compensation parameters: The yaw angle $\theta$ (unit: $0.01^{\circ}$ ) is derived by parsing the MSOP packet's yaw_angle field (in two's complement format) and applying compensation adjustments from the DIFOP2 packet's HalfVcselYawOffset field (also in two's complement format). The radial distance r (unit: mm) is obtained directly from the pixel's radius field in MSOP packets. The pitch angle $\varphi$ (unit: $0.01^{\circ}$ ) is calculated by parsing the corresponding pixel's PixelPitch field in DIFOP2 packets (two's complement format) and applying compensation from the SurfacePitchOffset field (two's complement format). 

pixel in the n-th column on the j-th mirror surface (j=A,B,C,D) are equal to: 

$$
\text { yaw(j,i) } = \text { yaw\_angle } + \text { HalfVcselYawOffset } ([ i / 2 0 ] + 1)
$$

$$
\operatorname{Pitch} (j, i) = \operatorname{PixelPitch} (i) + \operatorname{SurfacePitchOffset} (j)
$$

The Cartesian coordinates x, y, and z are obtained, with the coordinate transformation shown in Figure 12. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/ba07de094471e98718f432c47e43a68519117af5717e31f72d4eb1eb481aba79.jpg)


Figure 12 MSOP Point Cloud Coordinate


The computational formula is given below:: 

$$
\mathrm{x} = \mathrm{r} * \cos (\text { pitch }) * \cos (\text { yaw })
$$

$$
\mathrm{y} = \mathrm{r} * \cos (\text { pitch }) * \sin (\text { yaw })
$$

$$
z = r * \sin (\text { pitch })
$$

For mirror surface A, an MSOP packet contains the following data: the yaw_angle field reads 15 50 in hexadecimal, the radius field for the 22nd pixel reads 00 03 9E A5, while the corresponding DIFOP2 packet shows FF FD for Byte2-3 of the second partition in HalfVcselYawOffset, F9 F6 for Byte42-43 of the 22nd pixel in PixelPitch field, and 00 0F for Byte0-1 of mirror A in SurfacePitchOffset field. 

Converting these hexadecimal two's complement values to decimal yields: +5456 for 15 50, -3 for FF FD (unit: 0.01°), resulting in a yaw angle of 54.53°; 263,197 for 00 03 9E A5 (unit: mm), giving a radial distance r of 263.197 meters; -1546 for F9 F6 and +15 for 00 0F, producing a pitch angle of -15.31°. Based on these values, the Cartesian coordinates x, y, z for this pixel are calculated as follows: 

$$
\mathrm{x} = 2 6 3. 1 9 7 * \cos (- 1 5. 3 1 ^ {\circ}) * \cos (5 4. 5 3 ^ {\circ}) = 1 4 7. 3 1 \mathrm{m}
$$

$$
\mathrm{y} = 2 6 3. 1 9 7 * \cos (- 1 5. 3 1 ^ {\circ}) * \sin (5 4. 5 3 ^ {\circ}) = 2 0 6. 7 5 \mathrm{m}
$$

$$
\mathrm{z} = 2 6 3. 1 9 7 * \sin (- 1 5. 3 1 ^ {\circ}) = - 6 9. 4 9 \mathrm{m}
$$

## 5 Fault diagnosis
This chapter lists some common problems encountered during the use of the product and corresponding troubleshooting methods. Please refer to Table 15 for details. 


Table 15 Common Troubleshooting Methods


<table><tr><td>Fault phenomenon</td><td>resolvent</td></tr><tr><td>The red/green indicator light on the interface box is not on/flashing</td><td>Check if the connection wire between the interface box and the power end is loose;Check if the wiring harness is damaged.</td></tr><tr><td>The product keeps restarting during startup</td><td>Check if the input power connection and polarity are normal;Check whether the voltage and current of the input power supply meet the requirements (under the condition of 12V voltage input, the input current is ≥ 2A);</td></tr><tr><td>Wireshark can receive data, but RSView does not display point clouds</td><td>Turn off the computer firewall and run RSView to pass through the firewall;Confirm that the IP configuration of the computer matches the destination address set for the product;Confirm that the Sensor Network Configuration setting in RSView is correct;Confirm that the RSView installation directory or configuration file storage directory does not contain any Chinese characters;Confirm that the received packet in Wireshark is of MSOP type.</td></tr><tr><td>Frequent data loss of products</td><td>Confirm whether there are a large number of other network packets or network conflicts in the network;Confirm whether there are other network products in the network that are sending large amounts of data in broadcast mode, causing sensor data blockage;Confirm whether the performance and interface performance of the computer meet the requirements;Remove all other network products and connect directly to the computer to confirm if there is any packet loss.</td></tr><tr><td>Unable to synchronize gPTP time</td><td>Confirm whether the radar firmware matches the required synchronization mode;In gPTP time synchronization mode:Confirm whether the gPTP Master synchronizationprotocol complies with the current gPTP protocol; Confirm if gPTP Master is working properly.</td></tr><tr><td>The product has no data output after passing through the router</td><td>Turn off the DHCP function of the router or set the sensor's IP address to the correct IP address inside the router.</td></tr></table>

**Note:**

If the above troubleshooting fails to solve the problem, please contact RoboSense. 

## 6 Product maintenance
### 6.1 Transportation and Logistics
!!! important "Important"

    Improper transportation can lead to product damage! 

1) Products should be packaged with shockproof and moisture-proof packaging materials to avoid damage during transportation. Suggest using the original packaging; 

2) During transportation, be careful and handle with care to avoid dangerous behaviors such as collision and falling; 

3) Every time the goods are received during transportation, a detailed inspection of the delivered goods list and whether there is any damage (including products and packaging) must be carried out; 

4) If there is any transportation damage, please refuse to receive the goods and contact RoboSense promptly. 

### 6.2 Storage
!!! important "Important"

    1) Please store the product indoors at room temperature and in a dry environment;

    2) Please handle with care to prevent the product from being bumped, dropped, etc;

    3) The product should be stored in a safe environment, avoiding corrosion, mechanical impact, and exposure to environments beyond the protection level;

    4) Please regularly check the status of all components and packaging, with a recommended inspection cycle of 3 months. 

### 6.3 Product Cleaning
In order to accurately perceive the surrounding environment, RS LiDAR needs to 

keep the annular protective cover clean. 

#### 6.3.1 Precautions
!!! important "Important"

    Please read this section carefully and completely before cleaning the RS LiDAR, otherwise improper operation may damage the product. 

When using a LiDAR in harsh environments, it is necessary to promptly clean the surface dirt to keep the LiDAR clean, otherwise it will affect the normal use of the LiDAR. 

#### 6.3.2 Required Materials
1) Clean and dust-free cloth; 

2) Neutral solutions with moderate temperature (such as soapy water, distilled water, 99% concentration ethanol, etc.). 

#### 6.3.3 Cleaning methods
1) If the surface of the LiDAR only adheres to some dust/dirt: 

a) Firstly, use a clean and dust-free cloth to dip a small amount of neutral solution; 

b) Next, gently wipe and clean the surface of the LiDAR; 

c) Finally, dry it with a dry and clean dust-free cloth. 

2) If the surface of the LiDAR is stained with lumps of foreign matter such as mud: 

d) Firstly, clean water should be sprayed onto the surface of the dirty area of the LiDAR to remove mud and other foreign objects (note: do not directly wipe off the mud with a dust-free cloth, as this may scratch the surface, especially the protective cover surface); 

e) Next, spray warm soapy water on the dirty area, as the lubricating effect of soapy water can accelerate the detachment of foreign objects. Gently wipe the surface of the laser radar with a fiber cloth again, but be careful not to scratch the surface; 

f) Finally, clean the soap residue on the surface of the LiDAR with clean water (if there is still residue on the surface, it can be cleaned again with 99% ethanol), and dry it with a dry, dust-free cloth. 

## 7 After sales
If the fault diagnosis section 5 fails to solve the problem, please contact RoboSense in a timely manner. 

Official website: https://www.robosense.cn/contact 

Email: support@robosense.cn 

Phone: 0755-86325830/15338772453 

**Note:** 

1) Please send back the product after receiving confirmation from RoboSense after-sales service; 

2) The product can only be sent back in its original packaging or equivalent soft cushioned moisture-proof package. 

## Appendix A Definition of TE connector pins
![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/d924260dce722aa60a010c9c5624316ff9f94be89ba2c77c4ec6152832cbf99f.jpg)


<table><tr><td colspan="3">Definition of TE connector pins</td></tr><tr><td>Pin Number</td><td>Definition</td><td>Connector model</td></tr><tr><td>1</td><td>POWER</td><td rowspan="8">TE 2387351-1</td></tr><tr><td>2</td><td>Wakeup</td></tr><tr><td>3</td><td>/</td></tr><tr><td>4</td><td>GND</td></tr><tr><td>5</td><td>/</td></tr><tr><td>6</td><td>/</td></tr><tr><td>D1</td><td>1000BASE-T1 N</td></tr><tr><td>D2</td><td>1000BASE-T1 P</td></tr></table>

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/02bb5d40632f4e8f4b433b05da09a7273efb054a888cfbc397e1e4f2affc6837.jpg)


robosense 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-01/6045396e-3160-492c-9fa2-41de84ee807f/9799bc64628a97d087c85897138fb7588a1957e4516f29a22ede6b8d222acef8.jpg)


深圳市南山区桃源街道留仙大道1213号众冠红花岭工业南区2区9栋

www.robosense.ai 