
import Slider from "react-slick";
import "./style.scss";
import arrow from "../../assets/images/arrow.svg"
import { useState } from "react";

interface IProps {
  data: {
    image: string,
    info: Array<string>
  }[]
}

export const HorizontalSlideShow: React.FC<IProps> = ({data}) => {
  const [activeInfo, setActiveInfo] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const dataSlick = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: any, next: any) => {
      setCurrentItem(next);
      if (current !== next) {
        setActiveInfo(false)
      }
    },
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nextArrowCustom`}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prevArrowCustom`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

  function CheckScale(index: number) {
    if(currentItem + 1 === index || currentItem - 1 === index || (index - currentItem) === -(data.length - 1) || (index - currentItem) + 1 === data.length){
      return "scale"
    }
    return ""
  }

  return (
    <div className="sliderBox">
      <div className="container">
        <Slider {...dataSlick}>
          {data?.map((item, index) => (
            <div key={index} className={`sliderBox__item ${CheckScale(index)} ${index}`}>
              <div className="sliderBox__image"><img src={item.image} alt="image" /></div>
              <div className="sliderBox__body">
                <div className="sliderBox__body__title" onClick={() => {setActiveInfo(!activeInfo)}}>{activeInfo ? <span>−</span> : <span>+</span>} List</div>
                {activeInfo && <div className="sliderBox__body__content">
                  <ul>{item.info?.map((value: any, i: any) => (
                    <li key={i}>{value}</li>
                  ))}</ul>
                </div>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
} 