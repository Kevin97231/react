import { ClassComponent } from "../oldSchool/ClassComponent"

function LifeCycle() {
    return(
        <div className="grid grid-cols-2 gap-4">
            <ClassComponent/>
            <>Composant fonction</>
        </div>
    )
}

export default LifeCycle