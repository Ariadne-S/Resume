import {FC} from "react";
import styled from "styled-components";

const Experience:  FC = () => {
  return (
      <div>
          <h3>Experience</h3>
          <h4>WORK180</h4>
          <Timeline />
          <p>WORK180 is a fully remote start-up that works with employers to improve organizational standards that raise the bar for women in the workplace with a presence in Australia, United Kingdom and the United States of America.</p>
      </div>
  )
}

const Timeline: FC = () => {
    return (
        <TimeLineUl>
            <li data-year="2019" data-text="Junior Software Engineer"/>
            <li data-year=" " data-text=" "/>
            <li data-year="2021" data-text="Software Engineer"/>
            <li data-year=" " data-text=" "/>
        </TimeLineUl>
    )
}

const TimeLineUl = styled.ul`
    width:800px;
    height: 20px;
    list-style: none;
    text-align: justify;
    margin: 50px auto;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, #31435d 51%, rgba(255,255,255,0) 57%, rgba(255,255,255,0) 100%);

    &:after {
        display: inline-block;
        content: "";
        width: 100%;
    }
    
    li {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #31435d;
        text-align: center;
        line-height: 1.2;
        position: relative;
        border-radius: 50%;
        margin: 0 96px;

        &:before {
            display: inline-block;
            content: attr(data-year);
            font-size: 16px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
             top: -20px;
        }
        
        &:after {
            display: inline-block;
            content: attr(data-text);
            font-size: 14px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            bottom: 0;
            margin-bottom: -10px;
            transform: translate(-50%, 100%);
        }
   
        &:first-child {
          margin-left: 5px;
        }
    }
`



export default Experience;