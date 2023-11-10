export enum EVENT_TYPE {
  THREE = 'THREE',
  CONTROL = 'CONTROL'
}

export enum THREE_EVENT_TYPE {
  OBJECT_SELECTED = 'OBJECT_SELECTED',
  OBJECT_TRANSFORM = 'OBJECT_TRANSFORM',
  SCENE_READY = 'SCENE_READY',
  POINTER_MOVE = 'POINTER_MOVE',
  POINTER_CLICK = 'POINTER_CLICK',
  POINTER_DOWN = 'POINTER_DOWN',
  POINTER_UP = 'POINTER_UP',
  OBJECT_HIT = 'OBJECT_HIT',
  SCENE_RESIZE = 'SCENE_RESIZE'
}

export enum CONTROL_EVENT_TYPE {
  CAMERA_TYPE = 'CAMERA_TYPE',
  OBJECT_TRANSFORM = 'OBJECT_TRANSFORM'
}

export const CONTROLS_AREA_WIDTH = 330;