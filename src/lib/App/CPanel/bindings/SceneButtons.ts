import { useAppStore } from 'src/store';
import { focusCamera } from 'lib/utils';
import type { CommonGetterParams, onChange } from './bindingTypes';

// keys are not relevant for buttons
export const SceneButtons = ({ isPlaying, sceneObjects: { camera, scene } }: CommonGetterParams) => ({
  0: {
    label: 'Full Screen Toggle( \\ | F11(native) )',
    title: 'Toggle Full Screen',
    onClick: (() => {
      useAppStore.getState().toggleFullscreen();
    }) as onChange
  },
  1: {
    label: 'Focus Camera ( F )',
    title: 'Focus Selected Object',
    onClick: (() => {
      focusCamera({
        camera,
        // @ts-ignore
        orbitControls: scene.orbitControlsRef.current,
        // @ts-ignore
        transformControls: scene.transformControlsRef.current
      });
    }) as onChange
  },
  2: {
    label: 'Show Helpers ( CAS+H )',
    title: 'Toggle Helpers',
    onClick: (() => {
      useAppStore.getState().toggleShowHelpers();
    }) as onChange
  },
  3: {
    label: 'Show Gizmos ( CAS+G )',
    title: 'Toggle Gizmos',
    onClick: (() => {
      useAppStore.getState().toggleShowGizmos();
    }) as onChange
  },
  4: {
    label: 'Play/Stop ( Space|CAS+Space )',
    title: isPlaying ? 'Stop' : 'Play',
    onClick: (() => {
      useAppStore.getState().togglePlaying();
    }) as onChange
    // TODO: we need play/pause/stop state
    // label: 'Play State ( Space|CAS+Space )',
    // view: 'radiogrid',
    // groupName: 'playState',
    // size: [2, 1],
    // cells: (x: number, _y: number) => ({
    //   title: x === 0 ? 'Play' : 'Stop',
    //   value: x === 0 ? false : true
    // }),
    // onChange: ((_, evt) => {
    //   useAppStore.getState().setPlaying(evt.value);
    // }) as onChange
  }
});