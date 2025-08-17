---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Structured Query Language (SQL)
---
*Structured Query Language (SQL)* is een gestandaardiseerde taal voor het beheren en manipuleren van relationele databases, waarmee taken zoals bevragen, updaten, invoegen en verwijderen van data kunnen worden uitgevoerd.

## Definitie

**Structured Query Language (SQL)** is een declaratieve programmeertaal die specifiek is ontworpen voor het beheren van data in relationele databasemanagementsystemen (RDBMS). SQL gebruikt een gestructureerd schema met tabellen, rijen en kolommen, en biedt een gestandaardiseerde manier om complexe queries en data-operaties uit te voeren.

## Kernprincipes

### Relationeel Model
- **Tabellen**: Data wordt georganiseerd in tweedimensionale tabellen
- **Rijen**: Elke rij representeert een record of entiteit
- **Kolommen**: Elke kolom representeert een attribuut of eigenschap
- **Keys**: Primaire en foreign keys voor relaties tussen tabellen

### ACID Properties
- **Atomicity**: Transacties zijn alles-of-niets operaties
- **Consistency**: Database blijft in geldige staat na transacties
- **Isolation**: Gelijktijdige transacties beïnvloeden elkaar niet
- **Durability**: Gecommitte wijzigingen blijven permanent

## SQL Componenten

### Data Definition Language (DDL)
```sql
-- Tabel aanmaken
CREATE TABLE machines (
    machine_id INT PRIMARY KEY,
    machine_name VARCHAR(100) NOT NULL,
    location VARCHAR(50),
    install_date DATE,
    status ENUM('Active', 'Maintenance', 'Offline')
);

-- Tabel structuur wijzigen
ALTER TABLE machines 
ADD COLUMN last_maintenance DATE;

-- Index aanmaken voor performance
CREATE INDEX idx_location ON machines(location);
```

### Data Manipulation Language (DML)
```sql
-- Data invoegen
INSERT INTO machines (machine_id, machine_name, location, status)
VALUES (1, 'CNC Mill 001', 'Production Floor A', 'Active');

-- Data bijwerken
UPDATE machines 
SET status = 'Maintenance', last_maintenance = CURRENT_DATE
WHERE machine_id = 1;

-- Data verwijderen
DELETE FROM machines 
WHERE status = 'Offline' AND install_date < '2010-01-01';
```

### Data Query Language (DQL)
```sql
-- Basis selectie
SELECT machine_name, location, status 
FROM machines 
WHERE status = 'Active';

-- Aggregatie en groepering
SELECT location, COUNT(*) as machine_count,
       AVG(DATEDIFF(CURRENT_DATE, install_date)) as avg_age_days
FROM machines 
GROUP BY location
HAVING machine_count > 5;

-- Join operaties
SELECT m.machine_name, p.product_name, p.production_count
FROM machines m
INNER JOIN production_records p ON m.machine_id = p.machine_id
WHERE p.production_date >= '2024-01-01';
```

### Data Control Language (DCL)
```sql
-- Gebruiker aanmaken
CREATE USER 'operator'@'localhost' IDENTIFIED BY 'secure_password';

-- Permissions toekennen
GRANT SELECT, INSERT, UPDATE ON production.* TO 'operator'@'localhost';

-- Permissions intrekken
REVOKE DELETE ON production.* FROM 'operator'@'localhost';
```

## Industriële Toepassingen

### Manufacturing Data Management

#### Production Tracking
```sql
-- OEE berekening query
SELECT 
    machine_id,
    production_date,
    (planned_production_time - downtime_minutes) / planned_production_time * 100 AS availability,
    actual_cycle_time / ideal_cycle_time * 100 AS performance,
    good_parts / total_parts * 100 AS quality,
    (availability * performance * quality) / 10000 AS oee
FROM production_summary
WHERE production_date BETWEEN '2024-08-01' AND '2024-08-31';
```

#### Quality Analysis
```sql
-- Defect trend analysis
SELECT 
    DATE_TRUNC('week', inspection_date) AS week,
    defect_type,
    COUNT(*) as defect_count,
    COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY DATE_TRUNC('week', inspection_date)) AS defect_percentage
FROM quality_inspections
WHERE inspection_date >= CURRENT_DATE - INTERVAL '12 weeks'
GROUP BY week, defect_type
ORDER BY week DESC, defect_count DESC;
```

#### Inventory Management
```sql
-- Material consumption tracking
SELECT 
    m.material_name,
    SUM(c.quantity_used) as total_consumed,
    AVG(c.quantity_used) as avg_daily_consumption,
    i.current_stock,
    i.current_stock / AVG(c.quantity_used) as days_of_supply
FROM material_consumption c
JOIN materials m ON c.material_id = m.material_id
JOIN inventory i ON m.material_id = i.material_id
WHERE c.consumption_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY m.material_id, m.material_name, i.current_stock
HAVING days_of_supply < 14
ORDER BY days_of_supply ASC;
```

