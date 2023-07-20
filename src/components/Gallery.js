import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../assets/images/DSC00018.JPG";
import img2 from "../assets/images/IMG_1589.JPG";
import img3 from "../assets/images/IMG_2049.JPG";
import img4 from "../assets/images/IMG_2057.jpg";
import img5 from "../assets/images/IMG_2060.JPG";
import img6 from "../assets/images/IMG_2076.JPG";
import img7 from "../assets/images/IMG_2084.JPG";
import img8 from "../assets/images/IMG_2127.PNG";
import img9 from "../assets/images/IMG_2130.PNG";
import img10 from "../assets/images/IMG_3008.JPG";
import img11 from "../assets/images/IMG_3031.JPG";
import img12 from "../assets/images/IMG_7442.JPG";
import img13 from "../assets/images/IMG_7757.JPG";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTemptImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTemptImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
