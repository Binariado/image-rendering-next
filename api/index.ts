const URL_API = `/api`;

const responsed = async (resp: any, status: number) => {
  return {
    resp: resp,
    status: status
  }
}

export const api = {
  async uploadImages(material: any) {
    try {
      const { images } = material;
      let myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      const formdata = new FormData();

      for (const file of images) {
        formdata.append('images', file, file.name)
      }
     
      const request = new Request(`${URL_API}/api/image-rendering`, {
        method: 'POST',
        body: formdata,
        headers: myHeaders,
        redirect: 'follow',
      });

      return await fetch(request)
        .then(async resp => {
          return responsed(await resp.json(), resp.status);
        }).catch(error => console.log('error', error));

    } catch (error) {
      console.error('uploadImages: ', error)
    }
  }
}