import React, {useEffect, useState} from 'react'

function UploadImage() {
  const [file, setFile] = useState();
  function handleChange(e) { 
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div >
        <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'>Upload Image</label>
        <div className="w-12 relative mt-0.5">
          <img
            // className="bg-bgColor w-16 absolute top-0 left-0-0"
            className="w-full p-2 bg-blue-400 rounded-lg"
            onClick={handleChange}
            // src="https://cdn-icons-png.flaticon.com/512/90/90366.png?w=740&t=st=1671719825~exp=1671720425~hmac=a1d05e1c0e6e9dbc99867a070fb7f13c751078b8ba180ca0c4531a9f0bb562fc"
            src="https://img.icons8.com/material-outlined/512/stack-of-photos.png"
          />
          <input
            // className="w-full h-full rounded-lg bg-gray-400"
            className="w-full border border-gray-400 rounded-lg p-4 
                      absolute top-0 opacity-0"
            type="file" onChange={handleChange}
          />
        </div>
        <img src={file} />
      </div>
    </>
  );
}

export default UploadImage