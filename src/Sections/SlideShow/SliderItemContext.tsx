import React, { createContext } from "react";
import VideoSamp from "../../images/videoSamp.png";
import Photography from "../../images/photography.png";
import Social from "../../images/social.png";
import Pr from "../../images/pr.png";
import Radio from "../../images/radio.png";

export const SlideItems = [
  {
    label: "Video",
    image: VideoSamp,
    text: `A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote
            the movie that was waiting to be written to our movie-loving target audience, and encourage them to
            enter.`,
    isActive: true,
    isLandscape: true,
  },
  {
    label: "Photography",
    image: Photography,
    text: `Shots posted on Facebook and Instagram every day inspired thousands of entries. We reacted to the storyline as it developed in real time, selecting and treating the next image according to the day’s winning scene. `,
    isActive: false,
    isLandscape: false,
  },
  {
    label: "Social",
    image: Social,
    text: `The complete movie storyboard showcased the entire story, completely inspired by stunning images captured in the Whitsundays, with all 20 winning scenes accompanying the images.`,
    isActive: false,
    isLandscape: true,
  },
  {
    label: "PR",
    image: Pr,
    text: `We enlisted the help of Craig Pearce as script supervisor, who was tasked with choosing the winner each day to ensure the story flowed properly, and providing daily writing tips to encourage people to take part.`,
    isActive: false,
    isLandscape: false,
  },
  {
    label: "Radio",
    image: Radio,
    text: `Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.`,
    isActive: false,
    isLandscape: false,
  },
];

export const SliderItemContext = createContext<null | any>(null);
