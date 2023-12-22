import React, { useRef, useState } from 'react';
import Card from "./Card";
import styled from 'styled-components';
export default function CardSlider({data,title}) {
  const [showControls,setShowControls] = useState(false);
  const [sliderposition,setsliderpositiion] = useState(0);
  const listRef = useRef();
  return<Container> <div className='flex'>{
        data.map((movie,index)=> {
return<Card movieData={movie} index={index} key={movie.id} />
        })
    }
    </div>
    </Container>
  
}
const Container = styled.div``;