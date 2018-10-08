import { LabelHash } from '../locale/label';

export const message = key => {
  return (key && LabelHash[key]) || key || '';
};
