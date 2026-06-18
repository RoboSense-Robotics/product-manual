# Airy


## User Guide


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/5c842e61448b36ef160167fe7e69ada2185ca3030f0cff45a160bbdbb75aacba.jpg)


## Change Description


<table><tr><td>Version</td><td>Revision Date</td><td>Description</td></tr><tr><td>1.0</td><td>2025/01/02</td><td>Initial Release</td></tr><tr><td>1.1</td><td>2025/03/18</td><td>1. Add the Description of IMU Data Packet Structure2. Fix Some Description Errors</td></tr><tr><td>1.2</td><td>2025/07/28</td><td>1. Add the Transmission Delay for Different Channels2. Fix Some Description Errors</td></tr><tr><td>1.3</td><td>2025/11/05</td><td>1. Revise the description related to the product structure.2. Fix Some Description Errors</td></tr></table>

## Reading Prompt
## Symbolic Instructions
Warning: The usage process should be strictly followed, otherwise it may lead to potential dangerous situations such as minor injuries or property damage. 

Important: The usage process should be observed, otherwise it may cause potential harmful situations such as product damage. 

Note: The usage process should be valued sufficiently to achieve maximum value of the product efficiently and smoothly. 

## Resource Download
Please click the following link to download the latest product manual, RSview and other resources: 

https://www.robosense.ai/en/resources 

## More Information
Manufacturer: Suteng Innovation Technology Co., Ltd. (RoboSense). 

Website: https://www.robosense.ai/en 

Technical Support: support@robosense.cn 

Address: Building 9, Block 2, Zhongguan Honghualing Industry Southern District, 1213 Liuxian Avenue, Taoyuan Street, Nanshan District, Shenzhen, China 

Phone: +86-0755-86325830 

Email: service@robosense.cn 

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

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/86619d58bb74a82a49192da8495ede23ee537c40f11831f4bdb5532296364185.jpg)


2) High Temperature Warning: Please pay attention to the overheating sign on the LiDAR surface to avoid a hot LiDAR surface that may lead to sensor failure 

or undesirable consequences; 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/a3b1f41f7abd99893fd7d1aa1bf217f1592d5cb7ec6729430ae11ad3472b3246.jpg)


3) Retain Instructions: The safety and operating instructions should be retained for future reference; 

4) Heed Warnings: All warnings on the product and in the operating instructions should be adhered to; 

5) Servicing: Except for what's described in this manual, the sensor has no field serviceable parts. For servicing, please contact RoboSense sales or the authorized distributors. 

## 2 Product Description
### 2.1 Product Overview
Airy is a new type of short-range 3D LiDAR specifically designed by RoboSense to eliminate blind spots. It is primarily used in applications such as robot environment perception, autonomous vehicle environment perception, drone mapping, and smart cities. 

Airy adopts RoboSense innovative signal processing technology, allowing for a minimum detection distance as close as 10 centimeters. With its hemispherical ultra-wide field of view design, it can effectively detect various extremely close-range obstacles over a large area. 

### 2.2 Product Structure
The structure diagram of Airy is shown in Figure 1. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/8d34e7cfc1c2835effbc0dba1d794dc043ebeb0b28fc3891f1555203a061f7cc.jpg)


Figure 1 Product Structure Description


It mainly includes the following components: 

#### 1) Protective Cover
Both the emitted laser and returned laser need to pass through the specially designed arc-shaped protective cover. Therefore, any obstruction within the laser's field 

of view (FOV) is strictly prohibited. 

#### 2) Aviation Connector
The LiDAR body is connected to the interface cable via an aviation connector, enabling power supply and data transmission functionalities. 

#### 3) Mounting Holes
Used to support and fix the position and orientation between the LiDAR and the bracket, and to enhance installation efficiency and accuracy. 

#### 4) M3 Screw Mounting Holes
Used to secure the LiDAR to the mounting bracket with M3 screws. 

### 2.3 FOV Distribution
Airy's FOV has a horizontal angular range of 0 to 360 degrees and a vertical angular range of 0 to 90 degrees, with an angular interval of approximately 0.947 degrees. The 96 channels, and their corresponding relationship with the real vertical angles are shown in Figure 2. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/9d4c7eb8cc86b9c617d58e390d0be3017e24b8d02f233068bde869fa1f83d8e9.jpg)


Figure 2 Airy FOV Illustration


Airy's design architecture and scanning sequence result in approximately 9 ms of point cloud unavailability per second, meaning one out of every 10 frames of point cloud data has a gap of about 32 degrees. The starting angle of this gap can be configured in mass production version firmware, allowing users to set it to a position with minimal impact based on actual needs, shown in Appendix A.2.2. 

### 2.4 Specifications $^{1}$

Table 1 Airy Specifications


<table><tr><td colspan="4">Specifications</td></tr><tr><td>Number of Channels</td><td>96</td><td>Horizontal Field of View (FOV)</td><td>0° ~360°</td></tr><tr><td>Laser Wavelength</td><td>940 nm</td><td>Vertical Field of View (FOV)</td><td>0° ~ 90°</td></tr><tr><td>Laser Safety Level</td><td>Class 1 Eye-Safety</td><td>Horizontal Angular Resolution</td><td>0.4°</td></tr><tr><td>Measurement Range2</td><td>60 m(30 m @10% NIST)</td><td>Vertical Angular Resolution</td><td>0.947°</td></tr><tr><td>Blind Zone</td><td>0.1 m</td><td>Accuracy (Typical)3</td><td>1.5 cm (1 σ)</td></tr><tr><td>Rotation Speed</td><td>600</td><td>Frame Rate</td><td>10 Hz</td></tr><tr><td>Number of Output Points</td><td colspan="3">856,320 pts/s</td></tr><tr><td>Ethernet Transmission Rate</td><td colspan="3">100 MBps-TX</td></tr><tr><td>Output Data Protocol</td><td colspan="3">UDP Packets Over Ethernet</td></tr><tr><td>Lidar Data Packet Content</td><td colspan="3">Distance, Reflectivity, Timestamp, etc.</td></tr><tr><td>Operating Voltage</td><td>9 V - 32 V</td><td>Dimensions4</td><td>Φ 60 mm(Bottom) × H 63 mm</td></tr><tr><td>Product Power Consumption5</td><td>8 W(Typical Value)</td><td>Operating Temperature6</td><td>- 40°C ~ + 60°C</td></tr><tr><td>Weight</td><td>230g ± 20g (LiDAR Body)</td><td>Storage Temperature</td><td>- 40°C ~ + 85°C</td></tr><tr><td>Time Synchronization</td><td>GPS, PTP &amp; gPTP</td><td>Protection Level</td><td>IP67 / IP6K9K</td></tr><tr><td>Product Model</td><td colspan="3">Airy</td></tr></table>

### 2.5 Product Principle
#### 2.5.1 Coordinate Mapping
As the LiDAR data packet contains only horizontal rotation angles and distance parameters, to present a three-dimensional point cloud, the polar coordinates (angle and distance) are transformed into Cartesian coordinates $(x, y, z)$ according to the following equations: 

$$
\left\{ \begin{array}{l} x = r \cos (\omega) \sin (\alpha) + \mathrm{R} \cos (\alpha); \\ y = r \cos (\omega) \cos (\alpha) + \mathrm{R} \sin (\alpha); \\ z = r \sin (\omega) + \mathrm{Z}; \end{array} \right.
$$

where r is the measured distance, $\omega$ is the laser's vertical angle, $\alpha$ is the laser's horizontal rotation angle, R is the plane radius from the optical center to the origin, Z is the height from the optical center to the origin, and x, y, z are the coordinates projected onto the Cartesian X, Y, Z axes. 

#### 2.5.2 Reflectivity Interpretation
Airy LiDAR provides reflectivity information to characterize the reflectance of measured objects. In Airy data, the calibrated reflectivity range is from 1 to 255 (This range is a custom value defined by RoboSense products representing the reflectivity of detected target). 

#### 2.5.3 Return Modes
#### 2.5.3.1 Return Modes Principle
Airy supports multiple return modes, including Strongest Return, Last Return, and First Return. 

Airy analyzes multiple return values received and outputs the strongest, last, first return value based on user selection. In the Strongest Return mode, only the strongest reflected return value is output; in the Last Return mode, only the last detected return in the time domain is output. 

#### 2.5.3.2 Return Mode Flags
The default setting for Airy is Strongest Return mode. If users need to change this setting, they can configure product echo mode parameters in Web UI(See Section 4.2). In DIFOP, the 300th byte is the flag bit for the return mode. For details, refer to Table 2. 


Table 2 Return Mode and Flag Bit Reference Table


<table><tr><td>DIFOP Offset</td><td>Flag</td><td>Return Mode</td></tr><tr><td rowspan="3">1</td><td>00</td><td>Strongest Return</td></tr><tr><td>01</td><td>First Return</td></tr><tr><td>02</td><td>Last Return</td></tr></table>

#### 2.5.4 Phase Locking
Airy's phase locking function allows the device to emit lasers at specific angles when the sensor reaches a whole second. 

Figure 3 illustrates Airy's setup with different phase angles. The red arrows indicate that at the whole second, the sensor rotates to $0^{\circ}$ , $135^{\circ}$ , and $270^{\circ}$ to emit lasers. Refer to Figure 11 for the coordinate system details. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/3e221628135dd52cadc52ffe768e175df8e537d9c18282c18f2b554c9b92c2a1.jpg)


Figure 3 Airy Phase Lock Setting Illustration


The "Phase Lock" parameter setting is available in the Web UI under Setting > Phase Lock Setting. It allows users to set the locked phase angle, which should be an integer ranging from 0 to 360. For more details, please refer to Section 4.2. 

#### 2.5.5 Time Synchronization Method
Airy supports three time synchronization methods: GPS, PTP (IEEE 1588 V2 protocol), and gPTP (IEEE 802.1 AS protocol). Users can configure these settings through Web UI. For more details, please refer to Section 4.2. 

#### 2.5.5.1 GPS Time Synchronization Principle
The GPS module continuously sends GPRMC data and PPS synchronization pulse signals to the product. The PPS synchronization pulse length should be between 20 to 200ms, and the GPRMC data must be transmitted 10ms after the falling edge of the PPS synchronous pulse and completed between 300ms and 500ms before the rising edge of the next PPS synchronous pulse. (It is recommended that GPRMC data be sent exactly in the middle of the two PPS pulse signals). The timing diagram is shown in Figure 4. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/403faafcc7ef4a7e2b714ea532ec12347b60c3db2d9626ab0f6a9969e06330ac.jpg)


Figure 4 GPS Time Synchronization Timing Diagram


**Note:** Note:
To ensure accurate time synchronization, it is recommended to set the PPS pulse width between 20 to 200 ms. The completion time of GPRMC is recommended to be 10 ms after the falling edge of PPS and 300 to 500 ms before the next rising edge of PPS. 

#### 2.5.5.2 GPS Time Synchronization Usage
The GPS interface of Airy LiDAR adopts the RS232 protocol. Refer to Table 3 for the pin definition. 


Table 3 Product Time Synchronization Pin Definitions


<table><tr><td rowspan="2">Communication</td><td colspan="2">Receiving Pin Definition</td></tr><tr><td>GPS GPRMC</td><td>GPS PULSE</td></tr><tr><td>RS232</td><td>RS232 Receives serial data with RS232 electrical levelstandard output from the GPS module</td><td>Receives positive synchronization pulse signal output from the GPS module, with avoltage requirement of 3.0 ~ 15.0 V</td></tr></table>

The external GPS module needs to set the output serial port baud rate to 9600 bps, 8 data bits, no parity bit, and 1 stop bit. Airy only reads GPRMC-formatted data sent by the GPS module. The standard format is as follows: 

