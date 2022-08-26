import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectList from "../../components/projects/list";
import Sort from "../../components/projects/sort";
import AddNew from "../../components/tenants/add_user_button";
import BottomNavigation from "../../components/tenants/bottom_navigation";
import SubHeader from "../../components/tenants/header"
import { getContractors } from '../../redux/action/contractors';
import { getTenants } from "../../redux/action/tenants";




function ProjectsList() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContractors())
        dispatch(getTenants())
    }, [])




    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
                <SubHeader title={'Projects'} backUrl={'/dashboard'} />
                <Sort />
            </header>

            <div>
                <ProjectList />
                <AddNew href={'/projects/form'} />
            </div>



            <BottomNavigation />
        </div>
    )



}


export default ProjectsList;