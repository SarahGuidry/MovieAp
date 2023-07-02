import React from 'react';
import { Link } from 'react-router-dom'

const VerifyAddTypeModal = () => {
    return (<div id="verifyAddTypeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Verify Add Movie Type</h4>
                    </div>
                    <div className="modal-body">
                        <p>Would you like to add a movie manually or search IDMB's website?</p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                        <Link to='/movies/search' className="btn btn-danger" value="Search for Movie">Search for Movie</Link>
                        <Link to='/movies/add' className="btn btn-primary" value="Add Manually" >Add Manually</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default VerifyAddTypeModal;
