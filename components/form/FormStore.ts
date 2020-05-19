/**
 * Class utility to wrap my form state.
 * No VueX needed to do this easy job.
 *
 * Note: I'm using Object.assign to not share the same reference between values and errors.
 * Otherwise, when errors comes up the value changes too.
 *
 * Example, if I have a form with 2 inputs, email and password :
 * new FormStore({ email: '', password: '' })
 */

export interface StateInterface<T> {
  values: T,
  errors: T
}

export default class FormStore<T> {
  state: StateInterface<T>

  constructor(state: T) {
    this.state = {
      values: Object.assign({}, state),
      errors: Object.assign({}, state)
    };
  }
};
