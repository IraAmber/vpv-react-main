import React from 'react'
import WheelComponent from "@zcorefinance/react-wheel-of-prizes";
import '../components/styles/DiscountRoulette.css'


const DiscountRoulette = () => {
  const segments = [
    "Упс!",
    "10% знижки",
    "5% знижки",
    "Упс!",
    "20% знижки",
    "15% знижки"
  ];
  const segColors = [
    "black",
    "gray",
    "black",
    "gray",
    "black",
    "gray"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  const customStyle = {
    outerBorderWidth: 1, // Товщина зовнішнього рамки
    outerBorderColor: "black", // Колір зовнішнього рамки
    innerBorderWidth: 1, // Товщина внутрішнього рамки
    innerBorderColor: "white", // Колір внутрішнього рамки
    primaryColor: "black", // Колір стрілки і обводки сегмента
    contrastColor: "white", // Колір тексту сегмента
    buttonText: "Старт", // Текст кнопки
    isOnlyOnce: true, // Дозволити більше одного спроби
    size: 190, // Розмір спінера
    upDuration: 400, // Тривалість обертання вгору (в мілісекундах)
    downDuration: 500, // Тривалість обертання вниз (в мілісекундах)
    fontFamily: 'Montserrat', // Шрифт тексту сегмента
    centerX: 300, // Горизонтальне положення центру спінера в контейнері
    centerY: 300, // Вертикальне положення центру спінера в контейнері
    numberPrefix: 'Результат: ',
    ww: 660,
    hh: 550,
  };

  return (
    <div className="DiscountRoulette-container">
      <h2>Твоя знижка</h2>
      <div className="DiscountRoulette-spinner">
        <WheelComponent
      
          segments={segments}
          segColors={segColors}
          // winningSegment="MM"
          onFinished={(winner) => onFinished(winner)}
          {...customStyle}
        />
      </div>
    </div>
  );
}
export default DiscountRoulette;
