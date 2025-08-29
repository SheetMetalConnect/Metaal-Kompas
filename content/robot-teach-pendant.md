---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: Robot‑teach pendant
---
*Robot‑teach pendant* is een begrip binnen de industriële digitalisering en programmatie & aansturing productiemiddelen.

## Definitie

**Robot-teach pendant** is een handheld programming device waarmee operators industriële robots kunnen programmeren door handmatige bewegingen te maken en posities te "onderwijzen" aan de robot. Het is de traditionele methode voor robot programmering waarbij de operator de robot fysiek door de gewenste bewegingen geleidt.

## Kenmerken

- **Handheld interface**: Portable programming device met intuitive controls
- **Real-time robot control**: Direct robot movement control tijdens programming
- **Position recording**: Waypoint capture voor [[robot-padplanning|path planning]]
- **Safety integration**: Emergency stop, deadman switches, reduced speed modes
- **Program editing**: On-device program modification en debugging capabilities
- **Coordinate systems**: Joint, Cartesian, tool, user coordinate frame programming
- **I/O control**: Digital/analog input/output programming en testing
- **Display interface**: Screen voor program visualization en status information

## Toepassing

**Welding robot programming:**
- **[[lasrobot-programmering|Seam teaching]]**: Manual guidance langs weld joints
- **Torch orientation**: TCP (Tool Center Point) positioning voor optimal weld angles
- **Multi-pass programming**: Layer-by-layer programming voor thick materials
- **Approach/retract**: Safe movement programming naar weld start/end positions

**Material handling programming:**
- **Pick and place**: Position teaching voor part handling applications
- **Palletizing**: Grid pattern programming voor stacking applications
- **Machine tending**: CNC loading/unloading position programming
- **Assembly operations**: Precise insertion en fitting position teaching

**Programming workflow:**
- **Home position**: Establishing robot reference positions
- **Waypoint teaching**: Recording critical path positions
- **Motion type selection**: Linear, joint, circular motion programming
- **Speed en acceleration**: Motion parameter adjustment
- **Program logic**: Conditional statements, loops, subroutines
- **I/O integration**: Sensor integration en gripper control programming

**Safety procedures:**
- **Reduced speed**: Automatic speed reduction during teaching mode
- **Collision avoidance**: Manual guidance prevention van robot collisions
- **Workspace limits**: Programming binnen safe robot operating envelope
- **Emergency procedures**: Safety system integration en testing

**Advanced teach pendant features:**
- **Graphical programming**: Visual program representation
- **Simulation mode**: Program verification zonder robot movement
- **Program backup**: Local storage en transfer capabilities
- **Multi-language**: International operator interface support
- **Touch screen**: Modern pendant interfaces voor improved usability

**Programming limitations:**
- **Accessibility**: Complex geometries kunnen be difficult to teach manually
- **Precision**: Human hand precision limitations voor critical applications
- **Time consumption**: Manual teaching is time-intensive voor complex programs
- **Repeatability**: Variations in manually taught positions

## Gerelateerde begrippen

**Verwante termen:**
- [[offline-programmeren|Offline programmering]] - Virtual programming alternative to teach pendant
- [[robot-padplanning|Robot padplanning]] - Path optimization using taught positions
- [[lasrobot-programmering|Welding robot programming]] - Application using teach pendant methods
- [[wegpunt-programmering|Waypoint programming]] - Position-based programming technique

**Verwante concepten:**
- [[roboticasimulatiesoftware|Robot simulation]] - Virtual alternatives to physical teaching
- [[human-machine-interface|HMI]] - User interface design voor robot programming
- [[safety-systems|Safety systems]] - Safety integration in robot programming
- [[collaborative-robots|Cobots]] - Modern robots using simplified teach methods

## Bronnen

- ABB Robotics - FlexPendant programming guides
- KUKA Robotics - smartPAD teach pendant documentation
- FANUC Robotics - iPendant programming manuals
- Universal Robots - PolyScope teach pendant interface
- Yaskawa Motoman - Programming pendant user guides
- ISO 10218 - Robot safety standards including teach pendant requirements
- ANSI/RIA R15.06 - American robot safety standards

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]
