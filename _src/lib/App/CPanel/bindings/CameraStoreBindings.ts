import { useAppStore } from 'src/store';
import type { onChange } from './bindingTypes';

export const CameraStoreBindings = () => ({
  cameraControl: {
    label: 'Control ( N )',
    view: 'radiogrid',
    groupName: 'cameraControl',
    size: [2, 1],
    cells: (x: number, _y: number) => ({
      title: x === 0 ? 'Orbit' : 'Fly',
      value: x === 0 ? 'orbit' : 'fly'
    }),
    onChange: ((_, evt: any) => {
      useAppStore.getState().setCameraControl(evt.value);
    }) as onChange
  },
  cameraType: {
    label: 'Type ( C )',
    view: 'radiogrid',
    groupName: 'cameraType',
    size: [2, 1],
    cells: (x: number, _y: number) => ({
      title: x === 0 ? 'Perspective' : 'Orthographic',
      value: x === 0 ? 'perspective' : 'orthographic'
    }),
    onChange: ((_, evt: any) => {
      useAppStore.getState().setCameraType(evt.value);
    }) as onChange
  },
  attachDefaultControllersToPlayingCamera: {
    label: 'Attach default controllers when Playing custom camera ( ] )',
    view: 'toggle',
    onChange: ((_, evt) => {
      useAppStore.getState().setAttachDefaultControllersToPlayingCamera(evt.value);
    }) as onChange
  }
});
