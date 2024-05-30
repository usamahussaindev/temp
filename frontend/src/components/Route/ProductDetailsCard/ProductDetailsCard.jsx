import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import QRCode from "qrcode.react";
import styles from "../../../styles/styles";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handleMessageSubmit = () => { };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    const modelViewer = document.querySelector("model-viewer");

    if (!fullscreen) {
      if (modelViewer.requestFullscreen) {
        modelViewer.requestFullscreen();
      } else if (modelViewer.mozRequestFullScreen) {
        modelViewer.mozRequestFullScreen();
      } else if (modelViewer.webkitRequestFullscreen) {
        modelViewer.webkitRequestFullscreen();
      } else if (modelViewer.msRequestFullscreen) {
        modelViewer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className={`fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center ${fullscreen ? 'fullscreen' : ''}`}>
          <div className="w-[90%] h-[90vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1 size={30} className="absolute right-3 top-3 z-50" onClick={() => setOpen(false)} />

            <div className="block w-full flex">
              <div className="w-[70%]">
                <model-viewer
                  src={data.modelSrc} // Assuming data.modelSrc contains the URL for the 3D model
                  alt="A 3D model"
                  camera-controls
                  auto-rotate
                  style={{ width: "100%", height: "700px" }}
                ></model-viewer>
                {showQRCode && (
                  <div className="qr-overlay">
                    <QRCode value={window.location.href} />
                    <button
                      className="close-qr-button absolute top-2 right-2 bg-white rounded-full p-2 z-50"
                      onClick={() => setShowQRCode(false)}
                    >
                      <RxCross1 size={20} />
                    </button>
                  </div>
                )}
              </div>

              <div className="w-[30%] p-4">
                <h1 className={`${styles.productTitle} text-[20px] mb-4`}>
                  {data.name}
                </h1>
                <p className="mb-4">{data.description}</p>

                <div className="flex items-center mb-4">
                  <h4 className={`${styles.productDiscountPrice} mr-2`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mb-4">
                  <button
                    className="bg-gray-200 text-gray-800 font-medium px-4 py-2 mr-2"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-2">
                    {count}
                  </span>
                  <button
                    className="bg-gray-200 text-gray-800 font-medium px-4 py-2 ml-2"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center mb-4">
                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer mr-2"
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer mr-2"
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Add to wishlist"
                    />
                  )}
                  <AiOutlineShoppingCart
                    size={30}
                    className="cursor-pointer"
                    color="#333"
                    title="Add to cart"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <button
                    className="bg-gray-200 text-gray-800 font-medium px-4 py-2"
                    onClick={toggleFullscreen}
                  >
                    {fullscreen ? <BsArrowsFullscreen size={20} /> : <BsArrowsFullscreen size={20} />}
                  </button>
                  <button
                    className="bg-gray-200 text-gray-800 font-medium px-4 py-2 ml-2"
                    onClick={() => setShowQRCode(!showQRCode)}
                  >
                    Show QR Code
                  </button>
                </div>

                <div
                  className={`${styles.button} bg-[#000] rounded-[4px] h-11 flex items-center justify-center`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
