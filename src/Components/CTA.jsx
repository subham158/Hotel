import style from "./CTA.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const CTA = () => {
  return (
    <section className={`${style.container} container w-100 col-xxl-8 px-5 py-3`}>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12  col-lg-5">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner rounded-4 shadow">
              <div
                class="carousel-item active"
                data-bs-interval="2000"
              >
                <img
                  src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/6e66d607.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="000">
                <img
                  src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/ad929488.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img
                  src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/099b3717.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img
                  src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/b2c52dee.jpg?impolicy=resizecrop&rw=1200&ra=fit "
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* --------------------- */}
        <div class=" col-12 col-lg-7">
          <h4 class="fw-bold text-secondary lh-1 mb-4">
            Experience Comfort and Convenience: Our Inviting Hotel Room
          </h4>
          <p class="lead mb-4  text-secondary" style={{ fontSize: "18px" }}>
            Step into comfort and convenience at our charming hotel room. Stay
            connected with complimentary Wi-Fi, or unwind with your favorite
            shows on the flat-screen TV. Refresh in the sleek in-room bathroom
            equipped with all the essentials, and start your day right with a
            steaming cup of coffee from the in-room maker. Whether you're here
            for business or leisure, our inviting hotel room ensures a pleasant
            stay for all.
          </p>
          <hr />
          <div class="d-grid gap-2 d-md-flex justify-content-md-start text-secondary">
            <div className="col-md-6">
              <div className="row text-center">
                <div className="col-2 themed-grid-col d-flex align-items-center justify-content-center">
                  <PhoneIcon style={{ fontSize: "18px" }} />
                </div>
                <div className="col-10 themed-grid-col">
                  <div className="row">
                    <div className="col-12">
                      <p
                        className=" text-body-tertiary text-start"
                        style={{ fontSize: "16px" }}
                      >
                        Reservation
                      </p>
                    </div>
                    <div className="col-12">
                      <p className=" text-start" style={{ fontSize: "16px" }}>
                        +91 9911633339
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row text-center">
                <div className="col-2 themed-grid-col d-flex align-items-center justify-content-center">
                  <EmailIcon style={{ fontSize: "20px" }} />
                </div>
                <div className="col-10 themed-grid-col">
                  <div className="row">
                    <div className="col-12">
                      <p
                        className="text-body-tertiary text-start"
                        style={{ fontSize: "16px" }}
                      >
                        Email
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="text-start" style={{ fontSize: "16px" }}>
                        amahiinn30gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
