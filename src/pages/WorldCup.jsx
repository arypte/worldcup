import { useEffect } from 'react';
import animalData from '../animalData.json';
import { useState } from 'react';
import AnimalCard from '../components/AnimalCard';
import WinAnimalCard from '../components/WinanimalCard';

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState(); // 초기값 비어있음.
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  // onclickchoice (e) => 랑 차이점 체크 스프레드 문법으로 체크
  const onClickChoice = (v) => () => {
    //setNextRound(v);
    setChoice(choice + 2);
    setNextRound([...nextRound, v]);
    // [ 기존선택요소 , 새로추가 동물]
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(nextRound), [nextRound]);

  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
    // 넥스트 라운드에 담긴 동물들을 서플 애니멀로 옮긴다.
    // 넥스트 라운드 초기화
    // 16강 -> 8강
    // 초이스 0
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? '결승' : end + ' 강'}`}</div>
              <div>VS</div>
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
