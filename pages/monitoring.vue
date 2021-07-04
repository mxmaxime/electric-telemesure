<template>
  <div class="l-container">
    <div class="box">
      <div class="box__body">
        <table-monitoring :table-monitoring="tableMonitoring" :dataset-informations="datasetInformations" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TableMonitoringComponent from '@/components/table-monitoring/tableMonitoring.vue';
import {DatasetInformations, ConditionMap, Aggregations, TableMonitoring, AggregationMap, FieldType, FieldDescriptor} from '@/components/table-monitoring/monitoring';

/**
 * Depends on your SGBD maybe.
 */
const aggregations: AggregationMap = {
  [FieldType.STRING]: [],
  [FieldType.NUMBER]: ['AVG', 'SUM'],
  [FieldType.DATE]: [],
  [FieldType.BOOLEAN]: [],
};

const conditions: ConditionMap = {
  [FieldType.STRING]: [],
  [FieldType.NUMBER]: ['<', '<=', '>', '>=', '='],
  [FieldType.DATE]: [],
  [FieldType.BOOLEAN]: [],
};

const tableMonitoring = new TableMonitoring(aggregations, conditions);

export default Vue.extend({
  components: { TableMonitoring: TableMonitoringComponent },
  data() {
    return {
      datasetInformations: new DatasetInformations(),
      tableMonitoring,
    }
  }
});
</script>
