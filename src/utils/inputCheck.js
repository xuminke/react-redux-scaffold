import { message } from './label';
//symbal RegExp in []: /[!"#$&'()*+,\- ./@\[\]\\^_`{|}~:;<=>?]/
const passwordRegExp = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z!"#$&'()*+,\- ./@\[\]\\^_`{|}~:;<=>?]+$)(?![a-z0-9]+$)(?![a-z!"#$&'()*+,\- ./@\[\]\\^_`{|}~:;<=>?]+$)(?![0-9!"#$&'()*+,\- ./@\[\]\\^_`{|}~:;<=>?]+$)[a-zA-Z0-9!"#$&'()*+,\- ./@\[\]\\^_`{|}~:;<=>?]{8,64}$/;

export const passwordValid = (rule, value, callback) => {
  if(passwordRegExp.test(value)) {
    callback();
  } else {
    callback( new Error(message('Validation_User_Password_Format')));
  }
};

export const roleValid = list => (rule, value, callback) => {
  if(list.every(item => item.name !== value)) {
    callback();
  } else {
    callback( new Error(message('Validation_Role_Name_Repeat')));
  }
};

export const userId = (rule, value, callback) => {
  if (value && !/^[a-zA-Z0-9_\-]*$/.test(value)) {
    callback(new Error(message('Validation_User_Id_Rule_Required')));
  } else {
    callback();
  }
};

export const ipValid = (rule, value, callback) => {
  if (value && !/^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(value)) {
    callback(new Error(message('Validation_IP_Format_Required')));
  } else {
    callback();
  }
};

export const parameterName = (rule, value, callback) => {
  if (value && !/^[a-zA-Z0-9]*$/.test(value)) {
    callback(new Error(message('Validation_Parameter_Check_Required')));
  } else {
    callback();
  }
};

export const softwareNoCheck = (rule, value, callback) => {
  if (value && !/^[a-zA-Z0-9]{0,16}$/.test(value)) {
    callback(new Error(message('Validation_Software_No_Check_Required')));
  } else {
    callback();
  }
};

export const checkNameRepeat = (list, name, errorMessage) => (rule, value, callback) => {
  if (value && list && list.length > 0 && list.find(item => item.name === value)) {
    if (name && name === value) {
      callback();
    } else {
      callback(new Error(errorMessage));
    }
  } else {
    callback();
  }
}

export const checkIPRepeat = list => (rule, value, callback) => {
  if(!value || list.every(item => item.ip !== value)) {
    callback();
  } else {
    callback(new Error(message('Validation_IP_Repeat')));
  }
};

export const checkVMRepeat = list => (rule, value, callback) => {
  if(!value || list.every(item => item.vm !== value)) {
    callback();
  } else {
    callback(new Error(message('Validation_VM_Name_Repeat')));
  }
};
