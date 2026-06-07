import axios from "axios";
import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";

function UrlShortner() {
  let [shortLink, setShortLink] = useState("http://localhost:5173/");
  let [showQR, setShowQR] = useState(false);
  let [data, setData] = useState([]);
  let i = 0;

  async function handleClick() {
    const url = document.getElementById("url").value;
    await axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/shortner`, {
        fullUrl: url,
      })
      .then((res) => {
        setShortLink(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/${res.data}`,
        );
        // console.log(res);
      })
      .catch((err) => console.log(err));
    setShowQR(false);
    getData();
  }

  async function getData() {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/fulldata`)
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);

  async function deleteData(id) {
    // console.log(id);
    await axios
      .delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/delete/` + id)
      .then((res) => {
        getData();
      });
  }

  function addIt() {
    return (
      <div className="text-center mb-3">
        <label style={{ fontWeight: "bold" }}>Paste your Url here </label>
        <div className="d-flex justify-content-center ">
          <div>
            <input
              type="text"
              placeholder="https://expressjs.com/en/starter/hello-world.html"
              id="url"
              className="pb-0"
            />
            <input
              type="button"
              value={"Generate"}
              onClick={handleClick}
              className="pb-0"
            />
          </div>
          {/* <div>
            <a href={shortLink} id="display" target="_blank">
              {shortLink}
            </a>
            <input
              type="button"
              value={"Copy"}
              onClick={async () => {
                await navigator.clipboard.writeText(shortLink);
                alert("Copied to clipboard");
              }}
            />
          </div> */}
          <div>
            {/* <input
          type="button"
          value={"Create QR"}
          onClick={() => {
            setShowQR(true);
          }}
        /> */}
            {/* <QRCodeCanvas value={shortLink} size={150} /> */}
            {/* {showQR && } */}
          </div>
        </div>
      </div>
    );
  }

  if (data.length < 1) {
    ++i;
    // console.log(data, i);

    return (
      <div>
        {addIt()}
        <h2 className="text-center">No data to display</h2>
      </div>
    );
  }
  return (
    <div>
      {addIt()}
      <>
        <div className="album py-3 pb-5 mb-3">
          <div className="container ">
            <div className="row">
              {data.map((item, index) => {
                let canvasEl = null;

                const printQR = async () => {
                  if (!canvasEl) {
                    return;
                  }
                  const dataUrl = canvasEl.toDataURL("image/png");

                  const win = window.open(dataUrl);
                  win.document.write(`<img src="${dataUrl}" />`);
                  await win.open();
                  await win.print();
                  await win.close();
                };

                return (
                  <div key={item._id} className="">
                    <div className="card mb-4 box-shadow">
                      <div className="text-center pt-4">
                        <QRCodeCanvas
                          value={`${
                            import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL
                          }/${item.shortLink}`}
                          size={150}
                          ref={(el) => {
                            // console.log(el, " ", ++i);
                            // console.log(el?.querySelector("canvas"), " ", i);
                            canvasEl = el;
                            // console.log(canvasEl, " :Canvas", i);
                          }}
                        />
                      </div>

                      {/* <img
                    className="card-img-top"
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                    alt="Thumbnail [100%x225]"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_199103f6a46%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_199103f6a46%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2267.20000076293945%22%20y%3D%22117.54000034332276%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    data-holder-rendered="true"
                  /> */}
                      {/* style={{ height: "225px", width: "100%", display: "block" }} */}
                      {/* style="height: 225px; width: 100%; display: block;" */}
                      <div className="card-body">
                        <div className="card-text">
                          <label>full link:-&nbsp;</label>
                          <a
                            href={`${
                              import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL
                            }/${item.shortLink}`}
                            id="display"
                            target="_blank"
                          >
                            {`${item.fullLink}`}
                          </a>
                          <br />
                          <label>short link:&nbsp;</label>
                          <a
                            href={`${
                              import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL
                            }/${item.shortLink}`}
                            id="display"
                            target="_blank"
                          >
                            {`${
                              import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL
                            }/${item.shortLink}`}
                          </a>
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={async () => {
                                await navigator.clipboard.writeText(
                                  `${
                                    import.meta.env
                                      .VITE_REACT_APP_BACKEND_BASE_URL
                                  }/${item.shortLink}`,
                                );
                                alert("Copied to clipboard");
                              }}
                            >
                              copy url
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={printQR}
                            >
                              Print QR
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => {
                                deleteData(item._id);
                              }}
                            >
                              delete
                            </button>
                          </div>
                          {/* <small className="text-muted">9 mins</small> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default UrlShortner;
