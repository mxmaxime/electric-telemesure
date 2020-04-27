export enum FieldType {
  STRING,
  NUMBER,
  DATE,
  BOOLEAN
};

export interface FieldDescriptor {
  name: string,
  type: FieldType,
};

export type Aggregations = Array<string>

export type AggregationMap = {
  [x in FieldType]: Aggregations;
};

export interface DatasetInformationsInterface {

  /**
   * Returns a list of all available datasets.
   */
  getDatasetNames(): Array<string>;

  /**
   *
   * @param datasetName - For which dataset do I want the fields?
   */
  getFieldsOfDataset(datasetName: string): Array<FieldDescriptor>;
}

export class DatasetInformations implements DatasetInformationsInterface {
  getDatasetNames(): Array<string> {
    return [
      'users',
      'pushes'
    ];
  }

  getFieldsOfDataset(datasetName: string): Array<FieldDescriptor> {
    // @TODO: choose fields by tableName.

    return [{
      name: 'created_at',
      type: FieldType.DATE
    }];
  }
}

export class TableMonitoring {
  private readonly aggregations: AggregationMap;

  constructor(aggregations: AggregationMap) {
    this.aggregations = aggregations;
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
  getConditionAvailable(fieldDescriptor: FieldDescriptor) {

  }
}
