/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { config } from 'src/config';
import { init, SceneObjects } from 'src/scene';

import basic, { setConfig as basicSetConfig } from 'scenarios/basic/basic';
import second, {
  setConfig as secondSetConfig
} from 'scenarios/second/second.ts';

const scenarioMap = {
  basic: {
    config: basicSetConfig,
    run: basic
  },
  second: {
    config: secondSetConfig,
    run: second
  }
};

export const ScenarioSelect = () => {
  const [sceneObjects, setSceneObjects] = useState<SceneObjects | null>(null);
  const searchParams = new URLSearchParams(window.location.search);
  const scenario = (searchParams.get('scenario') ||
    'basic') as keyof typeof scenarioMap;

  useEffect(() => {
    if (!searchParams.get('scenario')) {
      searchParams.set('scenario', Object.keys(scenarioMap)[0]);
      window.location.search = searchParams.toString();
    }
  }, [searchParams]);

  const handleSceneChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      searchParams.set('scenario', evt.target.value);
      window.location.search = searchParams.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    console.log('scenario', scenario);
    const updatedConfig = scenarioMap[scenario].config({ ...config });
    const sceneObjects: SceneObjects = init(updatedConfig);
    scenarioMap[scenario].run(sceneObjects);
    setSceneObjects(sceneObjects);
  }, [scenario]);

  return (
    <div>
      <div>
        <div>Scene Select</div>
        <select value={scenario} onChange={handleSceneChange}>
          {Object.keys(scenarioMap).map((scene) => (
            <option key={scene}>{scene}</option>
          ))}
        </select>
      </div>
      {sceneObjects && <ControlPanel scene={sceneObjects} />}
    </div>
  );
};
