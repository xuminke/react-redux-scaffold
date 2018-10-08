import { message } from '../utils/label';

export const API_URL = 'PROXYSERVER';
// request per hour
export const TIMER = 1000 * 60 * 60;
export const COMMON_LENGTH = 256;
export const PASSWORD_LENGTH = 64;
export const USER_ID_LENGTH = 16;
export const LEVEL_LIST = [
  {
    key: 1,
    value: 'Level1',
  },
  {
    key: 2,
    value: 'Level2',
  },
  {
    key: 3,
    value: 'Level3',
  },
  {
    key: 4,
    value: 'Level4',
  },
  {
    key: 5,
    value: 'Level5',
  },
  {
    key: 6,
    value: 'Level6',
  },
  {
    key: 7,
    value: 'Level7',
  },
  {
    key: 8,
    value: 'Level8',
  },
];
export const ROLE_LIST = ['administrator', 'approver', 'applyer'];
export const DEFAULT_ACTIONS_LIST = ['vm', 'user_common', 'change_password', 'represent_setting', 'represent_change'];
export const NAME_LENGTH = 50;
export const INPUT_WIDTH = { width: 200 };
export const FORM_ITEM_LAYOUT = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10, offset: 1 },
};
export const RUN_ON_SERVER_LIST = other => {
  return other ? [
    {
      name: message('Label_RUN_ON_SERVER_business'),
      value: 'business',
    },
    {
      name: message('Label_RUN_ON_SERVER_managed'),
      value: 'managed',
    },
    {
      name: message('Label_RUN_ON_SERVER_other'),
      value: 'other',
    },
  ] : [
    {
      name: message('Label_RUN_ON_SERVER_business'),
      value: 'business',
    },
    {
      name: message('Label_RUN_ON_SERVER_managed'),
      value: 'managed',
    },
  ];
};
export const MODE_TYPE_LIST = {
  job: 'Label_Mode_Type_Job',
  recovery: 'Label_Mode_Type_Recovery',
};
export const RECOVERY_MODE_LIST ={
  auto: 'Label_RUN_MODE_AUTO',
  manual: 'Label_RUN_MODE_MANUAL'
};
export const RECOVERY_RUN_MODE_LIST = [
  {
    name: message('Label_RUN_MODE_MANUAL'),
    value: 'manual',
  },
  {
    name: message('Label_RUN_MODE_AUTO'),
    value: 'auto',
  }
];
export const APPLY_STATUS = {
  created: 'Label_Status_Created',
  applied: 'Label_Status_Applied',
  process: 'Label_Status_Process',
  finished: 'Label_Status_Finished',
  removed: 'Label_Status_Removed',
};
export const TASK_STATUS = {
  unexecuted: 'Label_Status_Unexecuted',
  executing: 'Label_Status_Executing',
  executingWaiting: 'Label_Status_ExecutingWaiting',
  successEnd: 'Label_Status_SuccessEnd',
  successEnd: 'Label_Status_SuccessEnd',
  failEnd: 'Label_Status_FailEnd',
  recoveryExecuting: 'Label_Status_RecoveryExecuting',
  recoveryExecutingWaiting: 'Label_Status_RecoveryExecutingWaiting',
  recoverySuccessEnd: 'Label_Status_RecoverySuccessEnd',
  recoverySuccessEndInefficiency: 'Label_Status_RecoverySuccessEndInefficiency',
  recoveryFailEnd: 'Label_Status_RecoveryFailEnd',
  cancle: 'Label_Status_Cancel',
  forceEnd: 'Label_Status_ForceEnd',
  Inefficiency: 'Label_Status_Inefficiency',
};
export const APPLY_JOB_CONTENT = {
  patch: 'Label_Job_Content_Patch',
  other: 'Label_Job_Content_Other',
};
export const APPLY_JOB_RUN_MODE = {
  timeExecute: 'Label_Apply_Run_Mode_Auto',
  manualExecute: 'Label_Apply_Run_Mode_Manual',
};
export const APPROVE_RESULT = {
  agree: 'Label_Approve_Result_Agress',
  veto: 'Label_Approve_Result_Veto',
}

export const OS_TYPE_LIST = ['windows', 'linux', 'solaris'];
export const JOB_PERIOD_LIST = [
  {
    name: message('label_One_Week'),
    value: 24 * 60 * 60 * 1000 * 7,
  },
  {
    name: message('label_One_Month'),
    value: 24 * 60 * 60 * 1000 * 30,
  },
  {
    name: message('label_Three_Month'),
    value: 24 * 60 * 60 * 1000 * 30 * 3,
  },
];
export const OS_TYPES = ['windows', 'linux', 'solaris'];
export const SERVER_STATUS = {
  noCommunication: 'Label_Status_Nocommunication',
  executing: 'Label_Status_Executing',
  idling: 'Label_Status_Idling',
};
