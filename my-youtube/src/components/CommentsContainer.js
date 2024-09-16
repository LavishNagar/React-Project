
const commentsdata=[
    {
        name:"Lavish",
        text:"Lavish is a MERN Developer"
    },
    {
        name:"Lavish",
        text:"Lavish is a MERN Developer"
    },
    {
        name:"Lavish",
        text:"Lavish is a MERN Developer"
    },
    {
        name:"Lavish",
        text:"Lavish is a MERN Developer"
    },
]
const Comment=({data})=>{
    const {name,text}=data;
    return(
        <div className="flex bg-gray-200 rounded-sm">
            <img className="w-12 h-12" alt="user" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"/>
            <p className="font-bold">{name}</p>
            
            <p className="relative top-[20px] left-[-50px]">{text}</p>

     
        </div>
        
    )
}

const CommentContainer=()=>{
    return(
        <div className="m-2 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
           <Comment data={commentsdata[0]}/>
        </div>
    )
}

export default CommentContainer;