<template>
  <div>
    <form action="#">
      <div>
        <label for="dataset-name">DatasetName</label>
        <select v-model="datasetName" id="dataset-name">
          <option v-for="dName in datasetNames" :key="dName" :value="dName">{{ dName }}</option>
        </select>
      </div>

      <div v-if="columns.length > 0">
        <div>
          <label for="aggregation-column">aggregation-column</label>
          <select v-model="aggregationColumn" id="aggregation-column">
            <option v-for="col in columns" :key="col.name" :value="col">{{ col.name }}</option>
          </select>
        </div>

        <div>
          <label for="aggregation-name">aggregation-name</label>
          <select v-model="aggregationName" id="aggregation-name">
            <option v-for="agg in aggregations" :key="agg" :value="agg">{{ agg }}</option>
          </select>
        </div>

        <div>
          <label for="condition-name">condition-name</label>
          <select v-model="conditionName" id="condition-name">
            <option v-for="agg in conditions" :key="agg" :value="agg">{{ agg }}</option>
          </select>
        </div>

        <div>
          <label for="condition-value">condition-value</label>
          <input v-model="conditionValue" id="condition-value" />
        </div>

      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {Aggregations, Conditions, DatasetNames, TableMonitoring, AggregationMap, FieldType, FieldDescriptor, DatasetInformationsInterface} from './monitoring';

export default Vue.extend({
  props: {
    datasetInformations: { type: Object as PropType<DatasetInformationsInterface>, required: true },
    tableMonitoring: { type: Object as PropType<TableMonitoring>, required: true },
  },
  data() {
    return {
      datasetNames: {} as DatasetNames,
      datasetName: '',
      aggregationColumn: {} as FieldDescriptor,
      groupedByColumn: '',
      aggregationName: '',
      conditionName: '',
      conditionValue: ''
    }
  },

  created() {
    this.datasetNames = this.datasetInformations.getDatasetNames();
  },

  computed: {
    columns(): Array<FieldDescriptor> {
      if (!this.datasetName) return [];

      return this.datasetInformations.getFieldsOfDataset(this.datasetName);
    },

    aggregations(): Aggregations {
      return this.tableMonitoring.getAggregationsAvailable(this.aggregationColumn);
    },

    conditions(): Conditions {
      return this.tableMonitoring.getConditionAvailable(this.aggregationColumn);
    }
  }
});

</script>