```txt
$ GPRMC,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>,<10>,<11>,<12> * hh 
```

<1> UTC time 

<2> Positioning status: A = valid positioning, V = invalid positioning 

<3> Latitude 

<4> Latitude hemisphere N (Northern Hemisphere) or S (Southern Hemisphere) 

<5> Longitude 

<6> Longitude hemisphere E (Eastern Longitude) or W (Western Longitude) 

<7> Ground speed 

<8> Ground course 

<9> UTC date 

<10> Magnetic declination 

<11> Magnetic declination direction: E (East) or W (West) 

<12> Mode indication (A = Autonomous positioning, D = Differential, E = Estimated, N = Data invalid) 

*hh at the end represents the XOR sum of characters from $ to * 

Note: 

1) The GPS_REC interface specification on the Airy power box is SM2.54 male connector, the pin definitions are shown in Figure 7; 

2) The interval for sending 1 PPS pulse should be controlled within 1s ± 200 us; 

3) The status bit in the GPRMC message must be valid for A to allow time synchronization; 

4) Airy is compatible with most GPRMC message formats from GPS modules available in the market. If any compatibility issues are found during usage, please contact RoboSense. 

#### 2.5.5.3 PTP Synchronization Principle
PTP (Precision Time Protocol, IEEE 1588V2 protocol) is a time synchronization protocol used for high-precision time synchronization between devices. It can also be used for frequency synchronization between devices. Compared to various existing time synchronization mechanisms, PTP offers the following advantages: 

1) Compared to NTP (Network Time Protocol), PTP can meet higher precision time synchronization requirements. NTP generally achieves sub-millisecond level time synchronization accuracy, while PTP can reach sub-microsecond level accuracy; 

2) Compared to GPS (Global Positioning System), PTP has lower construction and maintenance costs. 

#### 2.5.5.4 gPTP Synchronization Principle
gPTP (general Precise Time Protocol, IEEE 802.1AS protocol) is a derivative protocol of PTP in Time-Sensitive Networking (TSN). The synchronization mechanism uses the same P2P peer delay mechanism as the PTP protocol and adopts Ethernet L2 layer communication. Unlike PTP, gPTP requires the use of hardware-based timestamps, i.e., hardware timestamps, so the requirements for switches and master clocks are more stringent, complying with the IEEE 802.1AS protocol. 

#### 2.5.5.5 PTP/gPTP Wiring Method
To use PTP/gPTP synchronization, the following preparations are required. Refer to Section 3.4 for connection details: 

1) Select PTP/gPTP mode in the Web interface. See Section 4.2 for details; 

2) PTP Master/gPTP Master time source (plug and play, no additional configuration required); 

3) Ethernet switch; 

4) Devices that support PTP/gPTP protocols and need time synchronization. 

Note: 

1) The PTP Master device is a third-party device and is not included in the RoboSense shipment. The user needs to purchase it separately; 

2) RoboSense products, as Slave devices, only receive time from the Master and do not judge the accuracy of the Master's clock source. If there are sudden changes in the time when parsing LiDAR point cloud data, please check if the time provided by the Master is accurate; 

3) After LiDAR synchronization, when the Master is disconnected, the time in the point cloud data packet will be accumulated based on the LiDAR's internal 

clock. The time will be reset when the LiDAR is powered off and restarted. 

## 3 Product Installation
### 3.1 Accessory Description
The standard accessories included with Airy LiDAR are listed in Table 4 for reference. 


Table 4 Standard Accessory List


<table><tr><td>No.</td><td>Accessory Name</td><td>Specification</td><td>Quantity</td></tr><tr><td>1</td><td>LiDAR</td><td>Airy</td><td>1</td></tr><tr><td>2</td><td>Screw Pack</td><td>M3*8</td><td>3</td></tr><tr><td>3</td><td>Screw Pack(optional)</td><td>M3*12</td><td>3</td></tr><tr><td>4</td><td>Interface Cable(optional)</td><td>1.5m</td><td>1</td></tr><tr><td>5</td><td>Power Adapter(optional)</td><td>DC12 V × 3.34 A / 40 W</td><td></td></tr><tr><td>6</td><td>Power Cable(optional)</td><td>1.2 m</td><td></td></tr><tr><td>7</td><td>Ethernet Cable(optional)</td><td>1.5 m</td><td>1</td></tr><tr><td>8</td><td>Product Packing List and Shipment Inspection Report</td><td>/</td><td>1</td></tr></table>


Note: 


For specific requirements, please contact RoboSense or just refer to the commercial agreement. 


### 3.2 Mechanical Installation
The installation diagram of the LiDAR is shown in Figure 5. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/fd02892ab830d060f173332a667c4230d32bdc990ac258c915a515133af09a30.jpg)


Figure 5 LiDAR Structure Installation Diagram


1) Screw Specifications: 

a) GB / T70.1, M3 × 8, hex socket cap head, strength grade 10.9, with anti-loosening. 

2) Installation Requirements: 

a) The flatness of the installation surface should be better than 0.15 mm; 

b) Use 3 M3 screws to install on the base, 4.5 mm out of the installation surface. Recommended tightening torque is $13 \pm 1$ kgf.cm; 

c) Use 2 $\Phi$ 3 positioning pins on the base for installation alignment, $3\mathrm{mm}$ out of the installation surface; 

d) When installing the LiDAR, if both the top and bottom of the LiDAR have contact surfaces, ensure the distance between the surfaces is greater than the height of the LiDAR to avoid compressing it; 

e) When routing the LiDAR cables, do not make them overly tight (leave an installation margin of more than 2 cm) to ensure the cables have proper slack. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/eaa59536aca54e8a8cd2054619b74cbefe595b80bc1454bf2cad3d957a84bddc.jpg)


Figure 6 Illustration of the Positioning Holes and Screw Holes on the Bottom of the LiDAR


3) Bracket Stiffness and Strength Requirements: 

a) The fixed bracket needs to have good rigidity for securely mounting the LiDAR and maintaining the LiDAR in a stable state under various conditions. Therefore, the first-order modal frequency of the LiDAR and its fixed bracket should be at least greater than 50 Hz; 

b) The LiDAR will undergo various random vibrations and mechanical shocks during use. Under these conditions, the bracket needs to withstand significant loads, so it also requires sufficient strength. The bracket material is 

recommended to be aluminum alloy (thickness above 4 mm) or galvanized steel plate (thickness above 2 mm). Strengthening ribs should be added in various directions to improve its rigidity and strength as much as possible. It is advisable to avoid designing structures with sharp angles, corners less than 0.3 mm, or notches, which may cause stress concentration. The bracket strength needs to be verified through simulation. 

4) Heat Dissipation Requirements: 

a) The bracket material is recommended to be made of aluminum alloy or galvanized steel plate with a thermal conductivity greater than 50 W/m·K. Some heat dissipation fins should be added to the bracket, with reasonable spacing, height, and direction of the fins to increase the heat dissipation area. The direction should align with the air convection direction for more effective heat dissipation; 

b) Ensure that the LiDAR base or top cover is not covered with non-metallic materials to avoid affecting the overall heat dissipation, leading to excessive temperature rise of the LiDAR; 

c) If you cannot ensure proper heat dissipation, please communicate with our Field Application Engineer (FAE) in advance to determine a suitable cooling solution and prevent the LiDAR from overheating, which could affect the product's performance or lifespan. 

### 3.3 Interface Description
#### 3.3.1 Aviation Plug Interface and Definitions
The cable aviation plug on the Airy LiDAR side is shown in Figure 7. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/14176a6f7e196cdbc4349ac381990d805331f170b701594a688b7da9d3431dbf.jpg)


Figure 7 Aviation Plug Interface Pin Numbers


The specific pin definitions of the aviation plug interface on the LiDAR side are shown in Table 5. 


Table 5 Aviation Plug Interface Pin Definitions


<table><tr><td>Pin No.</td><td>Spec</td><td>Signal</td></tr><tr><td>1</td><td>26AWG</td><td>2P(RX+)</td></tr><tr><td>2</td><td>26AWG</td><td>2N(RX-)</td></tr><tr><td>3</td><td>26AWG</td><td>1P(TX+)</td></tr><tr><td>4</td><td>26AWG</td><td>1N(TX-)</td></tr><tr><td>5</td><td>24AWG</td><td>GND</td></tr><tr><td>6</td><td>26AWG</td><td>VIN</td></tr><tr><td>7</td><td>24AWG</td><td>VIN</td></tr><tr><td>8</td><td>26AWG</td><td>GND</td></tr><tr><td>9</td><td>30AWG</td><td>GPS PPS</td></tr><tr><td>10</td><td>30AWG</td><td>SYNC_OUT1</td></tr><tr><td>11</td><td>30AWG</td><td>GPS GPRMC</td></tr></table>

#### 3.3.2 Interface Cable (Optional)
The optional accessory Interface cable for Airy is shown in the Figure 8 below: 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/ae18b8984c00ce3fde511220190ef4f00a5d0eb0dd2238ac830ae9eddd740e0b.jpg)


Figure 8 Interface Cable


For detailed specifications of the interfaces on the Interface cable, please refer to Table 6. 


Table 6 Interface Cable Interface Specifications


<table><tr><td>A End No.</td><td>Wire Spec</td><td>Wire Definition</td><td>A End Color</td><td>B End No.</td><td>C End No.</td><td>D End No.</td><td>D End Color</td></tr><tr><td>1</td><td>26AWG</td><td>2P(RX+)</td><td>Orange-white</td><td>\</td><td>1</td><td>-</td><td>\</td></tr><tr><td>2</td><td>26AWG</td><td>2N(RX-)</td><td>Orange</td><td>\</td><td>2</td><td>-</td><td>\</td></tr><tr><td>3</td><td>26AWG</td><td>1P(TX+)</td><td>Green-white</td><td>\</td><td>3</td><td>-</td><td>\</td></tr><tr><td>4</td><td>26AWG</td><td>1N(TX-)</td><td>Green</td><td>\</td><td>6</td><td>-</td><td>\</td></tr><tr><td>5</td><td>26AWG</td><td>GND</td><td>Black</td><td>2</td><td>\</td><td>-</td><td>\</td></tr><tr><td>6</td><td>26AWG</td><td>VIN</td><td>Red</td><td>1</td><td>\</td><td>-</td><td>\</td></tr><tr><td>7</td><td>26AWG</td><td>VIN</td><td>Red</td><td>1</td><td>\</td><td>-</td><td>\</td></tr><tr><td>8</td><td>26AWG</td><td>GND</td><td>Black</td><td>2</td><td>\</td><td>4</td><td>Black</td></tr><tr><td>9</td><td>30AWG</td><td>GPS PPS</td><td>Purple</td><td>\</td><td>\</td><td>3</td><td>Purple</td></tr><tr><td>10</td><td>30AWG</td><td>SYNC_OUT1</td><td>Blue</td><td>\</td><td>\</td><td>2</td><td>Blue</td></tr><tr><td>11</td><td>30AWG</td><td>GPS GPRMC</td><td>Yellow</td><td>\</td><td>\</td><td>1</td><td>Yellow</td></tr></table>

#### 3.3.3 Power Interface
The Airy power interface uses a standard DC 5.5 - 2.1 interface. 

If the LiDAR motor does not rotate after connecting the power supply, it may be due to a damaged cable. In this case, please contact RoboSense. 

! Important: 

1) Grounding Method: This LiDAR unit features a design where the chassis and the internal printed circuit board (PCB) share a common ground. 

2) Installation Environment Recommendation: When the equipment chassis in 

the installation environment is in a floating ground state, it is recommended to implement electrical isolation between the LiDAR housing and the equipment chassis using non-metallic insulating components or other appropriate methods. This is to ensure proper device operation and prevent potential interference. 

#### 3.3.4 RJ45 Ethernet Port
The Airy Ethernet interface follows the EIA/TIA568B standard. 

