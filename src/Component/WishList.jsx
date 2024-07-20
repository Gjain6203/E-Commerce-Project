import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

function WishList() {
  const WishItem = useSelector((state) => state.AllItem.wish);

  console.log(WishItem);

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        {WishItem.map((value) => (
          <>
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
              <MDBCard className="h-50px">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <MDBCardImage
                  src={value.image}
                  position="top"
                  alt="Product Image"
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        {value.title}
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>{}</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{value.title}</h5>
                    <h5 className="text-dark mb-0">${value.price}</h5>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    {/* <p className="text-muted mb-0">
                  Available: <span className="fw-bold"></span>
                </p> */}
                    <div className="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default WishList;
