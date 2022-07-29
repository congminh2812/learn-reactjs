import React, { useState } from "react";
import TodoList from "../todo/components/TodoList";
import AlbumList from "./components/AlbumList";

AlBumFeature.propTypes = {};

function AlBumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Cho Thứ Tư",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/cover/1/e/7/1/1e7199445965b226616d83618867e5d3.png",
    },
    {
      id: 2,
      name: "Nhạc Cho Thứ Tư 2",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/cover/1/e/7/1/1e7199445965b226616d83618867e5d3.png",
    },
    {
      id: 3,
      name: "Nhạc Cho Thứ Tư 3",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/cover/1/e/7/1/1e7199445965b226616d83618867e5d3.png",
    },
  ];

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  return (
    <div>
      {/* <h2>Nhạc cho thứ tư</h2> */}
      {/* <AlbumList albumList={albumList} /> */}
    </div>
  );
}

export default AlBumFeature;