#### 3.3.5 Sync Interface
The Airy sync interface is defined as follows: GPS GPRMC is for GPRMC signal input, and GPS PPS is for PPS signal input. 

! Important: 

When connecting the "Ground" of Airy to an external system, the power supply negative pole ("Ground") of the external system and the GPS system's "Ground" must be non-isolated and connected together. 

### 3.4 Quick Connection
The Airy network parameters can be configured, and the default factory setting uses fixed IP and port number mode, as shown in Table 7. 


Table 7 Default Factory Network Configuration Table


<table><tr><td>Device</td><td>IP Address</td><td>MSOP Package Port Number</td><td>DIFOP Package Port Number</td></tr><tr><td>Airy</td><td>192.168.1.200</td><td rowspan="2">6699</td><td rowspan="2">7788</td></tr><tr><td>Computer</td><td>192.168.1.102</td></tr></table>

When using the product, the user needs to set the computer's IP address to be in the same subnet as the product, for example, 192.168.1.x (where x can be any value between 1 and 254), and the subnet mask is 255.255.255.0. For unknown product network configuration information, please connect the product and use Wireshark to capture the output package of the product for analysis. The IP configuration and connection methods are as follows: 

1) Connecting the LiDAR 

The connection method is shown in Figure 9 

a) Connect the LiDAR using the aviation plug; 

b) Connect the PC and LiDAR using the RJ45 Ethernet port; 

c) After powering on, the LiDAR can work normally. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/31cea776262e6a3363de05d7bad8ee8eb82db1eb89253fc3ff13b80c252499e4.jpg)


Figure 9 Interface Cable Connection Diagram


2) By using Wireshark to capture packets, analyze the ARP messages to perform local IP configuration


a) Perform the following steps after the LiDAR and PC are connected: Start Wireshark (a third-party network analysis tool) and select the correct network interface to begin capturing packet;


b) Use the search box in Wireshark and enter "arp" to search for the mutual addressing packets between the LiDAR and PC, as shown in Figure 10;


<table><tr><td>No.</td><td>Time</td><td>Source</td><td>Destination</td><td>Protocol</td><td>Length Info</td><td></td></tr><tr><td></td><td>12 0.530047</td><td>SutengIn 1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr><tr><td></td><td>13 0.607377</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td colspan="2">42 Who has 192.168.1.101? (ARP Probe)</td></tr><tr><td></td><td>68 1.570011</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr><tr><td></td><td>69 1.607549</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td colspan="2">42 Who has 192.168.1.101? (ARP Probe)</td></tr><tr><td></td><td>98 2.606604</td><td>HP_7a:ae:1d</td><td>Broadcast</td><td>ARP</td><td colspan="2">42 ARP Announcement for 192.168.1.101</td></tr><tr><td></td><td>99 2.610787</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr><tr><td></td><td>130 3.650056</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr><tr><td></td><td>162 4.690102</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr><tr><td></td><td>251 5.730812</td><td>SutengIn_1c:ae</td><td>Broadcast</td><td>ARP</td><td colspan="2">60 Who has 192.168.1.102? Tell 192.168.1.200</td></tr></table>


Figure 10 Analyzing ARP Packets


c) In Figure 10, the "SutengIn" in the Source column indicates the source information of the LiDAR, indicating that the Source IP is 192.168.1.200, which is the LiDAR's IP. The request is accessing 192.168.1.102, which is the PC's IP. If the local IP is not the requested access IP, then configure the PC's local IP as 192.168.1.102 as shown in step 3. If the access is 

successful, proceed to step 4. 

3) Configuring the PC's Local IP 

a) In the Control Panel, go to "Network and Internet" and then "Network and Sharing Center." In the "View your active networks" section, click on the corresponding Ethernet connection to enter the corresponding "Ethernet Status," and then click on "Properties"; 

b) Double-click "Internet Protocol Version 4 (TCP/IPv4)" to enter the IP information settings and use a static IP for configuration; 

c) Set the local IP address to 192.168.1.102, subnet mask to 255.255.255.0, and click "OK" to complete the PC's static IP setting. 

4) Connection Completed 

Note: 

1) The time synchronization module (PTP & gPTP, GPS time synchronization module) is not included as a standard product. If you need to use these features, please purchase them separately and follow the connection method shown in Figure 9 

2) The configuration of the local static IP provided above is only an example for Windows operating systems. For other operating systems, please refer to the actual instructions. 

## 4 Product Usage
### 4.1 Product Coordinate System
The coordinates and rotation direction of the product are shown in Figure 11. The LiDAR coordinate origin values and the calibrated IMU extrinsic parameters can be fetched through RoboSense LiDAR SDK or certain parts in DIFOP. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/7a766879048276fc64aae23a737a966d39e75d45317b1a46823f3c9b084ac3fb.jpg)


Figure 11 LiDAR Coordinate and Rotation Direction Illustration


Note: 

The origin of the coordinates for the LiDAR is defined at the center of the LiDAR base. 

### 4.2 Web UI Usage
#### 4.2.1 Web UI Functions
Airy supports parameter settings, viewing of operational information/status, and firmware upgrades through the Web UI. 

The Airy web address changes according to the Device IP. The default Device IP is 192.168.1.200. If you have changed the Device IP, the web address will be the newly set IP. 

#### 4.2.2 Accessing the Web UI
Once the product is connected and correctly configured as required, use a computer 26 

browser to access the product's IP address (default Device IP: 192.168.1.200) to enter the Airy Web UI omepage. The default page is the "Device" tab. 

#### 4.2.3 Using the Web UI
For detailed instructions on using the Web UI, please refer to Appendix A. 

### 4.3 RView Usage
For data visualization with Airy, you can use free tools such as Wireshark and tcp-dump to obtain raw data. RSView can provide a more convenient way to visualize the raw data. 

#### 4.3.1 Software Functions
RSView enables real-time visualization of Airy data. It can also replay data saved in ".pcap" file format, but does not support ".pcapng" files at the moment. 

In RSView, the distance measurement values obtained by Airy are displayed as points. It supports various custom colors to display data, such as reflection intensity, time, distance, horizontal angle, and laser beam index. The displayed data can be exported and saved in ".csv" format, and RSView version 3.1.3 and later versions support exporting data in ".las" format. 

RSView includes the following features: 

1) Real-time display of data via Ethernet; 

2) Save real-time data as PCAP files; 

3) Replay data from recorded PCAP files; 

4) Various visualization modes, such as distance, time, horizontal angle, etc; 

5) Display point data in tabular format; 

6) Export point cloud data as CSV files; 

7) Distance measurement tool; 

8) Display multiple frames of replayed data simultaneously; 

9) Show or hide individual laser beams from Airy; 

10) Cropping display. 

#### 4.3.2 Installing RSView
RSView can be run on Windows 64-bit and Ubuntu 18.04 or higher operating systems. You can download the latest version of RSView software compressed package from the RoboSense official website (https://www.robosense.ai/en/resources). After downloading, make sure the extraction path does not contain Chinese characters. The software does not require installation; simply run the executable file after extraction to use it. 

#### 4.3.3 Using RSView
After opening RSView, you can access the user guide by pressing the F1 button or by clicking on the "RS-LiDAR User Guide" option in the Help menu. 

### 4.4 Communication Protocols
Airy communicates with a computer via Ethernet using UDP (User Datagram Protocol). The communication protocols between Airy and the computer fall into two categories, as described in Table 8. 


Table 8 Protocol Overview


<table><tr><td>Protocol Name</td><td>Abbreviation</td><td>Function</td><td>Type</td><td>Packet Size</td><td>Send Interval</td></tr><tr><td>Main Data Stream Output Protocol</td><td>MSOP</td><td>Point Cloud Data</td><td>UDP</td><td>1248 bytes</td><td>Approx. 444.44 us</td></tr><tr><td>Device Information Output Protocol</td><td>DIFOP</td><td>LiDAR Information Output</td><td>UDP</td><td>1248 bytes</td><td>Approx. 1 s</td></tr></table>


Note: 


1) Section 4.4 of the product manual describes and defines the payload (1248 bytes) of the protocols; 


2) The Main Data Stream Output Protocol (MSOP) encapsulates the laser scanning data, including distance, angle, and reflection intensity, into packets for output; 


3) The Device Information Output Protocol (DIFOP) outputs various configuration information about the current state of Airy. 


#### 4.4.1 MSOP and DIFOP Data Protocol
![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/e04c8193b390f5333678becdce5e7477f972dca037c5e7d1b00f7379476d9e7e.jpg)


Figure 12 LiDAR Data Structure Diagram


#### 4.4.2 Main Data Stream Output Protocol (MSOP)
Main data Stream Output Protocol, abbreviated as MSOP. 

I/O Type: Product output, computer parsing. 

The default port number is 6699. 

#### 4.4.2.1 Header
The frame header (Header) is 42 bytes in total and is used to identify the start position of the data. For details on the data structure, refer to Table 9. 


Table 9 MSOP Header Data Table


<table><tr><td>Information</td><td>Offset</td><td>Length (byte)</td><td>Description</td><td>Total Length (byte)</td></tr><tr><td>pkt_head</td><td>0</td><td>4</td><td>0x55AA055A</td><td rowspan="4"></td></tr><tr><td>REV0</td><td>4</td><td>8</td><td>/</td></tr><tr><td>pktcnt</td><td>12</td><td>4</td><td>Packet transmission cycle count: 0-65535</td></tr><tr><td>REV1</td><td>16</td><td>4</td><td>/</td></tr><tr><td>timestamp</td><td>20</td><td>10</td><td>Timestamp, first 6 bytes indicate seconds, last 4 bytes indicate microseconds</td><td rowspan="5">42</td></tr><tr><td>REV2</td><td>30</td><td>1</td><td>/</td></tr><tr><td>lidar_type</td><td>31</td><td>1</td><td>0x31:airy</td></tr><tr><td>lidar_model</td><td>32</td><td>1</td><td>0x02:96 beams</td></tr><tr><td>REV3</td><td>33</td><td>9</td><td>/</td></tr></table>

**Note:** Note:
The defined timestamp is used to record the system time with a resolution of $1 \mu s$ . For details, refer to the time definition in Appendix C.9. 

#### 4.4.2.2 Data Block
As shown in Table 10, Data block is the part of sensor measurement value in MSOP package, with a total of 1184 bytes. It consists of eight Data Blocks, each of which is 148 bytes long. 

Data block in the space of 148 bytes includes: a sign of 2 bytes, use 0xffee said; Azimuth of 2 bytes, indicating the horizontal rotation Angle information, each Angle information corresponds to 48 channel data. 


Table 10 Data Block Definition


<table><tr><td>Description</td><td colspan="5">Data Block (1184 bytes)</td></tr><tr><td>Data Block Sequence</td><td>Data Block 1</td><td>Data Block 2</td><td>...</td><td>Data Block 7</td><td>Data Block 8</td></tr><tr><td>Flag</td><td>0xffee</td><td>0xffee</td><td>...</td><td>0xffee</td><td>0xffee</td></tr><tr><td>Horizontal Rotation Angle</td><td>Azimuth 1</td><td>Azimuth 1</td><td>...</td><td>Azimuth 2</td><td>Azimuth 2</td></tr><tr><td>Channel 1</td><td>Channel Data 1</td><td>Channel Data 49</td><td>...</td><td>Channel Data 1</td><td>Channel Data 49</td></tr><tr><td>Channel 2</td><td>Channel Data 2</td><td>Channel Data 50</td><td>...</td><td>Channel Data 2</td><td>Channel Data 50</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>Channel 48</td><td>Channel Data 48</td><td>Channel Data 96</td><td>...</td><td>Channel Data 48</td><td>Channel Data 96</td></tr></table>

