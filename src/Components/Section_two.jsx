"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import p1 from "../app/assets/12.jpg";
import p2 from "../app/assets/11.jpg";
import p3 from "../app/assets/2.jpg";
import p4 from "../app/assets/3.jpg";
import p5 from "../app/assets/5.jpg";
import p6 from "../app/assets/6.jpg";
import p7 from "../app/assets/7.jpg";
export default function Section_two() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 6]);

  const pics = [
    {
      src: p1,
      scale: scale4,
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "",
      w: 72,
      h: 72,
    },
    {
      src: p2,
      scale: scale5,
      top: "170px",
      left: "345px",
      right: "auto",
      bottom: "",
      w: 52,
      h: 96,
    },
    {
      src: p3,
      scale: scale6,
      top: "35px",
      left: "575px",
      right: "auto",
      bottom: "",
      w: 96,
      h: 52,
    },
    {
      src: p4,
      scale: scale7,
      top: "260px",
      left: "885px",
      right: "auto",
      bottom: "",
      w: 60,
      h: 60,
    },
    {
      src: p5,
      scale: scale8,
      top: "520px",
      left: "auto",
      right: "330px",
      bottom: "",
      w: 56,
      h: 32,
    },
    {
      src: p6,
      scale: scale9,
      top: "auto",
      left: "auto",
      right: "575px",
      bottom: 0,
      w: 60,
      h: 60,
    },
    {
      src: p7,
      scale: scale5,
      top: "auto",
      left: "345px",
      right: "208px",
      bottom: 0,
      w: 64,
      h: 56,
    },
  ];
  return (
    <>
      <div ref={container} className=" w-full h-[300vh] bg-black relative ">
        <div className="  sticky h-[100vh] bg-black top-0 w-full overflow-hidden">
          {pics.map((items, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale: items.scale }}
                className="flex items-center justify-center w-[100%] h-[100%]  absolute top-0"
              >
                <motion.div
                  className={`w-${items.w} h-${items.h} top-[${items.top}] left-[${items.left}] right-[${items.right}] bottom-${items.bottom}  absolute `}
                >
                  <Image
                    className=" w-full h-full object-cover "
                    src={items.src}
                    placeholder="blur"

                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
