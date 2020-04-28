export enum FieldType {
  STRING = "string",
  NUMBER = "number",
  DATE = "date",
  BOOLEAN = "boolean",
};

export interface FieldDescriptor {
  name: string,
  type: FieldType,
};

export type Aggregations = Array<string>
export type Conditions = Array<string>
export type DatasetNames = Array<string>

export type AggregationMap = {
  [x in FieldType]: Aggregations;
};

export type ConditionMap = {
  [x in FieldType]: Conditions;
};

export interface DatasetInformationsInterface {

  /**
   * Returns a list of all available datasets.
   */
  getDatasetNames(): DatasetNames;

  /**
   *
   * @param datasetName - For which dataset do I want the fields?
   */
  getFieldsOfDataset(datasetName: string): Array<FieldDescriptor>;
}

export class DatasetInformations implements DatasetInformationsInterface {
  getDatasetNames(): DatasetNames {
    return [
      'users',
      'pushes'
    ];
  }

  getFieldsOfDataset(datasetName: string): Array<FieldDescriptor> {
    // @TODO: choose fields by tableName.

    return [
      {
        name: 'created_at',
        type: FieldType.DATE
      },
      {
        name: 'consumption',
        type: FieldType.NUMBER
      }
    ];
  }
}

export class TableMonitoring {
  private readonly aggregations: AggregationMap;
  private readonly conditions: ConditionMap;

  constructor(aggregations: AggregationMap, conditions: ConditionMap) {
    this.aggregations = aggregations;
    this.conditions = conditions;
  }

  /**
   * For a given field, what aggregation can I apply on it?
   * @param fieldDescriptor
   */
  getAggregationsAvailable(fieldDescriptor: FieldDescriptor): Aggregations {
    return this.aggregations[fieldDescriptor.type];
  }

  /**
   * For a given field, what condition can I apply on it?
   * @param fieldDescriptor
   */
  getConditionAvailable(fieldDescriptor: FieldDescriptor): Conditions {
    return this.conditions[fieldDescriptor.type];
  }
}
