import { Link, Redirect } from "react-router-dom";

export const ErrorPage = () =>{
      


    return(
        localStorage.getItem("token")?
        
        <div className="container my-4">
        <div className="row p-4 align items-center border shadow-lg">
            <div className="col-lg-7 p-3">
                <h3 className="display-4 fw-bold">
                    You are not authorised to view this page.
                    
                </h3>
                <h4>
                    Please Contact Admin for any changes.
                </h4>
                
                <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                    <Link className="btn main-color btn-lg text-white mt-3" to={"/search"}>
                        Get more books
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">

            </div>
        </div>
        

    </div>
    :
    <Redirect to="/login"/>
    );

}

