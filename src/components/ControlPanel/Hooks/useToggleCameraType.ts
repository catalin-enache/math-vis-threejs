import { useCallback } from 'react';
import { STANDARD_CONTROL_EVENT_TYPE, EVENT_TYPE } from 'src/constants.ts';

export const useToggleCameraType = () => {
  return useCallback(() => {
    window.dispatchEvent(
      new CustomEvent(EVENT_TYPE.STANDARD_CONTROL, {
        detail: { type: STANDARD_CONTROL_EVENT_TYPE.CAMERA_TYPE }
      })
    );
  }, []);
};
