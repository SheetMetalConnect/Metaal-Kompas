---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Machine‑learning dataset
---
*Machine‑learning dataset* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Machine learning dataset** in de industriële context is een gestructureerde verzameling van proces-, machine- en productiedata die wordt gebruikt voor het trainen van algoritmes voor predictive maintenance, kwaliteitscontrole, procesoptimalisatie en automatisering. Deze datasets bevatten historische operationele data, sensormeetgegevens, procesparameters en outcome-labels die nodig zijn voor supervised learning modellen.

## Kenmerken

- **Temporal data structuur**: Time-series data met timestamps voor proces-gerelateerde features
- **Multi-modal data**: Combinatie van sensor data, log files, inspection results, process parameters
- **Labeled examples**: Annotated data met bekende outcomes (pass/fail, defect types, remaining useful life)
- **Feature engineering**: Afgeleide parameters zoals statistical aggregates, frequency domain features
- **Data quality**: Cleaned, validated en normalized data voor consistent model training
- **Balanced datasets**: Representatieve samples van verschillende operating conditions en failure modes
- **Contextual metadata**: Process recipes, material properties, environmental conditions
- **Scalable storage**: Database architecturen voor petabyte-scale industrial datasets

## Toepassing

**[[predictive-maintenance|Predictive maintenance]] datasets:**
- **Vibration data**: Accelerometer readings van rotating equipment voor bearing failure prediction
- **Temperature profiles**: Thermal sensors data voor overheating en efficiency degradation models
- **Current signature**: Motor current analysis data voor electrical fault detection
- **Maintenance records**: Historical failure data, repair actions, part replacements als labels

**Quality control datasets:**
- **Dimensional measurements**: CMM, laser scanning data voor dimensional accuracy prediction
- **Surface analysis**: Roughness, coating thickness measurements voor surface quality models
- **Material properties**: Tensile strength, hardness, composition data voor material grade classification
- **Visual inspection**: Image datasets voor defect detection en classification algorithms

**Process optimization datasets:**
- **CNC machining**: Cutting parameters, tool wear, surface finish voor parameter optimization
- **Welding processes**: Current, voltage, travel speed versus weld quality voor process control
- **Heat treatment**: Temperature curves, cycle times versus material properties
- **Energy consumption**: Power usage patterns voor efficiency optimization models

**Production scheduling datasets:**
- **Order history**: Customer demands, lead times, priority levels voor demand forecasting
- **Resource utilization**: Machine availability, setup times, throughput rates
- **Supply chain**: Material deliveries, inventory levels, supplier performance data
- **Quality metrics**: Yield rates, rework levels, customer complaints per production batch

## Gerelateerde begrippen

**Verwante termen:**
- [[data-acquisitie|Data acquisitie (DAQ)]] - Systemen voor data collection ten behoeve van ML datasets
- [[historian-database|Historian database]] - Data storage infrastructuur voor ML dataset creation
- [[datacleaning|Data cleaning]] - Pre-processing stappen voor dataset quality
- [[big-data|Big data]] - Large-scale dataset management en processing

**Verwante concepten:**
- [[artificial-intelligence|Kunstmatige intelligentie]] - Bredere context van ML applications
- [[deep-learning|Deep learning]] - Advanced ML technieken voor complex datasets
- [[edge-analytics|Edge analytics]] - Real-time ML inference met trained models
- [[synthetic-data|Synthetische data]] - Artificially generated training data

## Bronnen

- SECOM Dataset - Semiconductor manufacturing process data (UCI Machine Learning Repository)
- NASA Turbofan Engine Degradation - Predictive maintenance benchmark dataset
- Case Western Reserve University - Bearing fault datasets voor vibration analysis
- Bosch Production Line Performance - Kaggle manufacturing quality dataset
- Microsoft SCADA Data - Industrial control systems anomaly detection
- PHM Society Data Challenge - Prognostics en health management datasets
- IMS Bearing Dataset - NSF I/UCRC bearing lifecycle data
- Steel Plates Faults Dataset - Surface defect classification data
- MLOps for Manufacturing - DataRobot industrial ML implementation guides
- Industrial AI Alliance - Manufacturing dataset standards en best practices

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
