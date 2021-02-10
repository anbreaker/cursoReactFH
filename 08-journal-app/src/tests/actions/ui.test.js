import {
  setErrorAction,
  removeErrorAction,
  startLoadingAction,
  finishLoadingAction,
} from '../../actions/ui';
import {types} from '../../types/types';

describe('Pruebas en ui-actions', () => {
  test('todas las acciones deben de funcionar', () => {
    const action = setErrorAction('Help!!');

    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'Help!!',
    });

    const removeError = removeErrorAction();
    const startLoading = startLoadingAction();
    const finishLoading = finishLoadingAction();

    expect(removeError).toEqual({
      type: types.uiRemoveError,
    });

    expect(startLoading).toEqual({
      type: types.uiStartLoading,
    });

    expect(finishLoading).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
