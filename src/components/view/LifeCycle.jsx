import { ClassComponent } from "../oldSchool/ClassComponent"
import { FunctionComponent } from "../oldSchool/FunctionComponent"

function LifeCycle() {
    return(
        <div className="grid grid-cols-2 gap-4">
            <ClassComponent/>
            <FunctionComponent/>
        </div>
    )
}

export default LifeCycle