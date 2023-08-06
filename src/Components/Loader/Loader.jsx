import { DotSpinner } from '@uiball/loaders';
import './Loader.css';

function Loader(){
    return(
        <div className="loader">
            <DotSpinner 
                size={60}
                speed={0.9} 
                color="black" 
                />
        </div>
    )
}

export default Loader