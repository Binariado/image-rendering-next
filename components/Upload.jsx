import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm, useDebounce } from '../hooks'
import { api } from '../api'
import { imagesAdd } from '../state/imagesReducer/images.actions'
import Pusher from 'pusher-js'
import { useRouter } from 'next/router'


/**
 *
 *
 * @export
 * @return {Function} 
 */
export default function Upload() {
  const router = useRouter();
  const dispatch = useDispatch();
  const refFile = React.useRef(null);
  const [formValue, handleInput, handleInputReset] = useForm({
    images: []
  });

  const { images } = formValue;
  console.log(router.basePath)

  const uploadFile = async () => {
    if (images.length === 0) {
      return;
    }

    try {
      const resp = await api.uploadImages({ images, basePath: router.basePath });
      console.log(resp);
      handleInputReset();
      refFile.current.value = '';
    } catch (error) {

    }
  }

  const handleButtonUpload = () => {
    refFile.current.click();
  }

  React.useEffect(() => {
    uploadFile();
  }, [images]);

  /** @type {*} */
  const [executedFunction, cancelDebounce] = useDebounce((data) => {
    dispatch(imagesAdd(data));
  }, 1000);

  const pusher = new Pusher('417939ee8254e91f4f58', {
    cluster: 'us2'
  });
  const channel = pusher.subscribe('channel-upload-images');

  try {
    channel.bind('event-0123456789abcdef', function (e) {
      cancelDebounce();
      executedFunction(typeof e.message === "string" ?
        JSON.parse(e.message) : e.message);
    });
  } catch (error) { }

  return (
    <div className="m-2 cursor-pointer">
      <div onClick={handleButtonUpload} className="">
        <div id="overlay" className="w-full h-full pointer z-50 flex flex-col items-center justify-center rounded-md">
          <i>
            <svg className="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
            </svg>
          </i>
          <p className="text-lg text-blue-700">files to upload</p>
        </div>
      </div>
      <input hidden ref={refFile} name="images" onChange={handleInput} type="file" multiple />
    </div>
  )
}
