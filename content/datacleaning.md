---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Datacleaning
---
*Datacleaning* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Datacleaning** (data-opschoning) is het systematisch identificeren en corrigeren van fouten, inconsistenties, ontbrekende waarden en uitbijters in industriële datasets. Dit proces is essentieel voor het garanderen van data-kwaliteit voorafgaand aan analyse, rapportage en machine learning toepassingen in productie-omgevingen.

## Kenmerken

- **Missing value imputation**: Statistische methoden voor het invullen van ontbrekende sensor readings
- **Outlier detection**: Identificatie van abnormale waarden door sensor malfunctions of process deviations
- **Duplicate removal**: Eliminatie van redundante records uit overlapping data sources
- **Format standardization**: Consistent data types, decimal places, unit representations
- **Range validation**: Verificatie dat waarden binnen fysisch mogelijke boundaries vallen
- **Timestamp alignment**: Synchronisatie van data uit verschillende systemen met verschillende clock sources
- **Error flagging**: Annotation van suspicious data points voor manual review
- **Quality scoring**: Metadata assignment indicating data reliability en completeness

## Toepassing

**Sensor data cleaning:**
- **Temperature sensors**: Removal van unrealistic readings (-999°C, sensor disconnections)
- **Pressure transducers**: Filtering van electrical noise, zero-drift correction
- **Flow meters**: Cleaning van negative flow readings, calibration drift compensation
- **Vibration data**: Removal van electrical interference, frequency domain filtering

**Machine performance data:**
- **CNC cycle times**: Identification van incomplete cycles, setup time exclusion
- **Tool life data**: Correction voor manual tool changes, replacement tracking errors
- **Energy consumption**: Removal van power outage periods, standby mode filtering
- **Production counts**: Validation tegen physical production limits, double-counting removal

**Quality measurement cleaning:**
- **Dimensional data**: CMM measurement validation, operator error identification
- **Surface finish**: Outlier removal van damaged measurement tips, calibration checks
- **Material properties**: Consistency checks tussen different testing methods
- **Visual inspection**: False positive/negative removal, inspector bias correction

**Historical data restoration:**
- **[[historian-database|Historian]] maintenance**: Cleanup van corrupted historical records
- **System migration**: Data quality improvement during platform transitions
- **Archive reconstruction**: Recovery en validation van backed-up historical data
- **Compliance preparation**: Data cleaning voor audit en regulatory reporting

## Gerelateerde begrippen

**Verwante termen:**
- [[data-normalisatie|Data normalisatie]] - Standardization processes na data cleaning
- [[data-acquisitie|Data acquisitie (DAQ)]] - Raw data collection die cleaning requires
- [[machine-learning-dataset|ML dataset]] - Clean datasets voor algorithm training
- [[historian-database|Historian database]] - Storage systems requiring clean data

**Verwante concepten:**
- [[extract-transform-load|ETL]] - Data pipeline processen inclusief cleaning stages
- [[statistical-process-control-software|SPC software]] - Quality tools using cleaned data
- [[big-data|Big data]] - Large-scale data cleaning challenges
- [[synthetic-data|Synthetische data]] - Alternative voor poor-quality real data

## Bronnen

- Pandas Profiling - Python library voor automated data quality assessment
- OpenRefine - Open source tool voor data cleaning en transformation
- Trifacta Wrangler - Interactive data preparation platform
- Apache Spark MLlib - Distributed data cleaning en feature engineering
- SAS Data Management - Enterprise data quality solutions
- Talend Data Quality - Comprehensive data cleansing platform
- Great Expectations - Python framework voor data validation
- ISO 8000 - Data quality standards voor industrial applications
- DAMA-DMBOK - Data Management Body of Knowledge
- IEEE Standard 1012 - Software verification en validation procedures

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
