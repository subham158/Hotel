import CallMadeIcon from "@mui/icons-material/CallMade";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import GroupIcon from "@mui/icons-material/Group";
import KingBedIcon from "@mui/icons-material/KingBed";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BathroomIcon from "@mui/icons-material/Bathroom";

const Rooms = () => {
  return (
    <>
      <section className="px-5">
        <h4 className="text-center text-secondary">Rooms</h4>
        <div class="row justify-content-center gap-5 p-5 ">
          <div class="col-100 col-lg-5 ">
            <div class="card text-secondary shadow">
              <div class="col-12">
                <div
                  id="DeluxeRoomCarousel"
                  class="carousel carousel-dark slide  "
                  // data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#DeluxeRoomCarousel"
                      data-bs-slide-to="0"
                      class="active bg-light"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#DeluxeRoomCarousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                      className="bg-light"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#DeluxeRoomCarousel"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                      className="bg-light"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#DeluxeRoomCarousel"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                      className="bg-light"
                    ></button>
                  </div>
                  <div class="carousel-inner  rounded-top">
                    <div
                      class="carousel-item active"
                      data-bs-interval="2000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/bf1b1129.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="3000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/f1da2696.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="4000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/f2695fe7.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="5000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/4f905a82.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#DeluxeRoomCarousel"
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
                    data-bs-target="#DeluxeRoomCarousel"
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
              <div class="card-header pt-4">
                <h5>Deluxe Room</h5>
              </div>
              <div class="card-body">
                <p class="card-title fw-bold">Popular Amenities</p>
                <div className=" d-flex flex-wrap gap-3 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <AcUnitIcon style={{ fontSize: "15px" }} /> Air Conditioning
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <NetworkWifiIcon style={{ fontSize: "15px" }} /> Free Wifi
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <GroupIcon style={{ fontSize: "15px" }} /> Sleeps 2
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <KingBedIcon style={{ fontSize: "15px" }} /> Double Bed
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <ConnectedTvIcon style={{ fontSize: "15px" }} /> Flat Screen
                    TV
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <KitchenIcon style={{ fontSize: "15px" }} /> Refrigirator
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <BathroomIcon style={{ fontSize: "15px" }} /> Private
                    Bathroom
                  </div>
                </div>
                <p className="card-text pb-3">
                  Our deluxe room offers luxury and comfort with a double-sized
                  bed and modern amenities. Enjoy free Wi-Fi, a flat-screen TV,
                  and a cozy seating area. Perfect for a relaxing stay, book
                  your room today!
                </p>

                <a
                  class="pt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#DeluxeModal"
                >
                  More details <CallMadeIcon style={{ fontSize: "15px" }} />{" "}
                </a>
              </div>
            </div>
          </div>
          {/* ============== */}
          <div class="col-100 col-lg-5">
            <div class="card text-secondary shadow">
              <div class="col-12">
                <div
                  id="SuperDeluxeRoomCarousel"
                  class="carousel carousel-dark slide "
                  // data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#SuperDeluxeRoomCarousel"
                      data-bs-slide-to="0"
                      class="active bg-light"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#SuperDeluxeRoomCarousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                      className="bg-light"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#SuperDeluxeRoomCarousel"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                      className="bg-light"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#SuperDeluxeRoomCarousel"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                      className="bg-light"
                    ></button>
                  </div>
                  <div class="carousel-inner  rounded-top">
                    <div
                      class="carousel-item active"
                      data-bs-interval="2000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/04851dd7.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="3000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/6e66d607.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="4000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/a67149e1.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div
                      class="carousel-item"
                      data-bs-interval="5000"
                    >
                      <img
                        src="https://images.trvl-media.com/lodging/102000000/101920000/101910200/101910137/11a9a1f0.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#SuperDeluxeRoomCarousel"
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
                    data-bs-target="#SuperDeluxeRoomCarousel"
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

              <div class="card-header pt-4">
                <h5> Super Deluxe Room</h5>
              </div>
              <div class="card-body">
                <p class="card-title fw-bold">Popular Amenities</p>
                <div className=" d-flex flex-wrap gap-3 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <AcUnitIcon style={{ fontSize: "15px" }} /> Air Conditioning
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <NetworkWifiIcon style={{ fontSize: "15px" }} /> Free Wifi
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <GroupIcon style={{ fontSize: "15px" }} /> Sleeps 2
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <KingBedIcon style={{ fontSize: "15px" }} /> Double Bed
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <ConnectedTvIcon style={{ fontSize: "15px" }} /> Flat Screen
                    TV
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <KitchenIcon style={{ fontSize: "15px" }} /> Refrigirator
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <BathroomIcon style={{ fontSize: "15px" }} /> Private
                    Bathroom
                  </div>
                </div>
                <p className="card-text pb-3">
                  Our super deluxe room provides an elevated experience with a
                  double-sized bed, premium furnishings, and top-notch
                  amenities. Enjoy free Wi-Fi, a flat-screen TV, a minibar, and
                  a spacious work desk. Ideal for both business and leisure,
                  book your stay today!
                </p>
                {/* Modal Trigger */}
                <a
                  class="pt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#SuperDeluxeModal"
                >
                  More details <CallMadeIcon style={{ fontSize: "15px" }} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Deluxe Modal */}

      <div
        class="modal fade"
        id="DeluxeModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5"
                id="exampleModalLabel"
              >
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Super Deluxe Modal --> */}
      <div
        class="modal fade"
        id="SuperDeluxeModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5"
                id="exampleModalLabel"
              >
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
