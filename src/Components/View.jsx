import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setdropVideoResponse}) {

    const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

   const[allVideos,setAllVideos]=useState([])

   useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
   },[uploadVideoResponse,deleteVideoResponse])

   const getAllVideos = async()=>{
    const result = await getAllUploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      console.log(result.data);
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
    }
   }
  
  //  console.log(allVideos);
  const dragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop=async (e)=>{
    const {videoId,CategoryId}= JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,CategoryId);
    const {data}= await getVideoCategoryAPI()
    console.log(data);
    const selectedCategory=data.find(item=>item.id==CategoryId)
    let result =selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory= {id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(CategoryId,newCategory)
    console.log(res);
    setdropVideoResponse(res)
  }
   

  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={4} lg={3}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        )):<p className='text-damger fw-bolder'>Nothing to display</p>
      }
      
      
    </Row>
      
    </>
  )
}

export default View
