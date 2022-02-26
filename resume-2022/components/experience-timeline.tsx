import {FC} from "react";
import styled from "styled-components";

const Timeline: FC = () => {
    return (
        <>
        <TimeLineUl>
            <li data-year="2019" data-text="Junior Software Engineer"/>
            <li className={"pale"} data-year=" " data-text=" "/>
            <li data-year="2021" data-text="Software Engineer"/>
            <li className={"pale"} data-year=" " data-text=" "/>
        </TimeLineUl>
        <Print>
             <div>
                 2019 | Junior Software  Engineer
             </div>
            <div>
                2021 | Software  Engineer
            </div>
        </Print>
        </>
    )
}

const Print = styled.div`
    @media screen {
        display: none;
    }
    
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`

const TimeLineUl = styled.ul`
    @media print {
        display: none;
    }

    width:100%;
    height: 2rem;
    list-style: none;
    text-align: justify;
    margin: 40px auto;
    margin-bottom: 60px;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, #31435d 51%, rgba(255,255,255,0) 57%, rgba(255,255,255,0) 100%);
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    
    &:after {
        display: inline-block;
        content: "";
    }
    
    li {
        width: 20px;
        height: 20px;
        background: #31435d;
        text-align: center;
        line-height: 1.2;
        position: relative;
        border-radius: 50%;
        margin: auto;

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
            width: 16vw;
            bottom: 0;
            margin-bottom: -5px;
            transform: translate(-50%, 100%);
        }
  
        
        &.pale {
            background: #91a0b7;
        }
    }
    
    @media print {
        display: none;
    }
`



export default Timeline;