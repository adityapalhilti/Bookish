import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox : React.FC<{book:BookModel | undefined , mobile : boolean }> = (props) => {
    return(
        <div className={props.mobile ? 'card-d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    
                    {props.book &&props.book.copiesAvailable && props.book.copiesAvailable>0 ?
                        <h4 className="text-success">Available</h4>
                        :
                        <h4 className="text-danger">Wait List</h4>                        
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies} </b>
                            Copies
                        </p>
                        
                    </div>

                </div>
                <Link to='/login' className='btn btn-success btn-lg'>Sign in</Link>
                <hr/>
                <p className="mt-3 text-main-color">
                    Limited Stock.<br/>
                </p>
            </div>

        </div>
    );
}