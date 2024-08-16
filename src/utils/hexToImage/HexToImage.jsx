import React, { useEffect } from "react";

export const HexToImage = ({ hexValues, name }) => {
  useEffect(() => {
    const convert = () => {
      // hexValues.forEach((hexValue, index) => {
      let cleanedHex = hexValues.replace(/[^A-Fa-f0-9]/g, "");

      if (cleanedHex.length % 2) {
        console.log(`Cleaned hex string length is odd for image ${name}.`);
        return;
      }

      let binary = new Array();

      for (let i = 0; i < cleanedHex.length / 2; i++) {
        let h = cleanedHex.substr(i * 2, 2);
        binary[i] = parseInt(h, 16);
      }

      let byteArray = new Uint8Array(binary);
      console.log(byteArray);
      let img = document.querySelector(`.${name}-${name}`);

      // if (img) {
      //   img.src = window.URL.createObjectURL(
      //     new Blob([byteArray], { type: "application/octet-stream" })
      //   );
      // }
      // });
    };

    convert();
  }, [hexValues, name]);

  return (
    // <div className={`image-container ${name}`}>
    //   {hexValues.map((_, index) => (
    <img
      // key={index}
      className={`${name}-${name}`}
      alt={`Converted Image ${name}`}
      style={{ width: "90px", height: "90px", borderRadius: "50%" }}
      src={`data:image/jpeg;base64,${base64}`}
    />
    //   ))}
    // </div>
  );
};

export const separateHex = (hex) => {
  const res = hex.split(":");
  return res[0];
};