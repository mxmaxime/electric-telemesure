<template>
  <div>
    <form action="#">
      <select v-model="datasetName" id="dataset-name">
        <option v-for="dName in datasetNames" :key="dName" :value="dName">{{ dName }}</option>
      </select>

      <div v-if="columns.length > 0">
        <select v-model="aggregationColumn" id="aggregation-column">
          <option v-for="col in columns" :key="col" :value="col">{{ col }}</option>
        </select>

        <select v-model="aggregationName" id="aggregation-name">
          <option v-for="agg in aggregations" :key="agg" :value="agg">{{ agg }}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {Aggregations, TableMonitoring, AggregationMap, FieldType, FieldDescriptor} from './tableMonitoring';

/**
 * Depends on your SGBD maybe.
 */
const aggregations: AggregationMap = {
  [FieldType.STRING]: ['AVG', 'SUM'],
  [FieldType.NUMBER]: [],
  [FieldType.DATE]: [],
  [FieldType.BOOLEAN]: [],
};

const tableMonitoring = new TableMonitoring(aggregations);

export default Vue.extend({
  props: {
    datasetNames: { type: Array as PropType<Array<string>>, required: true }
  },
  data() {
    return {
      datasetName: '',
      columns: [] as Array<FieldDescriptor>,
      aggregationColumn: {} as FieldDescriptor,
      groupedByColumn: '',
      aggregationName: '',
    }
  },

  computed: {
    aggregations(): Aggregations {
      return tableMonitoring.getAggregationsAvailable(this.aggregationColumn);
    }
  }
});

</script>
