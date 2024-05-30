import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import car from "../assets/models/car.glb";
import ioscar from "../assets/models/car.usdz";
import car1 from "../assets/models/Car1.glb";
import ioscar1 from "../assets/models/Car1.usdz";
import chair2 from "../assets/models/chair2.glb";
import ioschair2 from "../assets/models/chair2.usdz"
import sofa from "../assets/models/sofa.glb";
import isosofa from "../assets/models/sofa.usdz"
import chair3 from "../assets/models/chair3.glb";
import ioschair3 from "../assets/models/chair3.usdz";
import chloe from "../assets/models/chloe.glb";
import ioschloe from "../assets/models/chloe.usdz";
import sideboard from "../assets/models/sideboard.glb";
import iossideboard from "../assets/models/sideboard.usdz";
import sofa2 from "../assets/models/sofa2.glb";
import iossofa from "../assets/models/sofa2.usdz";












// navigation Data
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shop",
      url: "/best-selling",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Events",
      url: "/events",
    },
  
    {
      title: "Room Planner",
      url: "/RoomPlannerPage",
    },
    {
      title: "About",
      url: "/faq",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
    {
      title: "Contact",
      url: "/faq",
    },
  ];
  
    // branding data
    export const brandingData = [
      {
        id: 1,
        title: "Free Shipping",
        Description: "From all orders over 100$",
        icon: (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H5.63636V24.1818H35"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M34.9982 1H11.8164V18H34.9982V1Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M11.8164 7.18164H34.9982"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
          </svg>
        ),
      },
      {
        id: 2,
        title: "Daily Surprise Offers",
        Description: "Save up to 25% off",
        icon: (
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M30.7 2L29.5 10.85L20.5 9.65"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
          </svg>
        ),
      },
      {
        id: 4,
        title: "Affortable Prices",
        Description: "Get Factory direct price",
        icon: (
          <svg
            width="32"
            height="35"
            viewBox="0 0 32 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M16 28V22"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
          </svg>
        ),
      },
      {
        id: 5,
        title: "Secure Payments",
        Description: "100% protected payments",
        icon: (
          <svg
            width="32"
            height="38"
            viewBox="0 0 32 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
          </svg>
        ),
      },
    ];
    
    // categories data
    export const categoriesData = [
      {
        id: 1,
        title: "Computers and Laptops",
        subTitle: "",
        image_Url:
          "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
      },
      {
        id: 2,
        title: "cosmetics and body care",
        subTitle: "",
        image_Url:
          "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
      },
      {
        id: 3,
        title: "Accesories",
        subTitle: "",
        image_Url:
          "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
      },
      {
        id: 4,
        title: "Cloths",
        subTitle: "",
        image_Url:
          "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
      },
      {
        id: 5,
        title: "Shoes",
        subTitle: "",
        image_Url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
      },
      {
        id: 6,
        title: "Gifts",
        subTitle: "",
        image_Url:
          "https://securecdn.pymnts.com/wp-content/uploads/2014/11/Gifts-Photo-700x489.jpg",
      },
      {
        id: 7,
        title: "Pet Care",
        subTitle: "",
        image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
      },
      {
        id: 8,
        title: "Mobile and Tablets",
        subTitle: "",
        image_Url:
          "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
      },
      {
        id: 9,
        title: "Music and Gaming",
        subTitle: "",
        image_Url:
          "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
      },
      {
        id: 10,
        title: "Others",
        subTitle: "",
        image_Url:
          "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
      },
    ];
    



















    // product Data
    export const productData = [
      {
        id: 1,
        category:"Computers and Laptops",
        modelSrc: chair2,
        iOSSrc: ioschair2,
        
        name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
        description:
          "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          annotations: [
            {
              title: "comfortable-back",
              slot: "hotspot-1",
              position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
              normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
              orbit: "10.89188deg 119.9775deg 0.03543022m",
              target: "-0.1053838m 0.01610652m 0.1076345m"
            }, {
              title: "comfortable-seat",
              slot: "hotspot-2",
              position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
              normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
              orbit: "10.89188deg 119.9775deg 0.03543022m",
              target: "-0.1053838m 0.01610652m 0.1076345m"
            },
          ],

          
        image_Url: [
          {
            public_id: "test",
            url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
          },
          {
            public_id: "test",
            url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
          },
        ],
        shop: {
          name: "Apple inc.",
          shop_avatar: {
            public_id: "test",
            url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
          },
          ratings: 4.2,
        },
        price: 1099,
        discount_price: 1049,
        rating: 4,
        total_sell: 35,
        stock: 10,
      },
      
    ];
    




























    export const footerProductLinks = [
      {
        name: "About us",
        link: "/about"
      },
      {
        name: "Careers",
        link: "/carrers"
      },
      {
        name: "Store Locations",
      },
      {
        name: "Our Blog",
      },
      {
        name: "Reviews",
      },
    ];
    
    export const footercompanyLinks = [
      {
        name: "Game & Video",
      },
      {
        name: "Phone &Tablets",
      },
      {
        name: "Computers & Laptop",
      },
      {
        name: "Sport Watches",
      },
      {
        name: "Events",
      },
    ];
    
    export const footerSupportLinks = [
      {
        name: "FAQ",
      },
      {
        name: "Reviews",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Shipping",
      },
      {
        name: "Live chat",
      },
    ];
    