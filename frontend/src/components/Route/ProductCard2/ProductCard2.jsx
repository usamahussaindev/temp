import React, { useRef, useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import LazyLoad from "react-lazyload";
import QRCode from "qrcode.react";
import Help from "./Help";
import "./model.css";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard"; // Import your ProductDetailsCard component here

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [ARSupported, setARSupported] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const model = useRef();

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setARSupported(true);
    }
  }, []);

  const addToWishlist = () => {
    setClick(!click);
    // Add logic to handle wishlist functionality
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleAnnotateClick = (annotation) => {
    const { orbit, target, position } = annotation;
    model.current.cameraTarget = position;
    model.current.orbit = target;
  };

  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <div className="flex justify-end"></div>
      <div className="model-view" style={{ position: "relative" }}>
        <model-viewer
          key={data.id}
          ref={model}
          style={{ backgroundColor: "#ffff", overflowX: "hidden", posterColor: "#eee", width: "100%", height: ARSupported ? "85%" : "75%", borderRadius: 15, position: "relative" }}
          src={data.modelSrc} // Assuming data.modelSrc contains the URL for the 3D model
          ios-src={data.iOSSrc}
          alt="A 3D model"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
        >
          {/* AR Button */}
          {ARSupported && (
            <button slot="ar-button" className="arbutton">
              View in your space
            </button>
          )}

          {/* Fullscreen Button */}
          <button className="fullscreen-btn" onClick={toggleFullscreen}>
            &#x26F6;<span>full screen</span>
          </button>

          {/* Close Button and Help Button */}
          {display ? (
            <>
              <button
                className={document.fullscreenElement ? "close fz" : "close"}
                onClick={() => setDisplay(false)}
              >
                &#10006;
              </button>
              <Help />
            </>
          ) : (
            <button className="help-btn" onClick={() => setDisplay(true)}>
              ?<span>help</span>
            </button>
          )}

          {/* Annotation Button */}
          <button
            className="annotate-btn"
            onClick={() => setAnnotate((prevState) => !prevState)}
          >
            i
          </button>

          {/* Annotations */}
          {annotate &&
            data.annotations.map((annotation, idx) => (
              <button
                key={idx}
                className="Hotspot"
                slot={annotation.slot}
                data-position={annotation.position}
                data-normal={annotation.normal}
                data-orbit={annotation.orbit}
                data-target={annotation.target}
                data-visibility-attribute="visible"
                onClick={() => handleAnnotateClick(annotation)}
              >
                <div className="HotspotAnnotation">{annotation.title}</div>
              </button>
            ))}
        </model-viewer>

        {/* QR code overlay */}
        {!ARSupported && showQRCode && (
          <div className="qr-overlay">
            <QRCode
              id={data.name}
              value={window.location.href}
              size={210}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin
            />
          </div>
        )}

        {/* Product Details */}
        <LazyLoad>
          <div className="product-details">
            <div>
              <div className="pname">{data.name}</div>
              <div className="rating-sec">
                <div>Rating</div>
                <div>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
              </div>
              <div>{data.price}</div>
              {!ARSupported && (
                <h5>Scan the QR code for AR View on mobile</h5>
              )}
            </div>
            <div className="add-icon">+</div>
          </div>
        </LazyLoad>
      </div>

      {/* Wishlist and Quick View Icons */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={addToWishlist}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={addToWishlist}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => setOpen(!open)}
          color="#444"
          title="Add to cart"
        />
        {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
      </div>

      {/* Button to toggle QR code display */}
      {!ARSupported && (
        <button className="qr-button" onClick={() => setShowQRCode(!showQRCode)}>
          Show QR Code
        </button>
      )}
    </div>
  );
};

export default ProductCard;