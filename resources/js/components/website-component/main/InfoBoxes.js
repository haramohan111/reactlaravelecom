import React from 'react'

function InfoBoxes() {
    return (
        <div>
                      <div className="info-boxes wow fadeInUp">
            <div className="info-boxes-inner">
              <div className="row">
                <div className="col-md-6 col-sm-4 col-lg-4">
                  <div className="info-box">
                    <div className="row">
                      <div className="col-xs-12">
                        <h4 className="info-box-heading green">money back</h4>
                      </div>
                    </div>
                    <h6 className="text">30 Days Money Back Guarantee</h6>
                  </div>
                </div>
                {/* .col */}
                <div className="hidden-md col-sm-4 col-lg-4">
                  <div className="info-box">
                    <div className="row">
                      <div className="col-xs-12">
                        <h4 className="info-box-heading green">free shipping</h4>
                      </div>
                    </div>
                    <h6 className="text">Shipping on orders over $99</h6>
                  </div>
                </div>
                {/* .col */}
                <div className="col-md-6 col-sm-4 col-lg-4">
                  <div className="info-box">
                    <div className="row">
                      <div className="col-xs-12">
                        <h4 className="info-box-heading green">Special Sale</h4>
                      </div>
                    </div>
                    <h6 className="text">Extra $5 off on all items </h6>
                  </div>
                </div>
                {/* .col */} 
              </div>
              {/* /.row */} 
            </div>
            {/* /.info-boxes-inner */} 
          </div>
        </div>
    )
}

export default InfoBoxes