#### 1) Channel Data Definition
Channel data is 3 bytes, with the high two bytes used to represent distance information and the low one byte used to represent reflectivity information, as shown in Table 11. 


Table 11 Channel Data


<table><tr><td colspan="3">Channel data (3 bytes)</td></tr><tr><td colspan="2">2 bytes Distance</td><td>1 byte Reflectivity</td></tr><tr><td>Distance1 [15:8]</td><td>Distance2 [7:0]</td><td>Reflectivity</td></tr></table>

**Note:** Note:
Distance is 2 bytes, resolution is 0.5 cm. 

<table><tr><td>No.</td><td>Time</td><td>Source</td><td>Destination</td><td>Protocol</td><td>Length RPM</td><td>realtimeRotationSpeed</td><td>not_fault</td><td>realtimeRotationSpeed</td><td>包计数</td><td>实时转速</td><td>Info</td></tr><tr><td></td><td>130 0.057006</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>131 0.057006</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>132 0.057999</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>133 0.057999</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>134 0.059000</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>135 0.059000</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr><tr><td></td><td>136 0.060000</td><td>192.168.1.200</td><td>192.168.1.102</td><td>0350_MSOP</td><td>1290</td><td></td><td></td><td></td><td></td><td></td><td>6699 → 6699 Len=1248</td></tr></table>


Figure 13 MSOP Packet Illustration


Red Box: Header ID 

Green Box: LiDAR Type and LiDAR Model 

Blue Box: Data Block Flag 

Black Box: Azimuth Value for Channel Data 1 

Yellow Box: Distance Value for Channel Data 1 

Orange Box: Reflectivity Value for Channel Data 1 

#### The distance value of the data packet is calculated as follows:
a) The hexadecimal distance values in the data packet: 0x01, 0x0D; 

b) Combine the data into 16 bits as a 16-bit unsigned integer, represented as: 0x010D; 

c) Convert the distance value to a decimal number: 269; then calculate based on the distance resolution; 

d) Result: $269 \times 0.5 \, cm = 134.5 \, cm = 1.345 \, m$ . 

#### Angle Value Calculation in Data Packet:
a) The hexadecimal angle values in the data packet: 0x00, 0x8B; 

b) Combine the data into 16 bits as a 16-bit unsigned integer, represented as: 0x008B; 

c) Convert to a decimal number: 139, then divide the decimal result by 100; 

d) Result: $139^{\circ} / 100 = 1.39^{\circ}$ . 

#### Reflectivity Value Calculation in Data Packet:
a) The hexadecimal reflectivity value in the data packet: 0x6E; 

b) Convert to a decimal number: 110; 

c) The resulting reflectivity value is 110. 

#### 2) Angle Value Definition:
In each Block, the angle value output by Airy is the angle at which the first channel laser rangefinding occurs. This angle value is derived from the angle encoder, where the zero position of the angle encoder is the zero point of the angle. The resolution for horizontal rotation angle values is $0.01^{\circ}$ . 

#### 4.4.2.3 Tail
Frame Tail (Tail) is 6 bytes long, with 4 bytes reserved for information and 2 bytes set to 0x00, 0xFF. 

#### 4.4.3 Device Info Output Protocol (DIFOP)
Device Info Output Protocol, abbreviated as DIFOP. 

I/O Type: Product output, computer read. 

The default port number is 7788. 

DIFOP is an "output-only" protocol used to periodically send information such as product serial number (S/N), firmware version, computer driver compatibility information, configuration information, angle information, running status, fault diagnosis, etc., to users. Users can read DIFOP to interpret specific information about the currently used product. 

A complete DIFOP packet has a data format structure of synchronization header, data area, and tail. Every packet has 1248 bytes totally. The basic structure of the data packet is shown in Table 12. 


Table 12 Data Format Structure of DIFOP Packet


<table><tr><td>No.</td><td>Information</td><td>Offset</td><td>Length (byte)</td><td>Description</td></tr><tr><td>1</td><td>DIFOP Header</td><td>0</td><td>8</td><td>0xA5 0xFF 0x00 0x5A 0x11 0x11 0x55 0x55</td></tr><tr><td>2</td><td>Motor Speed Setting</td><td>8</td><td>2</td><td>Appendix C.1</td></tr><tr><td>3</td><td>Ethernet Source IP Address</td><td>10</td><td>4</td><td rowspan="7">Appendix C.2</td></tr><tr><td>4</td><td>Ethernet Destination IP Address</td><td>14</td><td>4</td></tr><tr><td>5</td><td>LiDAR MAC Address</td><td>18</td><td>6</td></tr><tr><td>6</td><td>MSOP Port</td><td>24</td><td>2</td></tr><tr><td>7</td><td>Reserved</td><td>26</td><td>2</td></tr><tr><td>8</td><td>DIFOP Port</td><td>28</td><td>2</td></tr><tr><td>9</td><td>Reserved</td><td>30</td><td>10</td></tr><tr><td>10</td><td>Mainboard Firmware Version</td><td>40</td><td>5</td><td>Appendix C.3</td></tr><tr><td>11</td><td>Baseboard Firmware Version</td><td>45</td><td>5</td><td>Appendix C.4</td></tr><tr><td>12</td><td>APP Firmware Version</td><td>50</td><td>5</td><td>Appendix C.5</td></tr><tr><td>13</td><td>Motor Firmware Version</td><td>55</td><td>5</td><td>Appendix C.6</td></tr><tr><td>14</td><td>Reserved</td><td>60</td><td>232</td><td></td></tr><tr><td>15</td><td>Product SN Number</td><td>292</td><td>6</td><td>Appendix C.7</td></tr><tr><td>16</td><td>Reserved</td><td>298</td><td>2</td><td></td></tr><tr><td>17</td><td>Return Mode</td><td>300</td><td>1</td><td></td></tr><tr><td>18</td><td>Time Sync Mode Setting</td><td>301</td><td>1</td><td rowspan="2">Appendix C.8</td></tr><tr><td>19</td><td>Time Sync Status</td><td>302</td><td>1</td></tr><tr><td>20</td><td>Time</td><td>303</td><td>10</td><td>Appendix C.9</td></tr><tr><td>21</td><td>Reserved</td><td>313</td><td>60</td><td></td></tr><tr><td>22</td><td>Real-time Motor Speed</td><td>373</td><td>2</td><td>Appendix C.10</td></tr><tr><td>23</td><td>Reserved</td><td>375</td><td>93</td><td></td></tr><tr><td>24</td><td>Vertical Angle Calibration</td><td>468</td><td>288</td><td>Appendix C.11</td></tr><tr><td>25</td><td>Horizontal Angle Calibration</td><td>756</td><td>288</td><td>Appendix C.12</td></tr><tr><td>26</td><td>Mainboard Total Input Voltage</td><td>1044</td><td>2</td><td>Appendix C.13</td></tr><tr><td>27</td><td>Reserved</td><td>1046</td><td>20</td><td></td></tr><tr><td>28</td><td>Device Input Voltage</td><td>1066</td><td>2</td><td>Appendix C.14</td></tr><tr><td>29</td><td>Baseboard 12V Voltage</td><td>1068</td><td>2</td><td>Appendix C.15</td></tr><tr><td>30</td><td>Reserved</td><td>1070</td><td>10</td><td></td></tr><tr><td>31</td><td>Mainboard Transmit Temperature</td><td>1080</td><td>2</td><td>Appendix C.16</td></tr><tr><td>32</td><td>Reserved</td><td>1082</td><td>10</td><td></td></tr><tr><td>33</td><td>IMU Calibration Data</td><td>1092</td><td>28</td><td>Appendix C.17</td></tr><tr><td>34</td><td>Reserved</td><td>1120</td><td>126</td><td>Reserved</td></tr><tr><td>35</td><td>Frame Tail</td><td>1246</td><td>2</td><td>0x0F 0xF0</td></tr></table>

Note: 

1) The Header (DIFOP Identification Header) consists of the bytes 0xA5, 0xFF, 0x00, 0x5A, 0x11, 0x11, 0x55, 0x55, and can be used as a check sequence for the packet; 

2) The Tail contains the bytes 0x0F, 0xF0; 

3) The definition and usage of each item's registers can be found in detail in Appendix A of the product manual. The corresponding relationship is specified in the Remarks column of Table 12. 

#### 4.4.4 IMU Data Stream Output Protocol
I/O Type: Product output, computer read. 

The default port number is 6688. 

The IMU output is the attitude information of IMU in the product, which can be used to adjust the external parameters of the customer's products. The data format structure of a complete IMU packet is frame header, data area, and frame tail. Each packet contains 51 bytes. The basic structure of the packet is shown in Table 13 


Table 13 IMU Data Format Structure


<table><tr><td>No.</td><td>Information</td><td>Offset</td><td>Length (byte)</td><td>Description</td><td>Remark</td></tr><tr><td>1</td><td>IMU Header</td><td>0</td><td>4</td><td>0xAA 0x55 0x5A 0x05</td><td></td></tr><tr><td>2</td><td>Time</td><td>4</td><td>10</td><td>UTC time format. The first 6 bytes are second timestamps, and the last 4 bytes are microsecond timestamps.</td><td></td></tr><tr><td>3</td><td>AccelX</td><td>14</td><td>4</td><td>X-axis acceleration value, signed, original value.</td><td>Original value is converted to the actual values associated with range, such as range of +/- 16g, the actual acceleration value is: original value*16/32768(unit:g). g value is 9.80665 m/s<eq>^{2}</eq></td></tr><tr><td>4</td><td>AccelY</td><td>18</td><td>4</td><td>Y-axis acceleration value, signed, original value.</td><td>As above</td></tr><tr><td>5</td><td>AccelZ</td><td>22</td><td>4</td><td>Z-axis acceleration value, signed, original value.</td><td>As above</td></tr><tr><td>6</td><td>GyroX</td><td>26</td><td>4</td><td>X-axis angular velocity value, signed, original value.</td><td>Original value is converted to the actual values associated with range, such as the range is +/- 2000 dps, theactual angular velocity value is original value*2000/32768*PI/180 (unit:rad/s)</td></tr><tr><td>7</td><td>GyroY</td><td>30</td><td>4</td><td>Y-axis angular velocity value, signed, original value.</td><td>As above</td></tr><tr><td>8</td><td>GyroZ</td><td>34</td><td>4</td><td>Z-axis angular velocity value, signed, original value.</td><td>As above</td></tr><tr><td>9</td><td>Internal Temperature</td><td>38</td><td>4</td><td>IMU internal temperature, signed, resolution 0.01 degrees.</td><td></td></tr><tr><td>10</td><td>ODR</td><td>42</td><td>1</td><td>Data Output Frequency</td><td>0:25Hz1:50Hz2:100Hz3:200Hz4:1000Hz</td></tr><tr><td>11</td><td>AccelFsr</td><td>43</td><td>1</td><td>Range of the Accelerometer</td><td>0: +/- 2g1: +/- 4g2: +/- 8g3: +/- 16g</td></tr><tr><td>12</td><td>GyroFsr</td><td>44</td><td>1</td><td>Range of the Gyroscope</td><td>0: +/- 250 dps1: +/- 500 dps2: +/- 1000 dps3: +/- 2000 dps</td></tr><tr><td>13</td><td>Package Counter</td><td>45</td><td>4</td><td>The value is u32, starting with 1</td><td></td></tr><tr><td>14</td><td>Frame Tail</td><td>49</td><td>2</td><td>0xF0 0x0F</td><td></td></tr></table>

## 5 Product Maintenance
### 5.1 Transportation and Logistics
! Important: 

Improper transportation can cause product damage! 

1) The product should be packaged with shockproof and moisture-proof materials to avoid damage during transportation. It is recommended to use the original packaging; 

2) Handle with care during transportation to avoid impact or dropping; 