### Business Intelligence Queries

#### Performance Dashboards
```sql
-- Productie efficiency per shift
WITH shift_performance AS (
    SELECT 
        shift_id,
        shift_date,
        SUM(units_produced) as total_units,
        SUM(planned_units) as planned_units,
        AVG(cycle_time) as avg_cycle_time,
        COUNT(DISTINCT machine_id) as active_machines
    FROM production_shifts
    WHERE shift_date >= CURRENT_DATE - INTERVAL '7 days'
    GROUP BY shift_id, shift_date
)
SELECT 
    shift_id,
    AVG(total_units * 100.0 / planned_units) as avg_efficiency,
    MIN(total_units * 100.0 / planned_units) as min_efficiency,
    MAX(total_units * 100.0 / planned_units) as max_efficiency,
    STDDEV(total_units * 100.0 / planned_units) as efficiency_stddev
FROM shift_performance
GROUP BY shift_id
ORDER BY avg_efficiency DESC;
```

## Advanced SQL Features

### Window Functions
```sql
-- Running totals en trends
SELECT 
    production_date,
    daily_production,
    SUM(daily_production) OVER(
        ORDER BY production_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as cumulative_production,
    LAG(daily_production, 1) OVER(ORDER BY production_date) as previous_day,
    daily_production - LAG(daily_production, 1) OVER(ORDER BY production_date) as day_over_day_change
FROM daily_production_summary
WHERE production_date >= '2024-08-01'
ORDER BY production_date;
```

### Common Table Expressions (CTEs)
```sql
-- Hiërarchische data analyse
WITH RECURSIVE machine_hierarchy AS (
    -- Base case: top-level machines
    SELECT machine_id, machine_name, parent_machine_id, 0 as level
    FROM machines 
    WHERE parent_machine_id IS NULL
    
    UNION ALL
    
    -- Recursive case: child machines
    SELECT m.machine_id, m.machine_name, m.parent_machine_id, mh.level + 1
    FROM machines m
    INNER JOIN machine_hierarchy mh ON m.parent_machine_id = mh.machine_id
)
SELECT 
    REPEAT('  ', level) || machine_name as indented_name,
    level,
    machine_id
FROM machine_hierarchy
ORDER BY level, machine_name;
```

### Stored Procedures
```sql
-- Automated maintenance scheduling
DELIMITER //
CREATE PROCEDURE ScheduleMaintenanceTasks()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE machine_id INT;
    DECLARE next_maintenance DATE;
    
    DECLARE machine_cursor CURSOR FOR 
        SELECT m.machine_id, 
               DATE_ADD(COALESCE(m.last_maintenance, m.install_date), 
                       INTERVAL m.maintenance_interval_days DAY) as next_due
        FROM machines m
        WHERE DATE_ADD(COALESCE(m.last_maintenance, m.install_date), 
                      INTERVAL m.maintenance_interval_days DAY) <= DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY)
        AND m.status = 'Active';
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN machine_cursor;
    
    maintenance_loop: LOOP
        FETCH machine_cursor INTO machine_id, next_maintenance;
        IF done THEN
            LEAVE maintenance_loop;
        END IF;
        
        INSERT INTO maintenance_schedule (machine_id, scheduled_date, task_type, status)
        VALUES (machine_id, next_maintenance, 'Preventive', 'Scheduled');
    END LOOP;
    
    CLOSE machine_cursor;
END//
DELIMITER ;
```

## SQL in Industriële Architectuur

### Integration met ERP Systemen
```sql
-- ERP-MES data synchronisatie
INSERT INTO mes_work_orders (wo_number, product_id, quantity, priority, due_date)
SELECT 
    erp_wo.order_number,
    erp_wo.product_code,
    erp_wo.order_quantity,
    CASE 
        WHEN erp_wo.due_date <= CURRENT_DATE + INTERVAL 3 DAY THEN 'High'
        WHEN erp_wo.due_date <= CURRENT_DATE + INTERVAL 7 DAY THEN 'Medium'
        ELSE 'Low'
    END as priority,
    erp_wo.due_date
FROM erp_system.work_orders erp_wo
LEFT JOIN mes_work_orders mes_wo ON erp_wo.order_number = mes_wo.wo_number
WHERE mes_wo.wo_number IS NULL
AND erp_wo.status = 'Released';
```

### Data Warehouse Queries
```sql
-- Multi-dimensional analysis
SELECT 
    d.year,
    d.quarter,
    p.product_category,
    l.location_name,
    SUM(f.units_produced) as total_units,
    SUM(f.production_cost) as total_cost,
    AVG(f.oee_percentage) as avg_oee,
    COUNT(DISTINCT f.machine_id) as machine_count
FROM fact_production f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
JOIN dim_location l ON f.location_key = l.location_key
WHERE d.year IN (2023, 2024)
GROUP BY ROLLUP(d.year, d.quarter, p.product_category, l.location_name)
ORDER BY d.year, d.quarter, p.product_category, l.location_name;
```

