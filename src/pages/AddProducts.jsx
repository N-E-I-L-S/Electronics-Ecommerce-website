import React, { useRef } from 'react'

export default function AddProducts() {
    const name = useRef()
    const id =useRef()
    const company =useRef()
    const price =useRef()
    const color =useRef()
    const image =useRef()
    const description =useRef()
    const category =useRef()
       function handlesubmit (){
       fetch('http://localhost:3001/products/',{
       method : 'POST',
       mode : 'cors',
        body :JSON.stringify({
             id: id.current.value,
             name : name.current.value,
             company : company.current.value,
             price : price.current.value,
             color :color.current.value,
             image : image.current.value,
             description : description.current.value,
             category : category.current.value,
        }),
       headers : {
        'Content-type' : 'application/json' 
        }}).then(async (res)  => {
            const res1 = await res.json()
            console.log(res1)
        }) 
        .catch(err => console.log(err))}
    return (
        <>
                <div className="addproducts-page">
          
                    <div className="addproduct-div">
                        <label htmlFor="">ID:</label>
                        <input type="text" ref={id}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Name:</label>
                        <input type="text" ref={name}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Company:</label>
                        <input type="text" ref={company}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Price:</label>
                        <input type="text" ref={price}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Colors:</label>
                        <input type="text" ref={color}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Image:</label>
                        <input type="text" ref={image}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Description:</label>
                        <input type="text" ref={description}/>
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="">Category:</label>
                        <input type="text" ref={category}/>
                    </div>
                    <div className="addproducts-div">
                    <button onClick={handlesubmit}>Add Product</button>
                    </div>
                </div>
        </>
    )
}
