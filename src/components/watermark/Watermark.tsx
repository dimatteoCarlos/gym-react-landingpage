// import './style-watermark.css'

type WatermarkPropType={text:string; className:string;}
function Watermark({ text, className}:WatermarkPropType) {

  return (
    <>
      <h1 className={`watermark ${className} `}>{text}</h1>
    </>
  );
}

export default Watermark;
