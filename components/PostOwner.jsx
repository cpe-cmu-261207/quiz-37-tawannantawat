import React from "react";

export default function PostOwner(props) {
  return <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/handsome.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{props.name}</span>
  </div>
  <span>{props.massage}</span>
  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">{props.likes}</span>
  </div>
  <hr className="m-0" />
</div>;
}
