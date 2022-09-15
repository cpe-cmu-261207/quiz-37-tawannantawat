import React from "react";
import { comments } from "../libs/comments";
import Reply from "./Reply";

export default function Comment(props) {
  console.log(props.comments)
  return (
    <div>
      {/* Entire Comment div */}

      <div className="d-flex gap-2 my-2">
          <img
            src={props.imgsrc}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{props.name}</span>
            <br />
            <span>{props.comment}</span>
            {props.likes > 0? (
            <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{props.likes} คน</span>
          </div>
          ) : ""}
 
            
          </div>
        </div>

      {/*render Reply here... */}
      {props.reply.map((x) => (
        <Reply
          key={x.username}
          imgsrc={x.userImagePath}
          name={x.username}
          reply={x.replyText}
          likes={x.likeNum}
        />
      ))}
    </div>
  );
}
