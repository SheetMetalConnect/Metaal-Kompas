---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: Message Queuing Telemetry Transport (MQTT)
---
*Message Queuing Telemetry Transport (MQTT)* is een lightweight messaging protocol dat speciaal is ontworpen voor machine-to-machine communicatie in omgevingen met beperkte bandbreedte en onbetrouwbare netwerkverbindingen.

## Definitie

MQTT is een publish/subscribe messaging protocol dat gebruikmaakt van een centrale broker voor het routeren van berichten tussen clients. Het protocol is geoptimaliseerd voor IoT-apparaten en industriële systemen waar efficiëntie, betrouwbaarheid en minimaal netwerkverbruik cruciaal zijn.

## Kernkenmerken

### Lightweight Protocol
- **Klein protocol overhead** (minimaal 2 bytes per bericht)
- **Efficient gebruik** van bandbreedte en batterij
- **Optimaal voor constrained devices** met beperkte resources
- **TCP/IP basis** met optionele TLS encryption

### Quality of Service (QoS)
- **QoS 0**: At most once delivery (fire and forget)
- **QoS 1**: At least once delivery (acknowledged delivery)
- **QoS 2**: Exactly once delivery (assured delivery)

### Topic-Based Messaging
- **Hierarchical topic structure** voor georganiseerde data flows
- **Wildcard subscriptions** (+ voor single level, # voor multi-level)
- **Retained messages** voor latest-value semantiek
- **Last Will & Testament** voor connection loss detection

## Rol in Unified Namespace

MQTT is een foundational technology voor [[unified-namespace|Unified Namespace]] implementaties:

### Topic Namespace Structure
```
Company/Site/Area/Line/Asset/DataType/Parameter
VanEnkhuizen/Rotterdam/Productie/Lijn1/Oven001/Temperature/Actual
VanEnkhuizen/Rotterdam/Productie/Lijn1/Oven001/Status/Operational
```

### UNS Data Architecture
- **[[topic-namespace|Topic namespace]]** als backbone van UNS
- **Event-driven updates** voor real-time data synchronization
- **Retained messages** voor current state representation
- **Wildcard subscriptions** voor flexible data consumption

### Sparkplug Specification
MQTT Sparkplug extends basic MQTT for industrial UNS:
```
spBv1.0/group_id/message_type/edge_node_id/device_id
spBv1.0/ACME/DDATA/ProductieLijn_A/Oven_1
```

**Sparkplug benefits:**
- **Standardized payload format** (Protobuf)
- **Birth/Death certificates** voor session management
- **Timestamp synchronization** voor temporal accuracy
- **Data type definitions** voor semantic interoperability

## Industriële Toepassingen

### IoT Device Integration
- **Sensor data collection** van shopfloor devices
- **Real-time telemetry** van production equipment
- **Remote monitoring** van distributed assets
- **Edge device orchestration** en configuration

### Real-Time Production Monitoring
- **Machine status updates** (running, stopped, fault)
- **Process parameter streaming** (temperature, pressure, flow)
- **Quality measurements** publication
- **Alarm en event notifications**

### Predictive Maintenance
- **Vibration data streaming** voor condition monitoring
- **Performance metrics** publication
- **Maintenance alerts** en notifications
- **Historical data collection** voor trend analysis

## Implementatie Architectuur

### MQTT Broker Deployment
```
Edge Level:
┌─────────────────┐    ┌─────────────────┐
│ Local MQTT      │    │ Production      │
│ Broker          │←──→│ Equipment       │
│ (Edge Gateway)  │    │ (IoT Devices)   │
└─────────────────┘    └─────────────────┘
        │
        │ Bridge Connection
        ↓
┌─────────────────┐    ┌─────────────────┐
│ Central MQTT    │    │ Enterprise      │
│ Broker          │←──→│ Applications    │
│ (Cloud/On-Prem) │    │ (Analytics/ERP) │
└─────────────────┘    └─────────────────┘
```

### Security Implementation
- **TLS/SSL encryption** voor data in transit
- **Client certificates** voor device authentication
- **Username/password** authentication
- **Topic-based authorization** voor access control

### High Availability Setup
- **Clustered brokers** voor fault tolerance
- **Load balancing** tussen broker instances
- **Session persistence** voor connection recovery
- **Message persistence** voor guaranteed delivery

## Message Design Patterns

### Telemetry Pattern
```json
{
  "timestamp": 1692277200000,
  "metrics": {
    "temperature": {
      "value": 485.2,
      "unit": "celsius",
      "quality": "good"
    },
    "pressure": {
      "value": 2.1,
      "unit": "bar",
      "quality": "good"
    }
  }
}
```

### Command Pattern
```json
{
  "command": "set_setpoint",
  "target": "temperature_controller",
  "parameters": {
    "setpoint": 480.0,
    "unit": "celsius"
  },
  "correlation_id": "cmd_20240817_001"
}
```

## Performance Karakteristieken

### Throughput Capabilities
- **Hoge message throughput** (>100k messages/second)
- **Low latency** communication (<10ms typical)
- **Efficient bandwidth usage** door protocol optimization
- **Scalable connection management** (thousands of concurrent clients)

### Resource Efficiency
- **Minimal memory footprint** op embedded devices
- **Low CPU usage** voor protocol processing
- **Battery-friendly** voor wireless IoT devices
- **Bandwidth efficient** voor cellular/satellite connections

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[topic-namespace|Topic namespace]]
- [[event-gedreven-architectuur|Event-gedreven architectuur]]
- [[mqtt-broker|MQTT-broker]]
- [[publish-subscribe-messaging|Publish/Subscribe messaging]]
- [[internet-of-things|Internet of Things (IoT)]]
- [[industrial-internet-of-things|Industrial Internet of Things (IIoT)]]
- [[event-broker|Event broker]]

## Bronnen

[PLACEHOLDER - Bronnen worden later toegevoegd]

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
