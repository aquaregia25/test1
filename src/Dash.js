import React from 'react'
import { useState } from 'react'



export const Dash = () => {

    const [data, setData] = useState([
        {
            "name": "My First Blog",
            "text": "78",
            "sn": 1,
            "like": 0,
            "dislike": 0
        }
    ]);
    let sub = (e) => {
        e.preventDefault();
        // console.log('hiii')

        let obj = {};
        obj['name'] = document.getElementById('username').value;
        obj['text'] = document.getElementById('text').value;
        obj['sn'] = data[data.length-1].sn + 1
        obj['like'] = 0
        obj['dislike'] = 0

        setData([...data, obj]);
        document.getElementById('modaltitle').innerHTML='Hello  '+obj.name+'!';
        document.getElementById('modalbody').innerHTML='you have succesfully Shared Post with Post No. : '+obj.sn;
        document.getElementById('imaginaryclick').click();
        console.log(data);
        document.getElementById('mainform').reset();

    }
    let del = (item) => {
        document.getElementById('modaltitle').innerHTML='Hello  '+item.name+'!';
        document.getElementById('modalbody').innerHTML='you have succesfully deleted Post with Post No. : '+item.sn;
        document.getElementById('imaginaryclick').click();

        setData(data.filter((e) => { return e !== item }))
    }



    let edit = (item) => {
        let id = 'savebtn' + item.sn;
        let btn = document.getElementById(id);
        btn.style.display = 'inline-block';
        let id1 = 'editbtn' + item.sn
        let btn1 = document.getElementById(id1)
        btn1.style.display = 'none'
        let textid = 'text' + item.sn
        let selecttext = document.getElementById(textid)
        selecttext.disabled = false

    }
    let saveedit = (item) => {
        document.getElementById('modaltitle').innerHTML='Hello  '+item.name+'!';
        document.getElementById('modalbody').innerHTML='you have succesfully Edited Post with Post No. : '+item.sn;
        document.getElementById('imaginaryclick').click();
        let id = 'savebtn' + item.sn;
        let btn = document.getElementById(id);
        btn.style.display = 'none';
        let id1 = 'editbtn' + item.sn
        let btn1 = document.getElementById(id1)
        btn1.style.display = 'inline-block'
        let textid = 'text' + item.sn
        let selecttext = document.getElementById(textid)
        selecttext.disabled = true
    }


    let like = (item) => {

        // console.log(item)
        let x = item.like + 1;
        // console.log(data)

        setData(
            data.map(initem =>
                initem.sn === item.sn
                    ? { ...initem, like: x }
                    : initem
            ))
        // console.log(data)

        // setData( [{...item,'like':item.like}]);
    }
    let dislike = (item) => {


        let x = item.dislike + 1;

        setData(
            data.map(initem =>
                initem.sn === item.sn
                    ? { ...initem, dislike: x }
                    : initem
            ))
    }

    const style = { display: 'none' }

    return (
        <div className="container">

            <center>
                <form onSubmit={sub} id='mainform' className='mt-5 mb-5 postform' >
                    <h1>Create Post</h1>
                    <div className="mb-3">
                        {/* <label for="username" className="form-label">Username</label> */}
                        <input type="text" className="form-control" id="username" placeholder="UserName" required />
                    </div>
                    <div className="mb-3">
                        {/* <label for="text" className="form-label">text</label><br /> */}
                        <textarea name="text" className="form-control" id="text" placeholder="Message to Sent" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Share</button>
                </form></center>


            <div className="posts ">{data.map((info) => {
                return <center> <div className='mt-5 mb-5'>  <hr /><form className='postform'>
                    <b><h2>Post : {info.sn}</h2></b>
                    <div className="mb-3">
                        <h3> Username : {info.name} </h3>

                    </div>
                    <div className="mb-3">
                        {/* <label for="text" className="form-label"><h3>text</h3></label><br /> */}
                        <textarea name="text" className="form-control" onChange={(e1) => {
                            setData(
                                data.map(e =>
                                    info.sn === e.sn
                                        ? { ...e, text: e1.target.value }
                                        : e
                                ))
                        }} id={"text" + info.sn} value={info.text} disabled></textarea>
                    </div>
                </form>
                    <button className="btn btn-success me-3" onClick={() => { like(info) }}>like : {info.like}</button>
                    <button className='btn btn-info me-3' onClick={() => { dislike(info) }} >dislike : {info.dislike}</button>
                    <br />
                    <br />

                    <button className="btn btn-danger me-3" onClick={() => { del(info) }} >delete</button>
                    <button className='btn btn-dark me-3' id={'editbtn' + info.sn} onClick={() => { edit(info) }}>Edit-text</button>
                    <button className='btn btn-primary me-3' style={style} id={'savebtn' + info.sn} onClick={() => { saveedit(info) }}>Save</button>

                    <hr /></div></center>
            })} </div>





            
            <button type="button" className="btn btn-primary" style={style} data-bs-toggle="modal" id='imaginaryclick' data-bs-target="#exampleModal">
                Launch demo modal
            </button>

           
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modaltitle"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="modalbody">
                        
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}
