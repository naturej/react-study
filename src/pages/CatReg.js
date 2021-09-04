import { useState } from "react";

const CatReg = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(catName);
    console.log(breed);
    console.log(url);
    console.log(desc);
    console.log(country);
    console.log(lifespan);
    console.log(hair);
  };

  const [catName, setCatName] = useState('');
  const [breed, setBreed] = useState('품종1');
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [country, setCountry] = useState('국가1');
  const [lifespan, setLifespan] = useState('');
  const [hair, setHair] = useState('장모');

  return (
    <main>
      <h1>Cat Register</h1>
      <form onSubmit={handleSubmit}>
        이름 : <input type="text" id="name" value={catName} onChange={event => setCatName(event.target.value)} placeholder="이름" /><br/> 
        품종 : <select id="breed" value={breed} onChange={event => setBreed(event.target.value)}>
          <option value="품종1">품종1</option>
          <option value="품종2">품종2</option>
          <option value="품종3">품종3</option>
          <option value="품종4">품종4</option>
        </select><br/>
        이미지 url : <input type="text" id="url" value={url} onChange={event => setUrl(event.target.value)} placeholder="이미지 url" /><br/>
        설명 : <input type="text" id="desc" value={desc} onChange={event => setDesc(event.target.value)} placeholder="설명" /><br/>
        국가 : <select value={country} onChange={event => setCountry(event.target.value)}>
          <option value="국가1">국가1</option>
          <option value="국가2">국가2</option>
          <option value="국가3">국가3</option>
          <option value="국가4">국가4</option>
        </select><br/>
        예상수명 : <input type="number" id="lifespan" value={lifespan} onChange={event => setLifespan(event.target.value)} />년<br/>
        affectionate level: <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select><br/>
        털길이 : 
        <label>
          <input type="radio" value="장모" name="hair" checked={hair === "장모"} onChange={event => setHair(event.target.value)} /> 장모
        </label>
        <label>
          <input type="radio" value="단모" name="hair" checked={hair === "단모"} onChange={event => setHair(event.target.value)} /> 단모
        </label>
        <label>
          <input type="radio" value="이중모" name="hair" checked={hair === "이중모"} onChange={event => setHair(event.target.value)} /> 이중모
        </label><br/>
        <button type="submit">확인</button>
      </form>
    </main>
  );
};
export default CatReg;
