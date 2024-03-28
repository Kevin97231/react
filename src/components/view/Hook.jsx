import { useState } from "react";
import HookUseState from "../hookView/HookUseState";
import {HookUseEffect} from "../hookView/HookUseEffect";
import { HookUseMemo } from "../hookView/HookUseMemo";
import { CustomHook } from "../hookView/CustomHook";


export const Hook = () => {
  
  const [chosenItem, setChosenItem] = useState('useState')
  
    const renderHookComponent = () => {
      switch (chosenItem) {
        case 'useState':
            return <HookUseState/>
        case 'useEffect':
            return <HookUseEffect/>
        case 'useMemo':
          return <HookUseMemo/>
        case 'customHook':
          return <CustomHook/>
        default:
          return <></>
      }
    }

    return (
    <div className="flex">
      <div>
        <ul className="menu w-56 [&_li>*]:rounded-none">
            {/* Voir si on peut récup le texte contenu entre les 2 balise <a></a> */}
          <li onClick={() => setChosenItem('useState')}>
            <a>useState</a>
          </li>
          <li onClick={() => setChosenItem('useEffect')}>
            <a>useEffect</a>
          </li>
          <li onClick={() => setChosenItem('useMemo')}>
            <a>useMemo</a>
          </li>
          <li onClick={() => setChosenItem('customHook')}>
            <a>customHook</a>
          </li>
        </ul>
      </div>
      <div className="divider divider-horizontal divider-primary"></div>
      <div className="w-full">
        {renderHookComponent()}
      </div>
    </div>
  );
}