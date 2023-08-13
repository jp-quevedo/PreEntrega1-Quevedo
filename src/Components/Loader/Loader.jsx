import './Loader.css';
import { DotSpinner } from '@uiball/loaders';

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