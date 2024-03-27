import { useState } from "react";
import HookUseState from "../HookUseState";

export const Hook = () => {
  
  const [chosenItem, setChosenItem] = useState('useState')
  
    const renderHookComponent = () => {
        switch (chosenItem) {
            case 'useState':
                return <HookUseState/>
            case 'useEffect':
                return <></>
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
        </ul>
      </div>
      <div className="divider divider-horizontal divider-primary"></div>
      <div className="w-full">
        {renderHookComponent()}
      </div>
    </div>
  );
}