3) When receiving the goods, carefully check the delivery list for any damages (including the product and packaging); 

4) If there is any transportation damage, refuse to accept the delivery and contact RoboSense promptly. 

### 5.2 Storage
! Important: 

Improper storage may cause product damage! 

1) Store the product in an indoor environment with normal temperature and dry conditions; 

2) Handle the product gently to avoid impact or dropping; 

3) The product should be stored in a safe environment to avoid corrosion, mechanical impact, or exposure to environments exceeding the protection level; 

4) Regularly inspect the condition of all components and packaging, and it is recommended to check every three months. 

### 5.3 Product Cleaning
To ensure accurate perception of the surrounding environment, keep the RS-

LiDAR's circular protective cover clean. 

#### 5.3.1 Precautions
Before cleaning the RS-LiDAR, carefully read and understand the content of this section. Improper cleaning may damage the product. 

When using the LiDAR in harsh environmental conditions, clean the surface regularly to keep the LiDAR clean. Otherwise, it may affect the normal operation of the LiDAR. 

#### 5.3.2 Required Materials
1) Clean and dust-free cloth; 

2) Neutral solution at moderate temperature (such as soapy water, distilled water, 99% concentration of ethanol, etc.). 

#### 5.3.3 Cleaning Method
1) If the LiDAR surface is only covered with some dust: 

a) Use a clean and dust-free cloth, dip it in a small amount of neutral solution; 

b) Gently wipe the LiDAR surface; 

c) Dry it with a clean and dry dust-free cloth. 

2) If the LiDAR surface is covered with mud or other solid foreign objects: 

a) First, spray clean water on the dirty part of the LiDAR surface to remove the mud or foreign objects (Note: Do not directly wipe off the mud with a dust-free cloth, as it may scratch the surface, especially the protective cover); 

b) Then spray warm soapy water on the dirty part. The lubricating effect of the soapy water helps to remove the foreign objects. Gently wipe the LiDAR surface with a fiber cloth, but be careful not to scratch the surface; 

c) Finally, rinse off the residual soap on the LiDAR surface with clean water (if there is still residue, clean it again with 99% ethanol) and dry it with a clean and dry dust-free cloth. 

## 6 Fault Diagnosis
This chapter lists some common problems encountered during the use of the product and their corresponding troubleshooting methods. For details, refer to Table 14. 


Table 14 Common Fault Troubleshooting Methods


<table><tr><td>Fault Phenomenon</td><td>Solution</td></tr><tr><td>The Product Motor Does Not Rotate</td><td>Check whether the connector cable on the aviation plug power/product side is loose or if the wiring harness is damaged.</td></tr><tr><td>The Product Keeps Restarting During Startup</td><td>Check the input power connection and polarity;Check if the voltage and current of the input power meet the requirements (when 12V voltage is applied, the input current should be ≥2A);Check if the installation plane of the product is level or if the screws on the bottom of the LiDAR are tightened too tightly.</td></tr><tr><td>The Product Internally Rotates, But There Is No Data</td><td>Check if the LiDAR emits light normally;Check if the network connection is normal;Confirm if the computer-side network configuration is correct;Use other software (such as Wireshark) to check if the data is received;Disable the firewall and other security software that may block the network;Check if the power supply is normal;Try restarting the product.</td></tr><tr><td>Wireshark Can Receive Data, But RSView Does Not Display Point Cloud</td><td>Close the computer&#x27;s firewall and run RSView through the firewall;Confirm that the computer&#x27;s IP configuration matches the destination address set in the product;Confirm that the Sensor Network Configuration in RSView is set correctly;Confirm that the installation directory or configuration file storage directory of RSView does not contain any Chinese characters;Confirm that the data packets received by Wireshark are of the MSOP type.</td></tr></table>


Table 14 (Continuation)


<table><tr><td>Fault Phenomenon</td><td>Solution</td></tr><tr><td>The Product Has Frequent Data Loss</td><td>Confirm if there is a large number of other network packets or network conflicts in the network;Confirm if there are other network products sending a large amount of data in broadcast mode, causing sensor data blocking;Confirm if the computer&#x27;s performance and interface performance meet the requirements;Remove all other network products and directly connect to the computer to confirm if data loss occurs.</td></tr><tr><td>Unable to Synchronize GPS/PTP/gPTP Time</td><td>Confirm if the synchronization mode has been switched to the correct mode on the web page;Under the GPS time synchronization mode:Confirm if the GPS module&#x27;s baud rate is 9600 bps, 8 data bits, no parity bit, and 1 stop bit;Confirm if the GPS module outputs 3.3V TTL or RS232 level;Confirm if the 1PPS pulse is continuous and the wiring is correct;Confirm if the NMEA message format of GPRMC is correct;Confirm if the GPS module and interface box share the same ground;Confirm if the GPS module receives a valid fix;Confirm if the GPS module is validly positioned (outdoors);Under the PTP / gPTP time synchronization mode:Confirm if the PTP / gPTP Master synchronization protocol complies with the current PTP / gPTP protocol;Confirm if the PTP / gPTP Master is working properly.</td></tr><tr><td>No Data Output After Passing Through The Router</td><td>Close the DHCP function of the router or set the IP address of the sensor to the correct IP address internally in the router.</td></tr><tr><td>ROS Driver Displays A Fixed Blank Area Rotating When Showing Point Cloud</td><td>This phenomenon is normal. It occurs because the ROS driver splits the data into fixed packages for frame display. The blank part of the data will be displayed in the next frame.</td></tr><tr><td>RSView Software Outputs Point Clouds As A Single Ray</td><td>For Windows 10 systems, set RSView to run in Windows 7 compatibility mode to resolve the issue.</td></tr></table>


Note: 


If the above troubleshooting steps fail to resolve the issue, please contact RoboSense for further assistance. 


## 7 After-sales Service
If the solutions provided in Chapter 6 of the troubleshooting guide do not solve the problem, please promptly contact RoboSense. 

Official Website: https://www.robosense.cn/en/contact 

Email: support@robosense.cn 

Phone: +86-0755-86325830 / +86-15338772453 

Note: 

1) Please wait for a confirmation response from RoboSense after-sales service before sending the product back; 

2) When sending the product back, please use the original packaging or an equivalent cushioned and moisture-resistant packaging. 

## Appendix A Web UI Operation
### A.1 Product Information
The Lidar Web UI defaults to the product information page, as shown in Figure 14 : 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/0f19bfd1adb14da5fb14bb6c78324c555f5734fbc89bce4ae1c30e7691ac978d.jpg)


robosense 

Device 

Setting 

Diagnostic 

System 

<table><tr><td>Top Board Firmware Version:</td><td>10040F12</td></tr><tr><td>Bottom Board Firmware Version:</td><td>10030600</td></tr><tr><td>Software Version:</td><td>25042812</td></tr><tr><td>Motor Version:</td><td>25021414</td></tr><tr><td>Config Version:</td><td>F0000F06</td></tr><tr><td>S/N:</td><td>1109BE0B0020</td></tr><tr><td>Mac Address:</td><td>40:2C:76:08:4A:CC</td></tr><tr><td>Model:</td><td>Airy</td></tr></table>


Figure 14 Web Page Information


1) Top Board Firmware Version indicates the mainboard firmware version; 

2) Bottom Board Firmware Version indicates the baseboard firmware version; 

3) Software Version indicates the version of software; 

4) Motor Firmware Version indicates the motor version; 

5) S/N indicates the serial number of the product; 

6) Mac Address Indicates address of the Mac; 

7) Model is the product name. 

### A.2 Product Parameter Setting
#### A.2.1 General Setting
The "General Setting" bar at the end of the web page is the basic parameter setting page of LiDAR, where you can change the Settings of Device IP, port number, echo mode, speed and Angle trigger. The schematic diagram and function description are shown in Figure 15 : 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/71d2cf2037b74d2ac32d87268e85e6adfb471ea0342bc7c0fbf62361afa73441.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/b6a66d0c53d4c9ccb77230c4ec8a92129943b4e2fdeee705e710ec1f3942fd54.jpg)


Figure 15 Web Side Lidar Setting Information


1) Supports unicast (default)/broadcast mode. Set the Destination IP to 255.255.255.255 for broadcast mode, with the factory default being 192.168.1.102; 

2) The data port of MSOP and DIFOP can be changed. The value ranges from 1025 to 65535; 

3) The web can select the Strongest return(default)/Last return/first return modes from the Return Mode drop-down list; 

4) The web can select GPS, PTP-E2E, PTP-P2P, PTP-GPTP, and PTP-E2E L2 from the “Time Synchronization Source” drop-down list to determine the time synchronization mode; 

5) The time synchronization domain of PTP can be changed. The value ranges from 0 to 127; 

6) Drop down “Respond To PeerDelayRequest” to select OFF (default) and ON to determine whether the LiDAR acts as the slave to respond to peer delay request requests from other nodes; 

7) Drop down "No Leap Second" to select OFF (default) and ON to determine whether to respond to the leap second deviation setting of the announce packet; 

8) Change the timeout period (5s by default) for the device to exit the time 


synchronization state due to the loss of the time master message. The value ranges from 1 to 255 seconds; 


9) Change the offset threshold (default: 1ms) of the device that switches from the non-synchronous state to the synchronous state. The value ranges from 1 to 255 ms.; 


10) Change the offset threshold (default: 20ms) between the master and the device that switches from the synchronous state to the non-synchronous state. The value ranges from 1 to 255 ms; 


11) Drop down "Operation Mode" to select two working modes: Standby/High Performance (default). When the Standby mode is selected, the lidar motor and transmitter stop working; 


12) The Phase lock Angle of the device can be changed. The value ranges from 0 to 360 Degree; 


13) Drop down "GPS Baud Rate" to select GPS Baud rate, which can be 9600 (default), 14400, 19200, 38400, 43200, 57600, 76800, and 115200; 


14) Drop down “Imu Ctrl” to select OFF and ON (default) to determine whether to enable the control interface for the IMU function; 


15) Change the communication port of the IMU. The value ranges from 1025 to 65535; 


16) Drop down “Imu Output” Rate and select 25Hz/50Hz/100Hz/200Hz (default) to change the IMU output data update frequency; 


17) Drop down "Accel Range" and select [-2g,2g]/[-4g,4g] (default) /[-8g,8g]/[-16g,16g] to change the maximum acceleration range of the IMU accelerometer; 


18) Drop down "Gyro Range" and select [-250,250]dps/[-500,500]dps (default) /[-1000,1000]dps/[-2000,2000]dps to change the range of the IMU gyroscope; 


19) To confirm whether the "Restore Default" function is enabled, select OFF and ON from the Restore Default drop-down list. 


#### A.2.2 Performance Setting
The "Performance Setting" bar at the end of the web page is the LiDAR advanced parameter setting page, where the LiDAR reflectivity performance, drag point and rain and fog filtering and other advanced functions can be set. The schematic diagram and function description are shown in Figure 16 : 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/e56c368baeabc784108d6b80bde5deb5063a2fa69e6d18a376fc4ce13584b9d9.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/29fbe9ffc6e2dc534a633f1b5118afcd7f214e600b9d95ee68b26bed866bfbc5.jpg)


Figure 16 Advanced Function Setting


1) Drop down "Reflectivity Enhancement" to select OFF (default) and ON to determine whether the reflectivity enhancement function is enabled; 

2) Drop down "Trail Filter Level" and select 1/2/3/4 (default)/5 to confirm the trailing filter level; 

3) Drop down "Rain/Blockage Detection Distance" and select 30cm (default) /20cm/10cm to confirm the rain/blockage detection distance; 

4) Drop down "Blockage Detection Sensitivity" and select high (default)/medium/low to control the sensitivity of Lidar to occlusion; 

