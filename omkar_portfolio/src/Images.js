import React from 'react';
import Gallery from 'react-grid-gallery';
import './App.css';
const Hen =
[{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0002.jpg?alt=media&token=34e9fc70-b9b8-48eb-88b0-b78804679e6c",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0002.jpg?alt=media&token=34e9fc70-b9b8-48eb-88b0-b78804679e6c",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
},
{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0009.jpg?alt=media&token=3612d2b7-26e6-4154-a044-039be7a50caa",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0009.jpg?alt=media&token=3612d2b7-26e6-4154-a044-039be7a50caa",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
},
{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0010.jpg?alt=media&token=5329dd8e-ec1a-4a9b-bb73-aa3cb24d4652",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0010.jpg?alt=media&token=5329dd8e-ec1a-4a9b-bb73-aa3cb24d4652",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
},

{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0011.jpg?alt=media&token=06d03535-e85d-4ac6-8deb-362721d0f43c",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0011.jpg?alt=media&token=06d03535-e85d-4ac6-8deb-362721d0f43c",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
},
{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0012.jpg?alt=media&token=66f6f7a7-cdd2-4d08-8300-4c8ea13ceca8",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0012.jpg?alt=media&token=66f6f7a7-cdd2-4d08-8300-4c8ea13ceca8",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
},

{
        src: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0003.jpg?alt=media&token=9aebd5bc-4782-4cc2-81fd-ef8f82342098",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0003.jpg?alt=media&token=9aebd5bc-4782-4cc2-81fd-ef8f82342098",
        thumbnailWidth: 320,
        tags: [{value: "Weekend", title: "Weekend"}],
}]

function IMAGES() {


return(
        <div id='scroll'>
        <center>
        <h1>My Weekend's Photo Gallery</h1>
        <br/>
        </center>
        <div id='scrollable__images'>
             <Gallery images={Hen} enableImageSelection={false} />,
        </div>
        </div>
);
}

export default IMAGES