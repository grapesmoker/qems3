import { createReducer, on } from '@ngrx/store';
import { saveDistribution } from '../../../distribution/distribution.actions';
import { QemsState, Distribution } from '../../../../types/models';


export const initialState: QemsState = {
    distributions: [],
    categories: []
};

const _distributionReducer = createReducer(
    initialState,
    on(saveDistribution, (state, { dist }) => ({
        ...state, distributions: state.distributions.map(
            item => item.id === dist.id ? dist : item
        )}
    ))
)

export function distributionReducer(state, action) {
    return _distributionReducer(state, action)
}