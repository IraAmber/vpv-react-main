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
    buttonText: "Start", // Текст кнопки
    isOnlyOnce: true, // Дозволити більше одного спроби
    size: 190, // Розмір спінера
    upDuration: 500, // Тривалість обертання вгору (в мілісекундах)
    downDuration: 600, // Тривалість обертання вниз (в мілісекундах)
    fontFamily: 'Montserrat' // Шрифт тексту сегмента
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
   
        />
      </div>
    </div>
  );
}
export default DiscountRoulette;
