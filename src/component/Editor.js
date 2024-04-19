import React, {useState} from 'react';
import Markdown from 'markdown-to-jsx';

const Editor = () => {

  const [data, setData] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
        <div style={{display: 'flex'}}>
            <LeftSection data={data} setData={setData} selectedIndex={selectedIndex}/>
            <RightSection data={data} selectedIndex={selectedIndex}/>
        </div>
        <div>
            <button onClick={()=>{setData(prevValue=>[...prevValue, "# Enter title here"])}}>ADD Notes +</button>
            <div>
                {data.map((markdown, index)=><div onClick={()=>{setSelectedIndex(index)}} style={{width: "100px", margin: "10px", height: "50px", backgroundColor: selectedIndex===index ? "red" : "yellow"}}>{markdown} <button onClick={()=>{setData(prevData=>{
                    const newData = [...prevData]
                    newData.splice(selectedIndex, 1)
                    return newData
                })}}>Delete</button></div>)}
            </div>
        </div>
    </>

  )
}

const LeftSection = ({data, setData, selectedIndex})=>{
    return (
        <>
            <textarea value={data[selectedIndex]} onChange={(e)=>{

                setData(prevData=>{
                    const newData = [...prevData]
                    newData.splice(selectedIndex, 1, e.target.value)
                    return newData
                })

            }} cols={100} rows={20}/>
        </>
    )
}

const RightSection = ({data, selectedIndex})=>{
    return(
        <>
            <Markdown>
                {data[selectedIndex]}
            </Markdown>
        </>
    )
}

export default Editor