import { React, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

//to notify the App Component
interface Props {
  onClick: (statusname: String) => void;
}
const Like = ({ onClick }: Props) => {
  let isLiked: string;
  const [status, setStatus] = useState(false);
  isLiked = status ? "You unliked the post" : "You Liked the post";
  const toggle = () => {
    setStatus(!status);
    onClick(isLiked);
  };
  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />; //pass the status to the parent with onClick function
  return <AiOutlineHeart size={20} color="#ff6b81" onClick={toggle} />; //pass the status to the parent with onClick function
};

export default Like;
