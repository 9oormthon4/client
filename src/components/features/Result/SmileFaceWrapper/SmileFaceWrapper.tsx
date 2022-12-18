import { FaceImg } from './SmileFaceWrapper.styled';

interface SmileFaceProps {
  score: number;
}

const SmileFaceWrapper: React.FC<SmileFaceProps> = ({score}) => {
  const smiles = (score:number) => {
    return Array.from({length: score}).map((_, index) => <FaceImg src="/smile-icon.png" key={index}/>);
  };

  const unsmiles = (score: number) => {
    return Array.from({length: score}).map((_, index) => <FaceImg src="/unsmile-icon.png" key={index}/>);
  };

  return (
    <div>
      <>{smiles(score)}</>
      <>{unsmiles(Number(5 - score))}</>
    </div>
  );
};

export default SmileFaceWrapper;
