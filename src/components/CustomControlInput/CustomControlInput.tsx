/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputNumber } from 'src/components/InputNumber';
import { InputSelect } from 'components/InputSelect/InputSelect.tsx';
import type { CustomControl } from 'src/types.ts';
import { useCallback } from 'react';
import { CUSTOM_CONTROL_EVENT_TYPE, EVENT_TYPE } from 'src/constants.ts';
import { InputBoolean } from 'components/InputBoolean/InputBoolean.tsx';

type CustomControlInputProps = CustomControl & {
  className: string;
};
export const CustomControlInput = (props: CustomControlInputProps) => {
  const { type, name, className, label, value, ...rest } = props;
  const handleChange = useCallback(
    (value: any) => {
      // This is dispatched from Scene as well as from CustomControlInput
      // Now, when, dispatched from here,
      // the scene listens and update the dictionary of custom controls (updating the value for current name),
      // the ControlPanel also listens and re-renders.
      // When the ControlPanel re-renders, it will re-render the CustomControlInput
      // passing in the new value (dispatched from here)
      window.dispatchEvent(
        new CustomEvent(EVENT_TYPE.CUSTOM_CONTROL, {
          detail: {
            type: CUSTOM_CONTROL_EVENT_TYPE.VALUE_CHANGED,
            name,
            value
          }
        })
      );
    },
    [name]
  );
  return type === 'float' || type === 'integer' ? (
    <InputNumber
      type={type}
      className={className}
      label={label}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  ) : type === 'select' ? (
    <InputSelect
      className={className}
      value={value}
      label={label}
      onChange={handleChange}
      {...rest}
    />
  ) : type === 'boolean' ? (
    <InputBoolean
      className={className}
      value={value}
      label={label}
      onChange={handleChange}
      {...rest}
    />
  ) : null;
};
