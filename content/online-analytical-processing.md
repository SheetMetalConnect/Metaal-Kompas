---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Online Analytical Processing (OLAP)
---
*Online Analytical Processing (OLAP)* is een begrip binnen de industriële digitalisering en data, analyse & business intelligence.

## Definitie

**Online Analytical Processing (OLAP)** is een technologie voor het snel analyseren van multidimensionale business data. Het stelt gebruikers in staat om complexe queries uit te voeren op grote datasets, waarbij data vanuit verschillende perspectieven kan worden bekeken door middel van drill-down, slice en dice operaties voor business intelligence en decision support.

## Kenmerken

- **Multidimensionale data modelling**: Cube structures met measures en dimensions
- **Fast query performance**: Pre-aggregated data voor sub-seconde response times
- **Intuitive navigation**: Drill-down, drill-up, slice en dice operaties
- **Time intelligence**: Periode-over-periode vergelijkingen en trending
- **What-if analysis**: Scenario modeling en sensitivity analysis
- **Hierarchical browsing**: Natural business hierarchies navigation
- **Ad-hoc reporting**: Flexible user-driven data exploration
- **Large data volumes**: Efficient processing van enterprise-scale datasets

## Toepassing

**Manufacturing performance analysis:**
- **[[overall-equipment-effectiveness|OEE]] analysis**: Equipment effectiveness trends per machine, line, plant
- **Production metrics**: Throughput, yield, cycle time analysis across time periods
- **Quality analysis**: Defect rates, [[statistical-process-control-software|SPC]] trending, [[corrective-and-preventive-action|CAPA]] effectiveness
- **Cost analysis**: Material, labor, overhead costs per product family

**Metaalindustrie OLAP cubes:**
- **Sales cube**: Revenue, volume, margin analysis per customer, product, region, tijd
- **Inventory cube**: Stock levels, turnover, carrying costs per material, location
- **Production cube**: Capacity utilization, efficiency, downtime per work center
- **Quality cube**: Inspection results, nonconformance rates, customer complaints

**OLAP vs OLTP comparison:**
- **OLTP (Online Transaction Processing)**: Real-time operational transactions
- **OLAP**: Historical data analysis en reporting
- **Different data models**: Normalized (OLTP) vs dimensional (OLAP)
- **Different performance**: Fast writes (OLTP) vs fast reads (OLAP)

**Dimensional modeling:**
- **Fact tables**: Measures zoals quantities, costs, durations
- **Dimension tables**: Descriptive attributes zoals time, product, customer
- **Star schema**: Central fact table surrounded door dimension tables
- **Snowflake schema**: Normalized dimension tables voor complex hierarchies

**Manufacturing OLAP dimensions:**
- **Time dimension**: Year, quarter, month, week, day hierarchies
- **Product dimension**: Category, family, model, part number levels
- **Geography dimension**: Region, country, plant, work center breakdown
- **Customer dimension**: Market segment, account, contact hierarchies

**[[business-intelligence|Business Intelligence]] integratie:**
- **[[datawarehouse|Data warehouse]]**: OLAP cubes built from warehouse data
- **ETL processes**: Extract, transform, load data naar OLAP structures
- **Dashboards**: Visual representation van OLAP analysis results
- **Self-service BI**: User-driven exploration van OLAP cubes

## Gerelateerde begrippen

**Verwante termen:**
- [[datawarehouse|Data warehouse]] - Source system voor OLAP cube data
- [[business-intelligence|Business Intelligence]] - Broader analytics framework including OLAP
- [[data-mining|Data mining]] - Advanced analytics complementing OLAP capabilities
- [[kpi-dashboard|KPI dashboard]] - Visual presentation van OLAP-derived metrics

**Verwante concepten:**
- [[big-data|Big data]] - Large-scale data processing requiring OLAP capabilities
- [[predictive-analytics|Predictive analytics]] - Advanced analytics using OLAP as foundation
- [[manufacturing-execution-system|MES]] - Operational system providing data voor OLAP analysis
- [[enterprise-resource-planning|ERP]] - Business system generating transactional data voor OLAP

## Bronnen

- Microsoft SQL Server Analysis Services - OLAP cube development platform
- Oracle OLAP - Enterprise multidimensional database engine
- IBM Cognos - Business intelligence en OLAP platform
- SAP BW (Business Warehouse) - Enterprise data warehousing en OLAP
- Pentaho - Open-source business intelligence suite
- Apache Kylin - Open-source distributed OLAP engine
- Ralph Kimball - Data warehouse design methodology voor OLAP

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
