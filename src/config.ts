export type SceneSize = {
  width: number;
  height: number;
};

export type Config = {
  cameraType: 'perspective' | 'orthographic';
  orthographicCameraRatio: number;
  controlPanelExpanded: boolean;
  showScenarioSelect: boolean;
  objectsToCheckIfVisibleInCamera: 'all' | 'screenInfo' | undefined;
  checkVisibleInFrustumUsing: 'position' | 'boundingBox';
};

export const config: Config = {
  cameraType: 'perspective',
  orthographicCameraRatio: 100,
  controlPanelExpanded: true,
  showScenarioSelect: true,
  objectsToCheckIfVisibleInCamera: 'screenInfo',
  checkVisibleInFrustumUsing: 'position'
};