5) The Frame Start Angle(Start Angle of the gap) of the device can be changed. The value ranges from 0 to 360 Degree; 

6) Drop down “Dead Zone 10cm Enable” and select On(default)/Off to choose whether to enable the point cloud information within the blind zone; 

7) Drop down “Channel 81 85 89 93” and select On/Off (default) to select whether to enable channels 81, 85, 89 and 93; 

8) Drop down “Gap Filling Enable” and select On/Off(default) to select whether to perform information filling for the point cloud vouds for 32 degree every ten frames. 

#### A.2.3 Angle Pulse Setting
The column "Angle Pulse Setting" on the webpage is the setting page of LiDAR Angle pulse trigger, where the LiDAR Angle trigger signal can be set. The schematic diagram and function description are shown in Figure 17 : 

<table><tr><td>Group</td><td>Pulse Trigger Switch</td><td>Pulse Start Angle</td><td>Pulse Width</td><td>Pulse Step</td></tr><tr><td>First Group:</td><td>ON</td><td>0.0 DEG</td><td>0 ns</td><td>0.0 DEG</td></tr><tr><td colspan="5">Save</td></tr></table>


Figure 17 Angle Pulse Setting


1) Trigger Mode: There are two starting Angle modes. Mode 1 increases the starting pulse width by $25\%$ (default), and mode 2 does not increase the starting pulse width; 

2) Group: This column indicates the SYNC OUT group. Airy includes SYNC OUT1; 

3) Pulse Trigger Switch: Enable or disable the Trigger function. When ON is selected for Pulse Trigger Switch, the editable state is enabled, and the editable state is gray when the Pulse trigger switch is disabled; 

4) Pulse Start Angle: The corresponding start Angle can be set. The input value must be an integer; 

5) Pulse Width: The corresponding pulse width can be set; 

6) Pulse Step: The step can be set. The input value must be a floating point number with one decimal place reserved. 

Note: 

1) The IP address of the Device and Destination IP address must be on the same network segment; otherwise, the connection may fail; 

2) The MSOP and DIFOP values range from 1025 to 65535, and the MSOP port and DIFOP port cannot be the same port; 

3) After the change is complete, click "Save" to save it. If a 'successful' message is displayed, the setting takes effect. 

### A.3 Product Diagnostics/Operational Status
On this page, the operating status of LiDAR can be viewed in real time, including voltage, current, real-time speed, running time, temperature and other information, as shown in Figure 18 : 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/270aa2b4cd83361701d6d578c7b5d35f4df8c356c45bf597d60abd39d54681f2.jpg)


Figure 18 Web Running Status or Fault Diagnosis


1) View Machine Temperature to obtain the current product operating temperature; 

2) View the RPM to obtain the current real-time rotational speed information; 

3) View the Phase to obtain the current rotation phase of the product; 

4) Laser Status has two states: "On" (default) and "Off". When the user sets the Standby mode, "Off" is used; 

5) View the Time Sync Mode to obtain the time synchronization mode of the LIDAR; 

6) View Time Sync Data to obtain time synchronization data of LiDAR; 

7) View PPP Status to obtain the PPS status; 

8) View GPRMC Status to obtain GPRMC status; 

9) View Time Sync Status to obtain the current time synchronization status. Lock indicates that the time is locked successfully, Unlock indicates that the time is not synchronized successfully; 

10) View Startup Times to obtain the total startup times of the current product, which is added up once after each power off and restart; 

11) View Elapsed time to obtain the total running time and the accumulated working time of the product under each temperature. 

**Note:** Note:
1) The refresh rate of this page is 5 second; 

2) If the voltage/current box turns red, check whether the product is in Standby mode. If not, check whether the product works properly. 

### A.4 Product Firmware Upgrade
Click on the webpage "System", this page can upgrade the firmware of the product App, baseboard and mainboard, as follows: 

1) Please contact RoboSense to get the firmware upgrade. When the firmware to be upgraded is ready, click "Select File", as shown in Figure 19; 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/02cb551d26be0099fe003ac512bd7c08c17d6843dae366314e8e7766b1e568d3.jpg)


Figure 19 Step1 Click Select File


2) Select the folder corresponding to the firmware to be upgraded, select the firmware to be upgraded, and click "Open" (no Chinese characters appear in the path), as shown in Figure 20; 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/54f02755c4bd75e64c1f1fc7c551c0c58e1372375d4e5f8221e624feb17773f2.jpg)


Figure 20 Select the File in the Path where the Upgrade Package is Stored


3) At this time, the file name of the firmware to be upgraded will be displayed on the web interface. Select the corresponding upgrade button to upgrade the corresponding firmware, as shown in Figure 21. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/73b048fdbc4bf289df3f65da2debda383ae5401ad0cfe6397a2e727916ea2c7b.jpg)


robosense


Device Setting Diagnostic 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/7c8c0cc38fe10484be63335455c253eb112af1e324b983cb52dbba7f1ed82d21.jpg)


#### Firmware Update
![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/d519854ee0577dfe05f6ba931e4afc910ff8d37ba2a0bdcb2dfb17704aae6d59.jpg)


#### JSON Configuration Upload
选择文件 未选择任何文件

Upload JSON 

Figure 21 The Page is Displayed after the Upgrade File is Selected 

Note: 

1) The format of the upgrade package is Zip. The upgrade interface of the web only supports uploading Zip format file packages; 

2) The upgrade package name must meet the following requirements. Otherwise, an error message may be displayed; 

3) Main board upgrade file: sequence logic must be suffix ".bin"; 

4) Base board upgrade file: sequence logic necessary suffix ".bit"; 

5) Web App upgrade file: sequence logic necessary suffix ".hs_fs. 

## Appendix B ROS&ROS2 Package
rslidar_sdk is the driver SDK for ROS platform. Please download it from RoboSense homepage on github or contact RoboSense to obtain it. 

1) rslidar_sdk relies on rs_driver, which is the basic driver of RoboSense. Download rs_driver from github; 

2) If ROS2 is used, rslidar_sdk also relies on rslidar_msg, which is the msg definition file, which can be downloaded from github; 

3) The driver SDK download package contains rich usage guidelines. Please read the README file and doc folder in the file before using the driver SDK. 

Note: 

1) SDK address: https://github.com/RoboSense-LiDAR/rsLiDAR_sdk 

2) rs_driver address: https://github.com/RoboSense-LiDAR/rs_driver 

3) msg address: https://github.com/RoboSense-LiDAR/rslidar_msg 

## Appendix C DIFOP Data Definitions
This appendix supplements the definitions of each item in the DIFOP protocol outlined in Section 4.4.3, facilitating user understanding for product use and development. For calculations, big-endian mode is used, and "Value" represents the decimal number derived from the corresponding offset bytes. 

### C.1 Motor Speed (MOT_SPD)

Table 15 Motor Speed Settings


<table><tr><td colspan="3">Motor Speed Settings (2 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun</td><td colspan="2">MOT_SPD</td></tr></table>

i Register Description: 

1) This register is used to read the motor speed setting value; 

2) For example, if the set value is 600 RPM, read byte 1 = 0x02 and byte 2 = 0x58, Value = 600. 

### C.2 Ethernet (ETH)

Table 16 Ethernet


<table><tr><td colspan="9">Register of Ethernet (22 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td></tr><tr><td>Fun.</td><td colspan="4">LIDAR_IP</td><td colspan="4">DEST_PC_IP</td></tr><tr><td>No.</td><td>byte 9</td><td>byte 10</td><td>byte 11</td><td>byte 12</td><td>byte 13</td><td>byte 14</td><td>byte 15</td><td>byte 16</td></tr><tr><td>Fun.</td><td colspan="6">MAC_ADDR</td><td colspan="2">MSOP</td></tr><tr><td>No.</td><td>byte 17</td><td>byte 18</td><td>byte 19</td><td>byte 20</td><td>byte 21</td><td>byte 22</td><td>byte 23</td><td>Byte 24</td></tr><tr><td>Fun.</td><td colspan="2">Reserved</td><td colspan="2">DIFOP</td><td colspan="4">Reserved</td></tr><tr><td>No.</td><td>byte 25</td><td>byte 26</td><td>byte 27</td><td>byte 28</td><td>byte 29</td><td>byte 30</td><td>\</td><td>\</td></tr><tr><td>Fun.</td><td colspan="6">Reserved</td><td colspan="2">\</td></tr></table>


i Register Description: 


1) LIDAR_IP is the source IP address of the LiDAR, occupying 4 bytes; 


2) DEST_PC_IP is the destination PC's IP address, occupying 4 bytes; 


3) MAC_ADDR is the MAC address of the LiDAR; 


4) MSOP and DIFOP each occupy 2 bytes, and the source and destination port numbers are required to be identical. 


### C.3 Mainboard Firmware Version (TOP_FRM)

Table 17 Mainboard Firmware Version


<table><tr><td colspan="6">Mainboard Firmware Version (5 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>Fun.</td><td colspan="5">TOP_FRM</td></tr></table>

i Register Description: 

1) This register is used to read the mainboard firmware version number; 

2) For example, if byte 1 = 0x00, byte 2 = 0x10, byte 3 = 0x04, byte 4 = 0x0c, and byte 5 = 0x00, then the firmware version number is: 00 10 04 0c 00. 

### C.4 Baseboard Firmware Version (BOT_FRM)

Table 18 Baseboard Firmware Version


<table><tr><td colspan="6">Baseboard Firmware Version (5 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>Fun.</td><td colspan="5">BOT_FRM</td></tr></table>

i Register Description: 

1) This register is used to read the baseboard firmware version number; 

2) For example, if byte 1 = 0x00, byte 2 = 0x24, byte 3 = 0x12, byte 4 = 0x13, and byte 5 = 0x12, then the firmware version number is: 00 24 12 13 12. 

### C.5 APP Firmware Version (SOF_FRM)

Table 19 APP Firmware Version


<table><tr><td colspan="6">APP Firmware Version (5 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr><tr><td>Fun.</td><td colspan="5">SOF_FRM</td></tr></table>

i Register Description: 

1) This register is used to read the APP firmware version number; 

2) For example, if byte 1 = 0x00, byte 2 = 0x24, byte 3 = 0x12, byte 4 = 0x13, and byte 5 = 0x12, then the firmware version number is: 00 24 12 13 12. 

### C.6 Motor Firmware Version (MOT_FRM)

Table 20 Motor Firmware Version


<table><tr><td colspan="6">Motor Firmware Version (5 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td></tr></table>

<table><tr><td>Fun.</td><td>MOT_FRM</td></tr></table>

i Register Description: 

1) This register is used to read the motor firmware version number; 

2) For example, if byte 1 = 0x00, byte 2 = 0x24, byte 3 = 0x12, byte 4 = 0x12, and byte 5 = 0x25, then the firmware version number is: 00 24 12 12 25. 

### C.7 Product Serial Number (SN)

Table 21 Product Serial Number


<table><tr><td colspan="7">SN (6 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td></tr><tr><td>Fun.</td><td colspan="6">SN</td></tr></table>

i Register Description: 

1) This register is used for the device serial number; 

2) Similar to a MAC address, it consists of 6 bytes, representing the product serial number in hexadecimal. 

### C.8 Time Sync Mode Setting (TIME_SYNC_INFO)

Table 22 Time Sync Information


<table><tr><td colspan="3">Time Sync Information (2 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td>Time_Sync_Mode</td><td>Time_Sync_State</td></tr></table>

i Register Description: 

1) This register is used to read time synchronization information; 

2) Byte 1 is the time synchronization mode status bit, defined as follows: 0x00: GPS; 0x01: E2E-L4; 0x02: P2P; 0x03: gPTP; 0x04: E2E-L2; 

3) Byte 2 is the time synchronization success status bit, defined as follows: 0x00: Not synchronized; 0x01: Synchronized successfully. 