## Performance Optimalisatie

### Indexing Strategies
```sql
-- Composite indexes voor common queries
CREATE INDEX idx_production_date_machine 
ON production_records(production_date, machine_id);

-- Covering index voor specific queries
CREATE INDEX idx_quality_covering 
ON quality_inspections(inspection_date, product_id) 
INCLUDE (defect_count, inspector_id);

-- Partial index voor filtered data
CREATE INDEX idx_active_machines 
ON machines(location) 
WHERE status = 'Active';
```

### Query Optimization
```sql
-- Gebruik van EXPLAIN voor query analysis
EXPLAIN ANALYZE
SELECT m.machine_name, COUNT(p.production_id)
FROM machines m
LEFT JOIN production_records p ON m.machine_id = p.machine_id
WHERE m.location = 'Factory A'
AND p.production_date >= '2024-08-01'
GROUP BY m.machine_id, m.machine_name;
```

## SQL Varianten voor Industrie

### PostgreSQL (Industriële favoriet)
- **Time-series support**: TimescaleDB extensie
- **JSON/JSONB**: Flexibele schema's voor IoT data
- **Arrays**: Complex data types voor sensor arrays
- **Full-text search**: Documentatie en logfile analysis

### Microsoft SQL Server
- **Integration Services**: ETL voor manufacturing data
- **Analysis Services**: OLAP cubes voor BI
- **Temporal tables**: Automatische data history tracking
- **In-memory OLTP**: High-performance transactional workloads

### MySQL
- **InnoDB**: ACID compliance voor critical manufacturing data
- **Partitioning**: Time-based partitioning voor large datasets
- **Replication**: High availability voor production systems
- **Performance Schema**: Database performance monitoring

### Oracle Database
- **Partitioning**: Advanced partitioning voor big data
- **Real Application Clusters**: High availability solutions
- **Advanced Analytics**: In-database machine learning
- **Flashback**: Point-in-time recovery capabilities

## Modern SQL Trends

### SQL voor Big Data
- **Apache Spark SQL**: Distributed SQL processing
- **Presto/Trino**: Interactive queries op data lakes
- **BigQuery**: Serverless SQL voor analytics
- **Databricks SQL**: Lakehouse analytics platform

### SQL voor Time-Series
- **TimescaleDB**: PostgreSQL-based tijdreeksdatabase
- **ClickHouse**: Columnar database voor analytics
- **Apache Druid**: Real-time analytics database
- **QuestDB**: High-performance tijd-serie database

## Best Practices voor Industrie

### Data Modeling
1. **Normalization**: Elimineer data redundantie waar mogelijk
2. **Denormalization**: Voor performance-kritieke read queries
3. **Partitioning**: Time-based partitioning voor historical data
4. **Archiving**: Automatische oude data archivering

### Security
1. **Least privilege**: Minimale benodigde permissions
2. **Row-level security**: Data access per gebruikersrol
3. **Encryption**: Data-at-rest en data-in-transit encryptie
4. **Audit logging**: Complete database activity logging

### Performance
1. **Index maintenance**: Reguliere index optimization
2. **Statistics updates**: Actuele query optimizer statistics
3. **Query monitoring**: Performance bottleneck identificatie
4. **Connection pooling**: Efficiënt database connection management

## Gerelateerde begrippen

**Database Technologies:**
- [[tijdreeksdatabase|Tijdreeksdatabase (TSDB)]] - Gespecialiseerde databases voor tijdreeks
- [[nosql-databases|NoSQL Databases]] - Alternative database paradigmen
- [[datawarehouse|Data Warehouse]] - Analytics-gerichte databases
- [[historian-database|Historian Database]] - Industriële data historisering

**Data Management:**
- [[master-data-management|Master Data Management]] - Centrale data governance
- [[extract-transform-load|ETL]] - Data integration processen
- [[data-kwaliteitsbeheer|Data kwaliteitsbeheer]] - Data quality assurance
- [[backup-en-recovery|Backup & Recovery]] - Data protection strategies

**Business Intelligence:**
- [[online-analytical-processing|OLAP]] - Multidimensional analytics
- [[data-analyse|Data Analyse]] - Analytical workflows
- [[kpi-dashboard|KPI Dashboard]] - SQL-based dashboards
- [[reporting-en-visualisatie|Reporting]] - SQL-based reporting

## Bronnen

- ANSI SQL Standards Documentation
- Database vendor-specific SQL references
- SQL Performance Tuning best practices
- Industrial Database Design Patterns

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