### C.9 Time (UTC_TIME)

Table 23 Register of Time


<table><tr><td colspan="11">Register of Time (10 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td><td>byte 9</td><td>byte10</td></tr><tr><td>Fun.</td><td colspan="6">sec</td><td colspan="4">us</td></tr></table>

i Register Description: 

1) This register is used to read time information; 

2) The range of the microsecond (us) value: 0 ~ 999,999. 

### C.10 Real-time Motor Speed (REALTIME_ROTATION_SPEED)

Table 24 Real-time Motor Speed


<table><tr><td colspan="3">Real-time Motor Speed (2bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td colspan="2">REALTIME_ROTATION_SPEED</td></tr></table>

i Register Description: 

1) This register is used to read the real-time speed information of the motor; 

2) The value is 2 bytes in hexadecimal format; 

3) For example, byte1=0x01, byte2=0x28, the actual motor speed converted to decimal is 600. 

### C.11 Vertical Angle Calibration (COR_VERT_ANG)

Table 25 Vertical Angle Calibration Register


<table><tr><td colspan="10">Vertical Angle Calibration Register (288bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td><td>byte 9</td></tr><tr><td>Fun.</td><td colspan="3">Channel 1 Vertical Angle</td><td colspan="3">Channel 2 Vertical Angle</td><td colspan="3">Channel 3 Vertical Angle</td></tr><tr><td>No.</td><td>byte 10</td><td>byte 11</td><td>byte 12</td><td>byte 13</td><td>byte 14</td><td>byte 15</td><td>byte 16</td><td>byte 17</td><td>byte 18</td></tr><tr><td>Fun.</td><td colspan="3">Channel 4 Vertical Angle</td><td colspan="3">Channel 5 Vertical Angle</td><td colspan="3">Channel 6 Vertical Angle</td></tr><tr><td>No.</td><td>byte 19</td><td>byte 20</td><td>byte 21</td><td>byte 22</td><td>byte 23</td><td>byte 24</td><td>byte 25</td><td>byte 26</td><td>byte 27</td></tr><tr><td>Fun.</td><td colspan="3">Channel 7 Vertical Angle</td><td colspan="3">Channel 8 Vertical Angle</td><td colspan="3">Channel 9 Vertical Angle</td></tr><tr><td>No.</td><td>byte 28</td><td>byte 29</td><td>byte 30</td><td>byte 31</td><td>byte 32</td><td>byte 33</td><td>byte 34</td><td>byte 35</td><td>byte 36</td></tr><tr><td>Fun.</td><td colspan="3">Channel 10 Vertical Angle</td><td colspan="3">Channel 11 Vertical Angle</td><td colspan="3">Channel 12 Vertical Angle</td></tr><tr><td>No.</td><td>byte 37</td><td>byte 38</td><td>byte 39</td><td>byte 40</td><td>byte 41</td><td>byte 42</td><td>byte 43</td><td>byte 44</td><td>byte 45</td></tr><tr><td>Fun.</td><td colspan="3">Channel 13 Vertical Angle</td><td colspan="3">Channel 14 Vertical Angle</td><td colspan="3">Channel 15 Vertical Angle</td></tr><tr><td>No.</td><td>byte 46</td><td>byte 47</td><td>byte 48</td><td>byte 49</td><td>byte 50</td><td>byte 51</td><td>byte 52</td><td>byte 53</td><td>byte 54</td></tr><tr><td>Fun.</td><td colspan="3">Channel 16 Vertical Angle</td><td colspan="3">Channel 17 Vertical Angle</td><td colspan="3">Channel 18 Vertical Angle</td></tr><tr><td>No.</td><td>byte 55</td><td>byte 56</td><td>byte 57</td><td>byte 58</td><td>byte 59</td><td>byte 60</td><td>byte 61</td><td>byte 62</td><td>byte 63</td></tr><tr><td>Fun.</td><td colspan="3">Channel 19 Vertical Angle</td><td colspan="3">Channel 20 Vertical Angle</td><td colspan="3">Channel 21 Vertical Angle</td></tr><tr><td>No.</td><td colspan="3">...</td><td colspan="3">...</td><td colspan="3">...</td></tr><tr><td>Fun.</td><td colspan="9">...</td></tr><tr><td>No.</td><td>byte 262</td><td>byte 263</td><td>byte 264</td><td>byte265</td><td>byte 266</td><td>byte 267</td><td>byte 268</td><td>byte 269</td><td>byte 270</td></tr><tr><td>Fun.</td><td colspan="3">Channel 88 Vertical Angle</td><td colspan="3">Channel 89 Vertical Angle</td><td colspan="3">Channel 90 Vertical Angle</td></tr><tr><td>No.</td><td>byte 271</td><td>byte 272</td><td>byte 273</td><td>byte 274</td><td>byte 275</td><td>byte 276</td><td>byte 277</td><td>byte 278</td><td>byte 279</td></tr><tr><td>Fun.</td><td colspan="3">Channel 91 Vertical Angle</td><td colspan="3">Channel 92 Vertical Angle</td><td colspan="3">Channel 93 Vertical Angle</td></tr><tr><td>No.</td><td>byte 280</td><td>byte 281</td><td>byte 282</td><td>byte 283</td><td>byte 284</td><td>byte 285</td><td>byte 286</td><td>byte 287</td><td>byte 288</td></tr><tr><td>Fun.</td><td colspan="3">Channel 94 Vertical Angle</td><td colspan="3">Channel 95 Vertical Angle</td><td colspan="3">Channel 96 Vertical Angle</td></tr></table>

i Register Description: 

1) The Angle value is divided into positive and negative, and the vertical Angle of each channel is composed of 3 bytes, where the first byte represents positive and negative, and the second and third byte jointly constitute the Angle value; 

2) If the first byte attribute is 0x00, the vertical Angle of the channel is positive; if the attribute is 0x01, the vertical Angle of the channel is negative; 

3) The angular resolution is $0.01^{\circ}$ ; 

4) For example, the value of the channel 5 register is byte 1=0x00, which is positive. byte 2=0x01 and byte 3=0x71 are converted to decimal 369. The vertical Angle of channel 5 is 3.69°. 

### C.12 Horizontal Angle Calibration (COR_HOR_ANG)

Table 26 Horizontal Angle Calibration Register


<table><tr><td colspan="10">Horizontal Angle Calibration Register (288bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td><td>byte 9</td></tr><tr><td>Fun.</td><td colspan="3">Channel 1 Horizontal Angle</td><td colspan="3">Channel 2 Horizontal Angle</td><td colspan="3">Channel 3 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 10</td><td>byte 11</td><td>byte 12</td><td>byte 13</td><td>byte 14</td><td>byte 15</td><td>byte 16</td><td>byte 17</td><td>byte 18</td></tr><tr><td>Fun.</td><td colspan="3">Channel 4 Horizontal Angle</td><td colspan="3">Channel 5 Horizontal Angle</td><td colspan="3">Channel 6 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 19</td><td>byte 20</td><td>byte 21</td><td>byte 22</td><td>byte 23</td><td>byte 24</td><td>byte 25</td><td>byte 26</td><td>byte 27</td></tr><tr><td>Fun.</td><td colspan="3">Channel 7 Horizontal Angle</td><td colspan="3">Channel 8 Horizontal Angle</td><td colspan="3">Channel 9 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 28</td><td>byte 29</td><td>byte 30</td><td>byte 31</td><td>byte 32</td><td>byte 33</td><td>byte 34</td><td>byte 35</td><td>byte 36</td></tr><tr><td>Fun.</td><td colspan="3">Channel 10 Horizontal Angle</td><td colspan="3">Channel 11 Horizontal Angle</td><td colspan="3">Channel 12 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 37</td><td>byte 38</td><td>byte 39</td><td>byte 40</td><td>byte 41</td><td>byte 42</td><td>byte 43</td><td>byte 44</td><td>byte 45</td></tr><tr><td>Fun.</td><td colspan="3">Channel 13 Horizontal Angle</td><td colspan="3">Channel 14 Horizontal Angle</td><td colspan="3">Channel 15 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 46</td><td>byte 47</td><td>byte 48</td><td>byte 49</td><td>byte 50</td><td>byte 51</td><td>byte 52</td><td>byte 53</td><td>byte 54</td></tr><tr><td>Fun.</td><td colspan="3">Channel 16 Horizontal Angle</td><td colspan="3">Channel 17 Horizontal Angle</td><td colspan="3">Channel 18 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 55</td><td>byte 56</td><td>byte 57</td><td>byte 58</td><td>byte 59</td><td>byte 60</td><td>byte 61</td><td>byte 62</td><td>byte 63</td></tr><tr><td>Fun.</td><td colspan="3">Channel 19 Horizontal Angle</td><td colspan="3">Channel 20 Horizontal Angle</td><td colspan="3">Channel 21 Horizontal Angle</td></tr><tr><td>No.</td><td colspan="3">...</td><td colspan="3">...</td><td colspan="3">...</td></tr><tr><td>Fun.</td><td colspan="9">...</td></tr><tr><td>No.</td><td>byte 262</td><td>byte 263</td><td>byte 264</td><td>byte 265</td><td>byte 266</td><td>byte 267</td><td>byte 268</td><td>byte 269</td><td>byte 270</td></tr><tr><td>Fun.</td><td colspan="3">Channel 88 Horizontal Angle</td><td colspan="3">Channel 89 Horizontal Angle</td><td colspan="3">Channel 90 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 271</td><td>byte 272</td><td>byte 273</td><td>byte 274</td><td>byte 275</td><td>byte 276</td><td>byte 277</td><td>byte 278</td><td>byte 279</td></tr><tr><td>Fun.</td><td colspan="3">Channel 91 Horizontal Angle</td><td colspan="3">Channel 92 Horizontal Angle</td><td colspan="3">Channel 93 Horizontal Angle</td></tr><tr><td>No.</td><td>byte 280</td><td>byte 281</td><td>byte 282</td><td>byte 283</td><td>byte 284</td><td>byte 285</td><td>byte 286</td><td>byte 287</td><td>byte 288</td></tr><tr><td>Fun.</td><td colspan="3">Channel 94 Horizontal Angle</td><td colspan="3">Channel 95 Horizontal Angle</td><td colspan="3">Channel 96 Horizontal Angle</td></tr></table>

i Register Description: 

1) The Angle value is divided into positive and negative, and the horizontal offset Angle of each channel is composed of 3 bytes, where the first byte represents positive and negative, and the second and third byte jointly constitute the Angle value; 

2) If the first byte attribute is 0x00, the channel horizontal offset Angle is positive, and if the attribute is 0x01, the channel horizontal offset Angle is negative; 

3) The angular resolution is $0.01^{\circ}$ ; 

4) For example, the value of the channel 5 register is byte 1=0x01, which is negative. byte 2=0x00 and byte 3=0xae are converted to decimal 174. The horizontal offset Angle of channel 5 is -1.74°. 

### C.13 Mainboard Input Voltage (MAINBOARD_VOLTAGE)

Table 27 Mainboard Input Voltage


<table><tr><td colspan="3">Mainboard Input Voltage(2bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td colspan="2">Mainboard Voltage</td></tr></table>

i Register Description: 

1) This register is used to read the mainboard input voltage of the device; 

2) Unit: V. The voltage value consists of 2 bytes. The calculation formula is: Mainboard Voltage = Value / 100. 

### C.14 Device Input Voltage (MACHINE_VOLTAGE)

Table 28 Device Input Voltage


<table><tr><td colspan="3">Device Input Voltage(2bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td colspan="2">Machine Voltage</td></tr></table>

i Register Description: 

1) This register is used to read the overall input voltage of the device; 

2) Unit: V. The voltage value consists of 2 bytes. Formula: the Machine Voltage = Value / 100. 

### C.15 Baseboard 12V Voltage (BASEBOARD_VOLTAGE
(12V) 


Table 29 Baseboard 12V Voltage


<table><tr><td colspan="3">Baseboard 12V Voltage(2bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td colspan="2">Baseboard Voltage(12V)</td></tr></table>

i Register Description: 

1) This register is used to read the device's backplane 12V voltage; 

2) Unit: V. The voltage value consists of 2 bytes. Formula: Bottomboard Voltage (12 V) = Value / 100. 

### C.16 Mainboard Emission Temperature (MAINBOARD_EMIT_TEMP)

Table 30 Mainboard Emit Temperature


<table><tr><td colspan="3">Mainboard Emit Temperature(2 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td></tr><tr><td>Fun.</td><td colspan="2">Mainboard Emit Temp</td></tr></table>

i Register Description: 

1) This register is used to read the mainboard emission temperature of the device; 

2) Unit: °C. The voltage value consists of 2 bytes. Formula: Mainboard Emit Temp = Value / 100. 

### C.17 IMU Calibration Data (IMU_CALIB_DATA)

Table 31 IMU Data


<table><tr><td colspan="9">IMU Calibration Data (28 bytes)</td></tr><tr><td>No.</td><td>byte 1</td><td>byte 2</td><td>byte 3</td><td>byte 4</td><td>byte 5</td><td>byte 6</td><td>byte 7</td><td>byte 8</td></tr><tr><td>Fun.</td><td colspan="4">q_x</td><td colspan="4">q_y</td></tr><tr><td>No.</td><td>byte 9</td><td>byte 10</td><td>byte11</td><td>byte 12</td><td>byte 13</td><td>byte 14</td><td>byte 15</td><td>byte 16</td></tr><tr><td>Fun.</td><td colspan="4">q_z</td><td colspan="4">q_w</td></tr><tr><td>No.</td><td>byte 17</td><td>byte 18</td><td>byte19</td><td>byte 20</td><td>byte 21</td><td>byte 22</td><td>byte 23</td><td>byte 24</td></tr><tr><td>Fun.</td><td colspan="4">x</td><td colspan="4">y</td></tr><tr><td>No.</td><td>byte 25</td><td>byte 26</td><td>byte27</td><td>byte 28</td><td></td><td></td><td></td><td></td></tr><tr><td>Fun.</td><td colspan="4">z</td><td colspan="4"></td></tr></table>

i Register Description: 

1) The register is used to read the calibration data of the IMU relative to the LiDAR coordinate system; 

2) This calibration data includes pose estimation and position offset, and the data type is 32-bit float (conforming to the IEEE 754 standard); 

3) For example, the current bytes of x (byte 17~byte20) are 3b 8b 43 96, and its calculation method is as follows: 

a) First, combine the four bytes into 32 binary numbers, that is, 00111011 10001011 01000011 10010110; 

b) Separate the sign bit, the exponent field and the mantissa field. Among them, the sign bit is 31 bits, that is, 0, the exponent field is 23 to 30 bits, that is, 01110111, and the mantissum field is 0 to 22 bits, that is, 00010110100001110010110; 

c) Calculate the values of each domain, according to IEEE 754. Here, the sign domain is 0, indicating a positive number. The exponent domain is 01110111, which converts to 119 in decimal, and the actual exponent is 119 - 127 = -8. The mantissa domain is 00010110100001110010110. This binary number represents the fractional part, so it is first converted to a decimal fraction. This mantissa bit contains a hidden 1., so the mantissa is 1.00010110100001110010110, which converts to 1.088 in decimal; 

d) Floating-point number, using the formula Float32=(-1) $^{sign\ domain}$ *mantissa domain * $2^{exponent\ domain}$ = (-1) $^{0}$ * 1.088 * $2^{-8}$ = 0.00425. 

## Appendix D Channel Ranging Ability and Emission Offset Corresponding Table
There are 8 blocks in each MSOP package. Each block has data of 48 channels. So each MSOP package have 4 column point cloud. The ranging capabilities and emission offset of different channels of Airy are shown in Table 32. 


Table 32 Airy Ranging Capability and Emission Offset


<table><tr><td rowspan="2">Channel</td><td rowspan="2">Vertical Angle (°)</td><td>Ranging@10%</td><td rowspan="2">Emission Offset (us)</td><td rowspan="2">Farthest Ranging (m)</td><td rowspan="2">Channel</td><td rowspan="2">Vertical Angle (°)</td><td>Ranging@10%</td><td rowspan="2">Emission Offset (us)</td><td rowspan="2">Farthest Ranging (m)</td></tr><tr><td>Target Reflector (m)</td><td>Target Reflector (m)</td></tr><tr><td>1</td><td>-0.07</td><td>30</td><td>0</td><td>60</td><td>49</td><td>45.05</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>2</td><td>0.88</td><td>30</td><td>0</td><td>60</td><td>50</td><td>46</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>3</td><td>1.81</td><td>30</td><td>0</td><td>60</td><td>51</td><td>46.95</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>4</td><td>2.76</td><td>30</td><td>0</td><td>60</td><td>52</td><td>47.9</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>5</td><td>3.69</td><td>30</td><td>0</td><td>60</td><td>53</td><td>48.85</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>6</td><td>4.62</td><td>30</td><td>0</td><td>60</td><td>54</td><td>49.8</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>7</td><td>5.54</td><td>30</td><td>0</td><td>60</td><td>55</td><td>50.73</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>8</td><td>6.48</td><td>30</td><td>0</td><td>60</td><td>56</td><td>51.69</td><td>30</td><td>41.888</td><td>60</td></tr><tr><td>9</td><td>7.41</td><td>30</td><td>5.712</td><td>60</td><td>57</td><td>52.62</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>10</td><td>8.34</td><td>30</td><td>5.712</td><td>60</td><td>58</td><td>53.56</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>11</td><td>9.27</td><td>30</td><td>5.712</td><td>60</td><td>59</td><td>54.5</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>12</td><td>10.21</td><td>30</td><td>5.712</td><td>60</td><td>60</td><td>55.45</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>13</td><td>11.15</td><td>30</td><td>5.712</td><td>60</td><td>61</td><td>56.37</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>14</td><td>12.09</td><td>30</td><td>5.712</td><td>60</td><td>62</td><td>57.3</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>15</td><td>13.03</td><td>30</td><td>5.712</td><td>60</td><td>63</td><td>58.24</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>16</td><td>13.98</td><td>30</td><td>5.712</td><td>60</td><td>64</td><td>59.18</td><td>30</td><td>50.456</td><td>60</td></tr><tr><td>17</td><td>14.92</td><td>30</td><td>12.376</td><td>60</td><td>65</td><td>60.12</td><td>30</td><td>59.024</td><td>60</td></tr><tr><td>18</td><td>15.87</td><td>30</td><td>12.376</td><td>60</td><td>66</td><td>61.05</td><td>30</td><td>59.024</td><td>60</td></tr><tr><td>19</td><td>16.82</td><td>30</td><td>12.376</td><td>60</td><td>67</td><td>61.99</td><td>30</td><td>59.024</td><td>60</td></tr><tr><td>20</td><td>17.77</td><td>30</td><td>12.376</td><td>60</td><td>68</td><td>62.93</td><td>30</td><td>59.024</td><td>60</td></tr><tr><td>21</td><td>18.72</td><td>30</td><td>12.376</td><td>60</td><td>69</td><td>63.86</td><td>20</td><td>59.024</td><td>60</td></tr><tr><td>22</td><td>19.67</td><td>30</td><td>12.376</td><td>60</td><td>70</td><td>64.81</td><td>20</td><td>59.024</td><td>60</td></tr><tr><td>23</td><td>20.62</td><td>30</td><td>12.376</td><td>60</td><td>71</td><td>65.76</td><td>20</td><td>59.024</td><td>60</td></tr><tr><td>24</td><td>21.57</td><td>30</td><td>12.376</td><td>60</td><td>72</td><td>66.69</td><td>20</td><td>59.024</td><td>60</td></tr><tr><td>25</td><td>22.51</td><td>30</td><td>19.040</td><td>60</td><td>73</td><td>67.65</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>26</td><td>23.45</td><td>30</td><td>19.040</td><td>60</td><td>74</td><td>68.6</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>27</td><td>24.4</td><td>30</td><td>19.040</td><td>60</td><td>75</td><td>69.56</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>28</td><td>25.33</td><td>30</td><td>19.040</td><td>60</td><td>76</td><td>70.51</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>29</td><td>26.28</td><td>30</td><td>19.040</td><td>60</td><td>77</td><td>71.46</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>30</td><td>27.21</td><td>30</td><td>19.040</td><td>60</td><td>78</td><td>72.42</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>31</td><td>28.15</td><td>30</td><td>19.040</td><td>60</td><td>79</td><td>73.37</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>32</td><td>29.08</td><td>30</td><td>19.040</td><td>60</td><td>80</td><td>74.33</td><td>20</td><td>70.448</td><td>60</td></tr><tr><td>33</td><td>30.02</td><td>30</td><td>25.704</td><td>60</td><td>81</td><td>75.29</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>34</td><td>30.95</td><td>30</td><td>25.704</td><td>60</td><td>82</td><td>76.24</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>35</td><td>31.88</td><td>30</td><td>25.704</td><td>60</td><td>83</td><td>77.19</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>36</td><td>32.82</td><td>30</td><td>25.704</td><td>60</td><td>84</td><td>78.14</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>37</td><td>33.74</td><td>30</td><td>25.704</td><td>60</td><td>85</td><td>79.07</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>38</td><td>34.68</td><td>30</td><td>25.704</td><td>60</td><td>86</td><td>80.02</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>39</td><td>35.62</td><td>30</td><td>25.704</td><td>60</td><td>87</td><td>80.96</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>40</td><td>36.55</td><td>30</td><td>25.704</td><td>60</td><td>88</td><td>81.9</td><td>20</td><td>81.872</td><td>60</td></tr><tr><td>41</td><td>37.5</td><td>30</td><td>33.320</td><td>60</td><td>89</td><td>82.84</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>42</td><td>38.43</td><td>30</td><td>33.320</td><td>60</td><td>90</td><td>83.78</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>43</td><td>39.37</td><td>30</td><td>33.320</td><td>60</td><td>91</td><td>84.7</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>44</td><td>40.31</td><td>30</td><td>33.320</td><td>60</td><td>92</td><td>85.64</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>45</td><td>41.25</td><td>30</td><td>33.320</td><td>60</td><td>93</td><td>86.57</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>46</td><td>42.21</td><td>30</td><td>33.320</td><td>60</td><td>94</td><td>87.52</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>47</td><td>43.16</td><td>30</td><td>33.320</td><td>60</td><td>95</td><td>88.46</td><td>20</td><td>93.296</td><td>60</td></tr><tr><td>48</td><td>44.09</td><td>30</td><td>33.320</td><td>60</td><td>96</td><td>89.4</td><td>20</td><td>93.296</td><td>60</td></tr></table>


Appendix E Structural Drawings


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/1b7b22a7a48ad7c8928917a2028c166a263c79f46a20c2f17c13d35c94b42e78.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/8df1b3a9ac7f3f0b52f4743e24cc950e1a082cfd35ecbf4f3e46fa3dcc5aaea1.jpg)


robosense


![image](https://cdn-mineru.openxlab.org.cn/result/2026-06-18/59f71dd7-d158-41f5-b709-f99c1c77e755/e390c4a16acf52a6d3234b0d929680f0fab38bc22df2d36783926347e2ca91cb.jpg)


Building 9, Block 2, Zhongguan Honghualing Industry Southern District, 1213 

Liuxian Avenue, Taoyuan Street, Nanshan District, Shenzhen, China 

www.robosense.ai 